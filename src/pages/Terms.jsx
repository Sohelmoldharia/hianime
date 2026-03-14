import { Link } from "react-router-dom";
import SEO from "../components/SEO";
import siteConfig from "../data/siteConfig";

export default function Terms() {
  return (
    <>
      <SEO title="Terms of Service" description="Terms of service for HiAnime Alternative." path="/terms" />
      <div className="page-content">
        <div className="page-breadcrumb"><Link to="/">Home</Link> › Terms of Service</div>
        <h1>Terms of Service</h1>
        <p><strong>Last updated:</strong> January 1, 2026</p>

        <h2>1. Acceptance of Terms</h2>
        <p>By using {siteConfig.siteName}, you agree to these terms.</p>

        <h2>2. Description of Service</h2>
        <p>{siteConfig.siteName} curates and reviews <Link to="/alternatives">HiAnime alternatives</Link>. We do not host anime content.</p>

        <h2>3. User Conduct</h2>
        <p>Do not use the site for unlawful purposes, attempt unauthorized access, or scrape data without permission.</p>

        <h2>4. Disclaimer</h2>
        <p>Provided &quot;as is&quot; without warranties. We do not guarantee the availability or safety of third-party sites.</p>

        <h2>5. Limitation of Liability</h2>
        <p>{siteConfig.siteName} shall not be liable for damages from use of our website or linked sites.</p>

        <h2>6. Third-Party Links</h2>
        <p>Links to external <Link to="/alternatives">HiAnime alternative</Link> sites are for informational purposes.</p>

        <h2>7. Governing Law</h2>
        <p>Governed by the laws of {siteConfig.location.state}, {siteConfig.location.country}.</p>

        <h2>8. Contact</h2>
        <p><Link to="/contact">Contact us</Link> at <a href={`mailto:${siteConfig.email}`}>{siteConfig.email}</a>.</p>
        <p>{siteConfig.location.address}, {siteConfig.location.city}, {siteConfig.location.state} {siteConfig.location.zip}, {siteConfig.location.country}</p>
      </div>
    </>
  );
}
