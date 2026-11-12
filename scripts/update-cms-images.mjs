import fs from 'node:fs';
import crypto from 'node:crypto';
for(const file of ['.env.local','studio/.env'])if(fs.existsSync(file))process.loadEnvFile(file);
const project=process.env.SANITY_STUDIO_PROJECT_ID||process.env.SANITY_PROJECT_ID;
const dataset=process.env.SANITY_STUDIO_DATASET||'production';
const base=`https://${project}.api.sanity.io/v2025-02-19`;
const headers={Authorization:`Bearer ${process.env.SANITY_WRITE_TOKEN}`,'Content-Type':'application/json'};
const assets=JSON.parse(fs.readFileSync('src/content/image-assets.json'));
// Match original file hashes, so images changed by editors are never replaced.
const replacements=new Map();
for(const [file,asset] of Object.entries(assets)){
 if(!fs.existsSync('public'+file))continue;
 const hash=crypto.createHash('sha1').update(fs.readFileSync('public'+file)).digest('hex');
 replacements.set(hash,asset.asset);
}
const query='*[_type in ["video","visaApproval","blogPost"] && !(_id in path("drafts.**"))]';
const response=await fetch(`${base}/data/query/${dataset}?query=${encodeURIComponent(query)}`,{headers,signal:AbortSignal.timeout(30000)});
if(!response.ok)throw Error('CMS image query failed '+response.status);
const {result}=await response.json();const mutations=[];
for(const doc of result){const set={};for(const field of ['poster','image','coverImage']){
 const ref=doc[field]?.asset?._ref;const match=ref?.match(/^image-([a-f0-9]+)-/);const replacement=match&&replacements.get(match[1]);
 if(replacement&&replacement!==ref)set[`${field}.asset._ref`]=replacement;
 }if(Object.keys(set).length)mutations.push({patch:{id:doc._id,ifRevisionID:doc._rev,set}});
}
if(mutations.length){const r=await fetch(`${base}/data/mutate/${dataset}`,{method:'POST',headers,body:JSON.stringify({mutations}),signal:AbortSignal.timeout(30000)});if(!r.ok)throw Error('CMS image update failed '+r.status);}
console.log(`Updated ${mutations.length} CMS documents to compressed WebP assets; editor image changes preserved.`);
