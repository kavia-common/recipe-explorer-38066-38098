# PUBLIC_INTERFACE
This app injects a client-side meta tag for healthchecks:
<meta name="x-healthcheck" content="ok" />
The healthcheck script verifies HTTP 200 on "/" and presence of this meta.
