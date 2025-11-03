# PUBLIC_INTERFACE
# Healthcheck Summary

- Primary probe: http://127.0.0.1:${REACT_APP_PORT:-3000}/health.html (static, no React boot)
- Fallback probe: http://127.0.0.1:${REACT_APP_PORT:-3000}/
- Both include <meta name="x-healthcheck" content="ok">
- Use: npm --prefix recipe_frontend run healthcheck
