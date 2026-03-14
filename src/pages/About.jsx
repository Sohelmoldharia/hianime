import { Link } from "react-router-dom";
import SEO from "../components/SEO";
import siteConfig from "../data/siteConfig";

export default function About() {
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "Organization",
    name: siteConfig.siteName,
    url: siteConfig.siteUrl,
    description: siteConfig.description,
    foundingDate: `${siteConfig.foundedYear}`,
    address: {
      "@type": "PostalAddress",
      streetAddress: siteConfig.location.address,
      addressLocality: siteConfig.location.city,
      addressRegion: siteConfig.location.state,
      postalCode: siteConfig.location.zip,
      addressCountry: "US",
    },
    contactPoint: {
      "@type": "ContactPoint",
      email: siteConfig.email,
      contactType: "customer service",
    },
  };

  return (
    <>
      <SEO
        title="About Us - HiAnime Alternative"
        description="Learn about HiAnime Alternative, a New York based team dedicated to helping anime fans find the best free HiAnime alternatives and anime streaming sites."
        path="/about"
        jsonLd={jsonLd}
      />

      <section className="page-hero">
        <div className="container">
          <nav className="breadcrumb" aria-label="Breadcrumb">
            <Link to="/">Home</Link> &rsaquo; <span>About Us</span>
          </nav>
          <h1>About HiAnime Alternative</h1>
        </div>
      </section>

      <section className="section">
        <div className="container content-page">
          <h2>Who We Are</h2>
          <p>
            <strong>{siteConfig.siteName}</strong> is a dedicated resource
            created by anime enthusiasts based in{" "}
            <strong>
              {siteConfig.location.city}, {siteConfig.location.state},{" "}
              {siteConfig.location.country}
            </strong>
            . Founded in {siteConfig.foundedYear}, our mission is to help anime
            fans find the best <Link to="/alternatives">HiAnime alternatives</Link>{" "}
            for free, high-quality anime streaming.
          </p>

          <h2>Our Mission</h2>
          <p>
            We understand the frustration when your favorite anime streaming
            site goes down or becomes unavailable. That&apos;s why we created
            this comprehensive resource — to ensure anime fans always have
            access to reliable <strong>HiAnime alternatives</strong>. Our team
            personally tests and reviews each site on our list to guarantee
            quality.
          </p>

          <h2>What We Do</h2>
          <ul>
            <li>
              <strong>Curate</strong> the best{" "}
              <Link to="/alternatives">HiAnime alternatives</Link> available
              online
            </li>
            <li>
              <strong>Test</strong> each site for streaming quality,
              reliability, and user experience
            </li>
            <li>
              <strong>Update</strong> our list regularly to remove dead links
              and add new sites
            </li>
            <li>
              <strong>Rate</strong> and review each alternative based on
              objective criteria
            </li>
            <li>
              <strong>Inform</strong> our community through detailed
              descriptions and feature comparisons
            </li>
          </ul>

          <h2>Our Evaluation Process</h2>
          <p>
            Every <strong>HiAnime alternative</strong> on our list goes through
            a rigorous evaluation process. We check for content library size,
            video streaming quality, server uptime, ad intrusiveness, mobile
            compatibility, and overall user experience. Only sites that meet our
            standards make it to our{" "}
            <Link to="/alternatives">recommended alternatives list</Link>.
          </p>

          <h2>Our Location</h2>
          <p>
            {siteConfig.siteName} operates from{" "}
            <strong>
              {siteConfig.location.address}, {siteConfig.location.city},{" "}
              {siteConfig.location.state} {siteConfig.location.zip},{" "}
              {siteConfig.location.country}
            </strong>
            . We serve anime fans worldwide with our comprehensive directory of
            HiAnime alternatives.
          </p>

          <h2>Contact Us</h2>
          <p>
            Have a suggestion for a <strong>HiAnime alternative</strong> we
            should add? Found a broken link? We&apos;d love to hear from you.
            Visit our <Link to="/contact">Contact page</Link> or email us at{" "}
            <a href={`mailto:${siteConfig.email}`}>{siteConfig.email}</a>.
          </p>

          <h2>Disclaimer</h2>
          <p>
            {siteConfig.siteName} does not host, store, or distribute any anime
            content. We are an informational resource that curates and reviews
            anime streaming sites. All trademarks, logos, and brand names are
            the property of their respective owners. For more details, see our{" "}
            <Link to="/privacy">Privacy Policy</Link> and{" "}
            <Link to="/terms">Terms of Service</Link>.
          </p>
        </div>
      </section>
    </>
  );
}
