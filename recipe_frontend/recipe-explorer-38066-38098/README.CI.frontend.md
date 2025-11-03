# PUBLIC_INTERFACE
# CI Startup for recipe_frontend

To avoid exit code 137 (watch server killed), use static serve:

- Start (low memory):
  npm --prefix recipe_frontend run start:serve

- Healthcheck:
  npm --prefix recipe_frontend run healthcheck
  # Checks http://127.0.0.1:${REACT_APP_PORT:-3000}/health.html then '/'

Notes:
- Static assets and SPA redirects exist under recipe_frontend/public (health.html, _redirects, index.html with meta).
- `npm start` auto-redirects to `start:serve` when CI=true.
- If your orchestrator supplies a PORT, the scripts propagate it automatically. You can also set REACT_APP_PORT explicitly for clarity.
