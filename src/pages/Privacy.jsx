import { Link } from "react-router-dom";
import SEO from "../components/SEO";
import siteConfig from "../data/siteConfig";

export default function Privacy() {
  return (
    <>
      <SEO
        title="Privacy Policy - HiAnime Alternative"
        description="Read the privacy policy for HiAnime Alternative. Learn how we collect, use, and protect your personal information when you visit our site."
        path="/privacy"
      />

      <section className="page-hero">
        <div className="container">
          <nav className="breadcrumb" aria-label="Breadcrumb">
            <Link to="/">Home</Link> &rsaquo; <span>Privacy Policy</span>
          </nav>
          <h1>Privacy Policy</h1>
        </div>
      </section>

      <section className="section">
        <div className="container content-page">
          <p>
            <strong>Last updated:</strong> January 1, 2026
          </p>
          <p>
            {siteConfig.siteName} (&quot;we,&quot; &quot;our,&quot; or
            &quot;us&quot;), located at {siteConfig.location.address},{" "}
            {siteConfig.location.city}, {siteConfig.location.state}{" "}
            {siteConfig.location.zip}, {siteConfig.location.country}, is
            committed to protecting your privacy. This Privacy Policy explains
            how we collect, use, and safeguard your information when you visit{" "}
            <a href={siteConfig.siteUrl}>{siteConfig.siteUrl}</a>.
          </p>

          <h2>Information We Collect</h2>
          <p>
            We may collect the following types of information when you visit our
            website to browse{" "}
            <Link to="/alternatives">HiAnime alternatives</Link>:
          </p>
          <ul>
            <li>
              <strong>Log Data:</strong> Your IP address, browser type, pages
              visited, time spent on pages, and referring URL.
            </li>
            <li>
              <strong>Cookies:</strong> Small data files stored on your device
              to improve your browsing experience.
            </li>
            <li>
              <strong>Analytics Data:</strong> Aggregated, anonymized data about
              how visitors use our site.
            </li>
          </ul>

          <h2>How We Use Your Information</h2>
          <ul>
            <li>To operate and maintain our website</li>
            <li>To improve our list of <Link to="/alternatives">HiAnime alternatives</Link></li>
            <li>To analyze website traffic and usage patterns</li>
            <li>To respond to your inquiries via our <Link to="/contact">Contact page</Link></li>
          </ul>

          <h2>Cookies</h2>
          <p>
            We use cookies and similar tracking technologies to enhance your
            experience on our site. You can control cookie preferences through
            your browser settings.
          </p>

          <h2>Third-Party Links</h2>
          <p>
            Our website contains links to third-party{" "}
            <Link to="/alternatives">HiAnime alternative</Link> sites. We are
            not responsible for the privacy practices or content of these
            external sites. We encourage you to review their privacy policies.
          </p>

          <h2>Data Security</h2>
          <p>
            We implement appropriate security measures to protect your
            information. However, no method of transmission over the internet is
            100% secure.
          </p>

          <h2>Children&apos;s Privacy</h2>
          <p>
            Our website is not intended for children under 13. We do not
            knowingly collect personal information from children under 13.
          </p>

          <h2>Changes to This Policy</h2>
          <p>
            We may update this Privacy Policy from time to time. Changes will
            be posted on this page with an updated revision date.
          </p>

          <h2>Contact Us</h2>
          <p>
            If you have questions about this Privacy Policy, please{" "}
            <Link to="/contact">contact us</Link> at{" "}
            <a href={`mailto:${siteConfig.email}`}>{siteConfig.email}</a>.
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
          </p>
        </div>
      </section>
    </>
  );
}
