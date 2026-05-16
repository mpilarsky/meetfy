import "./MyEventCard.css";

function MyEventCard({
  image,
  title,
  price,
  date,
  location,
  description,
  status = "CONFIRMED",
  onViewDetails,
  onToggleFavorite,
}) {
  return (
    <article className="upcoming-card">
      <div className="upcoming-image">
        <img src={image} alt={title} />
        <span>{status}</span>

        <button
          type="button"
          aria-label="Favorite event"
          onClick={onToggleFavorite}
        >
          ♥
        </button>
      </div>

      <div className="upcoming-content">
        <div className="upcoming-title-row">
          <h3>{title}</h3>
          <strong>{price}</strong>
        </div>

        <p className="event-date">▦ {date}</p>
        <p className="event-location">♙ {location}</p>
        <p className="upcoming-description">{description}</p>

        <button type="button" onClick={onViewDetails}>
          View Details
        </button>
      </div>
    </article>
  );
}

export default MyEventCard;