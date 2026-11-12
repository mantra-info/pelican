/* eslint-disable @typescript-eslint/no-require-imports -- Isolated CMS contract tests with mocked transport and cache invalidation. */
const assert=require('node:assert/strict'),fs=require('fs'),path=require('path'),Module=require('module'),ts=require('typescript');
const root=process.cwd();const originalLoad=Module._load;const originalResolve=Module._resolveFilename;
const invalidated={tags:[],paths:[]};
Module._load=function(request,...rest){if(request==='server-only')return {};if(request==='next/cache')return {revalidateTag:tag=>invalidated.tags.push(tag),revalidatePath:p=>invalidated.paths.push(p)};return originalLoad.call(this,request,...rest);};
Module._resolveFilename=function(request,parent,...rest){return originalResolve.call(this,request.startsWith('@/')?path.join(root,'src',request.slice(2)):request,parent,...rest);};
for(const ext of ['.ts','.tsx'])require.extensions[ext]=function(mod,filename){mod._compile(ts.transpileModule(fs.readFileSync(filename,'utf8'),{fileName:filename,compilerOptions:{module:ts.ModuleKind.CommonJS,jsx:ts.JsxEmit.ReactJSX,esModuleInterop:true,target:ts.ScriptTarget.ES2022}}).outputText,filename);};
const savedEnv={...process.env},savedFetch=global.fetch;
process.env.SANITY_PROJECT_ID='testproject';process.env.SANITY_DATASET='production';
const {getPageContent,getApprovals,getBlogs,getBlog}=require('../src/lib/cms/content.ts');
const {revalidationTargets}=require('../src/lib/cms/revalidation.ts');
const {encodeSignatureHeader,SIGNATURE_HEADER_NAME}=require('@sanity/webhook');
const {POST}=require('../src/app/api/sanity/revalidate/route.ts');
let mode='cms';const calls=[];
global.fetch=async(input,options)=>{
 const url=new URL(input);assert.equal(url.searchParams.get('perspective'),'published');assert.ok(options.next.revalidate>0);calls.push({url,options});
 const query=url.searchParams.get('query');let result;
 if(query.includes('_type == "pageContent"')){const page=JSON.parse(url.searchParams.get('$path'));result={pagePath:page,faqEnabled:true,faqItems:[{q:page+' question',a:'answer'}],testimonials:[null,{id:'empty',kind:'video',name:'Missing video'}]};}
 else if(query.includes('_type == "visaApproval"'))result={enabled:mode==='cms',items:[]};
 else if(query.includes('_type == "blogPost"')&&query.includes('slug.current == $slug'))result=null;
 else result={enabled:mode==='cms',items:[]};
 return Response.json({result});
};
(async()=>{
 const [canada,australia]=await Promise.all([getPageContent('/canada-migration'),getPageContent('/australia-migration')]);
 assert.notEqual(canada.faqItems[0].q,australia.faqItems[0].q);assert.equal(canada.testimonials.length,0);
 assert.ok(calls[0].options.next.tags.includes('sanity:videos'));assert.ok(calls[0].options.next.tags.includes('sanity:page:/canada-migration'));
 assert.deepEqual(await getApprovals(),[]);assert.deepEqual(await getBlogs(),[]);
 assert.equal(await getBlog('essential-documents-australia'),undefined,'Unpublished CMS post must not restore local article');
 mode='fallback';assert.equal(await getApprovals(),null);assert.ok((await getBlogs()).length>0);assert.ok(await getBlog('essential-documents-australia'));
 const changes=revalidationTargets({_type:'pageContent',pagePath:'/canada-migration',previousPagePath:'/australia-migration'});assert.deepEqual(changes.tags,['sanity:page:/canada-migration','sanity:page:/australia-migration']);
 assert.deepEqual(revalidationTargets({_type:'video'}).tags,['sanity:videos']);
 assert.deepEqual(revalidationTargets({_type:'blogPost',slug:'new-post',previousSlug:'old-post'}).paths,['/blogs/new-post','/blogs/old-post']);
 assert.deepEqual(revalidationTargets({_type:'pageContent',pagePath:'https://bad.example'}).paths,[]);
 process.env.SANITY_REVALIDATE_SECRET='test-secret';
 const body=JSON.stringify({_type:'pageContent',pagePath:'/canada-migration'});
 const request=(signature,payload=body)=>new Request('https://site.example/api/sanity/revalidate',{method:'POST',headers:{[SIGNATURE_HEADER_NAME]:signature},body:payload});
 assert.equal((await POST(request('invalid'))).status,401);assert.equal(invalidated.tags.length,0);
 const signature=await encodeSignatureHeader(body,Date.now(),'test-secret');assert.equal((await POST(request(signature))).status,200);assert.deepEqual(invalidated.tags,['sanity:page:/canada-migration']);
 assert.equal((await POST(request(signature,body+' '))).status,401,'Tampered webhook rejected');
 const React=require('react');const {renderToStaticMarkup}=require('react-dom/server');const Video=require('../src/components/ui/VideoDialogButton.tsx').default;
 const html=renderToStaticMarkup(React.createElement(Video,{videoId:'wLAOihHHS94',title:'Video'},'Play'));assert.ok(!html.includes('<iframe'));assert.ok(!html.includes('<video'));
 const {PageFaq}=require('../src/components/cms/PageSections.tsx');
 const question='A <question> with </script> text';
 const faqHtml=renderToStaticMarkup(React.createElement(PageFaq,{content:{pagePath:'/test',faqEnabled:true,faqItems:[{q:question,a:'Answer'}]}}));
 const structured=faqHtml.match(/<script type="application\/ld\+json">([\s\S]*?)<\/script>/)[1];
 assert.equal(JSON.parse(structured).mainEntity[0].name,question);assert.ok(!structured.includes('</script>'));
 const seed=JSON.parse(fs.readFileSync('studio/seed-content.json','utf8'));for (const doc of seed) assert.ok(!doc._id.includes('.'), 'Public document IDs must not use private dot namespaces');
const imageAssets=JSON.parse(fs.readFileSync('src/content/image-assets.json','utf8'));
const ids=new Set([...seed.map(doc=>doc._id),...Object.values(imageAssets).map(asset=>asset.asset)]);
function references(value){if(Array.isArray(value))return value.forEach(references);if(value&&typeof value==='object'){if(value._ref)assert.ok(ids.has(value._ref),'Broken seed reference '+value._ref);Object.values(value).forEach(references);}}
seed.forEach(references);
for (const doc of seed) for (const faq of doc.faqs ?? []) assert.equal(faq._type,'faq','Imported FAQ items must be editable Sanity objects');
const pageDocs=seed.filter(d=>d._type==='pageContent');assert.equal(new Set(pageDocs.map(d=>d.pagePath)).size,pageDocs.length);
 for(const path of ['/','/canada-migration','/australia-migration','/success-stories','/visa-gallery'])assert.ok(pageDocs.some(d=>d.pagePath===path));
 console.log('CMS: independent page FAQs, authoritative empty collections, unpublished-post behavior, cache targets, signed webhooks, lazy video loading and import records passed. No remote writes.');
})().finally(()=>{global.fetch=savedFetch;for(const key of Object.keys(process.env))if(!(key in savedEnv))delete process.env[key];Object.assign(process.env,savedEnv);}).catch(error=>{console.error(error);process.exitCode=1;});
