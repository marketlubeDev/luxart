import React from "react";

const logos = [
  "https://res.cloudinary.com/dzuqczvb7/image/upload/v1750419817/honeywell_logo.svg_yp4jtg.svg",
  "https://res.cloudinary.com/dzuqczvb7/image/upload/v1750419817/ultratech_cement_ltd_logo.svg_voocgg.svg",
  "https://res.cloudinary.com/dzuqczvb7/image/upload/v1750419817/hikvision_logo.svg_scc2sy.svg",
  "https://res.cloudinary.com/dzuqczvb7/image/upload/v1750419806/philips_logo.svg_yahqfq.svg",
  "https://res.cloudinary.com/dzuqczvb7/image/upload/v1750419806/tata_steel_logo.svg_dtcimq.svg",
  "https://res.cloudinary.com/dzuqczvb7/image/upload/v1750423052/hettich_group_logo.svg_1_fll88i.svg",
  "https://res.cloudinary.com/dzuqczvb7/image/upload/v1750419805/legrand_logo.svg_rappv2.svg",
  "https://res.cloudinary.com/dzuqczvb7/image/upload/v1750423051/toto_usa_logo.svg_1_mea7z3.svg",
  "https://res.cloudinary.com/dzuqczvb7/image/upload/v1750419804/siemens_logo.svg_cjnw9i.svg",
  "https://res.cloudinary.com/dzuqczvb7/image/upload/v1750423052/Kohler_1_wuuif3.svg",
  "https://res.cloudinary.com/dzuqczvb7/image/upload/v1750419783/grohe_logo.svg_oxm7xa.svg",
  "https://res.cloudinary.com/dzuqczvb7/image/upload/v1750423052/jaquar_logo.svg_1_dohuiz.svg",
  "https://res.cloudinary.com/dzuqczvb7/image/upload/v1750423052/mitsubishi_electric_logo.svg_1_nqgbgo.svg",
  "https://res.cloudinary.com/dzuqczvb7/image/upload/v1750419767/asian_paints_logo.svg_ir4epr.svg",
  "https://res.cloudinary.com/dzuqczvb7/image/upload/v1750419727/Logo_Alternative.svg_mzgd9f.svg",
  "https://res.cloudinary.com/dzuqczvb7/image/upload/v1750419727/kajaria_ceramics_logo.png_qcsk1r.png",
  "https://res.cloudinary.com/dzuqczvb7/image/upload/v1751282894/Schneider_cu4bjc.svg",
  "https://res.cloudinary.com/dzuqczvb7/image/upload/v1750419726/fbcab77d7cecbafac645ae5f4bb4eff33ff452c6_psp9ui.png",
  "https://res.cloudinary.com/dzuqczvb7/image/upload/v1750419726/simpolo_tiles_and_bathware_logo.png_ywbtl8.png",
  "https://res.cloudinary.com/dzuqczvb7/image/upload/v1750419726/image_3352_l8j2iw.png",
  "https://res.cloudinary.com/dzuqczvb7/image/upload/v1750419726/image_3350_xe7zja.png",
];

const vector = () => {
  // Create two sets of logos for seamless animation
  const repeatedLogos = [...logos, ...logos];

  return (
    <section className="vector">
      <h2 className="vector__title">
        We believe in creating <span>Homes</span> you love
      </h2>

      <div className="vector__slider-wrapper">
        {/* First line - scrolls left */}
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

        {/* Second line - scrolls right */}
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
