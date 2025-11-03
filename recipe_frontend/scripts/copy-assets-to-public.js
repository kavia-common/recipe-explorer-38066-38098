#!/usr/bin/env node
/**
 * PUBLIC_INTERFACE
 * copy-assets-to-public
 * Copies repository-level assets into CRA public/assets so that runtime
 * can reference them via /assets/* URLs in both dev and static serve builds.
 */
const fs = require('fs');
const path = require('path');

function ensureDir(dir) {
  if (!fs.existsSync(dir)) fs.mkdirSync(dir, { recursive: true });
}

function copyFile(src, dst) {
  try {
    ensureDir(path.dirname(dst));
    fs.copyFileSync(src, dst);
    // eslint-disable-next-line no-console
    console.log(`Copied ${src} -> ${dst}`);
  } catch (e) {
    // eslint-disable-next-line no-console
    console.warn(`[copy-assets] Skip copy ${src}: ${e.message}`);
  }
}

function copyDir(srcDir, dstDir) {
  if (!fs.existsSync(srcDir)) return;
  ensureDir(dstDir);
  for (const entry of fs.readdirSync(srcDir)) {
    const s = path.join(srcDir, entry);
    const d = path.join(dstDir, entry);
    const stat = fs.statSync(s);
    if (stat.isDirectory()) {
      copyDir(s, d);
    } else if (stat.isFile()) {
      copyFile(s, d);
    }
  }
}

(function main() {
  const projectRoot = path.resolve(__dirname, '..');
  const publicAssets = path.join(projectRoot, 'public', 'assets');
  ensureDir(publicAssets);

  // Copy from container-local assets
  const localAssets = path.join(projectRoot, 'assets');
  copyDir(localAssets, publicAssets);

  // Copy from repository root assets (if exists)
  const repoAssets = path.resolve(projectRoot, '..', 'assets');
  copyDir(repoAssets, publicAssets);

  // Copy figmaimages specifically if present at repo root
  // These are flattened under /public/assets/ so refer to them as /assets/<file>
  const repoFigma = path.join(repoAssets, 'figmaimages');
  if (fs.existsSync(repoFigma)) {
    copyDir(repoFigma, publicAssets);
  }

  // Done
})();
