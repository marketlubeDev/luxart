import React from "react";
import starPng from "../../../assets/star.png";
import UserIcon from "../../../assets/user.png";
import { Swiper, SwiperSlide } from "swiper/react";
import {
  EffectCoverflow,
  Navigation,
  Pagination,
  Autoplay,
} from "swiper/modules";

// Import Swiper styles
import "swiper/css";
import "swiper/css/effect-coverflow";
import "swiper/css/pagination";
import "swiper/css/navigation";

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
  return (
    <section id="testimonials" className="testimonial-section">
      <h2 className="testimonial-title">
        What our <span className="highlight">client</span> says
      </h2>

      <div className="testimonial-carousel-wrapper">
        <Swiper
          effect={"coverflow"}
          grabCursor={true}
          centeredSlides={true}
          loop={true}
          slidesPerView={3}
          initialSlide={1}
          spaceBetween={30}
          coverflowEffect={{
            rotate: 0,
            stretch: 0,
            depth: 100,
            modifier: 1.5,
            slideShadows: false,
          }}
          pagination={{
            clickable: true,
          }}
          navigation={true}
          autoplay={{
            delay: 4000,
            disableOnInteraction: false,
          }}
          modules={[EffectCoverflow, Pagination, Navigation, Autoplay]}
          className="testimonial-swiper"
          breakpoints={{
            320: {
              slidesPerView: 1,
              spaceBetween: 20,
            },
            768: {
              slidesPerView: 3,
              spaceBetween: 30,
            },
          }}
        >
          {testimonialsData.map((item, index) => (
            <SwiperSlide key={index}>
              <div className="testimonial-card">
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
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </section>
  );
}

export default Testimonials;
