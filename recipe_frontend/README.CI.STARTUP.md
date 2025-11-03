# PUBLIC_INTERFACE
# Startup Guidelines (CI-safe)

- Default recommendation (avoids exit code 137 in CI): 
  npm run start:serve

- Healthcheck after startup:
  npm run healthcheck

- If you need hot reload (dev server), use capped-memory variants:
  REACT_APP_PORT=3000 npm run start:ci
  REACT_APP_PORT=3000 npm run start:lowmem

Note: Running `npm start` with CI=true will auto-redirect to `start:serve` to prevent watch server termination by the orchestrator.
