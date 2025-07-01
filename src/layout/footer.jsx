import React, { useEffect } from "react";
import { Link, useNavigate, useLocation } from "react-router-dom";
import phone from "../assets/Phone.svg";
import logo from "../assets/luxartlogo.svg";
import phoneIcon from "../assets/footer2.svg";
import mailIcon from "../assets/footer3.svg";
import mapIcon from "../assets/footer1.svg";

const Footer = () => {
  const navigate = useNavigate();
  const location = useLocation();

  const handleEnquireClick = () => {
    const phoneNumber = "+918075521186"; // Replace with your actual WhatsApp number
    const message = "Hello, I would like to enquire about your services."; // Customize your message
    const whatsappUrl = `https://wa.me/${phoneNumber}?text=${encodeURIComponent(
      message
    )}`;
    window.open(whatsappUrl, "_blank");
  };

  const handleFooterServicesClick = (e) => {
    e.preventDefault();
    if (location.pathname === "/") {
      // Already on home, just scroll
      const servicesSection = document.getElementById("services");
      if (servicesSection) {
        servicesSection.scrollIntoView({ behavior: "smooth" });
      }
    } else {
      // Navigate to home and scroll after navigation
      navigate("/", { state: { scrollTo: "services" } });
    }
  };

  useEffect(() => {
    if (location.state && location.state.scrollTo === "services") {
      const servicesSection = document.getElementById("services");
      if (servicesSection) {
        servicesSection.scrollIntoView({ behavior: "smooth" });
      }
    }
  }, [location]);

  return (
    <footer className="footer">
      <div className="footer__content">
        {/* Contact Section */}
        <div className="footer__section">
          <h4 className="contact__heading">Contact</h4>
          <div className="footer__item">
            <img src={mailIcon} alt="Mail" className="footer__icon" />
            <span>md@luxartbuilders.com</span>
          </div>
          <div className="footer__item">
            <img src={phoneIcon} alt="Phone" className="footer__icon" />
            <span>8075521186</span>
          </div>
          <div className="footer__item">
            <img src={mapIcon} alt="Map" className="footer__icon" />
            <span>
              Luxart Builders Pvt. Ltd
              <br />
              HiLITE Business Park, Phase 2
              <br />
              7th Floor
              <br />
              Calicut, Kerala, India
            </span>
          </div>
        </div>

        {/* Logo and CTA */}
        <div className="footer__center">
          <img src={logo} alt="Luxart Logo" className="footer__logo" />
          <button className="enquire-button" onClick={handleEnquireClick}>
            <img src={phone} alt="Phone" className="phone-icon" />
            Enquire now
          </button>
        </div>
        {/* Quick Links */}
        <div className="footer__section">
          <ul className="footer__social">
            {/* <li>
              <a href="https://www.facebook.com">Facebook</a>
            </li> */}
            <li>
              <a href="https://www.instagram.com/luxart.in" target="_blank">
                Instagram
              </a>
            </li>
            <li>
              <a href="https://www.youtube.com/@Luxartbuilders">YouTube</a>
            </li>
          </ul>
        </div>

        <div className="footer__section">
          <h4 className="links__heading">Quick Links</h4>
          <ul className="footer__links">
            <li>
              <Link
                to="/"
                onClick={() => {
                  window.scrollTo({ top: 0, behavior: "smooth" });
                }}
              >
                Home
              </Link>
            </li>
            <li>
              <Link to="/about">About Us</Link>
            </li>
            <li>
              <a href="#services" onClick={handleFooterServicesClick}>
                Services
              </a>
            </li>
          </ul>
        </div>
      </div>
      <div className="footer__bottom">
        <p>
          © 2025 Luxart All rights reserved | Powered by{" "}
          <a href="https://marketlube.in">Marketlube</a>
        </p>
      </div>
    </footer>
  );
};

export default Footer;
