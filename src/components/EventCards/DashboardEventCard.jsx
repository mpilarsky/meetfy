import { Heart, CalendarDays, MapPin } from "lucide-react";
import "./DashboardEventCard.css";

function DashboardEventCard({
  image,
  tag,
  title,
  price,
  meta,
  description,
  onViewDetails,
  onToggleFavorite,
}) {
  return (
    <article className="event-card">
      <div className="event-image">
        <img src={image} alt={title} />
        <span>{tag}</span>

        <button
          type="button"
          aria-label="Add to favourites"
          onClick={onToggleFavorite}
        >
          <Heart size={18} />
        </button>
      </div>

      <div className="event-content">
        <div className="event-title-row">
          <h3>{title}</h3>
          <strong>{price}</strong>
        </div>

        <p className="event-meta">
          <CalendarDays size={14} /> {meta}
        </p>
        <p className="event-description">{description}</p>

        <button type="button" onClick={onViewDetails}>
          View Details
        </button>
      </div>
    </article>
  );
}

export default DashboardEventCard;