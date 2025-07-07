import React, { useState } from "react";
import logo from "../../src/assets/luxartlogo.svg";
import phoneIcon from "../../src/assets/Phone.svg";
import { Link, useLocation, useNavigate } from "react-router-dom";

const Header = () => {
  const [menuOpen, setMenuOpen] = useState(false);
  const [isNavigating, setIsNavigating] = useState(false);
  const navigate = useNavigate();
  const location = useLocation();

  React.useEffect(() => {
    if (menuOpen) {
      document.body.style.overflow = "hidden";
      document.body.style.height = "100vh";
    } else {
      document.body.style.overflow = "unset";
      document.body.style.height = "auto";
    }

    return () => {
      document.body.style.overflow = "unset";
      document.body.style.height = "auto";
    };
  }, [menuOpen]);

  React.useEffect(() => {
    setMenuOpen(false);
    setIsNavigating(false);
  }, [location.pathname]);

  React.useEffect(() => {
    if (location.state?.scrollTo === "testimonials") {
      setIsNavigating(true);
      setTimeout(() => {
        const testimonialsSection = document.getElementById("testimonials");
        if (testimonialsSection) {
          testimonialsSection.scrollIntoView({ behavior: "smooth" });
          window.history.replaceState({}, document.title);
        }
        setIsNavigating(false);
      }, 100);
    }
  }, [location.state]);

  const isActive = (path) => {
    return location.pathname === path;
  };

  const handleWhatsAppClick = () => {
    const phoneNumber = "+918075521186";
    const message = "Hello, I'm interested in your premium housing projects.";
    const whatsappUrl = `https://wa.me/${phoneNumber}?text=${encodeURIComponent(
      message
    )}`;
    window.open(whatsappUrl, "_blank");
  };

  const scrollToTestimonials = () => {
    setIsNavigating(true);
    if (location.pathname !== "/") {
      navigate("/", { state: { scrollTo: "testimonials" } });
    } else {
      setTimeout(() => {
        const testimonialsSection = document.getElementById("testimonials");
        if (testimonialsSection) {
          testimonialsSection.scrollIntoView({ behavior: "smooth" });
        }
        setIsNavigating(false);
      }, 100);
    }
    setMenuOpen(false);
  };

  const handleLinkClick = () => {
    setMenuOpen(false);
  };

  return (
    <nav className="navbar">
      <div className={`navbar__logo${menuOpen ? " hide" : ""}`}>
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
          <Link
            to="/"
            className={isActive("/") ? "active" : ""}
            onClick={handleLinkClick}
          >
            Home
          </Link>
        </li>
        <li>
          <button
            onClick={scrollToTestimonials}
            className={`navbar__link-button${isNavigating ? " loading" : ""}`}
            disabled={isNavigating}
          >
            {isNavigating ? "Loading..." : "Testimonials"}
          </button>
        </li>
        <li>
          <Link
            to="/projects"
            className={isActive("/projects") ? "active" : ""}
            onClick={handleLinkClick}
          >
            Projects
          </Link>
        </li>
        <li>
          <Link
            to="/about"
            className={isActive("/about") ? "active" : ""}
            onClick={handleLinkClick}
          >
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

export default Header;
