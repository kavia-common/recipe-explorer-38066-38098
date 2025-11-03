/**
 * PUBLIC_INTERFACE
 * initializeSignInScreen
 * Sets up basic interactivity for the Sign In screen:
 * - Simple client-side validations (presence, email format)
 * - Button handlers for Sign In and social buttons
 */
(function () {
  'use strict';

  // PUBLIC_INTERFACE
  function initializeSignInScreen() {
    var form = document.getElementById('sign-in-form');
    var emailInput = document.getElementById('email-input');
    var passwordInput = document.getElementById('password-input');
    var googleBtn = document.querySelector('.social-btn.google');
    var facebookBtn = document.querySelector('.social-btn.facebook');

    function showError(input, message) {
      // Simple accessible error toast (non-intrusive)
      var id = input.id + '-error';
      var existing = document.getElementById(id);
      if (!existing) {
        var el = document.createElement('div');
        el.id = id;
        el.role = 'alert';
        el.className = 'field-error';
        el.style.position = 'absolute';
        el.style.left = (input.offsetLeft) + 'px';
        el.style.top = (input.offsetTop + input.offsetHeight + 4) + 'px';
        el.style.fontFamily = 'Poppins, sans-serif';
        el.style.fontSize = '11px';
        el.style.color = '#EF4444';
        el.style.background = 'rgba(239, 68, 68, 0.06)';
        el.style.padding = '4px 6px';
        el.style.borderRadius = '6px';
        el.style.border = '1px solid rgba(239, 68, 68, 0.3)';
        el.textContent = message;
        input.parentElement.appendChild(el);
      } else {
        existing.textContent = message;
      }
      input.setAttribute('aria-invalid', 'true');
      input.setAttribute('aria-describedby', id);
    }

    function clearError(input) {
      var id = input.id + '-error';
      var existing = document.getElementById(id);
      if (existing) existing.remove();
      input.removeAttribute('aria-invalid');
      input.removeAttribute('aria-describedby');
    }

    function isEmail(value) {
      return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(value);
    }

    if (form) {
      form.addEventListener('submit', function (e) {
        e.preventDefault();
        var valid = true;

        // Email validation
        clearError(emailInput);
        if (!emailInput.value.trim()) {
          showError(emailInput, 'Email is required');
          valid = false;
        } else if (!isEmail(emailInput.value.trim())) {
          showError(emailInput, 'Enter a valid email');
          valid = false;
        }

        // Password validation
        clearError(passwordInput);
        if (!passwordInput.value.trim()) {
          showError(passwordInput, 'Password is required');
          valid = false;
        } else if (passwordInput.value.length < 6) {
          showError(passwordInput, 'Password must be at least 6 characters');
          valid = false;
        }

        if (valid) {
          // Placeholder: integrate with app auth flow
          alert('Signing in with ' + emailInput.value);
        }
      });
    }

    function socialClick(name) {
      return function () {
        alert('Social sign in: ' + name);
      };
    }

    if (googleBtn) {
      googleBtn.addEventListener('click', socialClick('Google'));
      googleBtn.addEventListener('keypress', function (e) {
        if (e.key === 'Enter' || e.key === ' ') socialClick('Google')();
      });
    }
    if (facebookBtn) {
      facebookBtn.addEventListener('click', socialClick('Facebook'));
      facebookBtn.addEventListener('keypress', function (e) {
        if (e.key === 'Enter' || e.key === ' ') socialClick('Facebook')();
      });
    }
  }

  document.addEventListener('DOMContentLoaded', initializeSignInScreen);

  // Expose for testability
  window.initializeSignInScreen = initializeSignInScreen;
})();
