import { useState } from "react";

import EventDetailsModal from "../components/EventDetailsModal";
import MyEventCard from "../components/EventCards/MyEventCard";
import PastEventCard from "../components/EventCards/PastEventCard";

import "./MyEventsPage.css";

import neonImage from "../assets/my-event-neon.png";
import gourmetImage from "../assets/my-event-gourmet.png";
import mixerImage from "../assets/my-event-mixer.png";
import abstractImage from "../assets/my-event-abstract.png";
import hearthImage from "../assets/my-event-hearth.png";

function MyEventsPage() {
  const [selectedEvent, setSelectedEvent] = useState(null);

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
      price: "Archive",
      date: "Sept 12",
      location: "MoMa East",
      meta: "Sept 12 • MoMa East",
      text: "A past experience from your Meetfy history.",
    },
    {
      image: hearthImage,
      title: "The Hearth Dinner",
      price: "Archive",
      date: "Aug 28",
      location: "Brooklyn Farms",
      meta: "Aug 28 • Brooklyn Farms",
      text: "A past experience from your Meetfy history.",
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
            <MyEventCard
              key={event.title}
              image={event.image}
              title={event.title}
              price={event.price}
              date={event.date}
              location={event.location}
              description={event.text}
              status="CONFIRMED"
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

      <section className="past-section">
        <div className="past-heading">
          <h2>Past Events</h2>
          <p>Review your previous experiences</p>
        </div>

        <div className="past-grid">
          {pastEvents.map((event) => (
            <PastEventCard
              key={event.title}
              image={event.image}
              title={event.title}
              meta={event.meta}
              onViewDetails={() =>
                setSelectedEvent({
                  ...event,
                  description: event.text,
                })
              }
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

export default MyEventsPage;