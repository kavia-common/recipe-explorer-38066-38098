# PUBLIC_INTERFACE
# Public Static Assets

This folder contains CI-critical static assets:
- health.html: Lightweight readiness probe page containing `<meta name="x-healthcheck" content="ok">`.
- _redirects: Ensures SPA deep links resolve to `index.html` when using static `serve`.

The `npm run start:serve` path builds the app and serves `/build` with these in place, minimizing memory usage and avoiding exit code 137 from watch-mode servers.
