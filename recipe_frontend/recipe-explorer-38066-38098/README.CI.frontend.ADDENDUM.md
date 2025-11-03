# PUBLIC_INTERFACE
# CI Frontend Startup Addendum

To avoid exit code 137 due to webpack-dev-server in watch mode, always use static serve in CI:

- Start:
  npm --prefix recipe_frontend run start:serve

- Healthcheck:
  npm --prefix recipe_frontend run healthcheck

Static assets exist under `recipe_frontend/public` (health.html, _redirects, index.html with health meta). If you need watch mode, use `start:ci` or `start:lowmem` explicitly.
