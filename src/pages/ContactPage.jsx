import { useState } from "react";
import { Link } from "react-router-dom";

import { Send, Mail, Phone, MapPin, Globe } from "lucide-react";
import { FaInstagram, FaXTwitter, FaLinkedin } from "react-icons/fa6";
import { useAppData } from "../context/AppDataContext";

import FormInput from "../components/Form/FormInput";
import FormTextarea from "../components/Form/FormTextarea";
import Button from "../components/Form/Button";

import "./ContactPage.css";

import contactHero from "../assets/contact-hero.png";

const CONTACT_EMAIL = "meetfy8@gmail.com";

function ContactPage() {
  const { authUser } = useAppData();

  const [contactData, setContactData] = useState({
    fullName: "",
    email: "",
    subject: "",
    phone: "",
    message: "",
  });

  const [messageInfo, setMessageInfo] = useState("");

  const homeLink = authUser ? "/dashboard" : "/";

  const handleChange = (event) => {
    const { name, value } = event.target;

    setContactData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  const handleSubmit = (event) => {
    event.preventDefault();

    const mailSubject = contactData.subject.trim()
      ? `Meetfy contact: ${contactData.subject}`
      : "Meetfy contact form";

    const mailBody = `
Full name: ${contactData.fullName}
Email: ${contactData.email}
Phone: ${contactData.phone || "Not provided"}

Message:
${contactData.message}
`;

    const mailtoLink = `mailto:${CONTACT_EMAIL}?subject=${encodeURIComponent(
      mailSubject
    )}&body=${encodeURIComponent(mailBody)}`;

    window.location.href = mailtoLink;

    console.log("Contact data:", contactData);

    setMessageInfo(
      "Your email client has been opened with a prepared message."
    );

    setContactData({
      fullName: "",
      email: "",
      subject: "",
      phone: "",
      message: "",
    });
  };

  return (
    <div className="contact-page">
      <header className="contact-header">
        <Link to={homeLink} className="contact-logo">
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
          <form className="contact-form-card" onSubmit={handleSubmit}>
            <div className="contact-form-grid">
              <FormInput
                label="Full Name"
                type="text"
                name="fullName"
                value={contactData.fullName}
                onChange={handleChange}
                placeholder="John Doe"
                required
              />

              <FormInput
                label="Email Address"
                type="email"
                name="email"
                value={contactData.email}
                onChange={handleChange}
                placeholder="john@example.com"
                required
              />

              <FormInput
                label="Subject"
                type="text"
                name="subject"
                value={contactData.subject}
                onChange={handleChange}
                placeholder="How can we help?"
                required
              />

              <FormInput
                label="Phone Number (optional)"
                type="tel"
                name="phone"
                value={contactData.phone}
                onChange={handleChange}
                placeholder="+48 000 000 000"
              />
            </div>

            <FormTextarea
              className="contact-message-field"
              label="Message"
              name="message"
              value={contactData.message}
              onChange={handleChange}
              placeholder="Your message..."
              required
            />

            {messageInfo && <p className="contact-message-info">{messageInfo}</p>}

            <Button type="submit" className="contact-submit">
              Send Message <span>▷</span>
            </Button>
          </form>

          <aside className="contact-info-list">
            <article className="contact-info-card">
              <div className="contact-info-icon">
                <Mail size={28} strokeWidth={1.5} />
              </div>

              <div>
                <h2>Write to us</h2>
                <p>{CONTACT_EMAIL}</p>
                <span>We reply within 24h</span>
              </div>
            </article>

            <article className="contact-info-card">
              <div className="contact-info-icon">
                <Phone size={28} strokeWidth={1.5} />
              </div>

              <div>
                <h2>Call us</h2>
                <p>+48 123 456 789</p>
                <span>Mon - Fri, 9am - 5pm</span>
              </div>
            </article>

            <article className="contact-info-card">
              <div className="contact-info-icon">
                <MapPin size={28} strokeWidth={1.5} />
              </div>

              <div>
                <h2>Office</h2>
                <p>12 Marszalkowska St, 00-001</p>
                <p>Warsaw, Poland</p>
              </div>
            </article>

            <article className="contact-info-card online-card">
              <div className="contact-info-icon">
                <Globe size={28} strokeWidth={1.5} />
              </div>

              <div>
                <h2>Find us online</h2>

                <div className="contact-socials">
                  <Link to={homeLink} aria-label="Instagram">
                    <FaInstagram size={20} />
                  </Link>

                  <Link to={homeLink} aria-label="Twitter">
                    <FaXTwitter size={20} />
                  </Link>

                  <Link to={homeLink} aria-label="LinkedIn">
                    <FaLinkedin size={20} />
                  </Link>
                </div>
              </div>
            </article>
          </aside>
        </section>
      </main>
    </div>
  );
}

export default ContactPage;