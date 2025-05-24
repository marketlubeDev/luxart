import React, { useState, useEffect } from "react";

import avatar1 from "../../../assets/avatar1.png";
import starPng from "../../../assets/star.png";

const testimonialsData = [
  {
    name: "Marques Marq",
    role: "Property Developer",
    avatar: avatar1,
    rating: 5,
    text: "From the first walkthrough to the final handover, every detail was impeccable. The craftsmanship, the finishes, and the professionalism of the team truly exceeded our expectations. Our home is everything we dreamed of and more.",
  },
  {
    name: "Marques Marq",
    role: "Property Developer",
    avatar: avatar1,
    rating: 5,
    text: "From the first walkthrough to the final handover, every detail was impeccable. The craftsmanship, the finishes, and the professionalism of the team truly exceeded our expectations. Our home is everything we dreamed of and more.",
  },
  {
    name: "Marques Marq",
    role: "Property Developer",
    avatar: avatar1,
    rating: 5,
    text: "From the first walkthrough to the final handover, every detail was impeccable. The craftsmanship, the finishes, and the professionalism of the team truly exceeded our expectations. Our home is everything we dreamed of and more.",
  },
  {
    name: "Marques Marq",
    role: "Property Developer",
    avatar: avatar1,
    rating: 5,
    text: "From the first walkthrough to the final handover, every detail was impeccable. The craftsmanship, the finishes, and the professionalism of the team truly exceeded our expectations. Our home is everything we dreamed of and more.",
  },
  {
    name: "Marques Marq",
    role: "Property Developer",
    avatar: avatar1,
    rating: 5,
    text: "From the first walkthrough to the final handover, every detail was impeccable. The craftsmanship, the finishes, and the professionalism of the team truly exceeded our expectations. Our home is everything we dreamed of and more.",
  },
  {
    name: "Marques Marq",
    role: "Property Developer",
    avatar: avatar1,
    rating: 5,
    text: "From the first walkthrough to the final handover, every detail was impeccable. The craftsmanship, the finishes, and the professionalism of the team truly exceeded our expectations. Our home is everything we dreamed of and more.",
  },
  {
    name: "Marques Marq",
    role: "Property Developer",
    avatar: avatar1,
    rating: 5,
    text: "From the first walkthrough to the final handover, every detail was impeccable. The craftsmanship, the finishes, and the professionalism of the team truly exceeded our expectations. Our home is everything we dreamed of and more.",
  },
  {
    name: "Marques Marq",
    role: "Property Developer",
    avatar: avatar1,
    rating: 5,
    text: "From the first walkthrough to the final handover, every detail was impeccable. The craftsmanship, the finishes, and the professionalism of the team truly exceeded our expectations. Our home is everything we dreamed of and more.",
  },
  {
    name: "Marques Marq",
    role: "Property Developer",
    avatar: avatar1,
    rating: 5,
    text: "From the first walkthrough to the final handover, every detail was impeccable. The craftsmanship, the finishes, and the professionalism of the team truly exceeded our expectations. Our home is everything we dreamed of and more.",
  },
];

const Testimonials = () => {
  const [activeIndex, setActiveIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setActiveIndex((prevIndex) =>
        prevIndex === testimonialsData.length - 1 ? 0 : prevIndex + 1
      );
    }, 4000);

    return () => clearInterval(interval);
  }, []);

  return (
    <section className="testimonial-section">
      <h2 className="testimonial-title">
        What our <span className="highlight">Client</span> Says
      </h2>

      <div className="testimonial-carousel">
        {testimonialsData.map((item, index) => {
          let className = "hidden";
          if (index === activeIndex) {
            className = "active";
          } else if (
            index ===
            (activeIndex - 1 + testimonialsData.length) %
              testimonialsData.length
          ) {
            className = "adjacent-left";
          } else if (index === (activeIndex + 1) % testimonialsData.length) {
            className = "adjacent-right";
          }

          return (
            <div key={index} className={`testimonial-card ${className}`}>
              <div className="testimonial-header">
                <div className="testimonial-user">
                  <img src={item.avatar} alt={item.name} className="avatar" />
                  <div>
                    <div className="name">{item.name}</div>
                    <div className="role">{item.role}</div>
                  </div>
                </div>
                <div className="stars">
                  {[...Array(item.rating)].map((_, i) => (
                    <img key={i} src={starPng} alt="star" className="star" />
                  ))}
                </div>
              </div>
              <p className="testimonial-text">“ {item.text} ”</p>
            </div>
          );
        })}
      </div>

      <div className="testimonial-dots">
        {testimonialsData.map((_, index) => (
          <span
            key={index}
            className={`dot ${index === activeIndex ? "active" : ""}`}
            onClick={() => setActiveIndex(index)}
          />
        ))}
      </div>
    </section>
  );
};

export default Testimonials;
