#!/usr/bin/env node
/**
 * PUBLIC_INTERFACE
 * start-wrapper.cjs
 * Detect CI and redirect to static serve to avoid dev-server termination (exit 137).
 * Otherwise start the dev server with moderate memory cap.
 *
 * Notes:
 * - In CI, we never launch the webpack dev server by default. This prevents long-running
 *   watch processes from being SIGKILLed by the orchestrator (exit 137).
 * - We also sanitize env and ensure predictable HOST/PORT.
 */
const { spawnSync } = require('child_process');

function isCI() {
  const v = String(process.env.CI || '');
  // Also treat common CI providers by presence of env as CI=true
  return /^(1|true|yes)$/i.test(v) || !!process.env.GITHUB_ACTIONS || !!process.env.GITLAB_CI;
}

function run(cmd, args) {
  const r = spawnSync(cmd, args, { stdio: 'inherit', env: process.env });
  const code = (typeof r.status === 'number') ? r.status : 0;
  process.exit(code);
}

(function main() {
  const npmCmd = process.platform === 'win32' ? 'npm.cmd' : 'npm';

  // Allow explicit override to dev server even in CI when absolutely necessary
  const FORCE_DEV = /^(1|true|yes)$/i.test(String(process.env.FORCE_DEV || ''));

  if (isCI() && !FORCE_DEV) {
    console.log('[recipe_frontend] CI detected -> using static build+serve to avoid watcher SIGKILL (exit 137).');
    console.log('[recipe_frontend] Action: redirecting npm start to `npm run start:serve` (static build + serve) for CI stability.');
    console.log('[recipe_frontend] Tip: Prefer `npm run start:serve` (or :prebuilt) and verify with `npm run healthcheck`.');
    console.log('[recipe_frontend] To force webpack dev server in CI (not recommended), set FORCE_DEV=true and use `npm run start:ci`.');
    console.log('[recipe_frontend] Binding to HOST=0.0.0.0 is intentional in CI to allow container networking.');
    // Ensure minimal memory usage and deterministic port/host
    process.env.BROWSER = 'none';
    process.env.CI = 'true';
    process.env.HOST = process.env.HOST || '0.0.0.0';
    const port = String(process.env.REACT_APP_PORT || process.env.PORT || '3000');
    process.env.REACT_APP_PORT = port;
    process.env.PORT = port;
    const sm = String(process.env.REACT_APP_ENABLE_SOURCE_MAPS || '').toLowerCase() === 'true' ? 'true' : 'false';
    process.env.GENERATE_SOURCEMAP = sm;
    if (!process.env.NODE_OPTIONS || !/--max-old-space-size=/.test(process.env.NODE_OPTIONS)) {
      process.env.NODE_OPTIONS = '--max-old-space-size=192';
    }
    // Build + serve path (includes internal healthcheck probe triggered by start:serve)
    return run(npmCmd, ['run', 'start:serve']);
  }

  // Local dev or explicit override (non-CI)
  console.log('[recipe_frontend] Starting webpack dev server (non-CI or FORCE_DEV=true). To reduce memory usage in CI, prefer `npm run start:serve`.');
  process.env.BROWSER = 'none';
  process.env.HOST = process.env.HOST || '0.0.0.0';
  const port = String(process.env.REACT_APP_PORT || process.env.PORT || '3000');
  process.env.REACT_APP_PORT = port;
  process.env.PORT = port;
  if (!process.env.NODE_OPTIONS || !/--max-old-space-size=/.test(process.env.NODE_OPTIONS)) {
    process.env.NODE_OPTIONS = '--max-old-space-size=384';
  }
  if (!/^true$/i.test(String(process.env.REACT_APP_ENABLE_SOURCE_MAPS || ''))) {
    process.env.GENERATE_SOURCEMAP = 'false';
  }
  return run(npmCmd, ['run', '_start:dev']);
})();
