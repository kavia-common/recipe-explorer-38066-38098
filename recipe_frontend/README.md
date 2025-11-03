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

> CI/non-interactive environments: prefer `npm run start:serve` (build and static serve) or `npm run start:ci` to avoid the orchestrator killing a long-running, higher-memory dev server with watch mode. `start:serve` is most memory-efficient.

### `npm run start:ci`
Starts the CRA dev server in CI-friendly mode:
- Disables opening a browser (`BROWSER=none`)
- Sets `CI=true`
- Binds to all interfaces by default (`HOST=0.0.0.0`, overridable)
- Uses `REACT_APP_PORT` for the port if set
- Disables sourcemaps by default to reduce memory (`GENERATE_SOURCEMAP=false`, can be toggled via `REACT_APP_ENABLE_SOURCE_MAPS=true`)
- For extremely constrained memory, you can use `npm run start:lowmem` which caps Node memory via `NODE_OPTIONS=--max-old-space-size=256`.

### `npm run start:serve` (Recommended for CI)
Builds the app with low memory settings and serves static files via `serve`.  
This mode is non-watching, low-memory, and stable under CI orchestrators:
```bash
npm run start:serve
```
The static server binds to `${REACT_APP_PORT:-3000}` and `HOST=0.0.0.0` if set.

### `npm run healthcheck`
Simple HTTP check for static served app (expects 200 on `${REACT_APP_HEALTHCHECK_PATH:-/}`):
```bash
npm run healthcheck
```

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
- Webpack Dev Server deprecation warnings (`onAfterSetupMiddleware` / `onBeforeSetupMiddleware`) are upstream in CRA/webpack-dev-server and safe. They do not affect builds. CI path (`start:serve`) avoids running the dev server.
- Browserslist database: we trigger `npx update-browserslist-db@latest` on `postinstall` to keep it fresh.

## Customization

### Colors

The main brand colors are defined as CSS variables in `src/App.css`:

```css
:root {
  --kavia-orange: #E87A41;
  --kavia-dark: #1A1A1A;
  --text-color: #ffffff;
  --text-secondary: rgba(255, 255, 255, 0.7);
  --border-color: rgba(255, 255, 255, 0.1);
}
```

### Components

This template uses pure HTML/CSS components instead of a UI framework. You can find component styles in `src/App.css`. 

Common components include:
- Buttons (`.btn`, `.btn-large`)
- Container (`.container`)
- Navigation (`.navbar`)
- Typography (`.title`, `.subtitle`, `.description`)

## Learn More

To learn React, check out the [React documentation](https://reactjs.org/).

### Code Splitting
This section has moved here: https://facebook.github.io/create-react-app/docs/code-splitting

### Analyzing the Bundle Size
This section has moved here: https://facebook.github.io/create-react-app/docs/analyzing-the-bundle-size

### Making a Progressive Web App
This section has moved here: https://facebook.github.io/create-react-app/docs/making-a-progressive-web-app

### Advanced Configuration
This section has moved here: https://facebook.github.io/create-react-app/docs/advanced-configuration

### Deployment
This section has moved here: https://facebook.github.io/create-react-app/docs/deployment

### `npm run build` fails to minify
This section has moved here: https://facebook.github.io/create-react-app/docs/troubleshooting#npm-run-build-fails-to-minify
