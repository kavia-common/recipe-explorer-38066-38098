# CI Quick Start (recipe_frontend)

- Preferred in CI to avoid exit code 137:
  npm run start:serve

- Validate readiness:
  npm run healthcheck

- If hot reload is needed (local dev/CI with watch):
  npm run start:ci     # 384MB cap
  npm run start:lowmem # 256MB cap

Notes:
- Deprecation warnings from webpack-dev-server are harmless; static serve avoids them.
- Browserslist database auto-updates on postinstall; warnings are non-blocking in CI.
- Configure port via REACT_APP_PORT or let it default to 3000.
