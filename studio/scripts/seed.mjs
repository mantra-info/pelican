import fs from 'node:fs';
import path from 'node:path';
import { fileURLToPath } from 'node:url';
const studio = path.resolve(path.dirname(fileURLToPath(import.meta.url)), '..');
const root = path.resolve(studio, '..');
if (fs.existsSync(path.join(root, '.env.local'))) process.loadEnvFile(path.join(root, '.env.local'));
if (fs.existsSync(path.join(studio, '.env'))) process.loadEnvFile(path.join(studio, '.env'));
const documents = JSON.parse(fs.readFileSync(path.join(studio, 'seed-content.json'), 'utf8'));
if (!process.argv.includes('--apply')) {
  console.log(`Dry run: ${documents.length} documents; local images will be uploaded, then missing documents created. Existing documents will not be overwritten. Run npm run seed -- --apply to import.`);
  process.exit(0);
}
const project = process.env.SANITY_STUDIO_PROJECT_ID;
const dataset = process.env.SANITY_STUDIO_DATASET ?? 'production';
const token = process.env.SANITY_WRITE_TOKEN;
if (!project || !/^[a-z0-9]+$/.test(project) || !/^[a-z0-9_-]+$/.test(dataset) || !token) throw new Error('Set SANITY_STUDIO_PROJECT_ID, SANITY_STUDIO_DATASET and SANITY_WRITE_TOKEN in studio/.env. Never use a SANITY_STUDIO_ prefix for the write token.');
const base = `https://${project}.api.sanity.io/v2025-02-19`;
const assets = new Map();
async function resolve(value) {
  if (Array.isArray(value)) return Promise.all(value.map(resolve));
  if (value && typeof value === 'object') {
    if (value.$localAsset) {
      const local = value.$localAsset;
      if (!/^\/images\/[a-zA-Z0-9_./-]+$/.test(local) || local.includes('..')) throw new Error('Invalid local image path');
      if (!assets.has(local)) assets.set(local, (async () => {
        const bytes = fs.readFileSync(path.join(root,'public',local));
        const response = await fetch(`${base}/assets/images/${dataset}?filename=${encodeURIComponent(path.basename(local))}`, { method: 'POST', headers: { Authorization: `Bearer ${token}`, 'Content-Type': local.endsWith('.png') ? 'image/png' : 'image/jpeg' }, body: bytes, signal: AbortSignal.timeout(30000) });
        if (!response.ok) throw new Error(`Image upload failed (${response.status})`);
        const data = await response.json();
        return { _type: 'reference', _ref: data.document._id };
      })());
      return assets.get(local);
    }
    return Object.fromEntries(await Promise.all(Object.entries(value).map(async ([key,item]) => [key, await resolve(item)])));
  }
  return value;
}
// Publish referenced assets/documents first; page references resolve in the same mutation batch.
for (let offset=0; offset<documents.length; offset+=25) {
  const batch=[];
  // Sequential document preparation bounds concurrent uploads.
  for (const doc of documents.slice(offset,offset+25)) batch.push(await resolve(doc));
  const response=await fetch(`${base}/data/mutate/${dataset}`, { method:'POST', headers: { Authorization:`Bearer ${token}`, 'Content-Type':'application/json' }, body:JSON.stringify({ mutations:batch.map((doc)=>({createIfNotExists:doc})) }), signal:AbortSignal.timeout(30000) });
  if (!response.ok) throw new Error(`Document import failed (${response.status}); existing edits were not overwritten. Retry after correcting access/configuration.`);
}
console.log(`Imported missing documents (${documents.length} candidates). Existing document edits were preserved.`);
