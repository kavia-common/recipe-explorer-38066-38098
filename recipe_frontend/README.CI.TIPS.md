# PUBLIC_INTERFACE
# CI Tips for recipe_frontend

- Start in CI (low memory, avoids exit code 137):
  npm run start:serve

- Healthcheck (after startup):
  npm run healthcheck

Notes:
- Static /health.html exists and includes `<meta name="x-healthcheck" content="ok">` to let probes pass without booting React.
- `/public/_redirects` ensures SPA routes work under static serving.
- `npm start` will auto-redirect to `start:serve` when `CI=true` via scripts/start-wrapper.cjs.
