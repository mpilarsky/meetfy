import "./FavoritesPage.css";

import spiritsImage from "../assets/favorite-spirits.png";
import musicImage from "../assets/favorite-music.png";
import chefImage from "../assets/favorite-chef.png";
import modernismImage from "../assets/favorite-modernism.png";

function FavoritesPage() {
  const favoriteEvents = [
    {
      image: spiritsImage,
      tag: "MIXOLOGY",
      title: "Secret Garden Spirits",
      price: "$45",
      meta: "▧ OCT 24    ♙ EAST VILLAGE",
      text: "Discover the art of botanical infusions in a hidden rooftop...",
    },
    {
      image: musicImage,
      tag: "MUSIC",
      title: "Underground Pulse",
      price: "FREE",
      meta: "▧ OCT 28    ♙ BROOKLYN",
      text: "A showcase of emerging indie electronic artists in an...",
    },
    {
      image: chefImage,
      tag: "DINING",
      title: "The Chef's Table",
      price: "$120",
      meta: "▧ NOV 02    ♙ CHELSEA",
      text: "An intimate 7-course tasting menu experience focused on",
    },
    {
      image: modernismImage,
      tag: "ART",
      title: "Modernism & The Soul",
      price: "$25",
      meta: "▧ TONIGHT    ♙ DOWNTOWN",
      text: "Join an exclusive evening tour of the city's newest...",
    },
  ];

  return (
    <div className="favorites-page">
      <header className="favorites-header">
        <a href="/" className="favorites-logo">MEETFY</a>
        <a href="/login" className="favorites-logout">Logout</a>
      </header>

      <div className="favorites-body">
        <aside className="favorites-sidebar">
          <div className="favorites-sidebar-welcome">
            <span>WELCOME BACK</span>
            <h2>Ready for discovery?</h2>
          </div>

          <nav className="favorites-sidebar-nav">
            <a href="/dashboard">⌘ Dashboard</a>
            <a href="/favorites">♡ Favourites</a>
            <a href="/events">⇲ My Events</a>
            <a href="/account">♟ My Account</a>
          </nav>

          <div className="favorites-sidebar-search">
            <span>FIND EXPERIENCES</span>
            <input type="text" placeholder="⌕  Search..." />
            <button type="button">⌕ Search</button>
          </div>

          <a href="/create-event" className="favorites-create-event">
            ＋ Create Event
          </a>
        </aside>

        <main className="favorites-main">
          <section className="favorites-title">
            <h1>Your Favorite Events</h1>
            <p>Revisit the experiences that caught your eye.</p>
          </section>

          <section className="favorites-grid">
            {favoriteEvents.map((event) => (
              <article className="favorite-card" key={event.title}>
                <div className="favorite-image">
                  <img src={event.image} alt={event.title} />
                  <span>{event.tag}</span>
                  <button type="button" aria-label="Remove from favorites">
                    ♥
                  </button>
                </div>

                <div className="favorite-content">
                  <div className="favorite-title-row">
                    <h2>{event.title}</h2>
                    <strong>{event.price}</strong>
                  </div>

                  <p className="favorite-meta">{event.meta}</p>
                  <p className="favorite-description">{event.text}</p>

                  <a href="/event">View Details</a>
                </div>
              </article>
            ))}
          </section>
        </main>
      </div>

      <footer className="favorites-footer">
        <p>© 2026 MEETFY. SOCIAL SOPHISTICATION.</p>
        <div>
          <a href="/contact">CONTACT</a>
          <a href="/terms">TERMS</a>
        </div>
      </footer>
    </div>
  );
}

export default FavoritesPage;