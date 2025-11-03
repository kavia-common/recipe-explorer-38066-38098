import React, { useEffect, useRef } from 'react';

/**
 * PUBLIC_INTERFACE
 * SignIn11235
 * Renders the pixel-accurate Sign In screen extracted from Figma.
 * - Injects the original HTML structure (converted to JSX)
 * - Loads styles from public/assets to preserve exact CSS measurements
 * - Ports required interactivity from assets/sign-in-11-235.js using React hooks
 *
 * Note: Asset paths use /assets/* which maps to recipe_frontend/public/assets during build/serve.
 */
function SignIn11235() {
  const rootRef = useRef(null);

  // Load behavior: simple validation and social button handlers
  useEffect(() => {
    const form = rootRef.current?.querySelector('#sign-in-form');
    const emailInput = rootRef.current?.querySelector('#email-input');
    const passwordInput = rootRef.current?.querySelector('#password-input');
    const googleBtn = rootRef.current?.querySelector('.social-btn.google');
    const facebookBtn = rootRef.current?.querySelector('.social-btn.facebook');

    function showError(input, message) {
      if (!input) return;
      const id = `${input.id}-error`;
      let existing = rootRef.current?.querySelector(`#${id}`);
      if (!existing) {
        const el = document.createElement('div');
        el.id = id;
        el.setAttribute('role', 'alert');
        el.className = 'field-error';
        el.style.position = 'absolute';
        el.style.left = input.offsetLeft + 'px';
        el.style.top = input.offsetTop + input.offsetHeight + 4 + 'px';
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
      if (!input) return;
      const id = `${input.id}-error`;
      const existing = rootRef.current?.querySelector(`#${id}`);
      if (existing) existing.remove();
      input.removeAttribute('aria-invalid');
      input.removeAttribute('aria-describedby');
    }

    function isEmail(value) {
      return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(value);
    }

    function onSubmit(e) {
      e.preventDefault();
      let valid = true;

      if (emailInput) {
        clearError(emailInput);
        if (!emailInput.value.trim()) {
          showError(emailInput, 'Email is required');
          valid = false;
        } else if (!isEmail(emailInput.value.trim())) {
          showError(emailInput, 'Enter a valid email');
          valid = false;
        }
      }

      if (passwordInput) {
        clearError(passwordInput);
        if (!passwordInput.value.trim()) {
          showError(passwordInput, 'Password is required');
          valid = false;
        } else if (passwordInput.value.length < 6) {
          showError(passwordInput, 'Password must be at least 6 characters');
          valid = false;
        }
      }

      if (valid && emailInput) {
        // Placeholder integration
        // eslint-disable-next-line no-alert
        alert('Signing in with ' + emailInput.value);
      }
    }

    function socialClick(name) {
      return () => {
        // eslint-disable-next-line no-alert
        alert('Social sign in: ' + name);
      };
    }

    if (form) form.addEventListener('submit', onSubmit);
    if (googleBtn) {
      const g = socialClick('Google');
      googleBtn.addEventListener('click', g);
      googleBtn.addEventListener('keypress', (e) => {
        if (e.key === 'Enter' || e.key === ' ') g();
      });
    }
    if (facebookBtn) {
      const f = socialClick('Facebook');
      facebookBtn.addEventListener('click', f);
      facebookBtn.addEventListener('keypress', (e) => {
        if (e.key === 'Enter' || e.key === ' ') f();
      });
    }

    return () => {
      if (form) form.removeEventListener('submit', onSubmit);
      if (googleBtn) {
        googleBtn.replaceWith(googleBtn.cloneNode(true)); // quick detach handlers on unmount
      }
      if (facebookBtn) {
        facebookBtn.replaceWith(facebookBtn.cloneNode(true));
      }
    };
  }, []);

  return (
    <>
      {/* Link CSS from public to preserve exact pixel values */}
      <link rel="stylesheet" href="/assets/common.css" />
      <link rel="stylesheet" href="/assets/sign-in-11-235.css" />
      <link rel="stylesheet" href="/assets/screen-common.css" />

      <div
        id="screen-sign-in-11-235"
        className="screen-root"
        role="main"
        aria-label="Sign In Screen"
        ref={rootRef}
      >
        {/* Status Bar (component) */}
        <div className="status-bar" aria-hidden="true">
          <div className="status-right-symbols">
            <div className="battery" role="img" aria-label="Battery status">
              <div className="battery-body"></div>
              <div className="battery-notch"></div>
              <div className="battery-level" style={{ width: '18px' }}></div>
            </div>
            <div className="cellular" role="img" aria-label="Cellular signal">
              <div className="bar bar1"></div>
              <div className="bar bar2"></div>
              <div className="bar bar3"></div>
              <div className="bar bar4"></div>
            </div>
            <div className="wifi" role="img" aria-label="Wi-Fi signal">
              <div className="wifi-arc arc1"></div>
              <div className="wifi-arc arc2"></div>
              <div className="wifi-arc arc3"></div>
            </div>
          </div>
          <div className="status-time typo-67" aria-label="Time">
            19:27
          </div>
        </div>

        {/* Title group */}
        <header className="group-title" aria-labelledby="signin-heading">
          <h1 id="signin-heading" className="title-hello typo-60">Hello,</h1>
          <p className="title-welcome typo-61">Welcome Back!</p>
        </header>

        {/* Email input component */}
        <form id="sign-in-form" className="sign-in-form" noValidate>
          <div className="input-field email" role="group" aria-labelledby="email-label">
            <div className="input-rect style-30"></div>
            <label id="email-label" className="label typo-66" htmlFor="email-input">Email</label>
            <input
              id="email-input"
              name="email"
              type="email"
              className="field-input"
              aria-describedby="email-help"
              placeholder="Enter Email"
              autoComplete="email"
              required
            />
            <p id="email-help" className="placeholder typo-65" aria-hidden="true">Enter Email</p>
          </div>

          {/* Password input component */}
          <div className="input-field password" role="group" aria-labelledby="password-label">
            <div className="input-rect style-30"></div>
            <label id="password-label" className="label typo-66" htmlFor="password-input">Enter Password</label>
            <input
              id="password-input"
              name="password"
              type="password"
              className="field-input"
              aria-describedby="password-help"
              placeholder="Enter Password"
              autoComplete="current-password"
              required
            />
            <p id="password-help" className="placeholder typo-65" aria-hidden="true">Enter Password</p>
          </div>

          {/* Forgot Password */}
          <div className="forgot-area">
            <a href="#!" className="forgot-text typo-62" aria-label="Forgot Password">Forgot Password?</a>
          </div>

          {/* Sign in button */}
          <button className="big-button style-11" data-role="sign-in-button" type="submit" aria-label="Sign In">
            <span className="big-button-label typo-58">Sign In</span>
            <img className="big-button-icon" src="/assets/figma_image_30_811.png" alt="Arrow Right" />
          </button>
        </form>

        {/* Divider line with text */}
        <div className="divider-line" role="separator" aria-label="Or Sign in With">
          <div className="line-left"></div>
          <p className="divider-text typo-64">Or Sign in With</p>
          <div className="line-right"></div>
        </div>

        {/* Social buttons */}
        <div className="social-btn google" role="button" tabIndex={0} aria-label="Sign in with Google">
          <div className="social-bg shadow-3"></div>
          {/* Composite vectors/images from figmaimages directory */}
          <img className="google-vector-1" src="/assets/figma_image_22_221.png" alt="Google icon base" />
          <div className="google-seg seg-red" aria-hidden="true"></div>
          <div className="google-seg seg-green" aria-hidden="true"></div>
          <img className="google-vector-4" src="/assets/figma_image_22_256.png" alt="Google icon overlay" />
        </div>

        <div className="social-btn facebook" role="button" tabIndex={0} aria-label="Sign in with Facebook">
          <div className="social-bg shadow-3"></div>
          <div className="fb-bg" aria-hidden="true"></div>
          <img className="fb-mark" src="/assets/figma_image_18_436.png" alt="Facebook logo" />
          <div className="fb-overlay" aria-hidden="true"></div>
        </div>

        {/* Bottom Home indicator */}
        <div className="home-indicator" aria-hidden="true">
          <div className="home-line"></div>
        </div>

        {/* Signup link */}
        <p className="signup-text typo-63">
          Don’t have an account? <a href="#!" className="signup-link" aria-label="Sign up">Sign up</a>
        </p>
      </div>

      {/* Optional: make app helper JS available if needed */}
      <script src="/assets/app.js"></script>
    </>
  );
}

export default SignIn11235;
