# PUBLIC_INTERFACE
# CI Frontend Startup (Enforced)
- Use: npm --prefix recipe_frontend run start:serve
- Verify: npm --prefix recipe_frontend run healthcheck

The static files required for low-memory start are present:
- recipe_frontend/public/index.html
- recipe_frontend/public/health.html
- recipe_frontend/public/_redirects
- recipe_frontend/public/robots.txt

`npm start` in CI redirects to `start:serve` via scripts/start-wrapper.cjs.
