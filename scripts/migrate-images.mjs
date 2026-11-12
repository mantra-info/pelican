import fs from 'node:fs/promises';
import path from 'node:path';
import sharp from 'sharp';
const root=process.cwd();
for(const file of ['.env.local','studio/.env']) { try { process.loadEnvFile(file); } catch(e) { if(e.code!=='ENOENT') throw e; } }
const cache=path.join(root,'.media-cache');
await fs.mkdir(cache,{recursive:true});
const manifestFile=path.join(root,'src/content/image-assets.json');
let manifest={};try{manifest=JSON.parse(await fs.readFile(manifestFile,'utf8'));}catch(e){if(e.code!=='ENOENT')throw e;}
async function walk(dir){return (await Promise.all((await fs.readdir(dir,{withFileTypes:true})).map(e=>e.isDirectory()?walk(path.join(dir,e.name)):[path.join(dir,e.name)]))).flat();}
const files=(await walk(path.join(root,'public/images'))).filter(p=>/\.(png|jpe?g|webp)$/i.test(p));
let originalBytes=0,webpBytes=0;
const queue=[...files];let complete=0;
const project=process.env.SANITY_STUDIO_PROJECT_ID||process.env.SANITY_PROJECT_ID;
const dataset=process.env.SANITY_STUDIO_DATASET||process.env.SANITY_DATASET||'production';
const upload=process.argv.includes('--upload');
if(upload&&(!project||!process.env.SANITY_WRITE_TOKEN))throw Error('Sanity project and server-only write token required');
async function worker(){for(let file; (file=queue.shift());){
 const key='/'+path.relative(path.join(root,'public'),file).split(path.sep).join('/');
 const output=path.join(cache,key.replace(/^\/images\//,'').replace(/\.[^.]+$/,'.webp'));
 await fs.mkdir(path.dirname(output),{recursive:true});
 // Keep fine logos/certificates crisp; bound large photographs without changing aspect ratios.
 await sharp(file).rotate().resize({width:2560,height:2560,fit:'inside',withoutEnlargement:true}).webp({quality:85,alphaQuality:100,effort:6}).toFile(output);
 const bytes=await fs.readFile(output);originalBytes+=(await fs.stat(file)).size;webpBytes+=bytes.length;
 if(upload&&!manifest[key]){
  let response;for(let attempt=0;attempt<3;attempt++){
   response=await fetch(`https://${project}.api.sanity.io/v2025-02-19/assets/images/${dataset}?filename=${encodeURIComponent(path.basename(output))}`,{method:'POST',headers:{Authorization:`Bearer ${process.env.SANITY_WRITE_TOKEN}`,'Content-Type':'image/webp'},body:bytes,signal:AbortSignal.timeout(60000)});
   if(response.ok)break;if(response.status<500&&response.status!==429)break;
  }
  if(!response.ok)throw Error(`Upload failed ${response.status}: ${key}`);
  const {document}=await response.json();manifest[key]={url:document.url,asset:document._id,width:document.metadata.dimensions.width,height:document.metadata.dimensions.height};
  await fs.writeFile(manifestFile,JSON.stringify(Object.fromEntries(Object.entries(manifest).sort()),null,2)+'\n');
 }
 complete++;if(complete%25===0)console.log(`Compressed${upload?' and uploaded':''} ${complete}/${files.length}`);
}}
await Promise.all(Array.from({length:3},worker));
if(upload) await fs.writeFile(manifestFile,JSON.stringify(Object.fromEntries(Object.entries(manifest).sort()),null,2)+'\n');
console.log(JSON.stringify({images:files.length,originalMB:(originalBytes/1048576).toFixed(2),webpMB:(webpBytes/1048576).toFixed(2),reduction:((1-webpBytes/originalBytes)*100).toFixed(1)+'%',uploaded:Object.keys(manifest).length}));
