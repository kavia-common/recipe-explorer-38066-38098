# PUBLIC_INTERFACE
# Public Assets

This directory is populated automatically by `scripts/copy-assets-to-public.js` during prebuild/prepare:

- Copies from recipe_frontend/assets/*
- Copies from repository root assets/* (including assets/figmaimages)

All assets can be referenced in the app using absolute paths like `/assets/<file>`.
