# PUBLIC_INTERFACE
# Static Artifacts for CI

- index.html includes: <meta name="x-healthcheck" content="ok">
- health.html returns 200 and includes the same meta
- _redirects enforces SPA routing under static serve
- robots.txt allows indexing by default

Start in CI:
- npm --prefix recipe_frontend run start:serve
Healthcheck:
- npm --prefix recipe_frontend run healthcheck
