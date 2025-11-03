# CI Usage Notes for Recipe Explorer Frontend

- Prefer low-memory static serve to avoid exit code 137 (dev-server SIGKILL):
  npm --prefix recipe_frontend run start:serve

- Healthcheck after startup:
  npm --prefix recipe_frontend run healthcheck

- If you need the dev server (hot reload), use capped-memory variants:
  npm --prefix recipe_frontend run start:ci
  npm --prefix recipe_frontend run start:lowmem

Notes:
- Webpack dev server deprecation warnings are safe.
- Browserslist is updated on postinstall; warnings can be ignored in CI.
