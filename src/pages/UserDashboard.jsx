import "./UserDashboard.css";

import featuredImage from "../assets/dashboard-featured.png";
import spiritsImage from "../assets/event-spirits.png";
import concertImage from "../assets/event-concert.png";
import chefImage from "../assets/event-chef.png";

function UserDashboard() {
  const events = [
    {
      image: spiritsImage,
      tag: "Mixology",
      title: "Secret Garden Spirits",
      price: "$45",
      meta: "Oct 24   East Village",
      text: "Discover the art of botanical infusions in a hidden rooftop...",
    },
    {
      image: concertImage,
      tag: "Music",
      title: "Underground Pulse",
      price: "Free",
      meta: "Oct 28   Brooklyn",
      text: "A showcase of emerging indie electronic artists in an industrial",
    },
    {
      image: chefImage,
      tag: "Dining",
      title: "The Chef's Table",
      price: "$120",
      meta: "Nov 02   Chelsea",
      text: "An intimate 7-course tasting menu experience focused on...",
    },
  ];

  return (
    <>
      <section className="dashboard-intro">
        <h1>Welcome back, Julian!</h1>
        <p>Your next experience awaits. Discover hand-picked events just for you.</p>
      </section>

      <section className="personalized-section">
        <div className="section-title">
          <h2>Personalized for You</h2>
          <p>Curated recommendations based on your art and music preferences.</p>
        </div>

        <div className="personalized-grid">
          <article className="featured-card">
            <img src={featuredImage} alt="Modern art gallery" />

            <div className="featured-overlay">
              <span>Featured Selection</span>
              <h3>Modernism & The Soul</h3>
              <p>
                Join an exclusive evening tour of the city's newest contemporary
                collection followed by a rooftop social.
              </p>

              <div className="featured-actions">
                <a href="/event">View Details</a>
                <p>◷ Tonight, 7:00 PM</p>
              </div>
            </div>
          </article>

          <div className="side-recommendations">
            <article className="small-recommendation beige">
              <span>WORKSHOP</span>
              <h3>Jazz & Vinyl Night</h3>
              <p>
                A night of classic soul and jazz in a cozy studio setting with
                vintage vibes.
              </p>
              <a href="/event">View Details</a>
            </article>

            <article className="small-recommendation pink">
              <span>CREATIVE</span>
              <h3>Pottery Workshop</h3>
              <p>
                Build your creative soul with manual hands-on pottery and
                wheel-throwing.
              </p>
              <a href="/event">View Details</a>
            </article>
          </div>
        </div>
      </section>

      <section className="discover-section">
        <div className="discover-header">
          <h2>Discover Near You</h2>

          <div>
            <button type="button">‹</button>
            <button type="button">›</button>
          </div>
        </div>

        <div className="event-grid">
          {events.map((event) => (
            <article className="event-card" key={event.title}>
              <div className="event-image">
                <img src={event.image} alt={event.title} />
                <span>{event.tag}</span>
                <button type="button">♡</button>
              </div>

              <div className="event-content">
                <div className="event-title-row">
                  <h3>{event.title}</h3>
                  <strong>{event.price}</strong>
                </div>

                <p className="event-meta">▦ {event.meta}</p>
                <p className="event-description">{event.text}</p>
                <a href="/event">View Details</a>
              </div>
            </article>
          ))}
        </div>
      </section>
    </>
  );
}

export default UserDashboard;