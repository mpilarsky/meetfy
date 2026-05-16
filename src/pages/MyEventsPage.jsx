import "./MyEventsPage.css";

import neonImage from "../assets/my-event-neon.png";
import gourmetImage from "../assets/my-event-gourmet.png";
import mixerImage from "../assets/my-event-mixer.png";
import abstractImage from "../assets/my-event-abstract.png";
import hearthImage from "../assets/my-event-hearth.png";

function MyEventsPage() {
  const upcomingEvents = [
    {
      image: neonImage,
      title: "Neon Rhythm Live",
      price: "$65",
      date: "Oct 24 • 8:30 PM",
      location: "Qelvet Underground, Soho",
      text: "An exclusive performance by Echo Theory, blending synth-pop with organic orchestral arrangements.",
    },
    {
      image: gourmetImage,
      title: "Gourmet Mastery",
      price: "$120",
      date: "Oct 30 • 6:00 PM",
      location: "Culinary Atelier, Chelsea",
      text: "Master the art of French-Asian fusion under the guidance of Michelin-starred chef David Roux.",
    },
    {
      image: mixerImage,
      title: "Founders Mixer",
      price: "Free",
      date: "Nov 05 • 7:00 PM",
      location: "The Cloud Lounge, Midtown",
      text: "Connect with the city's brightest entrepreneurs over curated cocktails and panoramic views.",
    },
  ];

  const pastEvents = [
    {
      image: abstractImage,
      title: "Abstract Realities",
      meta: "Sept 12 • MoMa East",
    },
    {
      image: hearthImage,
      title: "The Hearth Dinner",
      meta: "Aug 28 • Brooklyn Farms",
    },
  ];

  return (
    <>
      <section className="my-events-title">
        <h1>My Events</h1>
        <p>Manage your upcoming journeys and revisit cherished memories.</p>
      </section>

      <section className="upcoming-section">
        <div className="events-section-header">
          <div>
            <h2>Upcoming Events</h2>
            <p>3 events confirmed</p>
          </div>

          <div className="events-arrows">
            <button type="button">‹</button>
            <button type="button">›</button>
          </div>
        </div>

        <div className="upcoming-grid">
          {upcomingEvents.map((event) => (
            <article className="upcoming-card" key={event.title}>
              <div className="upcoming-image">
                <img src={event.image} alt={event.title} />
                <span>CONFIRMED</span>
                <button type="button" aria-label="Favorite event">
                  ♥
                </button>
              </div>

              <div className="upcoming-content">
                <div className="upcoming-title-row">
                  <h3>{event.title}</h3>
                  <strong>{event.price}</strong>
                </div>

                <p className="event-date">▦ {event.date}</p>
                <p className="event-location">♙ {event.location}</p>
                <p className="upcoming-description">{event.text}</p>

                <a href="/event">View Details</a>
              </div>
            </article>
          ))}
        </div>
      </section>

      <section className="past-section">
        <div className="past-heading">
          <h2>Past Events</h2>
          <p>Review your previous experiences</p>
        </div>

        <div className="past-grid">
          {pastEvents.map((event) => (
            <article className="past-card" key={event.title}>
              <img src={event.image} alt={event.title} />

              <div className="past-content">
                <h3>{event.title}</h3>
                <p>{event.meta}</p>
                <a href="/event">View Details</a>
              </div>
            </article>
          ))}
        </div>
      </section>
    </>
  );
}

export default MyEventsPage;