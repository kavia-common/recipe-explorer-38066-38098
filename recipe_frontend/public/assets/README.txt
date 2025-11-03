This directory contains static assets used by the Sign In screen and other UI parts.
- CSS: common.css, sign-in-11-235.css, screen-common.css
- Images: figma_image_*.png

Access them via /assets/... paths in JSX or HTML.
Do not import these files into the JS bundle; they are served statically to reduce memory usage and preserve pixel accuracy.
