// Global app JS used by all screens
(function () {
  'use strict';

  // Utility to delegate events
  function on(el, evt, selector, handler) {
    el.addEventListener(evt, function (e) {
      if (!selector) return handler(e);
      const target = e.target.closest(selector);
      if (target && el.contains(target)) handler(e, target);
    });
  }

  // Example: capture Sign In button click
  document.addEventListener('DOMContentLoaded', function () {
    const btn = document.querySelector('[data-role="sign-in-button"]');
    if (btn) {
      btn.addEventListener('click', function () {
        // Placeholder - integrate with actual auth later
        alert('Sign In clicked');
      });
    }
  });
})();
