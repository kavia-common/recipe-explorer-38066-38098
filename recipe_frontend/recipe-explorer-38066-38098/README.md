# recipe-explorer-38066-38098

This workspace contains the Recipe Explorer frontend container.

CI tip: Use `npm run start:serve` inside recipe_frontend to minimize memory and avoid orchestrator timeouts or SIGKILL (137). If you specifically need the webpack dev server, use `start:ci` or `start:lowmem`.

Quick start:
- cd recipe_frontend
- npm ci
- npm run start:serve

See recipe_frontend/README.md for full details and environment variables.
