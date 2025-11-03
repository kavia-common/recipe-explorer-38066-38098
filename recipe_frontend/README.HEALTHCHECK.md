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
- A static /health.html page is also available with the same meta (no React boot required) to make readiness checks fast and low-memory. This file is located at public/health.html.
- The healthcheck script first tries http://127.0.0.1:${REACT_APP_PORT:-3000}${REACT_APP_HEALTHCHECK_PATH:-/health.html}
  and confirms HTTP 200 and the presence of the meta tag. If that fails, it falls back to checking '/'.
- For SPA routes, public/_redirects ensures deep links resolve to index.html when using static serve (already included).

Environment:
- Configure .env from .env.example. Critical vars:
  REACT_APP_PORT=3000
  HOST=0.0.0.0
