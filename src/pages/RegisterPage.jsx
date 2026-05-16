import { Link } from "react-router-dom";

import FormInput from "../components/Form/FormInput";
import Button from "../components/Form/Button";

import "./RegisterPage.css";

function RegisterPage() {
  return (
    <div className="register-page">
      <header className="register-header">
        <Link to="/" className="register-logo">
          MEETFY
        </Link>

        <Link to="/login" className="register-login-button">
          Login
        </Link>
      </header>

      <main className="register-main">
        <section className="register-card">
          <div className="register-heading">
            <h1>Create Account</h1>
            <p>Join our curated community of discovery.</p>
          </div>

          <form className="register-form">
            <FormInput
              className="register-field"
              label="Name"
              type="text"
              placeholder="Evelyn Harper"
            />

            <FormInput
              className="register-field"
              label="Email"
              type="email"
              placeholder="evelyn@example.com"
            />

            <label className="register-field">
              <span>Password</span>

              <div className="register-password-wrap">
                <input type="password" placeholder="••••••••" />

                <Button type="button" ariaLabel="Show password">
                  ◉
                </Button>
              </div>
            </label>

            <FormInput
              className="register-field"
              label="Confirm Password"
              type="password"
              placeholder="••••••••"
            />

            <label className="register-checkbox">
              <input type="checkbox" />

              <span>
                I accept the <Link to="/terms">Terms & Conditions</Link> and
                Privacy Policy
              </span>
            </label>

            <Button type="submit" className="register-submit">
              Register
            </Button>
          </form>

          <div className="register-divider" />

          <p className="register-switch">
            Already have an account? <Link to="/login">Log in</Link>
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
          <Link to="/contact">CONTACT</Link>
          <Link to="/terms">TERMS</Link>
        </div>
      </footer>
    </div>
  );
}

export default RegisterPage;