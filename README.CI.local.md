# CI Quick Start (container root)

The `recipe_frontend` is optimized for CI stability.

- Preferred (low-memory, avoids exit code 137):
  npm --prefix recipe_frontend run start:serve

- Validate readiness:
  npm --prefix recipe_frontend run healthcheck

- If you specifically need the dev server (hot-reload), use:
  REACT_APP_PORT=${REACT_APP_PORT:-3000} npm --prefix recipe_frontend run start:ci
  REACT_APP_PORT=${REACT_APP_PORT:-3000} npm --prefix recipe_frontend run start:lowmem

Ensure you configure environment variables via `recipe_frontend/.env` or env injection by the orchestrator. See `recipe_frontend/.env.example`.
