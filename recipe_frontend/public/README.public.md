# PUBLIC_INTERFACE
# Public Artifacts

- index.html: base document; includes `<meta name="x-healthcheck" content="ok">`
- health.html: static low-memory readiness endpoint; same health meta as index.html
- _redirects: SPA redirect rules so deep links resolve to index.html under static serve
- robots.txt: blocks crawlers in CI by default
