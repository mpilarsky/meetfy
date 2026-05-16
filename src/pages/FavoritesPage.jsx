import { useState } from "react";

import EventDetailsModal from "../components/EventDetailsModal";
import FavoriteEventCard from "../components/EventCards/FavoriteEventCard";

import "./FavoritesPage.css";

import spiritsImage from "../assets/favorite-spirits.png";
import musicImage from "../assets/favorite-music.png";
import chefImage from "../assets/favorite-chef.png";
import modernismImage from "../assets/favorite-modernism.png";

function FavoritesPage() {
  const [selectedEvent, setSelectedEvent] = useState(null);

  const favoriteEvents = [
    {
      image: spiritsImage,
      tag: "MIXOLOGY",
      title: "Secret Garden Spirits",
      price: "$45",
      date: "OCT 24",
      location: "EAST VILLAGE",
      meta: "▧ OCT 24    ♙ EAST VILLAGE",
      text: "Discover the art of botanical infusions in a hidden rooftop...",
    },
    {
      image: musicImage,
      tag: "MUSIC",
      title: "Underground Pulse",
      price: "FREE",
      date: "OCT 28",
      location: "BROOKLYN",
      meta: "▧ OCT 28    ♙ BROOKLYN",
      text: "A showcase of emerging indie electronic artists in an...",
    },
    {
      image: chefImage,
      tag: "DINING",
      title: "The Chef's Table",
      price: "$120",
      date: "NOV 02",
      location: "CHELSEA",
      meta: "▧ NOV 02    ♙ CHELSEA",
      text: "An intimate 7-course tasting menu experience focused on",
    },
    {
      image: modernismImage,
      tag: "ART",
      title: "Modernism & The Soul",
      price: "$25",
      date: "TONIGHT",
      location: "DOWNTOWN",
      meta: "▧ TONIGHT    ♙ DOWNTOWN",
      text: "Join an exclusive evening tour of the city's newest...",
    },
  ];

  return (
    <>
      <section className="favorites-title">
        <h1>Your Favorite Events</h1>
        <p>Revisit the experiences that caught your eye.</p>
      </section>

      <section className="favorites-grid">
        {favoriteEvents.map((event) => (
          <FavoriteEventCard
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
            onRemoveFavorite={() => console.log("Remove favorite:", event)}
          />
        ))}
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

export default FavoritesPage;