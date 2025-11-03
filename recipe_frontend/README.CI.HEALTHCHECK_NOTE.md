# PUBLIC_INTERFACE
# Healthcheck and CI Startup

- Start (CI-safe, static serve): `npm run start:serve`
- Verify readiness: `npm run healthcheck`

Static artifacts required for low-memory readiness:
- public/index.html includes `<meta name="x-healthcheck" content="ok">`
- public/health.html returns 200 with the same meta
- public/_redirects ensures SPA routing under static serve

`npm start` redirects to `start:serve` when `CI=true`.
