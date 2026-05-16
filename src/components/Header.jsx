import { Link } from "react-router-dom";

import "./Header.css";

function Header() {
  return (
    <header className="app-header">
      <Link to="/dashboard" className="app-header-logo">
        MEETFY
      </Link>

      <Link to="/login" className="app-header-logout">
        Logout
      </Link>
    </header>
  );
}

export default Header;