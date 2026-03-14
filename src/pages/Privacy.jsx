import { Link } from "react-router-dom";
import SEO from "../components/SEO";
import siteConfig from "../data/siteConfig";

export default function Privacy() {
  return (
    <>
      <SEO title="Privacy Policy" description="Privacy policy for HiAnime Alternative." path="/privacy" />
      <div className="page-content">
        <div className="page-breadcrumb"><Link to="/">Home</Link> › Privacy Policy</div>
        <h1>Privacy Policy</h1>
        <p><strong>Last updated:</strong> January 1, 2026</p>
        <p>{siteConfig.siteName}, located at {siteConfig.location.address}, {siteConfig.location.city}, {siteConfig.location.state} {siteConfig.location.zip}, {siteConfig.location.country}, is committed to protecting your privacy.</p>

        <h2>Information We Collect</h2>
        <ul>
          <li><strong>Log Data:</strong> IP address, browser type, pages visited, time spent, referring URL.</li>
          <li><strong>Cookies:</strong> Small data files to improve your browsing experience.</li>
          <li><strong>Analytics:</strong> Aggregated, anonymized usage data.</li>
        </ul>

        <h2>How We Use Your Information</h2>
        <ul>
          <li>To operate and maintain our website</li>
          <li>To improve our <Link to="/alternatives">HiAnime alternatives</Link> list</li>
          <li>To analyze traffic and usage patterns</li>
          <li>To respond to inquiries via our <Link to="/contact">Contact page</Link></li>
        </ul>

        <h2>Third-Party Links</h2>
        <p>Our website contains links to third-party <Link to="/alternatives">HiAnime alternative</Link> sites. We are not responsible for their privacy practices.</p>

        <h2>Children&apos;s Privacy</h2>
        <p>Our website is not intended for children under 13.</p>

        <h2>Contact</h2>
        <p><Link to="/contact">Contact us</Link> at <a href={`mailto:${siteConfig.email}`}>{siteConfig.email}</a>.</p>
        <p>{siteConfig.location.address}, {siteConfig.location.city}, {siteConfig.location.state} {siteConfig.location.zip}, {siteConfig.location.country}</p>
      </div>
    </>
  );
}
