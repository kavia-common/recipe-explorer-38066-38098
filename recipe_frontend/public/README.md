# Public Assets

This directory holds static files served by the app in both dev and static-serve modes.

- health.html: Lightweight health endpoint that does not require React to boot.
- _redirects: SPA rewrite hints to ensure deep links resolve to index.html when using static hosting.
- index.html: CRA entry template (includes the x-healthcheck meta).

Assets are copied into public/assets at build via `scripts/copy-assets-to-public.js`. Reference assets using absolute paths like `/assets/...`.
