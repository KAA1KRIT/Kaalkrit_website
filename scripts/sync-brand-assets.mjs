import { copyFileSync, existsSync, mkdirSync } from 'node:fs';
import { dirname, resolve } from 'node:path';

const source = resolve('logo_favicon.png');
const targets = [
  resolve('public/logo_favicon.png'),
  resolve('public/images/approved/logo_favicon.png'),
  resolve('app/icon.png'),
  resolve('app/apple-icon.png'),
];

if (!existsSync(source)) {
  throw new Error(`Missing canonical logo asset: ${source}`);
}

for (const target of targets) {
  mkdirSync(dirname(target), { recursive: true });
  copyFileSync(source, target);
}
