# PUBLIC_INTERFACE
# Source Maps and CI Stability

To ensure consistent builds in CI and avoid intermittent "Module not found" errors related to `source-map-loader` and dev-only plugins:
- Source maps are disabled by default (see `.env.example` and scripts).
- We use `react-app-rewired` with `config-overrides.js` to remove any `source-map-loader` rule from the CRA webpack config.

If you need source maps locally:
- Set `REACT_APP_ENABLE_SOURCE_MAPS=true` and restart the dev server.
- Be aware that enabling source maps increases memory use.
