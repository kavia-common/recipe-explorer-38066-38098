# PUBLIC_INTERFACE
# Healthcheck and Startup Notes

This frontend is optimized for CI stability. Prefer static build + serve to avoid dev-server termination (exit code 137).

- Startup (CI-safe):
  npm run start:serve

- Healthcheck after startup:
  npm run healthcheck

Behavior:
- The app injects a meta tag at runtime via src/index.js:
  <meta name="x-healthcheck" content="ok">
- The healthcheck script hits http://127.0.0.1:${REACT_APP_PORT:-3000}${REACT_APP_HEALTHCHECK_PATH:-/}
  and confirms HTTP 200 and the presence of the meta tag.
- For SPA routes, public/_redirects ensures deep links resolve to index.html when using static serve.

Environment:
- Configure .env from .env.example. Critical vars:
  REACT_APP_PORT=3000
  HOST=0.0.0.0
