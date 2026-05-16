import { useState } from "react";

import EventDetailsModal from "../components/EventDetailsModal";
import DashboardEventCard from "../components/EventCards/DashboardEventCard";

import "./UserDashboard.css";

import featuredImage from "../assets/dashboard-featured.png";
import spiritsImage from "../assets/event-spirits.png";
import concertImage from "../assets/event-concert.png";
import chefImage from "../assets/event-chef.png";

function UserDashboard() {
  const [selectedEvent, setSelectedEvent] = useState(null);

  const featuredEvent = {
    image: featuredImage,
    title: "Modernism & The Soul",
    price: "$25",
    date: "Tonight, 7:00 PM",
    location: "Downtown Gallery",
    text: "Join an exclusive evening tour of the city's newest contemporary collection followed by a rooftop social.",
  };

  const smallEvents = [
    {
      title: "Jazz & Vinyl Night",
      price: "$35",
      date: "Friday, 8:00 PM",
      location: "Cozy Studio",
      text: "A night of classic soul and jazz in a cozy studio setting with vintage vibes.",
    },
    {
      title: "Pottery Workshop",
      price: "$50",
      date: "Saturday, 2:00 PM",
      location: "Creative Atelier",
      text: "Build your creative soul with manual hands-on pottery and wheel-throwing.",
    },
  ];

  const events = [
    {
      image: spiritsImage,
      tag: "Mixology",
      title: "Secret Garden Spirits",
      price: "$45",
      date: "Oct 24",
      location: "East Village",
      meta: "Oct 24   East Village",
      text: "Discover the art of botanical infusions in a hidden rooftop...",
    },
    {
      image: concertImage,
      tag: "Music",
      title: "Underground Pulse",
      price: "Free",
      date: "Oct 28",
      location: "Brooklyn",
      meta: "Oct 28   Brooklyn",
      text: "A showcase of emerging indie electronic artists in an industrial",
    },
    {
      image: chefImage,
      tag: "Dining",
      title: "The Chef's Table",
      price: "$120",
      date: "Nov 02",
      location: "Chelsea",
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
              <h3>{featuredEvent.title}</h3>
              <p>{featuredEvent.text}</p>

              <div className="featured-actions">
                <button
                  type="button"
                  onClick={() =>
                    setSelectedEvent({
                      ...featuredEvent,
                      description: featuredEvent.text,
                    })
                  }
                >
                  View Details
                </button>

                <p>◷ Tonight, 7:00 PM</p>
              </div>
            </div>
          </article>

          <div className="side-recommendations">
            <article className="small-recommendation beige">
              <span>WORKSHOP</span>
              <h3>{smallEvents[0].title}</h3>
              <p>{smallEvents[0].text}</p>

              <button
                type="button"
                onClick={() =>
                  setSelectedEvent({
                    ...smallEvents[0],
                    description: smallEvents[0].text,
                  })
                }
              >
                View Details
              </button>
            </article>

            <article className="small-recommendation pink">
              <span>CREATIVE</span>
              <h3>{smallEvents[1].title}</h3>
              <p>{smallEvents[1].text}</p>

              <button
                type="button"
                onClick={() =>
                  setSelectedEvent({
                    ...smallEvents[1],
                    description: smallEvents[1].text,
                  })
                }
              >
                View Details
              </button>
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
            <DashboardEventCard
              key={event.title}
              image={event.image}
              tag={event.tag}
              title={event.title}
              price={event.price}
              meta={event.meta}
              description={event.text}
              onViewDetails={() =>
                setSelectedEvent({
                  ...event,
                  description: event.text,
                })
              }
              onToggleFavorite={() => console.log("Toggle favorite:", event)}
            />
          ))}
        </div>
      </section>

      {selectedEvent && (
        <EventDetailsModal
          event={selectedEvent}
          onClose={() => setSelectedEvent(null)}
        />
      )}
    </>
  );
}

export default UserDashboard;