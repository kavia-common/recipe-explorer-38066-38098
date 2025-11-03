# CI Usage Notes for Recipe Explorer Frontend

- Preferred low-memory static serve (prevents exit code 137 from watch server):
  npm --prefix recipe_frontend run start:serve

- Healthcheck after startup:
  npm --prefix recipe_frontend run healthcheck

- If hot reload is explicitly required in CI, use capped-memory variants and ensure port propagation:
  REACT_APP_PORT=3000 npm --prefix recipe_frontend run start:ci
  REACT_APP_PORT=3000 npm --prefix recipe_frontend run start:lowmem

Additional notes:
- Assets are auto-copied into CRA public/assets during build via prebuild script. Reference them as /assets/... in the app.
- Webpack dev server deprecation warnings are upstream and safe; prefer start:serve in CI.
- Browserslist is updated on postinstall; warnings can be ignored in CI.
- Configure environment variables via recipe_frontend/.env (see .env.example) or through orchestrator env injection. Do not hardcode values in code.
