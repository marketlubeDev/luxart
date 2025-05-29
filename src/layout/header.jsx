import React, { useState } from "react";
import logo from "../../src/assets/luxartlogo.svg";
import phoneIcon from "../../src/assets/Phone.svg";
import { Link, useLocation, useNavigate } from "react-router-dom";

const header = () => {
  const [menuOpen, setMenuOpen] = useState(false);
  const navigate = useNavigate();
  const location = useLocation();

  const isActive = (path) => {
    return location.pathname === path;
  };

  const handleWhatsAppClick = () => {
    const phoneNumber = "+916238285878"; // Your WhatsApp number
    const message = "Hello, I'm interested in your premium housing projects.";
    const whatsappUrl = `https://wa.me/${phoneNumber}?text=${encodeURIComponent(
      message
    )}`;
    window.open(whatsappUrl, "_blank");
  };

  const scrollToTestimonials = () => {
    if (location.pathname !== "/") {
      // If not on home page, navigate to home first
      navigate("/");
      // Wait for navigation to complete before scrolling
      setTimeout(() => {
        const testimonialsSection = document.getElementById("testimonials");
        if (testimonialsSection) {
          testimonialsSection.scrollIntoView({ behavior: "smooth" });
        }
      }, 100);
    } else {
      // If already on home page, just scroll
      const testimonialsSection = document.getElementById("testimonials");
      if (testimonialsSection) {
        testimonialsSection.scrollIntoView({ behavior: "smooth" });
      }
    }
    setMenuOpen(false); // Close mobile menu after clicking
  };

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
          <Link to="/" className={isActive("/") ? "active" : ""}>
            Home
          </Link>
        </li>
        <li>
          <button
            onClick={scrollToTestimonials}
            className="navbar__link-button"
          >
            Testimonials
          </button>
        </li>
        <li>
          <Link
            to="/projects"
            className={isActive("/projects") ? "active" : ""}
          >
            Projects
          </Link>
        </li>
        <li>
          <Link to="/about" className={isActive("/about") ? "active" : ""}>
            About Us
          </Link>
        </li>
      </ul>
      <div className="navbar__cta">
        <button className="enquire-button" onClick={handleWhatsAppClick}>
          <img src={phoneIcon} alt="Phone" className="phone-icon" />
          Enquire now
        </button>
      </div>
    </nav>
  );
};

export default header;
