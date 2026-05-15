import "./RegisterPage.css";

function RegisterPage() {
  return (
    <div className="register-page">
      <header className="register-header">
        <a href="/" className="register-logo">
          MEETFY
        </a>

        <a href="/login" className="register-login-button">
          Login
        </a>
      </header>

      <main className="register-main">
        <section className="register-card">
          <div className="register-heading">
            <h1>Create Account</h1>
            <p>Join our curated community of discovery.</p>
          </div>

          <form className="register-form">
            <label className="register-field">
              <span>Name</span>
              <input type="text" placeholder="Evelyn Harper" />
            </label>

            <label className="register-field">
              <span>Email</span>
              <input type="email" placeholder="evelyn@example.com" />
            </label>

            <label className="register-field">
              <span>Password</span>
              <div className="register-password-wrap">
                <input type="password" placeholder="••••••••" />
                <button type="button" aria-label="Show password">
                  ◉
                </button>
              </div>
            </label>

            <label className="register-field">
              <span>Confirm Password</span>
              <input type="password" placeholder="••••••••" />
            </label>

            <label className="register-checkbox">
              <input type="checkbox" />
              <span>
                I accept the <a href="/terms">Terms & Conditions</a> and Privacy Policy
              </span>
            </label>

            <button type="submit" className="register-submit">
              Register
            </button>
          </form>

          <div className="register-divider" />

          <p className="register-switch">
            Already have an account? <a href="/login">Log in</a>
          </p>
        </section>

        <section className="register-benefits">
          <article className="register-benefit-card">
            <div className="register-benefit-icon">⊙</div>
            <div>
              <strong>Discover</strong>
              <p>Local Gatherings</p>
            </div>
          </article>

          <article className="register-benefit-card">
            <div className="register-benefit-icon">♢</div>
            <div>
              <strong>Secure</strong>
              <p>Privacy First</p>
            </div>
          </article>
        </section>
      </main>

      <footer className="register-footer">
        <p>© 2026 MEETFY. SOCIAL SOPHISTICATION.</p>

        <div>
          <a href="/contact">CONTACT</a>
          <a href="/terms">TERMS</a>
        </div>
      </footer>
    </div>
  );
}

export default RegisterPage;