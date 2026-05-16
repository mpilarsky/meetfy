import "./SearchPage.css";

import jazzImage from "../assets/search-jazz.png";
import loftImage from "../assets/search-loft.png";
import rooftopImage from "../assets/search-rooftop.png";

function SearchPage() {
  const results = [
    {
      image: jazzImage,
      tag: "Music",
      title: "Jazz Sessions",
      price: "$45",
      date: "Fri, Oct 24 • 9:00 PM",
      location: "The Blue Velvet, Manhattan",
      text: "Experience an intimate evening of classic Bebop and avant-garde jazz with the Elias",
    },
    {
      image: loftImage,
      tag: "Social",
      title: "Loft Jazz & Wine",
      price: "$60",
      date: "Sat, Oct 25 • 7:30 PM",
      location: "Skyline Lofts, Brooklyn",
      text: "A curated evening pairing organic wines with acoustic jazz sets. Perfect for those...",
    },
    {
      image: rooftopImage,
      tag: "Rooftop",
      title: "Sunset Jazz Terrace",
      price: "$35",
      date: "Sun, Oct 26 • 5:00 PM",
      location: "Alta Rooftop, Soho",
      text: "Witness the New York sunset while local legends play smooth soul-jazz standards....",
    },
  ];

  return (
    <>
      <section className="search-title">
        <h1>Search Results</h1>
        <p>
          Showing results for <strong>"jazz"</strong> in New York
        </p>
      </section>

      <section className="search-filters">
        <div className="filter-buttons">
          <button type="button">Category: Music⌄</button>
          <button type="button">Price: Any Range⌄</button>
          <button type="button">Date: This Weekend⌄</button>
          <button type="button">Location: Manhattan⌄</button>
        </div>

        <div className="active-filter">
          <span>Active: Live Music</span>
          <button type="button">Reset All</button>
        </div>
      </section>

      <section className="search-results-grid">
        {results.map((event) => (
          <article className="search-result-card" key={event.title}>
            <div className="search-result-image">
              <img src={event.image} alt={event.title} />
              <span>{event.tag}</span>

              <button type="button" aria-label="Add to favourites">
                ♡
              </button>
            </div>

            <div className="search-result-content">
              <div className="search-result-title-row">
                <h2>{event.title}</h2>
                <strong>{event.price}</strong>
              </div>

              <p className="search-result-meta">▧ {event.date}</p>
              <p className="search-result-meta">♙ {event.location}</p>
              <p className="search-result-description">{event.text}</p>

              <button type="button">View Details</button>
            </div>
          </article>
        ))}
      </section>

      <section className="no-events-box">
        <div className="no-events-icon">⌕</div>
        <h2>No events found</h2>
        <p>
          We couldn't find any jazz events matching your specific filters for
          Manhattan this weekend. Try broadening your search or resetting your
          preferences.
        </p>
        <button type="button">Clear filters</button>
      </section>
    </>
  );
}

export default SearchPage;