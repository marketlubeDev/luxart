import React from "react";
import image1 from "../../assets/image1.png";
import image2 from "../../assets/image2.png";
import image3 from "../../assets/image3.png";
import image4 from "../../assets/image4.png";
import image5 from "../../assets/image5.png";

const servicesData = [
  {
    title: "3D Design",
    description: "Creating visual representations of your building ideas.",
    image: image1,
  },
  {
    title: "Modeling",
    description: "Detailed and realistic modeling for visualization.",
    image: image2,
  },
  {
    title: "Construction",
    description: "Reliable and structured execution of architectural plans.",
    image: image3,
  },
  {
    title: "Interior Design",
    description: "Elegant and functional interior space planning.",
    image: image4,
  },
  {
    title: "Planning",
    description: "Strategic development and regulation of your project.",
    image: image5,
  },
  {
    title: "Exterior Design",
    description: "Appealing and weather-resistant outer aesthetics.",
    image: image1,
  },
  {
    title: "Renovation",
    description: "Upgrading old spaces with modern solutions.",
    image: image2,
  },
  {
    title: "Landscape Design",
    description: "Organizing outdoor areas creatively.",
    image: image3,
  },
  {
    title: "Consultation",
    description: "Expert advice for design and execution.",
    image: image4,
  },
  {
    title: "Budget Planning",
    description: "Estimate and manage costs efficiently.",
    image: image5,
  },
];

const Services = () => {
  return (
    <div className="services-page">
      <div className="services-page__header">
        <h1>Our Services</h1>
        <p>
          Discover our comprehensive range of architectural and design services
        </p>
      </div>
      <div className="services-page__grid">
        {servicesData.map((service, index) => (
          <div className="services-page__card" key={index}>
            <div
              className="services-page__image"
              style={{ backgroundImage: `url(${service.image})` }}
            />
            <div className="services-page__content">
              <h3>{service.title}</h3>
              <p>{service.description}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Services;
