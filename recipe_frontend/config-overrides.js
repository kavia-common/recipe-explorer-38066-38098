/**
 * PUBLIC_INTERFACE
 * config-overrides.js for react-app-rewired
 *
 * Purpose:
 * - Ensure dev/prod builds are stable in constrained CI by:
 *   - Disabling source-map-loader and any rule that enforces source maps from node_modules
 *   - Respecting GENERATE_SOURCEMAP env (default false via .env.example)
 *   - Avoiding optional plugins that may be missing or mis-resolved in some environments
 *
 * Note: We do not eject CRA. We minimally mutate the webpack config to remove source-map-loader.
 */
const path = require('path');

function stripSourceMapLoader(config) {
  if (!config || !config.module || !Array.isArray(config.module.rules)) return config;

  // CRA uses nested "oneOf" arrays for loaders. We walk and remove any use of source-map-loader.
  const removeSml = (rule) => {
    if (!rule) return rule;
    if (Array.isArray(rule.use)) {
      rule.use = rule.use.filter((u) => {
        const loaderName =
          (typeof u === 'string' ? u : u && u.loader) || '';
        return !/source-map-loader/.test(loaderName);
      });
    } else if (rule.use && typeof rule.use === 'object') {
      const loaderName = rule.use.loader || '';
      if (/source-map-loader/.test(loaderName)) {
        rule.use = undefined;
      }
    }
    if (Array.isArray(rule.oneOf)) {
      rule.oneOf = rule.oneOf
        .map((r) => removeSml(r))
        .filter(Boolean);
    }
    return rule;
  };

  config.module.rules = config.module.rules
    .map((r) => removeSml(r))
    .filter(Boolean);

  return config;
}

module.exports = {
  // PUBLIC_INTERFACE
  // Webpack override used by react-app-rewired to keep builds stable in CI.
  webpack: function override(config, env) {
    // Disable source maps unless explicitly enabled
    const enableSourceMaps =
      String(process.env.REACT_APP_ENABLE_SOURCE_MAPS || process.env.GENERATE_SOURCEMAP || '').toLowerCase() === 'true';

    // Respect CRA’s default behavior but force disable if not enabled
    if (!enableSourceMaps) {
      config.devtool = false;
    }

    // Remove source-map-loader to prevent "Module not found" instability in CI
    stripSourceMapLoader(config);

    // Defensive: ensure resolve.fallback exists
    config.resolve = config.resolve || {};
    config.resolve.fallback = config.resolve.fallback || {};

    return config;
  },
};
