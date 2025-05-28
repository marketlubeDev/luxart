import React, { useState } from "react";
import logo from "../../src/assets/luxartlogo.svg";
import phoneIcon from "../../src/assets/Phone.svg";
import { Link } from "react-router-dom";

const header = () => {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <nav className="navbar">
      <div className="navbar__logo">
        <Link to="/">
          <img src={logo} alt="Luxart Logo" />
        </Link>
      </div>
      <div
        className={`navbar__hamburger${menuOpen ? " open" : ""}`}
        onClick={() => setMenuOpen((prev) => !prev)}
        aria-label="Toggle menu"
        tabIndex={0}
        role="button"
      >
        <span />
        <span />
        <span />
      </div>
      <ul className={`navbar__links${menuOpen ? " open" : ""}`}>
        <li>
          <Link to="/">Home</Link>
        </li>

        <li>
          <Link to="/testimonials">Testimonials</Link>
        </li>
        <li>
          <Link to="/projects">Projects</Link>
        </li>

        <li>
          <Link to="/about">About Us</Link>
        </li>
      </ul>
      <div className="navbar__cta">
        <button className="enquire-button">
          <img src={phoneIcon} alt="Phone" className="phone-icon" />
          Enquire now
        </button>
      </div>
    </nav>
  );
};

export default header;
