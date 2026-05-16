import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";

import FormInput from "../components/Form/FormInput";
import Button from "../components/Form/Button";

import "./LoginPage.css";

import loginHero from "../assets/login-hero.png";

function LoginPage() {
  const navigate = useNavigate();

  const [formData, setFormData] = useState({
    email: "",
    password: "",
    rememberMe: false,
  });

  const handleChange = (event) => {
    const { name, value, type, checked } = event.target;

    setFormData((prevData) => ({
      ...prevData,
      [name]: type === "checkbox" ? checked : value,
    }));
  };

  const handleSubmit = (event) => {
    event.preventDefault();

    console.log("Login data:", formData);

    navigate("/dashboard");
  };

  return (
    <div className="login-page">
      <main className="login-main">
        <section className="login-visual">
          <img src={loginHero} alt="Meetfy members at a table" />

          <div className="login-brand-card">
            <strong>MEETFY</strong>
            <p>
              Cultivating sophisticated social experiences for the modern
              discoverer.
            </p>
          </div>
        </section>

        <section className="login-panel">
          <header className="login-header">
            <Link to="/" className="login-logo">
              MEETFY
            </Link>

            <Link to="/register" className="login-register-button">
              Register
            </Link>
          </header>

          <form className="login-form" onSubmit={handleSubmit}>
            <div className="login-intro">
              <h1>Welcome back</h1>
              <p>Please enter your details to access your curated discovery.</p>
            </div>

            <FormInput
              className="login-field"
              label="EMAIL ADDRESS"
              type="email"
              name="email"
              value={formData.email}
              onChange={handleChange}
              placeholder="name@sophisticated.com"
            />

            <label className="login-field">
              <div className="login-label-row">
                <span>PASSWORD</span>
                <Link to="/forgot-password">Forgot password?</Link>
              </div>

              <div className="login-password-wrap">
                <input
                  type="password"
                  name="password"
                  value={formData.password}
                  onChange={handleChange}
                  placeholder="••••••••"
                />

                <Button type="button" ariaLabel="Show password">
                  ◉
                </Button>
              </div>
            </label>

            <label className="login-checkbox">
              <input
                type="checkbox"
                name="rememberMe"
                checked={formData.rememberMe}
                onChange={handleChange}
              />
              <span>Remember me for 30 days</span>
            </label>

            <Button type="submit" className="login-submit">
              LOGIN
            </Button>
          </form>
        </section>
      </main>

      <footer className="login-footer">
        <p>© 2026 MEETFY. SOCIAL SOPHISTICATION.</p>

        <div>
          <Link to="/contact">Contact</Link>
          <Link to="/terms">Terms</Link>
        </div>
      </footer>
    </div>
  );
}

export default LoginPage;