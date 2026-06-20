import { rmSync } from 'node:fs';
import { execSync, spawn } from 'node:child_process';
import path from 'node:path';
import { fileURLToPath } from 'node:url';

const projectRoot = path.dirname(fileURLToPath(import.meta.url));
const projectDir = path.resolve(projectRoot, '..');
const isWindows = process.platform === 'win32';
const port = process.env.PORT || 3000;
const useTurbo = process.argv.includes('--turbo');

function sleep(ms) {
  return new Promise((resolve) => setTimeout(resolve, ms));
}

function killPort(targetPort) {
  try {
    if (process.platform === 'win32') {
      const out = execSync(`netstat -ano | findstr :${targetPort}`, { encoding: 'utf8' });
      const pids = new Set(
        out
          .split('\n')
          .map((line) => line.trim().split(/\s+/).pop())
          .filter((pid) => pid && /^\d+$/.test(pid)),
      );
      for (const pid of pids) {
        try {
          execSync(`taskkill /F /PID ${pid}`, { stdio: 'ignore' });
        } catch {
          /* already stopped */
        }
      }
      return;
    }

    execSync(`lsof -ti:${targetPort} | xargs kill -9 2>/dev/null || true`, {
      stdio: 'ignore',
      shell: true,
    });
  } catch {
    /* nothing listening */
  }
}

/** Stop Node processes started from this repo (leftover dev/build servers). */
function killProjectNodeProcesses() {
  const escaped = projectDir.replace(/\\/g, '\\\\');
  try {
    if (process.platform === 'win32') {
      execSync(
        `powershell -NoProfile -Command "Get-CimInstance Win32_Process -Filter \\"Name='node.exe'\\" | Where-Object { $_.CommandLine -like '*${escaped}*' } | ForEach-Object { Stop-Process -Id $_.ProcessId -Force -ErrorAction SilentlyContinue }"`,
        { stdio: 'ignore' },
      );
      return;
    }

    execSync(
      `pkill -f "${projectDir}" 2>/dev/null || true`,
      { stdio: 'ignore', shell: true },
    );
  } catch {
    /* ignore */
  }
}

console.log(`\n  Cleaning dev cache for ${path.basename(projectDir)}...\n`);

killPort(port);
killProjectNodeProcesses();

// Let Windows release file handles before deleting .next
await sleep(isWindows ? 1200 : 800);

const nextDir = path.join(projectDir, '.next');
try {
  rmSync(nextDir, { recursive: true, force: true });
} catch {
  /* ignore */
}

await sleep(isWindows ? 400 : 200);

const nextArgs = useTurbo ? ['dev', '--turbopack'] : ['dev'];
const nextBin = path.join(projectDir, 'node_modules', 'next', 'dist', 'bin', 'next');
if (useTurbo) {
  console.warn('  Warning: Turbopack on Windows can cause Internal Server Error (corrupt .next cache).\n');
} else {
  console.log('  Starting next dev (webpack — stable on Windows).\n');
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
