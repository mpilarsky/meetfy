import { useState, useMemo } from "react";
import { NavLink, Link, useNavigate } from "react-router-dom";
import { LayoutDashboard, Heart, CalendarCheck, User, Search, Plus } from "lucide-react";
import { useAppData } from "../context/AppDataContext"; 
import "./Sidebar.css";

function Sidebar({ isOpen, onClose }) {
  const navigate = useNavigate();
  const { events } = useAppData(); 
  const [searchValue, setSearchValue] = useState("");
  const [isSuggestionsOpen, setIsSuggestionsOpen] = useState(false);

  const suggestions = useMemo(() => {
    if (!searchValue.trim()) return [];
    return events
      .filter((e) => e.title.toLowerCase().includes(searchValue.toLowerCase()))
      .slice(0, 5); 
  }, [searchValue, events]);

  const handleSearchSubmit = (event) => {
    event.preventDefault();
    const trimmedValue = searchValue.trim();
    if (!trimmedValue) return; 
    setIsSuggestionsOpen(false);
    navigate(`/search?q=${encodeURIComponent(trimmedValue)}`);

    if (onClose) onClose();
  };
  
  const navIconStyle = { marginRight: "10px", verticalAlign: "middle", marginBottom: "2px" };
  const btnIconStyle = { marginRight: "6px", verticalAlign: "middle" };

  return (
    <aside className={`app-sidebar ${isOpen ? "open" : ""}`}>
      <div className="sidebar-welcome">
        <span>WELCOME BACK</span>
        <h2>Ready for discovery?</h2>
      </div>

      <nav className="sidebar-nav">
        <NavLink to="/dashboard" onClick={onClose} style={{ display: "flex", alignItems: "center" }}>
          <LayoutDashboard size={20} style={navIconStyle} /> Dashboard
        </NavLink>
        <NavLink to="/favorites" onClick={onClose} style={{ display: "flex", alignItems: "center" }}>
          <Heart size={20} style={navIconStyle} /> Favourites
        </NavLink>
        <NavLink to="/events" onClick={onClose} style={{ display: "flex", alignItems: "center" }}>
          <CalendarCheck size={20} style={navIconStyle} /> My Events
        </NavLink>
        <NavLink to="/account" onClick={onClose} style={{ display: "flex", alignItems: "center" }}>
          <User size={20} style={navIconStyle} /> My Account
        </NavLink>
      </nav>

      <form className="sidebar-search" onSubmit={handleSearchSubmit}>
        <span>FIND EXPERIENCES</span>

        <div style={{ position: "relative" }}>
          <input
            type="text"
            value={searchValue}
            onChange={(e) => {
              setSearchValue(e.target.value);
              setIsSuggestionsOpen(true);
            }}
            placeholder="Search..."
          />
          
          {isSuggestionsOpen && suggestions.length > 0 && (
            <ul className="sidebar-suggestions">
              {suggestions.map((event) => (
                <li key={event.id} onClick={() => {
                  setSearchValue(event.title);
                  navigate(`/search?q=${encodeURIComponent(event.title)}`);
                  setIsSuggestionsOpen(false);
                  if (onClose) onClose();
                }}>
                  {event.title}
                </li>
              ))}
            </ul>
          )}
        </div>

        <button type="submit" style={{ display: "flex", alignItems: "center", justifyContent: "center" }}>
          <Search size={16} style={btnIconStyle} /> Search
        </button>
      </form>
      
      <Link to="/create-event" onClick={onClose} className="create-event-btn" style={{ display: "flex", alignItems: "center", justifyContent: "center" }}>
        <Plus size={18} style={btnIconStyle} /> Create Event
      </Link>
    </aside>
  );
}

export default Sidebar;