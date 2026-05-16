import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";

import FormInput from "../components/Form/FormInput";
import Button from "../components/Form/Button";

import "./RegisterPage.css";

function RegisterPage() {
  const navigate = useNavigate();

  const [formData, setFormData] = useState({
    name: "",
    email: "",
    password: "",
    confirmPassword: "",
    acceptedTerms: false,
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

    if (formData.password !== formData.confirmPassword) {
      console.log("Passwords do not match");
      return;
    }

    console.log("Register data:", formData);

    navigate("/preferences");
  };

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

          <form className="register-form" onSubmit={handleSubmit}>
            <FormInput
              className="register-field"
              label="Name"
              type="text"
              name="name"
              value={formData.name}
              onChange={handleChange}
              placeholder="Evelyn Harper"
            />

            <FormInput
              className="register-field"
              label="Email"
              type="email"
              name="email"
              value={formData.email}
              onChange={handleChange}
              placeholder="evelyn@example.com"
            />

            <label className="register-field">
              <span>Password</span>

              <div className="register-password-wrap">
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

            <FormInput
              className="register-field"
              label="Confirm Password"
              type="password"
              name="confirmPassword"
              value={formData.confirmPassword}
              onChange={handleChange}
              placeholder="••••••••"
            />

            <label className="register-checkbox">
              <input
                type="checkbox"
                name="acceptedTerms"
                checked={formData.acceptedTerms}
                onChange={handleChange}
              />

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