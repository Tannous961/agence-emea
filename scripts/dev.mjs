import { existsSync, rmSync } from 'node:fs';
import { spawn } from 'node:child_process';
import path from 'node:path';
import { fileURLToPath } from 'node:url';

const projectDir = path.resolve(path.dirname(fileURLToPath(import.meta.url)), '..');
const isWindows = process.platform === 'win32';
const useTurbo = process.argv.includes('--turbo');
const nextArgs = useTurbo ? ['dev', '--turbopack'] : ['dev'];
const nextBin = path.join(projectDir, 'node_modules', 'next', 'dist', 'bin', 'next');

const nextDir = path.join(projectDir, '.next');
const manifest = path.join(nextDir, 'prerender-manifest.json');
if (existsSync(nextDir) && !existsSync(manifest)) {
  console.warn('\n  Corrupt .next cache (missing prerender-manifest.json) — removing...\n');
  try {
    rmSync(nextDir, { recursive: true, force: true });
  } catch {
    /* ignore */
  }
}

const child = spawn(process.execPath, [nextBin, ...nextArgs], {
  cwd: projectDir,
  stdio: 'inherit',
  env: {
    ...process.env,
    ...(isWindows ? { WATCHPACK_POLLING: '1', CHOKIDAR_USEPOLLING: '1' } : {}),
  },
});

child.on('exit', (code) => process.exit(code ?? 0));
