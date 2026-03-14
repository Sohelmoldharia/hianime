import { Link } from "react-router-dom";
import SEO from "../components/SEO";
import AlternativeCard from "../components/AlternativeCard";
import alternatives from "../data/alternatives";
import siteConfig from "../data/siteConfig";

export default function Home() {
  const top5 = alternatives.slice(0, 5);

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
    potentialAction: {
      "@type": "SearchAction",
      target: `${siteConfig.siteUrl}/alternatives`,
      "query-input": "required name=search_term_string",
    },
  };

  const faqJsonLd = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: [
      {
        "@type": "Question",
        name: "What is the best HiAnime alternative?",
        acceptedAnswer: {
          "@type": "Answer",
          text: `The best HiAnime alternatives include ${alternatives
            .slice(0, 3)
            .map((a) => a.name)
            .join(
              ", "
            )}. These sites offer similar features to HiAnime with large anime libraries, HD streaming, and both subbed and dubbed content.`,
        },
      },
      {
        "@type": "Question",
        name: "Are HiAnime alternatives free?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "Yes, most HiAnime alternatives listed on our site are completely free to use. They offer free anime streaming with subbed and dubbed options without requiring a subscription.",
        },
      },
      {
        "@type": "Question",
        name: "What happened to HiAnime?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "HiAnime has experienced various domain changes and accessibility issues over time. Many users seek HiAnime alternatives to ensure uninterrupted access to their favorite anime content.",
        },
      },
      {
        "@type": "Question",
        name: "Which HiAnime alternative has no ads?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "Several HiAnime alternatives offer ad-free experiences, including Zoro.to and AniWatch. These platforms provide clean, uninterrupted anime streaming without pop-ups or intrusive advertisements.",
        },
      },
    ],
  };

  return (
    <>
      <SEO path="/" jsonLd={jsonLd} />

      <section className="hero">
        <div className="container">
          <h1>Best HiAnime Alternatives for Free Anime Streaming in 2026</h1>
          <p className="hero-sub">
            Looking for the best <strong>HiAnime alternative</strong>? Discover
            our handpicked list of the top free anime streaming sites that work
            just like HiAnime. All sites are tested and updated regularly.
          </p>
          <Link to="/alternatives" className="cta-btn">
            View All HiAnime Alternatives &rarr;
          </Link>
        </div>
      </section>

      <section className="section">
        <div className="container">
          <h2>Top 5 HiAnime Alternatives</h2>
          <p>
            These are the highest-rated <strong>HiAnime alternatives</strong>{" "}
            based on our testing. Each site has been evaluated for content
            library size, streaming quality, user experience, and reliability.
            Whether you need a <strong>free HiAnime alternative</strong> for
            subbed anime or dubbed content, these sites have you covered.
          </p>
          <div className="alt-list">
            {top5.map((site, i) => (
              <AlternativeCard key={site.name} site={site} rank={i + 1} />
            ))}
          </div>
          <div className="center-cta">
            <Link to="/alternatives" className="cta-btn">
              See All {alternatives.length} HiAnime Alternatives &rarr;
            </Link>
          </div>
        </div>
      </section>

      <section className="section section-alt">
        <div className="container">
          <h2>Why Look for HiAnime Alternatives?</h2>
          <div className="reasons-grid">
            <div className="reason-card">
              <h3>Site Downtime</h3>
              <p>
                HiAnime may experience downtime or domain changes. Having a list
                of reliable <strong>HiAnime alternatives</strong> ensures you
                never miss your favorite anime episodes.
              </p>
            </div>
            <div className="reason-card">
              <h3>Better Features</h3>
              <p>
                Some <strong>HiAnime alternative</strong> sites offer features
                not available on HiAnime, such as ad-free streaming,
                watch-together functionality, and better mobile support.
              </p>
            </div>
            <div className="reason-card">
              <h3>Larger Libraries</h3>
              <p>
                Different <strong>HiAnime alternatives</strong> may have anime
                titles that aren&apos;t available on HiAnime, giving you access
                to a wider range of content.
              </p>
            </div>
            <div className="reason-card">
              <h3>Faster Updates</h3>
              <p>
                Some <strong>free HiAnime alternative</strong> sites upload new
                episodes faster than HiAnime, so you can watch the latest
                releases sooner.
              </p>
            </div>
          </div>
        </div>
      </section>

      <section className="section">
        <div className="container">
          <h2>Frequently Asked Questions About HiAnime Alternatives</h2>
          <div className="faq-list">
            {faqJsonLd.mainEntity.map((item) => (
              <details key={item.name} className="faq-item">
                <summary>{item.name}</summary>
                <p>{item.acceptedAnswer.text}</p>
              </details>
            ))}
          </div>
          <script
            type="application/ld+json"
            dangerouslySetInnerHTML={{ __html: JSON.stringify(faqJsonLd) }}
          />
        </div>
      </section>

      <section className="section section-alt">
        <div className="container">
          <h2>About HiAnime Alternative</h2>
          <p>
            <Link to="/about">HiAnime Alternative</Link> is a dedicated
            resource based in{" "}
            <strong>
              {siteConfig.location.city}, {siteConfig.location.country}
            </strong>{" "}
            that helps anime fans find the best alternatives to HiAnime. We
            regularly test and update our list of{" "}
            <Link to="/alternatives">HiAnime alternatives</Link> to ensure all
            recommended sites are working and provide a quality streaming
            experience. Have questions?{" "}
            <Link to="/contact">Contact us</Link> anytime.
          </p>
        </div>
      </section>
    </>
  );
}
