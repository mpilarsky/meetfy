import { Link, useNavigate } from "react-router-dom";

import { useAppData } from "../context/AppDataContext";

import "./Header.css";

function Header() {
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
      <Link to="/dashboard" className="app-header-logo">
        MEETFY
      </Link>

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