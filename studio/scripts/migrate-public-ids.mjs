import fs from 'node:fs';
import path from 'node:path';
import { fileURLToPath } from 'node:url';
const studio=path.resolve(path.dirname(fileURLToPath(import.meta.url)),'..');const root=path.resolve(studio,'..');
if(fs.existsSync(path.join(root,'.env.local')))process.loadEnvFile(path.join(root,'.env.local'));
process.loadEnvFile(path.join(studio,'.env'));
const project=process.env.SANITY_STUDIO_PROJECT_ID,dataset=process.env.SANITY_STUDIO_DATASET??'production',token=process.env.SANITY_WRITE_TOKEN;
if(!token)throw new Error('Import token is required.');
const seed=JSON.parse(fs.readFileSync(path.join(studio,'seed-content.json'),'utf8'));
const mapping=Object.fromEntries(seed.map(doc=>[doc._id.replaceAll('--','.'),doc._id]).filter(([old,id])=>old!==id));
const base=`https://${project}.api.sanity.io/v2025-02-19`;
async function query(ids){const url=new URL(`${base}/data/query/${dataset}`);url.searchParams.set('query','*[_id in $ids]');url.searchParams.set('$ids',JSON.stringify(ids));url.searchParams.set('perspective','raw');const r=await fetch(url,{headers:{Authorization:`Bearer ${token}`},signal:AbortSignal.timeout(30000)});if(!r.ok)throw new Error(`Read failed (${r.status})`);return (await r.json()).result;}
const originals=await query(Object.keys(mapping));const existing=await query(Object.values(mapping));
if(existing.length)throw new Error('A target public ID already exists. No migration performed; review collisions first.');
console.log(`Migration plan: copy ${originals.length} imported documents to public IDs, update their references, and delete only the revision-checked originals in one atomic transaction. Assets and collection settings are unchanged.`);
if(!process.argv.includes('--apply'))process.exit(0);
if(originals.length!==Object.keys(mapping).length)throw new Error('Not all expected imported originals exist. No changes performed.');
function refs(value){if(Array.isArray(value))return value.map(refs);if(value&&typeof value==='object')return Object.fromEntries(Object.entries(value).map(([key,item])=>[key,key==='_ref'&&mapping[item]?mapping[item]:refs(item)]));return value;}
const mutations=[];
for(const doc of originals){const {_createdAt,_updatedAt,_rev,...content}=doc;void _createdAt;void _updatedAt;void _rev;mutations.push({create:{...refs(content),_id:mapping[doc._id]}});}
for(const doc of originals)mutations.push({patch:{id:doc._id,ifRevisionID:doc._rev,set:{migrationTarget:mapping[doc._id]}}});
for(const doc of originals)mutations.push({delete:{id:doc._id}});
const response=await fetch(`${base}/data/mutate/${dataset}`,{method:'POST',headers:{Authorization:`Bearer ${token}`,'Content-Type':'application/json'},body:JSON.stringify({mutations}),signal:AbortSignal.timeout(30000)});
if(!response.ok){const data=await response.json();throw new Error(`Atomic migration rejected (${response.status}): ${data.error?.description??'no changes committed'}`);}
console.log(`Migrated ${originals.length} documents and their references. Revision checks passed.`);
