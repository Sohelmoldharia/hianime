import { Link } from "react-router-dom";
import siteConfig from "../data/siteConfig";

export default function Footer() {
  return (
    <footer className="footer">
      <div className="container">
        <div className="footer-grid">
          <div className="footer-section">
            <h3>{siteConfig.siteName}</h3>
            <p>
              Your trusted source for finding the best HiAnime alternatives for
              free anime streaming. We curate and review the top anime streaming
              sites so you can find the perfect HiAnime replacement.
            </p>
          </div>
          <div className="footer-section">
            <h3>Quick Links</h3>
            <ul>
              <li>
                <Link to="/">Home</Link>
              </li>
              <li>
                <Link to="/alternatives">HiAnime Alternatives</Link>
              </li>
              <li>
                <Link to="/about">About Us</Link>
              </li>
              <li>
                <Link to="/contact">Contact Us</Link>
              </li>
            </ul>
          </div>
          <div className="footer-section">
            <h3>Legal</h3>
            <ul>
              <li>
                <Link to="/privacy">Privacy Policy</Link>
              </li>
              <li>
                <Link to="/terms">Terms of Service</Link>
              </li>
              <li>
                <a href="/sitemap.xml">Sitemap</a>
              </li>
              <li>
                <a href="/rss.xml">RSS Feed</a>
              </li>
            </ul>
          </div>
          <div className="footer-section">
            <h3>Location</h3>
            <p>
              {siteConfig.location.address}
              <br />
              {siteConfig.location.city}, {siteConfig.location.state}{" "}
              {siteConfig.location.zip}
              <br />
              {siteConfig.location.country}
            </p>
            <p>
              <a href={`mailto:${siteConfig.email}`}>{siteConfig.email}</a>
            </p>
          </div>
        </div>
        <div className="footer-bottom">
          <p>
            &copy; {new Date().getFullYear()} {siteConfig.siteName}. All rights
            reserved. Based in {siteConfig.location.city},{" "}
            {siteConfig.location.state}.
          </p>
          <p className="footer-disclaimer">
            Disclaimer: We do not host any anime content. This site is for
            informational purposes only. All trademarks belong to their
            respective owners.
          </p>
        </div>
      </div>
    </footer>
  );
}
