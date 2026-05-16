import { useState } from "react";
import { NavLink, Link, useNavigate } from "react-router-dom";

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

  return (
    <aside className="app-sidebar">
      <div className="sidebar-welcome">
        <span>WELCOME BACK</span>
        <h2>Ready for discovery?</h2>
      </div>

      <nav className="sidebar-nav">
        <NavLink to="/dashboard">⌘ Dashboard</NavLink>
        <NavLink to="/favorites">♡ Favourites</NavLink>
        <NavLink to="/events">⇲ My Events</NavLink>
        <NavLink to="/account">♟ My Account</NavLink>
      </nav>

      <form className="sidebar-search" onSubmit={handleSearchSubmit}>
        <span>FIND EXPERIENCES</span>

        <input
          type="text"
          value={searchValue}
          onChange={(event) => setSearchValue(event.target.value)}
          placeholder="⌕ Search..."
        />

        <button type="submit">⌕ Search</button>
      </form>

      <Link to="/create-event" className="create-event-btn">
        ＋ Create Event
      </Link>
    </aside>
  );
}

export default Sidebar;