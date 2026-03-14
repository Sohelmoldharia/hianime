import { Link } from "react-router-dom";
import SEO from "../components/SEO";
import AlternativeCard from "../components/AlternativeCard";
import alternatives from "../data/alternatives";
import siteConfig from "../data/siteConfig";

export default function Alternatives() {
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
        description={`Discover the ${alternatives.length} best HiAnime alternatives for free anime streaming. Our complete, updated list of sites like HiAnime with ratings, features, and reviews.`}
        path="/alternatives"
        jsonLd={jsonLd}
      />

      <section className="page-hero">
        <div className="container">
          <nav className="breadcrumb" aria-label="Breadcrumb">
            <Link to="/">Home</Link> &rsaquo;{" "}
            <span>HiAnime Alternatives</span>
          </nav>
          <h1>
            Complete List of HiAnime Alternatives ({new Date().getFullYear()})
          </h1>
          <p>
            Browse our complete, curated list of the{" "}
            <strong>best HiAnime alternatives</strong> for free anime streaming.
            Each site has been tested for quality, reliability, and content
            library. Last updated: {new Date().toLocaleDateString("en-US")}.
          </p>
        </div>
      </section>

      <section className="section">
        <div className="container">
          <div className="toc">
            <h2>Quick Navigation - All HiAnime Alternatives</h2>
            <ol>
              {alternatives.map((site) => {
                const slug = site.name
                  .toLowerCase()
                  .replace(/[^a-z0-9]+/g, "-");
                return (
                  <li key={site.name}>
                    <a href={`#${slug}`}>
                      {site.name}{" "}
                      <span className="toc-rating">
                        {"★".repeat(Math.round(site.rating))}{" "}
                        {site.rating}
                      </span>
                    </a>
                  </li>
                );
              })}
            </ol>
          </div>

          <div className="alt-list">
            {alternatives.map((site, i) => (
              <AlternativeCard key={site.name} site={site} rank={i + 1} />
            ))}
          </div>

          <div className="content-block">
            <h2>How We Choose the Best HiAnime Alternatives</h2>
            <p>
              Our team at <Link to="/about">{siteConfig.siteName}</Link>, based
              in{" "}
              <strong>
                {siteConfig.location.city}, {siteConfig.location.state}
              </strong>
              , carefully evaluates each HiAnime alternative based on:
            </p>
            <ul>
              <li>
                <strong>Content Library:</strong> The size and variety of anime
                titles available
              </li>
              <li>
                <strong>Streaming Quality:</strong> Video quality, buffering
                speed, and server reliability
              </li>
              <li>
                <strong>User Experience:</strong> Interface design, navigation,
                and mobile compatibility
              </li>
              <li>
                <strong>Update Frequency:</strong> How quickly new episodes are
                added
              </li>
              <li>
                <strong>Ad Experience:</strong> Presence and intrusiveness of
                advertisements
              </li>
            </ul>
            <p>
              We update this list regularly to ensure all{" "}
              <Link to="/alternatives">HiAnime alternatives</Link> are active
              and reliable. If you notice any broken links or have suggestions,
              please <Link to="/contact">contact us</Link>.
            </p>
          </div>
        </div>
      </section>
    </>
  );
}
