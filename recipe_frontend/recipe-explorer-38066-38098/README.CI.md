# CI Usage Notes for Recipe Explorer Frontend

- Prefer low-memory static serve to avoid exit code 137 (dev-server SIGKILL):
  npm --prefix recipe_frontend run start:serve
  # or explicit CI alias:
  npm --prefix recipe_frontend run start:serve:ci

- Healthcheck after startup:
  npm --prefix recipe_frontend run healthcheck

- If you need the dev server (hot reload), use capped-memory variants and ensure PORT is propagated:
  REACT_APP_PORT=3000 npm --prefix recipe_frontend run start:ci
  REACT_APP_PORT=3000 npm --prefix recipe_frontend run start:lowmem

Notes:
- Assets are auto-copied into CRA public/assets during build via prebuild script. Reference them as /assets/... in the app.
- Webpack dev server deprecation warnings are safe.
- Browserslist is updated on postinstall; warnings can be ignored in CI.
