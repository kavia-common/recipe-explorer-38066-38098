# PUBLIC_INTERFACE
# CI Frontend Startup (Entry Note)

Always prefer static serve to avoid exit code 137:

- Start:
  npm --prefix recipe_frontend run start:serve

- Healthcheck:
  npm --prefix recipe_frontend run healthcheck

Artifacts ensured:
- recipe_frontend/public/index.html with <meta name="x-healthcheck" content="ok">
- recipe_frontend/public/health.html
- recipe_frontend/public/_redirects
