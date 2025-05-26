import React from "react";
import vector1 from "../../../assets/vector1.png";
import vector2 from "../../../assets/vector2.png";
import vector3 from "../../../assets/vector3.png";

const logos = [vector1, vector2, vector3];

const vector = () => {
  // Repeat logos enough times to ensure smooth scroll

  const repeatedLogos = [
    ...logos,
    ...logos,
    ...logos,
    ...logos,
    ...logos,
    ...logos,
    ...logos,
    ...logos,
    ...logos,
    ...logos,
  ]; // At least 10x total

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
                className="vector__logo"
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
                className="vector__logo"
              />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default vector;
