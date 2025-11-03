# PUBLIC_INTERFACE
# Healthcheck for recipe_frontend

- Primary: http://127.0.0.1:${REACT_APP_PORT:-3000}/health.html
- Fallback: http://127.0.0.1:${REACT_APP_PORT:-3000}/

Both include: <meta name="x-healthcheck" content="ok">

Use:
- npm run healthcheck

CI note:
- Start with: npm run start:serve
- Prefer static serve to avoid dev-server memory issues leading to exit code 137.
