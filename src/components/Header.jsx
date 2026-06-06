import { Link, useNavigate } from "react-router-dom";
import { Menu, X } from "lucide-react";
import { useAppData } from "../context/AppDataContext";

import "./Header.css";

function Header({ onToggleMenu, isOpen }) {
  const navigate = useNavigate();
  const { logoutUser } = useAppData();

  const handleLogout = async () => {
    const result = await logoutUser();

    if (!result.success) {
      console.log(result.message);
      return;
    }

    navigate("/login");
  };

  return (
    <header className="app-header">
      <div className="app-header-left">
        <button className="header-hamburger" onClick={onToggleMenu}>
          {isOpen ? <X size={28} /> : <Menu size={28} />}
        </button>

        <Link to="/dashboard" className="app-header-logo">
          MEETFY
        </Link>
      </div>

      <button
        type="button"
        className="app-header-logout"
        onClick={handleLogout}
      >
        Logout
      </button>
    </header>
  );
}

export default Header;