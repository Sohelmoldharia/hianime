import { Link } from "react-router-dom";
import siteConfig from "../data/siteConfig";

export default function Footer() {
  return (
    <footer className="footer">
      <div className="footer-inner">
        <div className="footer-top">
          <span>HiAnimeAlternative.net</span>
          <div className="footer-social">
            <a href={siteConfig.social.discord} target="_blank" rel="noopener noreferrer">Discord</a>
          </div>
        </div>
        <div className="footer-links">
          <Link to="/">Home</Link>
          <Link to="/alternatives">Alternatives</Link>
          <Link to="/about">About</Link>
          <Link to="/contact">Contact</Link>
          <Link to="/privacy">Privacy</Link>
          <Link to="/terms">Terms</Link>
          <a href="/sitemap.xml">Sitemap</a>
          <a href="/rss.xml">RSS</a>
        </div>
        <p className="footer-disclaimer">
          &copy; {new Date().getFullYear()} {siteConfig.siteName}. {siteConfig.location.city}, {siteConfig.location.state}. We do not host any anime content. This site is for informational purposes only.
        </p>
      </div>
    </footer>
  );
}
