# CI Usage Notes for Recipe Explorer Frontend

- Prefer low-memory static serve to avoid exit code 137:
  npm --prefix recipe_frontend run start:serve

- Healthcheck after startup:
  npm --prefix recipe_frontend run healthcheck

- If you need the dev server (hot reload), use capped-memory variants:
  npm --prefix recipe_frontend run start:ci
  npm --prefix recipe_frontend run start:lowmem

Notes:
- Webpack dev server deprecation warnings are safe.
- Browserslist is updated on postinstall; warnings can be ignored in CI.
- Do not run `npm start` in CI; it uses webpack-dev-server watch mode which can be killed (137) by orchestrators.
- Ensure .env is present or rely on defaults from .env.example. Critical: set REACT_APP_PORT if the orchestrator expects a specific port (default 3000).
- Ensure REACT_APP_PORT is set if your environment expects a specific port; defaults to 3000.
- start:serve performs a production build with GENERATE_SOURCEMAP disabled to reduce memory, then serves static files.
- Use the provided .env.example (copy to .env) to avoid missing envs. HOST is set to 0.0.0.0 for container access.
