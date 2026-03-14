import { useState } from "react";

export default function AlternativeCard({ site, rank }) {
  const [expanded, setExpanded] = useState(false);

  return (
    <>
      <div className="section-item" onClick={() => setExpanded(!expanded)}>
        <span className="item-rank">{rank}.</span>
        <span className="item-name">
          <a
            href={site.url}
            target="_blank"
            rel="noopener noreferrer nofollow"
            onClick={(e) => e.stopPropagation()}
          >
            {site.name}
          </a>
          <span className="item-tag">{site.category.toUpperCase()}</span>
          <span className="item-rating">{"★".repeat(Math.round(site.rating))} {site.rating}</span>
        </span>
        <span className="item-expand">{expanded ? "▲" : "▼"}</span>
      </div>
      {expanded && (
        <div className="item-details">
          <p>{site.description}</p>
          <div className="detail-features">
            {site.features.map((f) => (
              <span key={f} className="detail-feature">{f}</span>
            ))}
          </div>
          <a
            href={site.url}
            className="detail-link"
            target="_blank"
            rel="noopener noreferrer nofollow"
          >
            Visit {site.name} ↗
          </a>
        </div>
      )}
    </>
  );
}
