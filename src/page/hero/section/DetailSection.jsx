import React from "react";
import phoneIcon from "../../../assets/Phone.svg";

import img1 from "../../../assets/up1.png";
import img2 from "../../../assets/up2.png";
import img3 from "../../../assets/up3.png";
import img4 from "../../../assets/up4.png";
import img5 from "../../../assets/up1.png";
import img6 from "../../../assets/up2.png";
import img7 from "../../../assets/up3.png";
import img8 from "../../../assets/up4.png";
import img9 from "../../../assets/up1.png";
import img10 from "../../../assets/up2.png";
// import img11 from "../../../assets/up3.png";
// import img12 from "../../../assets/up4.png";

const floatingImages = [
  img1,
  img2,
  img3,
  img4,
  img5,
  img6,
  img7,
  img8,
  img9,
  img10,
  // img11,
  // img12,
];

const DetailSection = () => {
  const handleWhatsAppClick = () => {
    const phoneNumber = "+918075521186"; // Replace with your WhatsApp number
    const message = "Hello, I'm interested in your premium housing projects.";
    const whatsappUrl = `https://wa.me/${phoneNumber}?text=${encodeURIComponent(
      message
    )}`;
    window.open(whatsappUrl, "_blank");
  };

  return (
    <section className="detail-section">
      {/* Floating background images */}
      {floatingImages.map((img, index) => (
        <img
          key={index}
          src={img}
          alt={`floating-${index}`}
          className={`floating-image pos-${index + 1}`}
        />
      ))}

      {/* Main content */}
      <div className="detail-section__content">
        <h2>
          We Handle Every <span>Detail</span>
        </h2>
        <p>
          From start to finish, we handle everything—so you can enjoy moving
          into the home you've dreamed of
        </p>
        <button className="enquire-btn" onClick={handleWhatsAppClick}>
          <img src={phoneIcon} alt="Phone" className="phone-icon" />
          Enquire now
        </button>
      </div>
    </section>
  );
};

export default DetailSection;
