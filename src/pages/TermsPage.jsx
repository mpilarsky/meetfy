import { Link } from "react-router-dom";
import "./TermsPage.css";

function TermsPage() {
  return (
    <div className="terms-page">
      <section className="terms-card">
        <Link to="/" className="terms-back-link">
          ← Back to home
        </Link>

        <p className="section-label">MEETFY TERMS</p>

        <h1>Terms and Conditions</h1>

        <p>
          Welcome to Meetfy. By using our platform, you agree to follow these
          simple terms and use the service in a respectful and responsible way.
        </p>

        <p>
          Meetfy helps users discover curated social events and meaningful
          experiences. The information displayed on the platform should be used
          for personal event discovery only.
        </p>

        <p>
          Users are responsible for the accuracy of the information they provide
          while creating an account, joining events, or contacting the Meetfy
          team.
        </p>

        <p>
          We care about privacy and user safety. Personal information should not
          be shared with other users without consent.
        </p>

        <p>
          Meetfy may update these terms in the future to improve clarity,
          security, or platform functionality.
        </p>
      </section>
    </div>
  );
}

export default TermsPage;