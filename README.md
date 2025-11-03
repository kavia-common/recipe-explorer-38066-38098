# recipe-explorer-38066-38098

CI tip: For the frontend container, use `npm run start:serve` (static build + serve) to minimize memory and avoid orchestrator timeouts or SIGKILL (137). `start:ci` and `start:lowmem` are available if you specifically need the webpack dev server.