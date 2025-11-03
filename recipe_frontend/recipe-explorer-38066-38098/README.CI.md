# CI Usage Notes for Recipe Explorer Frontend

- Prefer low-memory static serve to avoid exit code 137 (watch server can be SIGKILLed):
  npm --prefix recipe_frontend run start:serve

- Healthcheck after startup:
  npm --prefix recipe_frontend run healthcheck

- If you need the dev server (hot reload), use capped-memory variants (ensure port is set):
  REACT_APP_PORT=3000 npm --prefix recipe_frontend run start:ci
  REACT_APP_PORT=3000 npm --prefix recipe_frontend run start:lowmem

Notes:
- Do NOT use `npm start` in CI; webpack-dev-server watch can be SIGKILLed (exit code 137). Use `start:serve` for stability.
- Webpack dev server deprecation warnings are safe.
- Browserslist is updated on postinstall; warnings can be ignored in CI.
- Ensure REACT_APP_PORT is set if your orchestrator requires a specific port (default 3000).
- Copy recipe_frontend/.env.example to recipe_frontend/.env when you need custom env; do not hardcode config in code.
