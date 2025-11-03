# PUBLIC_INTERFACE
# CI Startup Pointer

In CI, always prefer:
- npm run start:serve
- npm run healthcheck

Artifacts:
- public/health.html
- public/index.html (contains <meta name="x-healthcheck" content="ok">)
- public/_redirects

`.env.example` contains safe defaults for CI to avoid exit code 137. Copy to `.env` locally when needed.
