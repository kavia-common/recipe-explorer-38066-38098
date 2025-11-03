# PUBLIC_INTERFACE
# CI Frontend Startup (Enforced Static Serve 2)

To prevent exit code 137 (OOM/SIGKILL) in CI:
- Start: npm --prefix recipe_frontend run start:serve
- Healthcheck: npm --prefix recipe_frontend run healthcheck

Artifacts ensured:
- recipe_frontend/public/index.html with <meta name="x-healthcheck" content="ok">
- recipe_frontend/public/health.html
- recipe_frontend/public/_redirects
- recipe_frontend/.env.example with CI-safe defaults

Note: npm start auto-redirects to start:serve when CI=true.
