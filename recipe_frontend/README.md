# Lightweight React Template for KAVIA

This project provides a minimal React template with a clean, modern UI and minimal dependencies.

## Features

- **Lightweight**: No heavy UI frameworks - uses only vanilla CSS and React
- **Modern UI**: Clean, responsive design with KAVIA brand styling
- **Fast**: Minimal dependencies for quick loading times
- **Simple**: Easy to understand and modify

## Getting Started

In the project directory, you can run:

### `npm start`
Runs the app in development mode (hot-reload).  
Open http://localhost:3000 to view it in your browser.

> CI/non-interactive environments should use `npm run start:serve` (build and static serve) to avoid the orchestrator killing a long-running, higher-memory dev server (exit code 137). If you need the dev server, use `npm run start:ci` or `npm run start:lowmem` which cap memory and disable auto-opening the browser.

### `npm run start:ci`
Starts the CRA dev server in CI-friendly mode:
- Disables opening a browser (`BROWSER=none`)
- Sets `CI=true`
- Binds to all interfaces (`HOST=0.0.0.0`)
- Uses `REACT_APP_PORT` or falls back to `PORT` if provided by orchestrator
- Disables sourcemaps by default to reduce memory (`GENERATE_SOURCEMAP=false`, toggle via `REACT_APP_ENABLE_SOURCE_MAPS=true`)
- For extremely constrained memory, use `npm run start:lowmem` which caps Node memory via `NODE_OPTIONS=--max-old-space-size=256`.

### `npm run start:serve` (Recommended for CI)
Builds the app with low memory settings and serves static files via `serve`.  
This mode is non-watching, low-memory, and stable under CI orchestrators:
```bash
npm run start:serve
```
The static server binds to `REACT_APP_PORT` (default 3000) and `HOST=0.0.0.0`.

### Healthcheck in CI
After `start:serve`, you can verify readiness:
```bash
npm run healthcheck
```
This expects HTTP 200 on `http://localhost:${REACT_APP_PORT:-3000}${REACT_APP_HEALTHCHECK_PATH:-/}`.

### `npm test`
Launches the test runner in non-watch mode by default via project script, with `CI=true` and `--passWithNoTests` to avoid long watches or failures when no tests are present.

### `npm run build` and `npm run build:ci`
Builds the app for production to the `build` folder.  
The `build:ci` variant disables source maps and caps memory to reduce CI usage.

### `npm run serve`
Serves the production build statically on the configurable port (default 3000).  
Flags used: `serve -s -L -n -C --single` for robust container operation.

## Environment Variables
Configure via `.env` (see `.env.example`), do not hardcode:
- REACT_APP_API_BASE, REACT_APP_BACKEND_URL, REACT_APP_FRONTEND_URL
- REACT_APP_WS_URL, REACT_APP_NODE_ENV, REACT_APP_NEXT_TELEMETRY_DISABLED
- REACT_APP_ENABLE_SOURCE_MAPS
- REACT_APP_PORT, REACT_APP_TRUST_PROXY, REACT_APP_LOG_LEVEL
- REACT_APP_HEALTHCHECK_PATH, REACT_APP_FEATURE_FLAGS, REACT_APP_EXPERIMENTS_ENABLED

Tip: If binding to all interfaces, set `HOST=0.0.0.0`. Verify this is expected in your environment before enabling.

## Deprecation and Browserslist Notes
- Webpack Dev Server deprecation warnings (`onAfterSetupMiddleware` / `onBeforeSetupMiddleware`) are upstream in CRA/webpack-dev-server and safe. They do not affect builds. Prefer `start:serve` in CI to avoid long-running watch processes.
- Browserslist database: `postinstall` runs `npx update-browserslist-db@latest` to keep it fresh and quiet warnings.

## Sign In Screen
The integrated Sign In screen is available at `/sign-in` (component `SignIn11235.jsx`) and uses pixel-accurate CSS under `public/assets/*`.

## Learn More
To learn React, check out the [React documentation](https://reactjs.org/).
