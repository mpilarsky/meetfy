import { useMemo, useState } from "react";
import { Clock, ChevronLeft, ChevronRight } from "lucide-react";
import { useAppData } from "../context/AppDataContext";

import EventDetailsModal from "../components/EventDetailsModal";
import DashboardEventCard from "../components/EventCards/DashboardEventCard";

import "./UserDashboard.css";

import featuredImage from "../assets/dashboard-featured.png";

const VISIBLE_DISCOVER_EVENTS = 3;

function UserDashboard() {
  const { events, currentUserProfile, addToFavorites } = useAppData();

  const [selectedEvent, setSelectedEvent] = useState(null);
  const [discoverStartIndex, setDiscoverStartIndex] = useState(0);

  const userName = currentUserProfile?.name || "Julian";

  const featuredEvent =
    events.find((event) => event.title === "Modernism & The Soul") ||
    events[0] || {
      image: featuredImage,
      title: "Modernism & The Soul",
      price: "$25",
      date: "Tonight, 7:00 PM",
      location: "Downtown Gallery",
      text: "Join an exclusive evening tour of the city's newest contemporary collection followed by a rooftop social.",
      description:
        "Join an exclusive evening tour of the city's newest contemporary collection followed by a rooftop social.",
    };

  const smallEvents = useMemo(() => {
    const filteredEvents = events.filter(
      (event) => event.id !== featuredEvent.id
    );

    return filteredEvents.slice(0, 2);
  }, [events, featuredEvent]);

  const discoverEvents = useMemo(() => {
    return events.filter((event) => event.id !== featuredEvent.id);
  }, [events, featuredEvent]);

  const visibleDiscoverEvents = useMemo(() => {
    return discoverEvents.slice(
      discoverStartIndex,
      discoverStartIndex + VISIBLE_DISCOVER_EVENTS
    );
  }, [discoverEvents, discoverStartIndex]);

  const canGoPrevious = discoverStartIndex > 0;

  const canGoNext =
    discoverStartIndex + VISIBLE_DISCOVER_EVENTS < discoverEvents.length;

  const handlePreviousDiscover = () => {
    setDiscoverStartIndex((prevIndex) => Math.max(prevIndex - 1, 0));
  };

  const handleNextDiscover = () => {
    setDiscoverStartIndex((prevIndex) => {
      const maxIndex = Math.max(
        discoverEvents.length - VISIBLE_DISCOVER_EVENTS,
        0
      );

      return Math.min(prevIndex + 1, maxIndex);
    });
  };

  const preferencesText = useMemo(() => {
    const interests = currentUserProfile?.preferences?.interests;

    if (!interests?.length) {
      return "Curated recommendations based on your preferences.";
    }

    return `Curated recommendations based on your ${interests
      .slice(0, 3)
      .join(", ")} preferences.`;
  }, [currentUserProfile]);

  const getEventDescription = (event) => {
    return event.description || event.text || "";
  };

  const getEventMeta = (event) => {
    if (event.meta) {
      return event.meta;
    }

    const date = event.date || "";
    const location = event.location || "";

    return `${date}   ${location}`;
  };

  const openEventDetails = (event) => {
    setSelectedEvent({
      ...event,
      description: getEventDescription(event),
    });
  };

  return (
    <>
      <section className="dashboard-intro">
        <h1>Welcome back, {userName}!</h1>
        <p>
          Your next experience awaits. Discover hand-picked events just for you.
        </p>
      </section>

      <section className="personalized-section">
        <div className="section-title">
          <h2>Personalized for You</h2>
          <p>{preferencesText}</p>
        </div>

        <div className="personalized-grid">
          <article className="featured-card">
            <img
              src={featuredEvent.image || featuredImage}
              alt={featuredEvent.title}
            />

            <div className="featured-overlay">
              <h3>{featuredEvent.title}</h3>
              <p>{getEventDescription(featuredEvent)}</p>

              <div className="featured-actions">
                <button
                  type="button"
                  onClick={() => openEventDetails(featuredEvent)}
                >
                  View Details
                </button>

                <p>
                  <Clock size={16} strokeWidth={2} /> {featuredEvent.date}
                  {featuredEvent.time ? `, ${featuredEvent.time}` : ""}
                </p>
              </div>
            </div>
          </article>

          <div className="side-recommendations">
            {smallEvents.map((event, index) => (
              <article
                className={`small-recommendation ${
                  index % 2 === 0 ? "beige" : "pink"
                }`}
                key={event.id || event.title}
              >
                <span>{event.tag || event.category || "EVENT"}</span>
                <h3>{event.title}</h3>
                <p>{getEventDescription(event)}</p>

                <button type="button" onClick={() => openEventDetails(event)}>
                  View Details
                </button>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="discover-section">
        <div className="discover-header">
          <h2>Discover Near You</h2>

          <div>
            <button
              type="button"
              onClick={handlePreviousDiscover}
              disabled={!canGoPrevious}
            >
              <ChevronLeft size={20} />
            </button>

            <button
              type="button"
              onClick={handleNextDiscover}
              disabled={!canGoNext}
            >
              <ChevronRight size={20} />
            </button>
          </div>
        </div>

        <div className="event-grid">
          {visibleDiscoverEvents.map((event) => (
            <DashboardEventCard
              key={event.id || event.title}
              image={event.image}
              tag={event.tag || event.category || "EVENT"}
              title={event.title}
              price={event.price}
              meta={getEventMeta(event)}
              description={getEventDescription(event)}
              onViewDetails={() => openEventDetails(event)}
              onToggleFavorite={() => addToFavorites(event)}
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