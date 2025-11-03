# PUBLIC_INTERFACE
# Startup Guidelines (CI-safe)

- Default recommendation (avoids exit code 137 in CI): 
  npm run start:serve
  # explicit CI alias (sets CI=true):
  npm run start:serve:ci

- Healthcheck after startup:
  npm run healthcheck
  (Checks for HTTP 200 at http://127.0.0.1:${REACT_APP_PORT:-3000}/health.html first, then '/', and presence of `<meta name="x-healthcheck" content="ok">`)

- If you need hot reload (dev server), use capped-memory variants:
  REACT_APP_PORT=3000 npm run start:ci
  REACT_APP_PORT=3000 npm run start:lowmem

Notes:
- Assets are auto-copied to public/assets via prebuild.
- Health meta is injected by src/index.js: <meta name="x-healthcheck" content="ok"> and also included in public/health.html (present by default).
- A static /health.html is served without booting React to reduce memory during readiness checks. The healthcheck script first probes this path.
- SPA redirects for static serving are configured via public/_redirects (present by default) so deep links resolve to index.html.
- Webpack dev server deprecation warnings (onBeforeSetupMiddleware/onAfterSetupMiddleware) are upstream and safe. Prefer static serve in CI to avoid noisy warnings and watcher processes.

