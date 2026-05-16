import "./SearchEventCard.css";

function SearchEventCard({
  image,
  tag,
  title,
  price,
  date,
  location,
  description,
  onViewDetails,
  onToggleFavorite,
}) {
  return (
    <article className="search-result-card">
      <div className="search-result-image">
        <img src={image} alt={title} />
        <span>{tag}</span>

        <button
          type="button"
          aria-label="Add to favourites"
          onClick={onToggleFavorite}
        >
          ♡
        </button>
      </div>

      <div className="search-result-content">
        <div className="search-result-title-row">
          <h2>{title}</h2>
          <strong>{price}</strong>
        </div>

        <p className="search-result-meta">▧ {date}</p>
        <p className="search-result-meta">♙ {location}</p>
        <p className="search-result-description">{description}</p>

        <button type="button" onClick={onViewDetails}>
          View Details
        </button>
      </div>
    </article>
  );
}

export default SearchEventCard;