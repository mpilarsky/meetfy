import { Link } from "react-router-dom";

import "./ContactPage.css";

import contactHero from "../assets/contact-hero.png";

function ContactPage() {
  return (
    <div className="contact-page">
      <header className="contact-header">
        <Link to="/" className="contact-logo">
          MEETFY
        </Link>
      </header>

      <main className="contact-main">
        <section className="contact-hero">
          <div className="contact-hero-text">
            <h1>Contact Us</h1>
            <p>
              We're here to help you build authentic connections. Have questions
              about events or want to start a collaboration? Write to us.
            </p>
          </div>

          <img src={contactHero} alt="Messages and envelopes illustration" />
        </section>

        <section className="contact-content">
          <form className="contact-form-card">
            <div className="contact-form-grid">
              <label>
                <span>Full Name</span>
                <input type="text" placeholder="John Doe" />
              </label>

              <label>
                <span>Email Address</span>
                <input type="email" placeholder="john@example.com" />
              </label>

              <label>
                <span>Subject</span>
                <input type="text" placeholder="How can we help?" />
              </label>

              <label>
                <span>Phone Number (optional)</span>
                <input type="tel" placeholder="+48 000 000 000" />
              </label>
            </div>

            <label className="contact-message-field">
              <span>Message</span>
              <textarea placeholder="Your message..." />
            </label>

            <button type="submit" className="contact-submit">
              Send Message <span>▷</span>
            </button>
          </form>

          <aside className="contact-info-list">
            <article className="contact-info-card">
              <div className="contact-info-icon">✉</div>
              <div>
                <h2>Write to us</h2>
                <p>hello@meetfy.com</p>
                <span>We reply within 24h</span>
              </div>
            </article>

            <article className="contact-info-card">
              <div className="contact-info-icon">♧</div>
              <div>
                <h2>Call us</h2>
                <p>+48 123 456 789</p>
                <span>Mon - Fri, 9am - 5pm</span>
              </div>
            </article>

            <article className="contact-info-card">
              <div className="contact-info-icon">⌖</div>
              <div>
                <h2>Office</h2>
                <p>12 Marszałkowska St, 00-001</p>
                <p>Warsaw, Poland</p>
              </div>
            </article>

            <article className="contact-info-card online-card">
              <div className="contact-info-icon">⌯</div>

              <div>
                <h2>Find us online</h2>

                <div className="contact-socials">
                  <Link to="/" aria-label="Website">
                    ◎
                  </Link>

                  <Link to="/" aria-label="Global">
                    ◉
                  </Link>

                  <Link to="/" aria-label="Community">
                    ♟
                  </Link>
                </div>
              </div>
            </article>
          </aside>
        </section>
      </main>

      <footer className="contact-footer">
        <p>© 2026 MEETFY. SOCIAL SOPHISTICATION.</p>

        <div>
          <Link to="/contact">CONTACT</Link>
          <Link to="/terms">TERMS</Link>
        </div>
      </footer>
    </div>
  );
}

export default ContactPage;