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
  };

  return (
    <>
      <SEO
        title="About Us"
        description="Learn about HiAnime Alternative, a New York based team helping anime fans find the best free HiAnime alternatives."
        path="/about"
        jsonLd={jsonLd}
      />
      <div className="page-content">
        <div className="page-breadcrumb">
          <Link to="/">Home</Link> › About
        </div>
        <h1>About HiAnime Alternative</h1>

        <h2>Who We Are</h2>
        <p>
          <strong>{siteConfig.siteName}</strong> is a resource created by anime enthusiasts based in{" "}
          <strong>{siteConfig.location.city}, {siteConfig.location.state}, {siteConfig.location.country}</strong>.
          Founded in {siteConfig.foundedYear}, our mission is to help anime fans find the best{" "}
          <Link to="/alternatives">HiAnime alternatives</Link> for free, high-quality anime streaming.
        </p>

        <h2>What We Do</h2>
        <ul>
          <li><strong>Curate</strong> the best <Link to="/alternatives">HiAnime alternatives</Link> available online</li>
          <li><strong>Test</strong> each site for streaming quality, reliability, and user experience</li>
          <li><strong>Update</strong> our list regularly to remove dead links and add new sites</li>
          <li><strong>Rate</strong> and review each alternative based on objective criteria</li>
        </ul>

        <h2>Our Location</h2>
        <p>
          {siteConfig.siteName} operates from {siteConfig.location.address}, {siteConfig.location.city},{" "}
          {siteConfig.location.state} {siteConfig.location.zip}, {siteConfig.location.country}.
        </p>

        <h2>Contact</h2>
        <p>
          Have a suggestion? Visit our <Link to="/contact">Contact page</Link> or email{" "}
          <a href={`mailto:${siteConfig.email}`}>{siteConfig.email}</a>.
        </p>

        <h2>Disclaimer</h2>
        <p>
          {siteConfig.siteName} does not host, store, or distribute any anime content. We are an informational
          resource that curates anime streaming sites. See our <Link to="/privacy">Privacy Policy</Link> and{" "}
          <Link to="/terms">Terms of Service</Link>.
        </p>
      </div>
    </>
  );
}
