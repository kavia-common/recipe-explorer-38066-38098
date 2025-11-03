# PUBLIC_INTERFACE
# Operations Guide (Frontend)

- Start (CI-safe): npm run start:serve
- Healthcheck: npm run healthcheck

Environment variables (set via orchestrator or .env):
- HOST=0.0.0.0
- REACT_APP_PORT=3000
- REACT_APP_HEALTHCHECK_PATH=/health.html
- REACT_APP_ENABLE_SOURCE_MAPS=false
- Other documented REACT_APP_* vars per README.md

Static artifacts:
- public/index.html contains <meta name="x-healthcheck" content="ok">
- public/health.html returns 200 with the same meta
- public/_redirects ensures SPA deep links resolve to index.html

In CI, npm start redirects automatically to start:serve via scripts/start-wrapper.cjs to prevent watch-mode OOM (exit 137).
