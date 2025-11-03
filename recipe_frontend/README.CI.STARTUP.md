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

Note: Running `npm start` with CI=true will auto-redirect to `start:serve` to prevent watch server termination by the orchestrator. Prefer static serve in CI.
