/* eslint-disable @typescript-eslint/no-require-imports -- Read-only query contract checks. */
const fs=require('fs'),ts=require('typescript'),Module=require('module'),assert=require('node:assert/strict');
const compiled=new Module(require('node:path').resolve('src/lib/cms/queries.ts'),module);
compiled._compile(ts.transpileModule(fs.readFileSync('src/lib/cms/queries.ts','utf8'),{compilerOptions:{module:ts.ModuleKind.CommonJS}}).outputText,require("node:path").resolve("src/lib/cms/queries.ts"));
const {PAGE,APPROVALS,HOME_TESTIMONIALS,BLOGS,BLOG}=compiled.exports;
(async()=>{
 for(const [name,query,params] of [['page',PAGE,{path:'/canada-migration'}],['gallery',APPROVALS,{home:false}],['homepage gallery',APPROVALS,{home:true}],['homepage videos',HOME_TESTIMONIALS,{}],['blog listing',BLOGS,{}],['blog detail',BLOG,{slug:'essential-documents-australia'}]]){
  const url=new URL('https://3zrn3yuo.api.sanity.io/v2025-02-19/data/query/production');url.searchParams.set('query',query);url.searchParams.set('perspective','published');for(const [key,value] of Object.entries(params))url.searchParams.set('$'+key,JSON.stringify(value));
  const response=await fetch(url,{signal:AbortSignal.timeout(15000)});assert.ok(response.ok,`${name}: ${response.status}`);const result=await response.json();assert.ok(!result.error,name);console.log(`${name}: valid published GROQ query`);
 }
})().catch(error=>{console.error(error.message);process.exitCode=1;});
