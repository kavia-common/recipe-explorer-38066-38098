import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';

// PUBLIC_INTERFACE
// Light-weight client-side healthcheck indicator: injects a meta tag so
// static servers or external probes can verify the app is up by fetching /index.html.
// For static serve, we can't add a server route. We expose a meta marker instead.
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
