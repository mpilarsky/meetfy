import "./LoginPage.css";

import loginHero from "../assets/login-hero.png";

function LoginPage() {
  return (
    <div className="login-page">
      <main className="login-main">
        <section className="login-visual">
          <img src={loginHero} alt="Meetfy members at a table" />

          <div className="login-brand-card">
            <strong>MEETFY</strong>
            <p>Cultivating sophisticated social experiences for the modern discoverer.</p>
          </div>
        </section>

        <section className="login-panel">
          <div className="login-top">
            <a href="/register" className="login-register-button">
              Register
            </a>
          </div>

          <form className="login-form">
            <div className="login-intro">
              <h1>Welcome back</h1>
              <p>Please enter your details to access your curated discovery.</p>
            </div>

            <label className="login-field">
              <span>EMAIL ADDRESS</span>
              <input type="email" placeholder="name@sophisticated.com" />
            </label>

            <label className="login-field">
              <div className="login-label-row">
                <span>PASSWORD</span>
                <a href="/forgot-password">Forgot password?</a>
              </div>

              <div className="login-password-wrap">
                <input type="password" placeholder="••••••••" />
                <button type="button" aria-label="Show password">
                  ◉
                </button>
              </div>
            </label>

            <label className="login-checkbox">
              <input type="checkbox" />
              <span>Remember me for 30 days</span>
            </label>

            <button type="submit" className="login-submit">
              LOGIN
            </button>
          </form>
        </section>
      </main>

      <footer className="login-footer">
        <p>© 2026 MEETFY. SOCIAL SOPHISTICATION.</p>

        <div>
          <a href="/contact">Contact</a>
          <a href="/terms">Terms</a>
        </div>
      </footer>
    </div>
  );
}

export default LoginPage;