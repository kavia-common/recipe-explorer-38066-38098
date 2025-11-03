# PUBLIC_INTERFACE
# CI Frontend Startup (Auto-Serve Reminder)

To avoid exit code 137 in CI, always use static serve:

- Start:
  npm --prefix recipe_frontend run start:serve

- Healthcheck:
  npm --prefix recipe_frontend run healthcheck

Artifacts required:
- recipe_frontend/public/index.html with <meta name="x-healthcheck" content="ok">
- recipe_frontend/public/health.html
- recipe_frontend/public/_redirects

Note: `npm start` auto-redirects to `start:serve` when CI=true via scripts/start-wrapper.cjs.
