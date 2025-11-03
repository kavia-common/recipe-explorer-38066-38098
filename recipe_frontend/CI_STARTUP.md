# PUBLIC_INTERFACE
# CI Startup Guidance for recipe_frontend

- Preferred (low memory, avoids exit code 137):
  npm run start:serve
  # or
  npm run start:serve:prebuilt

- If hot reload is required in CI (watch mode uses more memory):
  REACT_APP_PORT=${REACT_APP_PORT:-3000} npm run start:ci
  REACT_APP_PORT=${REACT_APP_PORT:-3000} npm run start:lowmem

- After startup, verify readiness:
  npm run healthcheck

Notes:
- Assets are auto-copied to public/assets via prebuild.
- Health meta is injected by src/index.js: <meta name="x-healthcheck" content="ok"> and also included in public/health.html (provided).
- A static /health.html is served without booting React to reduce memory during readiness checks (present in public/health.html).
- SPA redirects for static serving are configured via public/_redirects so deep links resolve to index.html.
- Webpack dev server deprecation warnings (onBeforeSetupMiddleware/onAfterSetupMiddleware) are upstream and safe. Prefer static serve in CI to avoid noisy warnings and watcher processes.
