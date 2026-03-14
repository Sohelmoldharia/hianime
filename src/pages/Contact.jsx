import { Link } from "react-router-dom";
import SEO from "../components/SEO";
import siteConfig from "../data/siteConfig";

export default function Contact() {
  return (
    <>
      <SEO
        title="Contact Us"
        description="Get in touch with HiAnime Alternative team in New York, USA. Suggest new alternatives, report broken links, or ask questions."
        path="/contact"
      />
      <div className="page-content">
        <div className="page-breadcrumb">
          <Link to="/">Home</Link> › Contact
        </div>
        <h1>Contact HiAnime Alternative</h1>

        <p>
          Suggest a new <Link to="/alternatives">HiAnime alternative</Link>, report a broken link, or just say hello.
        </p>

        <div className="contact-methods">
          <div className="contact-card">
            <h3>Email</h3>
            <p><a href={`mailto:${siteConfig.email}`}>{siteConfig.email}</a></p>
            <p>We typically respond within 24-48 hours.</p>
          </div>
          <div className="contact-card">
            <h3>Discord</h3>
            <p><a href={siteConfig.social.discord} target="_blank" rel="noopener noreferrer">Join our Discord Server</a></p>
            <p>Chat with fellow anime fans and get real-time support.</p>
          </div>
          <div className="contact-card">
            <h3>Office</h3>
            <p>{siteConfig.location.address}</p>
            <p>{siteConfig.location.city}, {siteConfig.location.state} {siteConfig.location.zip}</p>
            <p>{siteConfig.location.country}</p>
          </div>
        </div>

        <h2>How Can We Help?</h2>
        <ul>
          <li><strong>Suggest a Site:</strong> Know a great HiAnime alternative? Email us with the site name and URL.</li>
          <li><strong>Report Issues:</strong> Found a broken link on our <Link to="/alternatives">alternatives list</Link>? Let us know.</li>
          <li><strong>Partnership:</strong> Interested in collaborating? We are open to partnerships.</li>
        </ul>

        <p>
          Learn more <Link to="/about">about our team</Link> or read our <Link to="/privacy">Privacy Policy</Link>.
        </p>
      </div>
    </>
  );
}
