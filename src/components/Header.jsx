import { Link, NavLink } from "react-router-dom";
import siteConfig from "../data/siteConfig";

export default function Header() {
  return (
    <header className="header">
      <div className="container">
        <Link to="/" className="logo">
          <span className="logo-icon">&#9670;</span> {siteConfig.siteName}
        </Link>
        <nav className="nav">
          <NavLink to="/" end>
            Home
          </NavLink>
          <NavLink to="/alternatives">Alternatives</NavLink>
          <NavLink to="/about">About</NavLink>
          <NavLink to="/contact">Contact</NavLink>
        </nav>
      </div>
    </header>
  );
}
