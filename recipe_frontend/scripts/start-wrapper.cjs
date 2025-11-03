#!/usr/bin/env node
/**
 * PUBLIC_INTERFACE
 * start-wrapper.cjs
 * Detect CI and redirect to static serve to avoid dev-server termination (exit 137).
 * Otherwise start the dev server with moderate memory cap.
 */
const { spawnSync } = require('child_process');

function isCI() {
  const v = String(process.env.CI || '');
  return /^(1|true|yes)$/i.test(v);
}

function run(cmd, args) {
  const r = spawnSync(cmd, args, { stdio: 'inherit', env: process.env });
  process.exit(r.status ?? 0);
}

(function main() {
  const npmCmd = process.platform === 'win32' ? 'npm.cmd' : 'npm';

  if (isCI()) {
    console.log('[recipe_frontend] CI detected: redirecting to start:serve to avoid watch server (exit 137).');
    return run(npmCmd, ['run', 'start:serve']);
  }

  return run(npmCmd, ['run', '_start:dev']);
})();
