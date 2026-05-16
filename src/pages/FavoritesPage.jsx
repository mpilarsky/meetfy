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
    <>
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

              <button type="button">View Details</button>
            </div>
          </article>
        ))}
      </section>
    </>
  );
}

export default FavoritesPage;