# PUBLIC_INTERFACE
This directory contains static assets required for CI-safe serving:
- index.html: includes <meta name="x-healthcheck" content="ok">
- health.html: static health endpoint returning 200 with the same meta
- _redirects: SPA redirects for static hosting
- robots.txt: minimal robots file

These allow `npm run start:serve` to start quickly with low memory and pass readiness checks via `npm run healthcheck`.
