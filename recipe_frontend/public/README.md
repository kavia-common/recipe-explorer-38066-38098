# PUBLIC_INTERFACE
This folder contains static assets for the Recipe Explorer frontend.

- index.html includes `<meta name="x-healthcheck" content="ok">`
- health.html is a static health endpoint for CI readiness probes
- _redirects configures SPA routing under static serving
- robots.txt is a default robots file

In CI, use `npm run start:serve` and then `npm run healthcheck`.
