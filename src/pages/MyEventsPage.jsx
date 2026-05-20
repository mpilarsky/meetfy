import { useEffect, useState } from "react";

import { useAppData } from "../context/AppDataContext";

import EventDetailsModal from "../components/EventDetailsModal";
import MyEventCard from "../components/EventCards/MyEventCard";
import PastEventCard from "../components/EventCards/PastEventCard";

import "./MyEventsPage.css";

import abstractImage from "../assets/my-event-abstract.png";
import hearthImage from "../assets/my-event-hearth.png";

const VISIBLE_UPCOMING_EVENTS = 3;

function MyEventsPage() {
  const { myEvents, removeFromMyEvents } = useAppData();

  const [selectedEvent, setSelectedEvent] = useState(null);
  const [upcomingStartIndex, setUpcomingStartIndex] = useState(0);

  const pastEvents = [
    {
      id: "past-1",
      image: abstractImage,
      title: "Abstract Realities",
      price: "Archive",
      date: "Sept 12",
      location: "MoMa East",
      meta: "Sept 12 • MoMa East",
      text: "A past experience from your Meetfy history.",
    },
    {
      id: "past-2",
      image: hearthImage,
      title: "The Hearth Dinner",
      price: "Archive",
      date: "Aug 28",
      location: "Brooklyn Farms",
      meta: "Aug 28 • Brooklyn Farms",
      text: "A past experience from your Meetfy history.",
    },
  ];

  const maxUpcomingIndex = Math.max(
    myEvents.length - VISIBLE_UPCOMING_EVENTS,
    0
  );

  const visibleMyEvents = myEvents.slice(
    upcomingStartIndex,
    upcomingStartIndex + VISIBLE_UPCOMING_EVENTS
  );

  const canGoPrevious = upcomingStartIndex > 0;
  const canGoNext =
    upcomingStartIndex + VISIBLE_UPCOMING_EVENTS < myEvents.length;

  useEffect(() => {
    if (upcomingStartIndex > maxUpcomingIndex) {
      setUpcomingStartIndex(maxUpcomingIndex);
    }
  }, [upcomingStartIndex, maxUpcomingIndex]);

  const handlePreviousUpcoming = () => {
    setUpcomingStartIndex((prevIndex) => Math.max(prevIndex - 1, 0));
  };

  const handleNextUpcoming = () => {
    setUpcomingStartIndex((prevIndex) =>
      Math.min(prevIndex + 1, maxUpcomingIndex)
    );
  };

  const getEventDate = (event) => {
    if (event.date && event.time) {
      return `${event.date} • ${event.time}`;
    }

    return event.date || event.meta || "";
  };

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
            <p>
              {myEvents.length}{" "}
              {myEvents.length === 1 ? "event confirmed" : "events confirmed"}
            </p>
          </div>

          <div className="events-arrows">
            <button
              type="button"
              onClick={handlePreviousUpcoming}
              disabled={!canGoPrevious}
            >
              ‹
            </button>

            <button
              type="button"
              onClick={handleNextUpcoming}
              disabled={!canGoNext}
            >
              ›
            </button>
          </div>
        </div>

        {myEvents.length > 0 ? (
          <div className="upcoming-grid">
            {visibleMyEvents.map((event) => (
              <MyEventCard
                key={event.id || event.title}
                image={event.image}
                title={event.title}
                price={event.price}
                date={getEventDate(event)}
                location={event.location}
                description={event.description || event.text}
                status="CONFIRMED"
                onViewDetails={() =>
                  setSelectedEvent({
                    ...event,
                    description: event.description || event.text,
                  })
                }
                onToggleFavorite={() => removeFromMyEvents(event.id)}
              />
            ))}
          </div>
        ) : (
          <section className="my-events-empty">
            <h3>No upcoming events yet</h3>
            <p>
              Join an event from Search or Dashboard and it will appear here.
            </p>
          </section>
        )}
      </section>

      <section className="past-section">
        <div className="past-heading">
          <h2>Past Events</h2>
          <p>Review your previous experiences</p>
        </div>

        <div className="past-grid">
          {pastEvents.map((event) => (
            <PastEventCard
              key={event.id}
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