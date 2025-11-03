# PUBLIC_INTERFACE
# CI Frontend Startup (Enforced Static Serve 3)

To avoid exit code 137 (OOM/SIGKILL) from webpack dev server in CI, always use static serve:

- Start:
  npm --prefix recipe_frontend run start:serve

- Healthcheck:
  npm --prefix recipe_frontend run healthcheck

Artifacts ensured by this change:
- recipe_frontend/public/index.html with <meta name="x-healthcheck" content="ok">
- recipe_frontend/public/health.html
- recipe_frontend/public/_redirects
- recipe_frontend/.env.example with CI-safe defaults

Note: npm start auto-redirects to start:serve when CI=true via scripts/start-wrapper.cjs.
