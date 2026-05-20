import { useState } from "react";

import { useAppData } from "../context/AppDataContext";

import EventDetailsModal from "../components/EventDetailsModal";
import FavoriteEventCard from "../components/EventCards/FavoriteEventCard";

import "./FavoritesPage.css";

function FavoritesPage() {
  const { favoriteEvents, removeFromFavorites } = useAppData();
  const [selectedEvent, setSelectedEvent] = useState(null);

  const getEventMeta = (event) => {
    if (event.meta) {
      return event.meta;
    }

    const date = event.date || "";
    const location = event.location || "";

    return `▧ ${date}    ♙ ${location}`;
  };

  return (
    <>
      <section className="favorites-title">
        <h1>Your Favorite Events</h1>
        <p>Revisit the experiences that caught your eye.</p>
      </section>

      {favoriteEvents.length > 0 ? (
        <section className="favorites-grid">
          {favoriteEvents.map((event) => (
            <FavoriteEventCard
              key={event.id || event.title}
              image={event.image}
              tag={event.tag || event.category || "EVENT"}
              title={event.title}
              price={event.price}
              meta={getEventMeta(event)}
              description={event.description || event.text}
              onViewDetails={() =>
                setSelectedEvent({
                  ...event,
                  description: event.description || event.text,
                })
              }
              onRemoveFavorite={() => removeFromFavorites(event.id)}
            />
          ))}
        </section>
      ) : (
        <section className="favorites-empty">
          <h2>No favorite events yet</h2>
          <p>
            Open event details and click "Add to Favorites" to save an event
            here.
          </p>
        </section>
      )}

      {selectedEvent && (
        <EventDetailsModal
          event={selectedEvent}
          onClose={() => setSelectedEvent(null)}
        />
      )}
    </>
  );
}

export default FavoritesPage;