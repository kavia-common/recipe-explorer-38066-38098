# PUBLIC_INTERFACE
# CI Frontend Usage Note
To prevent exit code 137 in CI, always use:
- Start: npm --prefix recipe_frontend run start:serve
- Healthcheck: npm --prefix recipe_frontend run healthcheck

Artifacts required and provided:
- recipe_frontend/public/index.html with <meta name="x-healthcheck" content="ok">
- recipe_frontend/public/health.html
- recipe_frontend/public/_redirects

npm start auto-redirects to start:serve when CI=true via scripts/start-wrapper.cjs.
