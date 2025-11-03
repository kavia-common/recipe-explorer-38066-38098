# PUBLIC_INTERFACE
This folder contains public runtime assets.

Health endpoints:
- /health.html → static 200 page with <meta name="x-healthcheck" content="ok">
- /index.html → includes same meta for fallback probes

SPA routing for static serve:
- /_redirects ensures all deep links serve /index.html
