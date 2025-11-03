# PUBLIC_INTERFACE
This directory contains static assets for the Recipe Explorer frontend.

- index.html includes `<meta name="x-healthcheck" content="ok">` for readiness checks.
- health.html provides a lightweight health endpoint that does not require React to boot.
- _redirects ensures SPA routing works when using static servers (all paths -> index.html).
