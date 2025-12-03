import React from "react";

export default function Signup() {
  return (
    <main className="signup-hero">
      <div className="signup-overlay" />

      <div className="signup-inner">
        <div className="signup-card">
          <h2 className="signup-title">Set up your account</h2>
          <p className="signup-subtitle">
            Set up your account to start tracking your fitness journey!
          </p>

          <form className="signup-form">
            <div className="signup-row">
              <input
                type="text"
                placeholder="Alex"
                className="signup-input"
              />
              <input
                type="text"
                placeholder="Carry"
                className="signup-input"
              />
            </div>

            <input
              type="text"
              placeholder="Mobile Number"
              className="signup-input"
            />
            <input
              type="email"
              placeholder="Email Address"
              className="signup-input"
            />
            <input
              type="password"
              placeholder="Password"
              className="signup-input"
            />
            <input
              type="password"
              placeholder="Confirm Password"
              className="signup-input"
            />

            <div className="signup-terms">
              <input type="checkbox" id="terms" />
              <label htmlFor="terms">
                By creating an account, I agree to the{" "}
                <span>Terms of Use</span> and <span>Privacy Policy</span>.
              </label>
            </div>

            <div className="signup-or">
              <span />
              <p>OR</p>
              <span />
            </div>

            <button type="button" className="signup-google-btn">
              <span className="signup-google-icon">G</span>
              Continue with Google
            </button>

            <button type="submit" className="signup-submit-btn">
              Create an account
            </button>
          </form>
        </div>
      </div>
    </main>
  );
}
