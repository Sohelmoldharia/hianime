import { Link } from "react-router-dom";

function StarRating({ rating }) {
  const full = Math.floor(rating);
  const half = rating % 1 >= 0.5;
  const stars = [];
  for (let i = 0; i < 5; i++) {
    if (i < full) stars.push("★");
    else if (i === full && half) stars.push("★");
    else stars.push("☆");
  }
  return (
    <span className="stars" aria-label={`Rating: ${rating} out of 5`}>
      {stars.join("")} <span className="rating-num">{rating}/5</span>
    </span>
  );
}

export default function AlternativeCard({ site, rank }) {
  const slug = site.name.toLowerCase().replace(/[^a-z0-9]+/g, "-");

  return (
    <article className="alt-card" id={slug}>
      <div className="alt-card-header">
        <span className="alt-rank">#{rank}</span>
        <h2>
          <Link to={`/alternatives#${slug}`}>{site.name}</Link>
        </h2>
        <span className={`alt-category cat-${site.category}`}>
          {site.category}
        </span>
      </div>
      <StarRating rating={site.rating} />
      <p className="alt-desc">{site.description}</p>
      <div className="alt-features">
        <h3>Key Features:</h3>
        <ul>
          {site.features.map((f) => (
            <li key={f}>&#10003; {f}</li>
          ))}
        </ul>
      </div>
      <a
        href={site.url}
        className="alt-visit"
        target="_blank"
        rel="noopener noreferrer nofollow"
      >
        Visit {site.name} &rarr;
      </a>
    </article>
  );
}
