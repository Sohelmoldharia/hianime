import { Link } from "react-router-dom";
import SEO from "../components/SEO";
import AlternativeCard from "../components/AlternativeCard";
import alternatives from "../data/alternatives";
import siteConfig from "../data/siteConfig";

export default function Home() {
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "WebSite",
    name: siteConfig.siteName,
    url: siteConfig.siteUrl,
    description: siteConfig.description,
    publisher: {
      "@type": "Organization",
      name: siteConfig.siteName,
      address: {
        "@type": "PostalAddress",
        streetAddress: siteConfig.location.address,
        addressLocality: siteConfig.location.city,
        addressRegion: siteConfig.location.state,
        postalCode: siteConfig.location.zip,
        addressCountry: "US",
      },
    },
  };

  const faqData = [
    {
      q: "What is the best HiAnime alternative?",
      a: `The best HiAnime alternatives include ${alternatives.slice(0, 3).map((a) => a.name).join(", ")}. These sites offer similar features to HiAnime with large anime libraries, HD streaming, and both subbed and dubbed content.`,
    },
    {
      q: "Are HiAnime alternatives free?",
      a: "Yes, most HiAnime alternatives listed on our site are completely free to use. They offer free anime streaming with subbed and dubbed options without requiring a subscription.",
    },
    {
      q: "What happened to HiAnime?",
      a: "HiAnime has experienced various domain changes and accessibility issues over time. Many users seek HiAnime alternatives to ensure uninterrupted access to their favorite anime content.",
    },
    {
      q: "Which HiAnime alternative has no ads?",
      a: "Several HiAnime alternatives offer ad-free experiences, including Zoro.to and AniWatch. These platforms provide clean, uninterrupted anime streaming without pop-ups or intrusive advertisements.",
    },
  ];

  const faqJsonLd = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: faqData.map((item) => ({
      "@type": "Question",
      name: item.q,
      acceptedAnswer: { "@type": "Answer", text: item.a },
    })),
  };

  return (
    <>
      <SEO path="/" jsonLd={jsonLd} />

      <div className="content-wrap">
        {/* Top Info */}
        <div className="top-info">
          <h1>Best HiAnime Alternatives for Free Anime Streaming</h1>
          Curated index of the best <strong>HiAnime alternative</strong> sites for anime streaming
          <div className="last-update">
            Last update : {new Date().toLocaleDateString("en-US")} ·{" "}
            <Link to="/about" style={{ color: "gray" }}>About ℹ</Link>
          </div>
        </div>

        {/* Jump Menu */}
        <div className="jump-menu">
          <a href="#sec-streaming" className="jump-box" style={{ backgroundColor: "#20281e" }}>
            <span className="jump-icon">▶</span>Streaming
          </a>
          <a href="#sec-adfree" className="jump-box" style={{ backgroundColor: "#2a2739" }}>
            <span className="jump-icon">✦</span>Ad-Free
          </a>
          <a href="#sec-hybrid" className="jump-box" style={{ backgroundColor: "#2f2920" }}>
            <span className="jump-icon">⇅</span>Hybrid
          </a>
          <Link to="/alternatives" className="jump-box" style={{ backgroundColor: "#20332d" }}>
            <span className="jump-icon">★</span>View All
          </Link>
          <Link to="/about" className="jump-box">
            <span className="jump-icon">ℹ</span>About
          </Link>
          <Link to="/contact" className="jump-box">
            <span className="jump-icon">✉</span>Contact
          </Link>
          <a href="/rss.xml" className="jump-box">
            <span className="jump-icon">◉</span>RSS Feed
          </a>
          <a href="/sitemap.xml" className="jump-box">
            <span className="jump-icon">◧</span>Sitemap
          </a>
        </div>

        {/* Main Alternatives Section */}
        <div id="sec-streaming" className="section" style={{ border: "1px solid #20281e" }}>
          <div className="section-title" style={{ backgroundColor: "#20281e" }}>
            <span className="sec-icon">▶</span>
            HiAnime Alternatives - Anime Streaming{" "}
            <span className="sec-count">({alternatives.filter((s) => s.category === "streaming").length})</span>
          </div>
          <div className="section-list">
            {alternatives
              .filter((s) => s.category === "streaming")
              .map((site, i) => (
                <AlternativeCard key={site.name} site={site} rank={i + 1} />
              ))}
          </div>
        </div>

        {/* Ad-Free Section */}
        <div id="sec-adfree" className="section" style={{ border: "1px solid #2a2739" }}>
          <div className="section-title" style={{ backgroundColor: "#2a2739" }}>
            <span className="sec-icon">✦</span>
            Ad-Free HiAnime Alternatives
          </div>
          <div className="section-list">
            {alternatives
              .filter((s) => s.features.some((f) => f.toLowerCase().includes("ad-free") || f.toLowerCase().includes("no ads")))
              .map((site, i) => (
                <AlternativeCard key={site.name} site={site} rank={i + 1} />
              ))}
          </div>
        </div>

        {/* Hybrid Section */}
        <div id="sec-hybrid" className="section" style={{ border: "1px solid #2f2920" }}>
          <div className="section-title" style={{ backgroundColor: "#2f2920" }}>
            <span className="sec-icon">⇅</span>
            Hybrid (Stream + Download) HiAnime Alternatives
          </div>
          <div className="section-list">
            {alternatives
              .filter((s) => s.category === "hybrid")
              .map((site, i) => (
                <AlternativeCard key={site.name} site={site} rank={i + 1} />
              ))}
          </div>
        </div>

        {/* FAQ Section */}
        <div className="faq-section">
          <div className="faq-title">
            Frequently Asked Questions About HiAnime Alternatives
          </div>
          {faqData.map((item) => (
            <details key={item.q} className="faq-item">
              <summary>{item.q}</summary>
              <div className="faq-answer">{item.a}</div>
            </details>
          ))}
        </div>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(faqJsonLd) }}
        />

        {/* SEO Content Block */}
        <div className="seo-block">
          <h2>Why Use HiAnime Alternative?</h2>
          <p>
            <Link to="/about">HiAnime Alternative</Link> is your go-to resource for finding the best
            <strong> HiAnime alternatives</strong> for free anime streaming. Based in{" "}
            <strong>{siteConfig.location.city}, {siteConfig.location.country}</strong>, we test and
            curate the top anime streaming sites so you always have a reliable{" "}
            <strong>free HiAnime alternative</strong> ready.
          </p>
          <p>
            Whether HiAnime is down, blocked, or you simply want better features, our{" "}
            <Link to="/alternatives">complete alternatives list</Link> has you covered. Each site
            is evaluated for content library, streaming quality, ad experience, and mobile support.
            <Link to="/contact"> Contact us</Link> to suggest a site.
          </p>
        </div>
      </div>
    </>
  );
}
