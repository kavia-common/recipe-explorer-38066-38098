# PUBLIC_INTERFACE
# CI-safe Startup Note

To avoid exit code 137 due to dev-server watch in constrained CI:

- Start (recommended):
  npm run start:serve

- If build is already present:
  npm run start:serve:prebuilt

- Verify readiness:
  npm run healthcheck

`npm start` auto-detects CI and redirects to `start:serve` via scripts/start-wrapper.cjs.
