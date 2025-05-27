import React from "react";
import vector1 from "../../../assets/logo1.png";
import vector2 from "../../../assets/logo2.png";
import vector3 from "../../../assets/logo3.png";
import vector4 from "../../../assets/logo4.png";
import vector5 from "../../../assets/logo5.png";
import vector6 from "../../../assets/logo6.png";
import vector7 from "../../../assets/logo7.png";
import vector8 from "../../../assets/logo8.png";
// import vector9 from "../../../assets/logo9.png";
// import vector10 from "../../../assets/logo10.png";
import vector11 from "../../../assets/logo11.png";
import vector12 from "../../../assets/logo12.png";
import vector13 from "../../../assets/logo13.png";
import vector14 from "../../../assets/logo14.png";
import vector15 from "../../../assets/logo15.png";
import vector16 from "../../../assets/logo16.png";
import vector17 from "../../../assets/logo17.png";
import vector18 from "../../../assets/logo18.png";
// import vector19 from "../../../assets/logo19.png";
import vector20 from "../../../assets/logo20.png";

const logos = [
  vector1,
  vector2,
  vector3,
  vector4,
  vector5,
  vector6,
  vector7,
  vector8,
  // vector9,
  // vector10,
  vector11,
  vector12,
  vector13,
  vector14,
  vector15,
  vector16,
  vector17,
  vector18,
  // vector19,
  vector20,
];

const vector = () => {
  // Repeat logos enough times to ensure smooth scroll

  const repeatedLogos = [...logos, ...logos]; // At least 10x total

  return (
    <section className="vector">
      <h2 className="vector__title">
        We believe in creating <span>Homes</span> you love
      </h2>

      <div className="vector__slider-wrapper">
        {/* Seamless Line 1 */}
        <div className="vector__slider vector__slider--line1">
          {[...repeatedLogos, ...repeatedLogos].map((logo, index) => (
            <div className="vector__logo-box" key={`line1-${index}`}>
              <img
                src={logo}
                alt={`Logo ${index + 1}`}
                className="vector__logo vector__logo--grayscale"
              />
            </div>
          ))}
        </div>

        {/* Seamless Line 2 (reverse scroll) */}
        <div className="vector__slider vector__slider--line2">
          {[...repeatedLogos, ...repeatedLogos].map((logo, index) => (
            <div className="vector__logo-box" key={`line2-${index}`}>
              <img
                src={logo}
                alt={`Logo ${index + 1}`}
                className="vector__logo vector__logo--grayscale"
              />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default vector;
