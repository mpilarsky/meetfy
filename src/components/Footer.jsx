import { Link } from "react-router-dom";

import "./Footer.css";

function Footer() {
  return (
    <footer className="app-footer">
      <p>© 2026 MEETFY. SOCIAL SOPHISTICATION.</p>

      <div>
        <Link to="/contact">CONTACT</Link>
        <Link to="/terms">TERMS</Link>
      </div>
    </footer>
  );
}

export default Footer;