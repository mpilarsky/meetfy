import "./FavoriteEventCard.css";

function FavoriteEventCard({
  image,
  tag,
  title,
  price,
  meta,
  description,
  onViewDetails,
  onRemoveFavorite,
}) {
  return (
    <article className="favorite-card">
      <div className="favorite-image">
        <img src={image} alt={title} />
        <span>{tag}</span>

        <button
          type="button"
          aria-label="Remove from favorites"
          onClick={onRemoveFavorite}
        >
          ♥
        </button>
      </div>

      <div className="favorite-content">
        <div className="favorite-title-row">
          <h2>{title}</h2>
          <strong>{price}</strong>
        </div>

        <p className="favorite-meta">{meta}</p>
        <p className="favorite-description">{description}</p>

        <button type="button" onClick={onViewDetails}>
          View Details
        </button>
      </div>
    </article>
  );
}

export default FavoriteEventCard;