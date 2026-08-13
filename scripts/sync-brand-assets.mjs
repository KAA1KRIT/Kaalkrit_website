import { copyFileSync, existsSync, mkdirSync } from 'node:fs';
import { dirname, resolve } from 'node:path';

const source = resolve('logo_favicon.jpg');
const targets = [
  resolve('public/logo_favicon.jpg'),
  resolve('public/images/approved/logo_favicon.jpg'),
  resolve('app/icon.jpg'),
  resolve('app/apple-icon.jpg'),
];

if (!existsSync(source)) {
  throw new Error(`Missing canonical logo asset: ${source}`);
}

for (const target of targets) {
  mkdirSync(dirname(target), { recursive: true });
  copyFileSync(source, target);
}
