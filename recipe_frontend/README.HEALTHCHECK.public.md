# PUBLIC_INTERFACE
# Healthcheck Artifacts (Public)

- public/health.html: static page returning 200 with `<meta name="x-healthcheck" content="ok">`
- public/index.html: includes the same meta so `/` can be used as a fallback probe
- public/_redirects: SPA redirects for static serving

Use:
- npm run healthcheck
Which probes http://127.0.0.1:${REACT_APP_PORT:-3000}/health.html first, then '/'.
