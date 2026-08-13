import { existsSync, watch } from 'node:fs';
import { resolve } from 'node:path';
import { spawn, spawnSync } from 'node:child_process';

const root = resolve('.');
const source = resolve(root, 'logo_favicon.jpg');
const syncScript = resolve(root, 'scripts/sync-brand-assets.mjs');

if (!existsSync(source)) {
  throw new Error(`Missing canonical logo asset: ${source}`);
}

const sync = () => {
  const result = spawnSync(process.execPath, [syncScript], { stdio: 'inherit' });
  if (result.status !== 0) process.exit(result.status ?? 1);
};

sync();

let syncTimer;
const sourceWatcher = watch(source, () => {
  clearTimeout(syncTimer);
  syncTimer = setTimeout(sync, 80);
});

const nextDev = spawn(process.execPath, [resolve(root, 'node_modules/next/dist/bin/next'), 'dev', ...process.argv.slice(2)], {
  cwd: root,
  stdio: 'inherit',
});

const shutdown = (signal) => {
  clearTimeout(syncTimer);
  sourceWatcher.close();
  if (!nextDev.killed) nextDev.kill(signal);
};

process.on('SIGINT', () => shutdown('SIGINT'));
process.on('SIGTERM', () => shutdown('SIGTERM'));
nextDev.on('exit', (code, signal) => {
  sourceWatcher.close();
  process.exit(signal ? 1 : code ?? 0);
});
