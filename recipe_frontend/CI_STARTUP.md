# PUBLIC_INTERFACE
# CI Startup Guidance for recipe_frontend

- Preferred (low memory, avoids exit code 137): 
  npm run start:serve

- If hot reload is required in CI:
  REACT_APP_PORT=${REACT_APP_PORT:-3000} npm run start:ci
  REACT_APP_PORT=${REACT_APP_PORT:-3000} npm run start:lowmem

- After startup, verify readiness:
  npm run healthcheck

Notes:
- Assets are auto-copied to public/assets via prebuild.
- Health meta is injected by src/index.js: <meta name="x-healthcheck" content="ok">.
- A static /health.html is served without booting React to reduce memory during readiness checks.
