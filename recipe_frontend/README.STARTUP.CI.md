# PUBLIC_INTERFACE
# CI Startup (Stable, Low-Memory)

To avoid orchestrator SIGKILL (exit code 137), prefer static build + serve:

- Start:
  npm run start:serve

- Healthcheck:
  npm run healthcheck

Notes:
- Static health endpoint is available at /health.html and includes <meta name="x-healthcheck" content="ok">.
- SPA redirects are provided in public/_redirects so deep links resolve to index.html.
- `npm start` auto-redirects to `start:serve` when CI=true via scripts/start-wrapper.cjs.
