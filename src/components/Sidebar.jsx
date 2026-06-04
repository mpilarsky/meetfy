import { useState } from "react";
import { NavLink, Link, useNavigate } from "react-router-dom";
import { LayoutDashboard, Heart, CalendarCheck, User, Search, Plus } from "lucide-react";
import "./Sidebar.css";

function Sidebar() {
  const navigate = useNavigate();
  const [searchValue, setSearchValue] = useState("");

  const handleSearchSubmit = (event) => {
    event.preventDefault();

    const trimmedValue = searchValue.trim();

    if (!trimmedValue) {
      navigate("/search");
      return;
    }

    navigate(`/search?q=${encodeURIComponent(trimmedValue)}`);
  };
  const navIconStyle = { marginRight: "10px", verticalAlign: "middle", marginBottom: "2px" };
  const btnIconStyle = { marginRight: "6px", verticalAlign: "middle" };

  return (
    <aside className="app-sidebar">
      <div className="sidebar-welcome">
        <span>WELCOME BACK</span>
        <h2>Ready for discovery?</h2>
      </div>

      <nav className="sidebar-nav">
        <NavLink to="/dashboard" style={{ display: "flex", alignItems: "center" }}>
          <LayoutDashboard size={20} style={navIconStyle} /> Dashboard
        </NavLink>
        <NavLink to="/favorites" style={{ display: "flex", alignItems: "center" }}>
          <Heart size={20} style={navIconStyle} /> Favourites
        </NavLink>
        <NavLink to="/events" style={{ display: "flex", alignItems: "center" }}>
          <CalendarCheck size={20} style={navIconStyle} /> My Events
        </NavLink>
        <NavLink to="/account" style={{ display: "flex", alignItems: "center" }}>
          <User size={20} style={navIconStyle} /> My Account
        </NavLink>
      </nav>


      <form className="sidebar-search" onSubmit={handleSearchSubmit}>
        <span>FIND EXPERIENCES</span>

        <input
          type="text"
          value={searchValue}
          onChange={(event) => setSearchValue(event.target.value)}
          placeholder="Search..."
        />

        <button type="submit" style={{ display: "flex", alignItems: "center", justifyContent: "center" }}>
          <Search size={16} style={btnIconStyle} /> Search
        </button>
      </form>
      <Link to="/create-event" className="create-event-btn" style={{ display: "flex", alignItems: "center", justifyContent: "center" }}>
        <Plus size={18} style={btnIconStyle} /> Create Event
      </Link>
     
    </aside>
  );
}

export default Sidebar;