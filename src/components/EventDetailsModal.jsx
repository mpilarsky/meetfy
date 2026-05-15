import "./EventDetailsModal.css";

import heroImage from "../assets/event-details-hero.png";
import venueImage from "../assets/event-details-venue.png";
import avatar1 from "../assets/event-details-avatar-1.png";
import avatar2 from "../assets/event-details-avatar-2.png";
import avatar3 from "../assets/event-details-avatar-3.png";
import avatar4 from "../assets/event-details-avatar-4.png";

function EventDetailsModal({ onClose }) {
  return (
    <div className="event-modal-overlay">
      <section className="event-modal">
        <button className="event-modal-close" type="button" onClick={onClose}>
          ×
        </button>

        <img className="event-modal-hero" src={heroImage} alt="Velvet jazz lounge" />

        <div className="event-modal-content">
          <h1>The Velvet Jazz Collective: Midnight Session</h1>

          <div className="event-modal-info-grid">
            <div>
              <span>▣</span>
              <p>DATE & TIME</p>
              <strong>Nov 14,<br />9:00 PM</strong>
            </div>

            <div>
              <span>⌖</span>
              <p>LOCATION</p>
              <strong>Velvet<br />Lounge, NY</strong>
            </div>

            <div>
              <span>☻</span>
              <p>ORGANIZER</p>
              <strong>oulian<br />Vance</strong>
            </div>

            <div>
              <span>▤</span>
              <p>TICKET PRICE</p>
              <strong>$45.00</strong>
            </div>
          </div>

          <div className="event-modal-divider" />

          <section className="event-about">
            <h2>About the Event</h2>
            <p>
              Join us for an exclusive evening of improvisational jazz featuring local
              luminaries and international guests. Set within the iconic Velvet Lounge,
              this session promises a fusion of classic bebop and contemporary soul.
              Experience the warmth of live acoustics in an environment designed for
              true music enthusiasts and social connoisseurs.
            </p>
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
            <button type="button" className="join-event-btn">
              ▣ Join Event
            </button>

            <button type="button" className="favorite-event-btn">
              ♡ Add to Favorites
            </button>
          </div>
        </div>
      </section>
    </div>
  );
}

export default EventDetailsModal;