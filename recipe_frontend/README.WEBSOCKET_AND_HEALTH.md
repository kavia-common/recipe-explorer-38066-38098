# PUBLIC_INTERFACE
# Frontend WebSocket/Health Usage Note

- CI-safe startup: npm run start:serve
- Readiness probe: npm run healthcheck
  - Probes http://127.0.0.1:${REACT_APP_PORT:-3000}/health.html first (static)
  - Falls back to '/'. Both include <meta name="x-healthcheck" content="ok">

WebSocket endpoints (if used by the app) should be configured via environment variables:
- REACT_APP_WS_URL

This project intentionally serves a static build in CI to avoid webpack-dev-server watch mode memory issues that can lead to exit code 137. Use start:ci or start:lowmem only if hot reload is required explicitly in CI.
