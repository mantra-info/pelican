import fs from 'node:fs';
import path from 'node:path';
import { fileURLToPath } from 'node:url';
import { spawnSync } from 'node:child_process';

const studio = path.resolve(path.dirname(fileURLToPath(import.meta.url)), '..');
// Local files are absent on Vercel. Existing hosting variables take precedence.
for (const file of [path.join(studio, '..', '.env.local'), path.join(studio, '.env')]) {
  if (fs.existsSync(file)) process.loadEnvFile(file);
}
const projectId = process.env.SANITY_STUDIO_PROJECT_ID || process.env.SANITY_PROJECT_ID;
const dataset = process.env.SANITY_STUDIO_DATASET || process.env.SANITY_DATASET || 'production';
if (!projectId) throw new Error('Set SANITY_PROJECT_ID or SANITY_STUDIO_PROJECT_ID before building Studio.');
// Sanity only includes SANITY_STUDIO_* variables in browser code. These two
// identifiers are public; write tokens and webhook secrets remain server-only.
const result = spawnSync(process.execPath, [path.join(studio, 'node_modules/sanity/bin/sanity'), 'build'], {
  cwd: studio,
  stdio: 'inherit',
  env: { ...process.env, SANITY_STUDIO_PROJECT_ID: projectId, SANITY_STUDIO_DATASET: dataset },
});
if (result.error) throw result.error;
process.exit(result.status ?? 1);
