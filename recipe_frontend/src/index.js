import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';

/**
 * PUBLIC_INTERFACE
 * Light-weight client-side healthcheck indicator: injects a meta tag so
 * static servers or external probes can verify the app is up by fetching /index.html.
 * For static serve, we can't add a server route. We expose a meta marker instead.
 * The healthcheck script looks for: <meta name="x-healthcheck" content="ok">
 * This tag is also present statically in public/index.html to pass probes even before React boot.
 * A fallback static page also exists at /health.html including the same meta.
 * Note: public/index.html also includes this meta statically to support cases where
 * React hasn't booted yet.
 */
(function injectHealthMeta() {
  try {
    const meta = document.createElement('meta');
    meta.name = 'x-healthcheck';
    meta.content = 'ok';
    document.head.appendChild(meta);
  } catch (e) {
    // no-op
  }
})();

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);
