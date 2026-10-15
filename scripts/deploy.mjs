// Versiona los archivos de la app (index.html y sw.js) y publica en Cloudflare.
// Uso: node scripts/deploy.mjs            → versiona y publica
//      node scripts/deploy.mjs --no-deploy → solo versiona
import { readFileSync, writeFileSync } from 'node:fs';
import { execSync } from 'node:child_process';

const v = Date.now().toString(36);
const html = readFileSync('index.html', 'utf8').replace(/\?v=[\w-]+/g, `?v=${v}`);
writeFileSync('index.html', html);
const sw = readFileSync('sw.js', 'utf8').replace(/const V = '[^']*';/, `const V = '${v}';`);
writeFileSync('sw.js', sw);

// Cada archivo versionado en index.html tiene que estar en la lista del service worker
const inHtml = [...html.matchAll(/(?:src|href)="([^"?]+)\?v=/g)].map((m) => m[1]);
const missing = inHtml.filter((p) => !sw.includes(`'${p}'`));
if (missing.length) { console.error('Faltan en sw.js (VERSIONED):', missing.join(', ')); process.exit(1); }

console.log(`Versión ${v} (${inHtml.length} archivos)`);
if (!process.argv.includes('--no-deploy')) execSync('npx wrangler deploy', { stdio: 'inherit' });
