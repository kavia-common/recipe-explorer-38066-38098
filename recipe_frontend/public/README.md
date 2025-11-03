# Public Assets (Static Serve)

This folder contains runtime assets for the static server:

- health.html: a minimal page with `<meta name="x-healthcheck" content="ok">` allowing CI to probe readiness without booting React.
- _redirects: SPA redirects to ensure any deep link resolves to `/index.html`.
- index.html: CRA entry HTML including the same health meta.

During build, the `prebuild` script copies design assets into `public/assets` so the app can reference them at `/assets/...`.
