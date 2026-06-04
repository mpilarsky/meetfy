import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { Eye, EyeOff, Compass, ShieldCheck } from "lucide-react";

import { useAppData } from "../context/AppDataContext";

import "./RegisterPage.css";

function RegisterPage() {
  const navigate = useNavigate();
  const { registerUser } = useAppData();

  const [formData, setFormData] = useState({
    name: "",
    email: "",
    password: "",
    confirmPassword: "",
    acceptedTerms: false,
  });

  const [showPassword, setShowPassword] = useState(false);
  const [errorMessage, setErrorMessage] = useState("");
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleChange = (event) => {
    const { name, value, type, checked } = event.target;

    setFormData((prevData) => ({
      ...prevData,
      [name]: type === "checkbox" ? checked : value,
    }));
  };

  const handleSubmit = async (event) => {
    event.preventDefault();

    setErrorMessage("");
    setIsSubmitting(true);

    const result = await registerUser(formData);

    setIsSubmitting(false);

    if (!result.success) {
      setErrorMessage(result.message);
      return;
    }

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
            <label className="register-field">
              <span>Name</span>
              <input
                type="text"
                name="name"
                value={formData.name}
                onChange={handleChange}
                placeholder="Evelyn Harper"
                autoComplete="name"
                required
              />
            </label>

            <label className="register-field">
              <span>Email</span>
              <input
                type="email"
                name="email"
                value={formData.email}
                onChange={handleChange}
                placeholder="evelyn@example.com"
                autoComplete="email"
                required
              />
            </label>

            <label className="register-field">
              <span>Password</span>

              <div className="register-password-wrap">
                <input
                  type={showPassword ? "text" : "password"}
                  name="password"
                  value={formData.password}
                  onChange={handleChange}
                  placeholder="••••••••"
                  autoComplete="new-password"
                  required
                />

                <button
                  type="button"
                  aria-label="Show password"
                  onClick={() => setShowPassword((prevValue) => !prevValue)}
                  style={{ background: 'none', border: 'none', cursor: 'pointer', display: 'flex', alignItems: 'center' }}
                >
                  {showPassword ? <EyeOff size={20} color="#666" /> : <Eye size={20} color="#666" />}
                </button>
              </div>
            </label>

            <label className="register-field">
              <span>Confirm Password</span>
              <input
                type={showPassword ? "text" : "password"}
                name="confirmPassword"
                value={formData.confirmPassword}
                onChange={handleChange}
                placeholder="••••••••"
                autoComplete="new-password"
                required
              />
            </label>

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

            {errorMessage && (
              <p className="register-error-message">{errorMessage}</p>
            )}

            <button
              type="submit"
              className="register-submit"
              disabled={isSubmitting}
            >
              {isSubmitting ? "Creating account..." : "Register"}
            </button>
          </form>

          <div className="register-divider" />

          <p className="register-switch">
            Already have an account? <Link to="/login">Log in</Link>
          </p>
        </section>

        <section className="register-benefits">
          <article className="register-benefit-card">
            <div className="register-benefit-icon">
              <Compass size={28} strokeWidth={1.5} />
            </div>

            <div>
              <strong>Discover</strong>
              <p>Local Gatherings</p>
            </div>
          </article>

          <article className="register-benefit-card">
            <div className="register-benefit-icon">
              <ShieldCheck size={28} strokeWidth={1.5} />
            </div>

            <div>
              <strong>Secure</strong>
              <p>Privacy First</p>
            </div>
          </article>
        </section>
      </main>
    </div>
  );
}

export default RegisterPage;