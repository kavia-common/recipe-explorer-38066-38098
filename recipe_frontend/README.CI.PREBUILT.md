# PUBLIC_INTERFACE
# CI Prebuilt Serve (Lowest Memory)

If your CI pipeline builds the app in a separate step and only needs to serve the already-built assets, use:

- Serve prebuilt (skips build step; lowest memory):
  npm --prefix recipe_frontend run start:serve:prebuilt

Notes:
- This binds to REACT_APP_PORT (or PORT) and HOST=0.0.0.0 by default.
- Memory cap is reduced (NODE_OPTIONS=--max-old-space-size=192) for stability in constrained CI environments.
- You can verify readiness:
  npm --prefix recipe_frontend run healthcheck
