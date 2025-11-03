# PUBLIC_INTERFACE
# CI Frontend Startup (Final Note)

To avoid exit code 137 (OOM/SIGKILL) in CI:

- Start (CI-safe, static build + serve):
  npm --prefix recipe_frontend run start:serve

- Healthcheck:
  npm --prefix recipe_frontend run healthcheck

Artifacts ensured:
- recipe_frontend/public/index.html with <meta name="x-healthcheck" content="ok">
- recipe_frontend/public/health.html
- recipe_frontend/public/_redirects

When CI=true and FORCE_DEV is not set, `npm start` auto-redirects to `start:serve`.
