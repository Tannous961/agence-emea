import { readdirSync, readFileSync, writeFileSync } from 'node:fs';
import { join } from 'node:path';

const dir = 'public/logos';
for (const f of readdirSync(dir)) {
  if (!f.endsWith('.svg')) continue;
  const content = readFileSync(join(dir, f), 'utf8');
  const text = content.match(/aria-label="([^"]+)"/)?.[1] ?? f.replace('.svg', '');
  const w = Math.max(100, text.length * 9);
  writeFileSync(
    join(dir, f),
    `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 ${w} 36" role="img" aria-label="${text}"><text x="0" y="20" font-family="Arial,Helvetica,sans-serif" font-size="13" font-weight="700" letter-spacing="0.08em" fill="#111111">${text.toUpperCase()}</text><rect x="0" y="28" width="${Math.min(w, text.length * 7)}" height="2" fill="#0000FF"/></svg>\n`,
  );
}
