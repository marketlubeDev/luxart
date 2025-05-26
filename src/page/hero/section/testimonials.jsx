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
    name: "Sophia Turner",
    role: "Interior Designer",
    avatar: avatar1,
    rating: 5,
    text: "The attention to detail and design made the entire process smooth and exciting. I absolutely love how my space turned out!",
  },
  {
    name: "Liam Bennett",
    role: "Real Estate Agent",
    avatar: avatar1,
    rating: 5,
    text: "Working with the team was a pleasure. Their professionalism and efficiency ensured my client’s home was delivered on time and beautifully done.",
  },
  {
    name: "Olivia James",
    role: "Architect",
    avatar: avatar1,
    rating: 5,
    text: "An outstanding experience from concept to completion. Their team brings visions to life with unmatched dedication.",
  },
  {
    name: "Noah Patel",
    role: "Tech Entrepreneur",
    avatar: avatar1,
    rating: 5,
    text: "The quality of construction and the level of service I received were truly world-class. Highly recommended!",
  },
  {
    name: "Emma Rodriguez",
    role: "Marketing Manager",
    avatar: avatar1,
    rating: 5,
    text: "They delivered beyond what we imagined. Their communication and professionalism stood out throughout the project.",
  },
  {
    name: "Ethan Chen",
    role: "Financial Analyst",
    avatar: avatar1,
    rating: 5,
    text: "Our new home was delivered ahead of schedule with the finest finishes. I’m incredibly impressed by the team’s efficiency.",
  },
  {
    name: "Ava Thompson",
    role: "Content Creator",
    avatar: avatar1,
    rating: 5,
    text: "Every inch of my home reflects thoughtful design and craftsmanship. I couldn’t have asked for a better experience!",
  },
  {
    name: "William Johnson",
    role: "Civil Engineer",
    avatar: avatar1,
    rating: 5,
    text: "The construction quality and project management were top-notch. The team stayed on track and on budget, which is rare!",
  },
  {
    name: "Isabella Martinez",
    role: "Photographer",
    avatar: avatar1,
    rating: 5,
    text: "Absolutely stunning work. The home not only looks amazing but feels comfortable and well thought out.",
  },
];

const testimonials = () => {
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

      <div className="testimonial-carousel-wrapper">
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

export default testimonials;
