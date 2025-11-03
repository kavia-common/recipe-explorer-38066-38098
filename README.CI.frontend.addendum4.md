# PUBLIC_INTERFACE
# CI Frontend Startup (Enforced Static Serve)

To avoid exit code 137 from dev-server watch processes, always prefer static serve in CI:

- Start:
  npm --prefix recipe_frontend run start:serve

- Healthcheck:
  npm --prefix recipe_frontend run healthcheck

Notes:
- `.env.example` added with sane CI defaults (HOST=0.0.0.0, REACT_APP_PORT=3000, REACT_APP_ENABLE_SOURCE_MAPS=false)
- `public/health.html`, `public/index.html` with `<meta name="x-healthcheck" content="ok">`
- `public/_redirects` ensures SPA routing under static serve
