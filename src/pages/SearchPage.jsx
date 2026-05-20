import { useMemo, useState } from "react";
import { useSearchParams } from "react-router-dom";

import { useAppData } from "../context/AppDataContext";

import EventDetailsModal from "../components/EventDetailsModal";
import SearchEventCard from "../components/EventCards/SearchEventCard";

import "./SearchPage.css";

function SearchPage() {
  const { events, addToFavorites } = useAppData();

  const [selectedEvent, setSelectedEvent] = useState(null);
  const [searchParams, setSearchParams] = useSearchParams();

  const query = searchParams.get("q") || "";

  const filteredEvents = useMemo(() => {
    const normalizedQuery = query.trim().toLowerCase();

    if (!normalizedQuery) {
      return events;
    }

    return events.filter((event) => {
      const searchableText = [
        event.title,
        event.category,
        event.tag,
        event.location,
        event.description,
        event.text,
        event.organizer,
      ]
        .filter(Boolean)
        .join(" ")
        .toLowerCase();

      return searchableText.includes(normalizedQuery);
    });
  }, [events, query]);

  const handleResetSearch = () => {
    setSearchParams({});
  };

  return (
    <>
      <section className="search-title">
        <h1>Search Results</h1>

        <p>
          {query ? (
            <>
              Showing results for <strong>"{query}"</strong>
            </>
          ) : (
            <>Showing all available experiences</>
          )}
        </p>
      </section>

      <section className="search-filters">
        <div className="filter-buttons">
          <button type="button">Category: Any⌄</button>
          <button type="button">Price: Any Range⌄</button>
          <button type="button">Date: Any Date⌄</button>
          <button type="button">Location: Anywhere⌄</button>
        </div>

        <div className="active-filter">
          <span>Active: {query || "All Events"}</span>

          <button type="button" onClick={handleResetSearch}>
            Reset All
          </button>
        </div>
      </section>

      {filteredEvents.length > 0 ? (
        <section className="search-results-grid">
          {filteredEvents.map((event) => (
            <SearchEventCard
              key={event.id || event.title}
              image={event.image}
              tag={event.tag || event.category || "EVENT"}
              title={event.title}
              price={event.price}
              date={event.date}
              location={event.location}
              description={event.description || event.text}
              onViewDetails={() =>
                setSelectedEvent({
                  ...event,
                  description: event.description || event.text,
                })
              }
              onToggleFavorite={() => addToFavorites(event)}
            />
          ))}
        </section>
      ) : (
        <section className="no-events-box">
          <div className="no-events-icon">⌕</div>

          <h2>No events found</h2>

          <p>
            We couldn't find any events matching your search
            {query ? ` for "${query}"` : ""}. Try broadening your search or
            resetting your preferences.
          </p>

          <button type="button" onClick={handleResetSearch}>
            Clear filters
          </button>
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

export default SearchPage;