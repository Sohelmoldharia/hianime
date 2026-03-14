import { Link } from "react-router-dom";
import SEO from "../components/SEO";
import AlternativeCard from "../components/AlternativeCard";
import alternatives from "../data/alternatives";
import siteConfig from "../data/siteConfig";
import { useState } from "react";

export default function Alternatives() {
  const [filter, setFilter] = useState("any");
  const categories = [...new Set(alternatives.map((s) => s.category))];

  const filtered =
    filter === "any"
      ? alternatives
      : alternatives.filter((s) => s.category === filter);

  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "ItemList",
    name: "Best HiAnime Alternatives",
    description:
      "A curated list of the best HiAnime alternatives for free anime streaming",
    numberOfItems: alternatives.length,
    itemListElement: alternatives.map((site, i) => ({
      "@type": "ListItem",
      position: i + 1,
      item: {
        "@type": "WebSite",
        name: site.name,
        url: site.url,
        description: site.description,
      },
    })),
  };

  return (
    <>
      <SEO
        title="Best HiAnime Alternatives - Complete List 2026"
        description={`Discover the ${alternatives.length} best HiAnime alternatives for free anime streaming. Complete, updated list of sites like HiAnime with ratings and reviews.`}
        path="/alternatives"
        jsonLd={jsonLd}
      />

      <div className="content-wrap">
        <div className="page-breadcrumb">
          <Link to="/">Home</Link> › HiAnime Alternatives
        </div>

        <div className="section">
          <div className="section-title">
            Complete List of HiAnime Alternatives ({new Date().getFullYear()}){" "}
            <span className="sec-count">({filtered.length})</span>
          </div>
          <div className="filter-bar">
            <select
              className="filter-select"
              value={filter}
              onChange={(e) => setFilter(e.target.value)}
            >
              <option value="any">Any</option>
              {categories.map((c) => (
                <option key={c} value={c}>
                  {c.charAt(0).toUpperCase() + c.slice(1)}
                </option>
              ))}
            </select>
          </div>
          <div className="section-list">
            {filtered.map((site, i) => (
              <AlternativeCard key={site.name} site={site} rank={i + 1} />
            ))}
          </div>
        </div>

        <div className="seo-block">
          <h2>How We Choose the Best HiAnime Alternatives</h2>
          <p>
            Our team at <Link to="/about">{siteConfig.siteName}</Link>, based in{" "}
            <strong>
              {siteConfig.location.city}, {siteConfig.location.state}
            </strong>
            , evaluates each <strong>HiAnime alternative</strong> based on:
          </p>
          <ul>
            <li><strong>Content Library</strong> — Size and variety of anime titles</li>
            <li><strong>Streaming Quality</strong> — Video quality, buffering, server reliability</li>
            <li><strong>User Experience</strong> — Interface, navigation, mobile support</li>
            <li><strong>Update Frequency</strong> — How fast new episodes appear</li>
            <li><strong>Ad Experience</strong> — Presence and intrusiveness of ads</li>
          </ul>
          <p>
            We update this list regularly. If you notice broken links or have suggestions, please{" "}
            <Link to="/contact">contact us</Link>.
          </p>
        </div>
      </div>
    </>
  );
}
