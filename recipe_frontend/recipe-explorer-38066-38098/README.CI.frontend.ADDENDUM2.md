# PUBLIC_INTERFACE
# CI Frontend Quick Note (stability)

- Prefer static build + serve to avoid exit code 137 (dev server SIGKILL/OOM):
  npm --prefix recipe_frontend run start:serve

- Verify readiness:
  npm --prefix recipe_frontend run healthcheck

- If watch mode is required explicitly:
  REACT_APP_PORT=3000 npm --prefix recipe_frontend run start:ci

Ensure environment variables are provided via recipe_frontend/.env or injected by the orchestrator. See recipe_frontend/.env.example.
