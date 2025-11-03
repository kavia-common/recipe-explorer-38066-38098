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

  // Allow explicit override to dev server even in CI when absolutely necessary
  const FORCE_DEV = /^(1|true|yes)$/i.test(String(process.env.FORCE_DEV || ''));

  if (isCI() && !FORCE_DEV) {
    console.log('[recipe_frontend] CI detected -> using static build+serve to avoid watcher SIGKILL (exit 137). For hot reload in CI use `npm run start:ci` or `npm run start:lowmem` explicitly.');
    // Ensure minimal memory usage and deterministic port/host
    process.env.BROWSER = 'none';
    process.env.CI = 'true';
    process.env.HOST = process.env.HOST || '0.0.0.0';
    process.env.REACT_APP_PORT = process.env.REACT_APP_PORT || process.env.PORT || '3000';
    process.env.PORT = process.env.REACT_APP_PORT;
    process.env.GENERATE_SOURCEMAP = String(process.env.REACT_APP_ENABLE_SOURCE_MAPS || 'false');
    process.env.NODE_OPTIONS = '--max-old-space-size=256';

    // Build + serve path (includes internal healthcheck probe)
    return run(npmCmd, ['run', 'start:serve']);
  }

  // Local dev or explicit override
  process.env.BROWSER = 'none';
  process.env.HOST = process.env.HOST || '0.0.0.0';
  process.env.REACT_APP_PORT = process.env.REACT_APP_PORT || process.env.PORT || '3000';
  process.env.PORT = process.env.REACT_APP_PORT;
  process.env.NODE_OPTIONS = process.env.NODE_OPTIONS || '--max-old-space-size=384';

  // Start CRA dev server with react-app-rewired
  return run(npmCmd, ['run', '_start:dev']);
})();
