/* eslint-disable @typescript-eslint/no-require-imports -- Compile content records to verify route and content completeness. */
const assert=require('node:assert/strict');const fs=require('fs'),path=require('path'),Module=require('module');const root=process.cwd(),ts=require(path.join(root,'node_modules/typescript'));
const old=Module._resolveFilename;Module._resolveFilename=function(request,parent,...rest){return old.call(this,request.startsWith('@/')?path.join(root,'src',request.slice(2)):request,parent,...rest);};
for(const ext of ['.tsx','.ts'])require.extensions[ext]=function(mod,filename){mod._compile(ts.transpileModule(fs.readFileSync(filename,'utf8'),{compilerOptions:{jsx:ts.JsxEmit.ReactJSX,module:ts.ModuleKind.CommonJS,esModuleInterop:true,target:ts.ScriptTarget.ES2022}}).outputText,filename);};
const {pages}=require(path.join(root,'src/content/pages.ts'));const {blogPosts}=require(path.join(root,'src/content/blogs.ts'));
const routes=new Set(['/studio','/', '/contact-us','/blogs','/success-stories','/visa-gallery','/check-eligibility','/terms-of-service','/privacy-policy','/cookie-policy',...Object.keys(pages).map(s=>'/'+s),...blogPosts.map(p=>'/blogs/'+p.slug)]);
function walk(dir){return fs.readdirSync(dir,{withFileTypes:true}).flatMap(e=>e.isDirectory()?walk(path.join(dir,e.name)):[path.join(dir,e.name)]);}
const imageAssets=JSON.parse(fs.readFileSync(path.join(root,'src/content/image-assets.json'),'utf8'));
const missingLinks=new Map();const missingAssets=new Map();
for(const file of walk(path.join(root,'src')).filter(p=>/\.(tsx?|json)$/.test(p))){const s=fs.readFileSync(file,'utf8');
 for(const m of s.matchAll(/href(?:=|:\s*)["'](\/[^"']+)["']/g)){const url=m[1].split(/[?#]/)[0];if(!routes.has(url)){const refs=missingLinks.get(url)||[];refs.push(path.relative(root,file));missingLinks.set(url,refs);}}
 for(const m of s.matchAll(/["'](\/(?:images|icons)\/[^"']+)["']/g)){const asset=m[1];if(!imageAssets[asset]&&!fs.existsSync(path.join(root,'public',asset))){const refs=missingAssets.get(asset)||[];refs.push(path.relative(root,file));missingAssets.set(asset,refs);}}
}
// Resolve generated country/university image paths as well as literal source paths.
function verifyContentAssets(value) {
 if(typeof value==='string' && /^\/images\/[^\s]+\.(png|jpe?g|webp|svg)$/.test(value)) assert.ok(imageAssets[value] || fs.existsSync(path.join(root,'public',value)), 'Missing generated image: '+value);
 else if(Array.isArray(value)) value.forEach(verifyContentAssets);
 else if(value && typeof value==='object') Object.values(value).forEach(verifyContentAssets);
}
verifyContentAssets(pages); verifyContentAssets(blogPosts);
const {imageUrl}=require(path.join(root,'src/lib/image-url.ts'));
for(const [local,asset] of Object.entries(imageAssets)) {
 assert.ok(asset.url.startsWith('https://cdn.sanity.io/images/3zrn3yuo/production/'),local);
 const url=new URL(imageUrl(local,640)); assert.equal(url.searchParams.get('w'),'640'); assert.equal(url.searchParams.get('auto'),'format');
}
assert.equal(imageUrl('/icons/play.svg',640),'/icons/play.svg');
const result={contentPageCount:Object.keys(pages).length,routeCount:routes.size,routes:[...routes].sort(),missingLinks:Object.fromEntries(missingLinks),missingAssets:Object.fromEntries(missingAssets),emptyBlogs:blogPosts.filter(p=>!p.body?.length).map(p=>'/blogs/'+p.slug)};
assert.equal(missingLinks.size,0,'Broken internal links: '+JSON.stringify(Object.fromEntries(missingLinks)));
assert.equal(missingAssets.size,0,'Missing literal assets');
assert.equal(result.emptyBlogs.length,0,'Empty blog articles');
for(const route of ['/citizenship/grenada','/citizenship/dominica','/terms-of-service','/privacy-policy','/cookie-policy']) assert.ok(routes.has(route),route);
console.log(`${routes.size} page routes, internal links, literal assets and all blog bodies passed.`);
