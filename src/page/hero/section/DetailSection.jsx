import React, { useEffect } from "react";
import phoneIcon from "../../../assets/Phone.svg";

import img1 from "../../../assets/cheek1.jpg";
import img2 from "../../../assets/cheek2.jpg";
import img3 from "../../../assets/kalama1.jpg";
import img4 from "../../../assets/kalama2.jpg";
import img5 from "../../../assets/kalama3.jpg";
import img6 from "../../../assets/kalama4.jpg";
import img7 from "../../../assets/kalama5.jpg";
import img8 from "../../../assets/kalama6.jpg";
import img9 from "../../../assets/kondoti1.jpg";
import img10 from "../../../assets/pattambi1.jpg";
// import img11 from "../../../assets/up3.png";
// import img12 from "../../../assets/up4.png";

const floatingImages = [
  "https://res.cloudinary.com/ds07e7rod/image/upload/v1750248400/kalamassery2_icwwzj.jpg",
  "https://res.cloudinary.com/ds07e7rod/image/upload/v1750248400/kalamassery3_oshtbw.jpg",
  "https://res.cloudinary.com/ds07e7rod/image/upload/v1750248398/kalamassery4_twdt0z.jpg",
  "https://res.cloudinary.com/ds07e7rod/image/upload/v1750248399/cheek1_yizqrn.jpg",
  "https://res.cloudinary.com/ds07e7rod/image/upload/v1750248399/cheek2_aubvsf.jpg",
  "https://res.cloudinary.com/ds07e7rod/image/upload/v1750248399/cheek3_egidpo.jpg",
  "https://res.cloudinary.com/ds07e7rod/image/upload/v1750248400/kalamassery13_sor7ru.jpg",
  "https://res.cloudinary.com/ds07e7rod/image/upload/v1750248399/kondotty1_edylsw.jpg",
  "https://res.cloudinary.com/ds07e7rod/image/upload/v1750248402/kalamassery15_nwtbmi.jpg",
  "https://res.cloudinary.com/ds07e7rod/image/upload/v1750248401/kalamassery16_gsbz0t.jpg",
  "https://res.cloudinary.com/ds07e7rod/image/upload/v1750248401/kalamassery17_uvdhgl.jpg",
  "https://res.cloudinary.com/ds07e7rod/image/upload/v1750248401/kalamassery14_onysop.jpg",
  "https://res.cloudinary.com/ds07e7rod/image/upload/v1750248398/kalamassery19_aaq3nb.jpg",
  "https://res.cloudinary.com/ds07e7rod/image/upload/v1750248398/kalamassery20_qzzkfm.jpg",

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
  useEffect(() => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  }, []);

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
