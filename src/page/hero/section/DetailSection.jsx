import React from "react";
import phoneIcon from "../../../assets/phone.svg";

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
import img11 from "../../../assets/up3.png";
import img12 from "../../../assets/up4.png";
import img13 from "../../../assets/up1.png";
import img14 from "../../../assets/up2.png";
import img15 from "../../../assets/up3.png";
import img16 from "../../../assets/up4.png";
import img17 from "../../../assets/up1.png";
import img18 from "../../../assets/up2.png";

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
  img11,
  img12,
  img13,
  img14,
  img15,
  img16,
  img17,
  img18,
];

const DetailSection = () => {
  return (
    <section className="detail-section">
      {/* Floating background images */}
      {floatingImages.map((img, index) => (
        <img
          key={index}
          src={img}
          alt={`floating-${index}`}
          className={`floating-image floating-image-${index + 1}`}
        />
      ))}

      {/* Main content */}
      <div className="detail-section__content">
        <h2>
          We Handle Every <span>Detail</span>
        </h2>
        <p>
          From start to finish, we handle everything—so you can enjoy moving
          into the home you’ve dreamed of
        </p>
        <button className="enquire-btn">
          <img src={phoneIcon} alt="Phone" className="phone-icon" />
          Enquire now
        </button>
      </div>
    </section>
  );
};

export default DetailSection;
