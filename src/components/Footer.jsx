import { Link } from "react-router-dom";
import { Copyright, Mail, FileText } from "lucide-react";
import "./Footer.css";

function Footer() {
  const iconStyle = { marginRight: "6px", verticalAlign: "middle", marginBottom: "2px" };

  return (
    <footer className="app-footer">
      <p style={{ display: "flex", alignItems: "center", gap: "4px" }}>
        <Copyright size={14} /> 2026 MEETFY. SOCIAL SOPHISTICATION.
      </p>

      <div style={{ display: "flex", gap: "16px" }}>
        <Link to="/contact" style={{ display: "flex", alignItems: "center" }}>
          <Mail size={14} style={iconStyle} /> CONTACT
        </Link>
        <Link to="/terms" style={{ display: "flex", alignItems: "center" }}>
          <FileText size={14} style={iconStyle} /> TERMS
        </Link>
      </div>
    </footer>
  );
}

export default Footer;