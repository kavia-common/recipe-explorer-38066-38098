# PUBLIC_INTERFACE
# CI Startup for recipe_frontend

To avoid exit code 137 (watch server killed), use static serve:

- Start (low memory):
  npm --prefix recipe_frontend run start:serve
  # Builds with low memory and serves statically (binds to REACT_APP_PORT or PORT; defaults to 3000; HOST=0.0.0.0)

- Healthcheck:
  npm --prefix recipe_frontend run healthcheck
  # Checks http://127.0.0.1:${REACT_APP_PORT:-3000}/health.html then '/'

Notes:
- Static assets and SPA redirects exist under recipe_frontend/public (health.html, _redirects, index.html with meta).
- `npm start` auto-redirects to `start:serve` when CI=true via scripts/start-wrapper.cjs. For hot reload in CI, use `npm --prefix recipe_frontend run start:ci` or `start:lowmem`.
- If a production build already exists, you can skip building and only serve: `npm --prefix recipe_frontend run start:serve:prebuilt`.
