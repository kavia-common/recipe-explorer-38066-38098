# PUBLIC_INTERFACE
# CI Frontend Startup (Final Enforcement Note)

To avoid exit code 137 in CI (dev-server/watch killed by orchestrator), enforce static serve:

- Start: npm --prefix recipe_frontend run start:serve
- Healthcheck: npm --prefix recipe_frontend run healthcheck

Notes:
- npm start already auto-redirects to start:serve when CI=true via scripts/start-wrapper.cjs.
- Static artifacts exist under recipe_frontend/public (index.html includes <meta name="x-healthcheck" content="ok">, health.html, _redirects, robots.txt).
- If a production build already exists, you can skip building and only serve using start:serve:prebuilt.
