import "./PastEventCard.css";

function PastEventCard({ image, title, meta, onViewDetails }) {
  return (
    <article className="past-card">
      <img src={image} alt={title} />

      <div className="past-content">
        <h3>{title}</h3>
        <p>{meta}</p>

        <button type="button" onClick={onViewDetails}>
          View Details
        </button>
      </div>
    </article>
  );
}

export default PastEventCard;