# PUBLIC_INTERFACE
This directory contains static assets served by CRA and the static server in CI.
- index.html and health.html include `<meta name="x-healthcheck" content="ok">` for readiness probes.
- `_redirects` enables SPA routing under static serve.
