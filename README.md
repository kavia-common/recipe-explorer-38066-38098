# recipe-explorer-38066-38098

CI tip: For the frontend container, use `npm run start:serve` (static build + serve) to minimize memory and avoid orchestrator timeouts or SIGKILL (137). `start:ci` and `start:lowmem` are available if you specifically need the webpack dev server.

Recommended commands:
- npm run start:serve  -> low-memory production build + static serve on ${REACT_APP_PORT:-3000}
- npm run start:ci     -> CRA dev server with capped memory (NODE_OPTIONS) and no browser auto-open
- npm run start:lowmem -> CRA dev server with stricter 256MB memory cap for very constrained environments