import React, { useState, useEffect } from "react";
import starPng from "../../../assets/star.png";
import { FaArrowLeft, FaArrowRight } from "react-icons/fa";
import UserIcon from "../../../assets/user.png";

const testimonialsData = [
  {
    name: "Suresh Nair",
    role: "Property Developer",
    avatar: UserIcon,
    rating: 5,
    text: "From the first walkthrough to the final handover, every detail was impeccable. The craftsmanship, the finishes, and the professionalism of the team truly exceeded our expectations. Our home is everything we dreamed of and more.",
  },
  {
    name: "Prakash Menon",
    role: "Interior Designer",
    avatar: UserIcon,
    rating: 4,
    text: "The attention to detail and design made the entire process smooth and exciting. I absolutely love how my space turned out!",
  },
  {
    name: "Vineeth Kumar",
    role: "Real Estate Agent",
    avatar: UserIcon,
    rating: 5,
    text: "Working with the team was a pleasure. Their professionalism and efficiency ensured my client's home was delivered on time and beautifully done.",
  },
  {
    name: "Anoop Pillai",
    role: "Architect",
    avatar: UserIcon,
    rating: 5,
    text: "An outstanding experience from concept to completion. Their team brings visions to life with unmatched dedication.",
  },
  {
    name: "Jishnu Raj",
    role: "Tech Entrepreneur",
    avatar: UserIcon,
    rating: 5,
    text: "The quality of construction and the level of service I received were truly world-class. Highly recommended!",
  },
  {
    name: "Sreeja Babu",
    role: "Marketing Manager",
    avatar: UserIcon,
    rating: 4,
    text: "They delivered beyond what we imagined. Their communication and professionalism stood out throughout the project.",
  },
  {
    name: "Biju Thomas",
    role: "Financial Analyst",
    avatar: UserIcon,
    rating: 5,
    text: "Our new home was delivered ahead of schedule with the finest finishes. I'm incredibly impressed by the team's efficiency.",
  },
  {
    name: "Abhilash Krishnan",
    role: "Content Creator",
    avatar: UserIcon,
    rating: 5,
    text: "Every inch of my home reflects thoughtful design and craftsmanship. I couldn't have asked for a better experience!",
  },
];

function Testimonials() {
  const [activeIndex, setActiveIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setActiveIndex((prevIndex) =>
        prevIndex === testimonialsData.length - 1 ? 0 : prevIndex + 1
      );
    }, 4000);
    return () => clearInterval(interval);
  }, []);
  const handlePrev = () => {
    setActiveIndex((prevIndex) =>
      prevIndex === 0 ? testimonialsData.length - 1 : prevIndex - 1
    );
  };

  const handleNext = () => {
    setActiveIndex((prevIndex) =>
      prevIndex === testimonialsData.length - 1 ? 0 : prevIndex + 1
    );
  };

  return (
    <section id="testimonials" className="testimonial-section">
      <h2 className="testimonial-title">
        What our <span className="highlight">client</span> says
      </h2>

      <div className="testimonial-carousel-wrapper">
        <button className="arrow left-arrow" onClick={handlePrev}>
          <FaArrowLeft />
        </button>

        <div className="testimonial-carousel">
          {testimonialsData.map((item, index) => {
            let className = "hidden";
            if (index === activeIndex) className = "active";
            else if (
              index ===
              (activeIndex - 1 + testimonialsData.length) %
                testimonialsData.length
            )
              className = "adjacent-left";
            else if (index === (activeIndex + 1) % testimonialsData.length)
              className = "adjacent-right";

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
                <p className="testimonial-text">" {item.text} "</p>
              </div>
            );
          })}
        </div>

        <button className="arrow right-arrow" onClick={handleNext}>
          <FaArrowRight />
        </button>
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
}

export default Testimonials;
