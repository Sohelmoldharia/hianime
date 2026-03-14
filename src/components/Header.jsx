import { Link, NavLink } from "react-router-dom";

export default function Header() {
  return (
    <>
      <header className="header">
        <div className="container">
          <Link to="/" className="logo">
            <span className="logo-icon">&#9670;</span> HiAnime Alternative
          </Link>
          <nav className="nav">
            <NavLink to="/" end>Home</NavLink>
            <NavLink to="/alternatives">Alternatives</NavLink>
            <NavLink to="/about">About</NavLink>
            <NavLink to="/contact">Contact</NavLink>
          </nav>
        </div>
      </header>
      <div className="header-spacer" />
    </>
  );
}
