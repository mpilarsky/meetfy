import { useState } from "react";
import { useSearchParams } from "react-router-dom";

import EventDetailsModal from "../components/EventDetailsModal";
import SearchEventCard from "../components/EventCards/SearchEventCard";

import "./SearchPage.css";

import jazzImage from "../assets/search-jazz.png";
import loftImage from "../assets/search-loft.png";
import rooftopImage from "../assets/search-rooftop.png";

function SearchPage() {
  const [selectedEvent, setSelectedEvent] = useState(null);
  const [searchParams] = useSearchParams();

  const query = searchParams.get("q") || "jazz";

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
          Showing results for <strong>"{query}"</strong> in New York
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
          <SearchEventCard
            key={event.title}
            image={event.image}
            tag={event.tag}
            title={event.title}
            price={event.price}
            date={event.date}
            location={event.location}
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
      </section>

      <section className="no-events-box">
        <div className="no-events-icon">⌕</div>
        <h2>No events found</h2>
        <p>
          We couldn't find any events matching your search for "{query}" with
          the current filters. Try broadening your search or resetting your
          preferences.
        </p>
        <button type="button">Clear filters</button>
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

export default SearchPage;