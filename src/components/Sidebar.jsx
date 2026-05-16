import { NavLink, Link } from "react-router-dom";

import "./Sidebar.css";

function Sidebar() {
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

      <div className="sidebar-search">
        <span>FIND EXPERIENCES</span>
        <input type="text" placeholder="⌕ Search..." />
        <button type="button">⌕ Search</button>
      </div>

      <Link to="/create-event" className="create-event-btn">
        ＋ Create Event
      </Link>
    </aside>
  );
}

export default Sidebar;