import React from "react";

export default function Home() {
  return (
    <main className="gx-hero">
      <div className="gx-hero-overlay" />

      <div className="gx-hero-inner">
        {/* LEFT SIDE */}
        <section className="gx-hero-left">
          <p className="gx-tagline">Your Complete</p>

          <h1 className="gx-title">
            <span className="gx-title-highlight">Fitness Management</span>
            <br />
            <span className="gx-title-secondary">Solution</span>
          </h1>

          <p className="gx-description">
            Transform how your gym operates with an all-in-one management
            platform. Whether you run a small fitness studio or a large
            multi-branch center, our tools help you manage daily tasks,
            increase member satisfaction, and grow your business effortlessly.
          </p>

          <button className="btn btn-admin">Login as Admin</button>
        </section>

        {/* RIGHT SIDE – LOGIN CARD */}
        <aside className="gx-hero-right">
          <div className="gx-login-card">
            <h2 className="gx-login-title">Login to your Account</h2>

            <button className="gx-google-btn">
              <span className="gx-google-icon">G</span>
              Sign in with Google
            </button>

            <div className="gx-divider">
              <span />
              <p>or login with email</p>
              <span />
            </div>

            <form className="gx-login-form">
              <div className="gx-form-group">
                <label>Email</label>
                <input type="email" placeholder="you@example.com" />
              </div>

              <div className="gx-form-group">
                <label>Password</label>
                <input type="password" placeholder="Enter password" />
              </div>

              <button type="submit" className="btn btn-login">
                Login
              </button>
            </form>

            <p className="gx-register-text">
              Not registered yet?{" "}
              <a href="/signup" className="gx-link">
                Create an account
              </a>
            </p>
          </div>
        </aside>
      </div>
    </main>
  );
}
