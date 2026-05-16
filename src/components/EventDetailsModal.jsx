import { useNavigate } from "react-router-dom";

import "./EventDetailsModal.css";

import heroImage from "../assets/event-details-hero.png";
import venueImage from "../assets/event-details-venue.png";
import avatar1 from "../assets/event-details-avatar-1.png";
import avatar2 from "../assets/event-details-avatar-2.png";
import avatar3 from "../assets/event-details-avatar-3.png";
import avatar4 from "../assets/event-details-avatar-4.png";

function EventDetailsModal({ event, onClose }) {
  const navigate = useNavigate();

  const title = event?.title || "The Velvet Jazz Collective: Midnight Session";
  const image = event?.image || heroImage;
  const date = event?.date || event?.meta || "Nov 14, 9:00 PM";
  const location = event?.location || "Velvet Lounge, NY";
  const organizer = event?.organizer || "Julian Vance";
  const price = event?.price || "$45.00";
  const description =
    event?.description ||
    event?.text ||
    "Join us for an exclusive evening of improvisational jazz featuring local luminaries and international guests. Set within the iconic Velvet Lounge, this session promises a fusion of classic bebop and contemporary soul. Experience the warmth of live acoustics in an environment designed for true music enthusiasts and social connoisseurs.";

  const eventToSave = {
    ...event,
    title,
    image,
    date,
    location,
    organizer,
    price,
    description,
  };

  const handleJoinEvent = () => {
    console.log("Join event:", eventToSave);

    onClose();
    navigate("/events");
  };

  const handleAddToFavorites = () => {
    console.log("Add to favorites:", eventToSave);

    onClose();
    navigate("/favorites");
  };

  return (
    <div className="event-modal-overlay" onClick={onClose}>
      <section
        className="event-modal"
        onClick={(event) => event.stopPropagation()}
      >
        <button className="event-modal-close" type="button" onClick={onClose}>
          x
        </button>

        <img className="event-modal-hero" src={image} alt={title} />

        <div className="event-modal-content">
          <h1>{title}</h1>

          <div className="event-modal-info-grid">
            <div>
              <span>▣</span>
              <p>DATE & TIME</p>
              <strong>{date}</strong>
            </div>

            <div>
              <span>⌖</span>
              <p>LOCATION</p>
              <strong>{location}</strong>
            </div>

            <div>
              <span>☻</span>
              <p>ORGANIZER</p>
              <strong>{organizer}</strong>
            </div>

            <div>
              <span>▤</span>
              <p>TICKET PRICE</p>
              <strong>{price}</strong>
            </div>
          </div>

          <div className="event-modal-divider" />

          <section className="event-about">
            <h2>About the Event</h2>
            <p>{description}</p>
          </section>

          <section className="event-attending-row">
            <div className="attending-block">
              <p>
                WHO'S ATTENDING <span>45/50 joined</span>
              </p>

              <div className="avatar-stack">
                <img src={avatar1} alt="Attendee" />
                <img src={avatar2} alt="Attendee" />
                <img src={avatar3} alt="Attendee" />
                <img src={avatar4} alt="Attendee" />
                <strong>+41</strong>
              </div>
            </div>

            <article className="venue-card">
              <img src={venueImage} alt="Venue map" />

              <div>
                <h3>Velvet Lounge</h3>
                <p>245 West 54th St,</p>
                <p>New York, NY 10019</p>
              </div>
            </article>
          </section>

          <div className="event-modal-actions">
            <button
              type="button"
              className="join-event-btn"
              onClick={handleJoinEvent}
            >
              ▣ Join Event
            </button>

            <button
              type="button"
              className="favorite-event-btn"
              onClick={handleAddToFavorites}
            >
              ♡ Add to Favorites
            </button>
          </div>
        </div>
      </section>
    </div>
  );
}

export default EventDetailsModal;