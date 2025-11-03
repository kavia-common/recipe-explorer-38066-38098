# PUBLIC_INTERFACE
# Public assets for recipe_frontend

This directory contains static assets used by the CI-safe startup path:

- index.html: Includes `<meta name="x-healthcheck" content="ok">` so probes can validate readiness
- health.html: Lightweight static health endpoint without booting React (low memory)
- _redirects: SPA redirect rule to ensure deep links resolve to `index.html` when serving statically

These files allow `npm run start:serve` to start a low-memory static server that avoids dev server SIGKILL (exit code 137) in CI.
