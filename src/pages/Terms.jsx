import { Link } from "react-router-dom";
import SEO from "../components/SEO";
import siteConfig from "../data/siteConfig";

export default function Terms() {
  return (
    <>
      <SEO
        title="Terms of Service - HiAnime Alternative"
        description="Read the terms of service for HiAnime Alternative. Understand the rules and guidelines for using our website."
        path="/terms"
      />

      <section className="page-hero">
        <div className="container">
          <nav className="breadcrumb" aria-label="Breadcrumb">
            <Link to="/">Home</Link> &rsaquo; <span>Terms of Service</span>
          </nav>
          <h1>Terms of Service</h1>
        </div>
      </section>

      <section className="section">
        <div className="container content-page">
          <p>
            <strong>Last updated:</strong> January 1, 2026
          </p>
          <p>
            Welcome to {siteConfig.siteName}. By accessing and using our website
            at <a href={siteConfig.siteUrl}>{siteConfig.siteUrl}</a>, you agree
            to be bound by these Terms of Service.
          </p>

          <h2>1. Acceptance of Terms</h2>
          <p>
            By using {siteConfig.siteName}, you agree to these terms. If you do
            not agree, please do not use our website. These terms apply to all
            visitors and users of our{" "}
            <Link to="/alternatives">HiAnime alternatives</Link> directory.
          </p>

          <h2>2. Description of Service</h2>
          <p>
            {siteConfig.siteName} is an informational website that curates and
            reviews <Link to="/alternatives">HiAnime alternatives</Link> for
            anime streaming. We do not host, upload, or distribute any anime
            content. We provide links to third-party websites for informational
            purposes only.
          </p>

          <h2>3. User Conduct</h2>
          <p>When using our website, you agree not to:</p>
          <ul>
            <li>Use the site for any unlawful purpose</li>
            <li>Attempt to gain unauthorized access to our systems</li>
            <li>Interfere with the proper functioning of the website</li>
            <li>Scrape or collect data without permission</li>
          </ul>

          <h2>4. Disclaimer of Warranties</h2>
          <p>
            {siteConfig.siteName} is provided &quot;as is&quot; without
            warranties of any kind. We do not guarantee the accuracy,
            availability, or safety of any third-party{" "}
            <strong>HiAnime alternative</strong> sites listed on our platform.
            Users access external sites at their own risk.
          </p>

          <h2>5. Limitation of Liability</h2>
          <p>
            {siteConfig.siteName} shall not be liable for any damages arising
            from the use of our website or any third-party sites linked from
            our <Link to="/alternatives">alternatives list</Link>. This
            includes but is not limited to direct, indirect, incidental, or
            consequential damages.
          </p>

          <h2>6. Third-Party Links</h2>
          <p>
            Our website contains links to external{" "}
            <Link to="/alternatives">HiAnime alternative</Link> sites. These
            links are provided for convenience and informational purposes. We
            do not endorse or assume responsibility for the content or
            practices of these third-party sites.
          </p>

          <h2>7. Intellectual Property</h2>
          <p>
            The content, design, and layout of {siteConfig.siteName} are
            protected by intellectual property laws. You may not reproduce,
            distribute, or create derivative works without our written consent.
          </p>

          <h2>8. Governing Law</h2>
          <p>
            These Terms shall be governed by the laws of the State of{" "}
            {siteConfig.location.state}, {siteConfig.location.country},
            without regard to conflict of law provisions.
          </p>

          <h2>9. Changes to Terms</h2>
          <p>
            We reserve the right to modify these Terms at any time. Continued
            use of the website after changes constitutes acceptance of the
            updated terms.
          </p>

          <h2>10. Contact Information</h2>
          <p>
            For questions about these Terms, please{" "}
            <Link to="/contact">contact us</Link>:
          </p>
          <p>
            {siteConfig.siteName}
            <br />
            {siteConfig.location.address}
            <br />
            {siteConfig.location.city}, {siteConfig.location.state}{" "}
            {siteConfig.location.zip}
            <br />
            {siteConfig.location.country}
            <br />
            Email:{" "}
            <a href={`mailto:${siteConfig.email}`}>{siteConfig.email}</a>
          </p>
        </div>
      </section>
    </>
  );
}
