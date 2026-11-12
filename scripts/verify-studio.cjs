/* eslint-disable @typescript-eslint/no-require-imports -- Isolated checks of built Studio asset routing. */
const fs=require('fs'),path=require('path'),Module=require('module'),ts=require('typescript'),assert=require('node:assert/strict');
const filename=path.resolve('src/lib/studio-assets.ts');const compiled=new Module(filename,module);compiled._compile(ts.transpileModule(fs.readFileSync(filename,'utf8'),{fileName:filename,compilerOptions:{module:ts.ModuleKind.CommonJS,esModuleInterop:true,target:ts.ScriptTarget.ES2022}}).outputText,filename);
const {serveStudio}=compiled.exports;
(async()=>{
 const html=fs.readFileSync('studio/dist/index.html','utf8').replace(/(["'])\/static\//g, '$1/studio/static/');
 assert.match(html,/src="\/studio\/static\/[^\"]+\.js"/,'Studio assets must use the /studio prefix');
 assert.ok(!html.includes('href="/static/'),'No root-level icon URLs');
 const root=await serveStudio([]);assert.equal(root.status,200);assert.equal(await root.text(),html);assert.match(root.headers.get('content-type'),/text\/html/);assert.match(root.headers.get('x-robots-tag'),/noindex/);
 const deep=await serveStudio(['structure','pageContent;page--canada-migration']);assert.equal(deep.status,200);assert.equal(await deep.text(),html);
 const src=html.match(/src="(\/studio\/static\/[^\"]+\.js)"/)[1];
 const asset=await serveStudio(src.slice('/studio/'.length).split('/'));assert.equal(asset.status,200);assert.match(asset.headers.get('content-type'),/javascript/);assert.match(asset.headers.get('cache-control'),/immutable/);
 assert.equal((await serveStudio(['static','not-present.js'])).status,404);
 assert.equal((await serveStudio(['static','..','.env.local'])).status,404);
 assert.equal((await serveStudio(['static','..%2f..%2f.env.local'])).status,404);
 assert.equal((await serveStudio(['.env.local'])).status,404);
 assert.equal((await serveStudio([], '/tmp/nonexistent-pelican-studio-build')).status,503);
 console.log('Studio /studio base path, assets, deep links, cache headers, no-index and traversal protection passed.');
})().catch(error=>{console.error(error.message);process.exitCode=1;});
