import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { signInWithEmailAndPassword, sendPasswordResetEmail } from "firebase/auth";
import { Eye, EyeOff } from "lucide-react";
import { useAppData } from "../context/AppDataContext";
import { auth } from "../firebase/firebase.js";
import FormInput from "../components/Form/FormInput";
import Button from "../components/Form/Button";

import "./LoginPage.css";

import loginHero from "../assets/login-hero.png";

function LoginPage() {
  const navigate = useNavigate();
  const { loginUser } = useAppData();

  const [formData, setFormData] = useState({
    email: "",
    password: "",
    rememberMe: false,
  });

  const [showPassword, setShowPassword] = useState(false);
  const [errorMessage, setErrorMessage] = useState("");
  const [isSubmitting, setIsSubmitting] = useState(false);

  const [showResetForm, setShowResetForm] = useState(false);
  const [resetMessage, setResetMessage] = useState("");

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

    const result = await loginUser({
      email: formData.email,
      password: formData.password,
    });

    setIsSubmitting(false);

    if (!result.success) {
      setErrorMessage(result.message);
      return;
    }

    navigate("/dashboard");
  };

  const handleResetPassword = async (event) => {
    event.preventDefault();
    setErrorMessage("");
    setResetMessage("");
    setIsSubmitting(true);

    if (!formData.email) {
      setErrorMessage("Please enter your email address first.");
      setIsSubmitting(false);
      return;
    }

    try {
      await sendPasswordResetEmail(auth, formData.email);
      setResetMessage("Password reset link sent! Check your inbox.");
    } catch (error) {
      console.error("Password reset error:", error);
      setErrorMessage("Failed to send link. Please check your email address.");
    } finally {
      setIsSubmitting(false);
    }
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


          {showResetForm ? (
            <form className="login-form" onSubmit={handleResetPassword}>
              <div className="login-intro">
                <h1>Reset Password</h1>
                <p>Enter your email to receive reset instructions.</p>
              </div>

              <FormInput
                className="login-field"
                label="EMAIL ADDRESS"
                type="email"
                name="email"
                value={formData.email}
                onChange={handleChange}
                placeholder="name@sophisticated.com"
                autoComplete="email"
                required
              />

              {errorMessage && (
                <p className="login-error-message">{errorMessage}</p>
              )}
              {resetMessage && (
                <p className="login-success-message">
                  {resetMessage}
                </p>
              )}

              <Button
                type="submit"
                className="login-submit"
                disabled={isSubmitting}
              >
                {isSubmitting ? "SENDING..." : "SEND RESET LINK"}
              </Button>

              <Button
                type="button"
                className="login-submit login-back-btn"
                onClick={() => {
                  setShowResetForm(false);
                  setErrorMessage("");
                  setResetMessage("");
                }}
              >
                BACK TO LOGIN
              </Button>
            </form>

          ) : (

            <form className="login-form" onSubmit={handleSubmit}>
              <div className="login-intro">
                <h1>Welcome back!</h1>
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
                autoComplete="email"
                required
              />

              <label className="login-field">
                <div className="login-label-row">
                  <span>PASSWORD</span>
                  <span 
                    style={{ cursor: "pointer", fontSize: "14px" }} 
                    onClick={() => {
                      setShowResetForm(true);
                      setErrorMessage("");
                      setResetMessage("");
                    }}
                  >
                    Forgot password?
                  </span>
                </div>

                <div className="login-password-wrap">
                  <input
                    type={showPassword ? "text" : "password"}
                    name="password"
                    value={formData.password}
                    onChange={handleChange}
                    placeholder="••••••••"
                    autoComplete="current-password"
                    required
                  />

                  <Button
                    type="button"
                    ariaLabel="Show password"
                    onClick={() => setShowPassword((prevValue) => !prevValue)}
                  >
                    {showPassword ? <EyeOff size={20} color="#666" /> : <Eye size={20} color="#666" />}
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

              {errorMessage && (
                <p className="login-error-message">{errorMessage}</p>
              )}

              <Button
                type="submit"
                className="login-submit"
                disabled={isSubmitting}
              >
                {isSubmitting ? "LOGGING IN..." : "LOGIN"}
              </Button>
            </form>
          )}
        </section>
      </main>
    </div>
  );
}

export default LoginPage;