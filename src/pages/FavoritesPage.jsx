import { useEffect, useState } from "react";

import { useAppData } from "../context/AppDataContext";

import EventDetailsModal from "../components/EventDetailsModal";
import FavoriteEventCard from "../components/EventCards/FavoriteEventCard";

import "./FavoritesPage.css";

const VISIBLE_FAVORITE_EVENTS = 3;

function FavoritesPage() {
  const { favoriteEvents, removeFromFavorites } = useAppData();

  const [selectedEvent, setSelectedEvent] = useState(null);
  const [favoritesStartIndex, setFavoritesStartIndex] = useState(0);

  const maxFavoritesIndex = Math.max(
    favoriteEvents.length - VISIBLE_FAVORITE_EVENTS,
    0
  );

  const visibleFavoriteEvents = favoriteEvents.slice(
    favoritesStartIndex,
    favoritesStartIndex + VISIBLE_FAVORITE_EVENTS
  );

  const canGoPrevious = favoritesStartIndex > 0;

  const canGoNext =
    favoritesStartIndex + VISIBLE_FAVORITE_EVENTS < favoriteEvents.length;

  useEffect(() => {
    if (favoritesStartIndex > maxFavoritesIndex) {
      setFavoritesStartIndex(maxFavoritesIndex);
    }
  }, [favoritesStartIndex, maxFavoritesIndex]);

  const handlePreviousFavorites = () => {
    setFavoritesStartIndex((prevIndex) => Math.max(prevIndex - 1, 0));
  };

  const handleNextFavorites = () => {
    setFavoritesStartIndex((prevIndex) =>
      Math.min(prevIndex + 1, maxFavoritesIndex)
    );
  };

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

      <section className="favorites-controls">
        <div>
          <h2>Saved Experiences</h2>
          <p>
            {favoriteEvents.length}{" "}
            {favoriteEvents.length === 1 ? "event saved" : "events saved"}
          </p>
        </div>

        <div className="favorites-arrows">
          <button
            type="button"
            onClick={handlePreviousFavorites}
            disabled={!canGoPrevious}
          >
            ‹
          </button>

          <button
            type="button"
            onClick={handleNextFavorites}
            disabled={!canGoNext}
          >
            ›
          </button>
        </div>
      </section>

      {favoriteEvents.length > 0 ? (
        <section className="favorites-grid">
          {visibleFavoriteEvents.map((event) => (
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