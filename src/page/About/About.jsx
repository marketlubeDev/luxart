import React, { useEffect, useState, useRef } from "react";
import Chairman from "../../assets/Chairman.jpg";

// Custom hook for counting animation
const useCountAnimation = (target, duration = 2000) => {
  const [count, setCount] = useState(0);
  const [isVisible, setIsVisible] = useState(false);
  const elementRef = useRef(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting && !isVisible) {
          setIsVisible(true);
        }
      },
      { threshold: 0.5 }
    );

    if (elementRef.current) {
      observer.observe(elementRef.current);
    }

    return () => observer.disconnect();
  }, [isVisible]);

  useEffect(() => {
    if (!isVisible) return;

    const startTime = Date.now();
    const startValue = 0;

    const animate = () => {
      const currentTime = Date.now();
      const elapsed = currentTime - startTime;
      const progress = Math.min(elapsed / duration, 1);

      // Easing function for smooth animation
      const easeOutQuart = 1 - Math.pow(1 - progress, 4);
      const currentCount = Math.floor(
        startValue + (target - startValue) * easeOutQuart
      );

      setCount(currentCount);

      if (progress < 1) {
        requestAnimationFrame(animate);
      }
    };

    animate();
  }, [isVisible, target, duration]);

  return [count, elementRef];
};

export default function About() {
  const [happyClientsCount, happyClientsRef] = useCountAnimation(100, 2000);
  const [architectCount, architectRef] = useCountAnimation(25, 2000);
  const [sqftCount, sqftRef] = useCountAnimation(100, 2000);

  useEffect(() => {
    const smoothScrollToTop = () => {
      const scrollStep = -window.scrollY / (500 / 15);
      const scrollInterval = setInterval(() => {
        if (window.scrollY !== 0) {
          window.scrollBy(0, scrollStep);
        } else {
          clearInterval(scrollInterval);
        }
      }, 15);
    };
    smoothScrollToTop();
  }, []);

  return (
    <>
      <div className="aboutPage-container">
        <div className="aboutPage-container__Banner">
          <h1>
            Precision <span>Building</span>
          </h1>
        </div>
        <div className="aboutPage-container__Content">
          <div className="aboutPage-container__Content__top">
            <h1>
              About <span>Us</span>
            </h1>
            <p className="para1">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Tempora
              magnam nisi illum? Nam atque, velit voluptatum adipisci optio at
              placeat asperiores aliquam iusto in sapiente magni eaque, commodi
              esse repellendus explicabo ipsum ullam eligendi minus illum, odio
              excepturi. Incidunt recusandae iusto provident voluptatum tempore,
              amet, nemo quod, eum possimus hic laudantium eius! Repudiandae
              reiciendis fugiat molestias suscipit? Asperiores fugit commodi
              dolorem hic atque, deleniti laboriosam aperiam. Omnis, nisi rem!
              Odit quidem earum officia officiis consequatur qui optio similique
              praesentium placeat!
            </p>
          </div>
          <div className="aboutPage-container__Content__bottom">
            <div className="aboutPage-container__Content__bottom__left">
              <div className="aboutPage-container__Content__bottom__left__top">
                <div
                  className="aboutPage-container__Content__bottom__left__top__countup"
                  ref={happyClientsRef}
                >
                  <h2>{happyClientsCount}+</h2>
                  <p>Happy Clients</p>
                </div>
                <div
                  className="aboutPage-container__Content__bottom__left__top__countup"
                  ref={architectRef}
                >
                  <h2>{architectCount}+</h2>
                  <p>Architect</p>
                </div>
                <div
                  className="aboutPage-container__Content__bottom__left__top__countup"
                  ref={sqftRef}
                >
                  <h2>{sqftCount}K+</h2>
                  <p>Sq. ft</p>
                </div>
              </div>
              <div className="aboutPage-container__Content__bottom__left__bottom">
                <h1>
                  The <span>Man</span> Behind
                </h1>
                <p>
                  Lorem ipsum dolor sit amet consectetur adipisicing elit.
                  Tempora magnam nisi illum? Nam atque, velit voluptatum
                  adipisci optio at placeat asperiores aliquam iusto in sapiente
                  magni eaque, commodi esse repellendus explicabo ipsum ullam
                  eligendi minus illum, odio excepturi. Incidunt recusandae
                  iusto provident voluptatum tempore, amet, nemo quod, eum
                  possimus hic laudantium eius! Repudiandae reiciendis fugiat
                  molestias suscipit? Asperiores fugit commodi dolorem hic
                  atque, deleniti laboriosam aperiam. Omnis, nisi rem! Odit
                  quidem earum officia officiis consequatur qui optio similique
                  praesentium placeat!
                </p>
              </div>
            </div>

            <div className="aboutPage-container__Content__bottom__right">
              <img
                src={
                  "https://res.cloudinary.com/dzuqczvb7/image/upload/v1750425947/dp_3_lctcqt.jpg"
                }
                alt="Chairman"
              />
              <h2>John Doe</h2>
              <p>Chairman of Luxart</p>
            </div>
          </div>
        </div>
        <div className="aboutPage-container__Mission">
          <div className="aboutPage-container__Mission__top">
            <h2>
              Our <span>Mission</span>
            </h2>
            <p>
              To design and build exceptional spaces that blend innovation,
              functionality, and elegance , turning visions into{" "}
              <span>lasting architectural realities</span>.
            </p>
          </div>
        </div>

        <div className="aboutPage-container__VisionGoal">
          <div className="aboutPage-container__VisionGoal__Container">
            <div className="aboutPage-container__VisionGoal__Container__Left">
              <div className="aboutPage-container__VisionGoal__Container__Left__ExpandingGoal">
                <h2>
                  Expanding <span>Goal</span>
                </h2>
                <p>
                  Lorem ipsum dolor sit amet consectetur adipisicing elit. Id
                  provident alias delectus, architecto earum quidem pariatur
                  atque, adipisci iusto quam perspiciatis quibusdam amet et.
                  Soluta rem doloribus modi. Accusantium hic modi nulla quia
                  error debitis fuga iusto quibusdam eos ipsam aperiam, magnam
                  totam excepturi quod libero, itaque maxime assumenda at
                  provident tempora ipsum nihil dolorem perspiciatis sit. Dolor,
                  temporibus. Est amet velit, accusantium nobis reprehenderit
                  illo iure perspiciatis error odio quam, ducimus quos
                  distinctio quas minus obcaecati laborum quisquam deleniti.
                </p>
              </div>

              <div className="aboutPage-container__VisionGoal__Container__Left__CompanyVision">
                <h2>
                  Company <span>Vision</span>
                </h2>
                <p>
                  Lorem ipsum, dolor sit amet consectetur adipisicing elit. Quos
                  vero accusantium delectus expedita. Cum vel explicabo, libero
                  maiores tempora perferendis consectetur a, doloribus
                  blanditiis hic nostrum quisquam, voluptates nemo! Repellendus?
                </p>
              </div>
            </div>
            <div className="aboutPage-container__VisionGoal__Container__Right">
              <img
                src="https://res.cloudinary.com/dzuqczvb7/image/upload/v1748521313/WhatsApp_Image_2025-05-29_at_17.48.39_2_xqlzxd.jpg"
                alt="vision"
              />
            </div>
          </div>
        </div>

        <div className="aboutPage-container__Story">
          <h2>
            The <span>Brand</span> Story
          </h2>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Inventore,
            facere sequi optio odio, ullam doloribus expedita rem, nam veritatis
            ipsa quibusdam voluptatibus aliquam repudiandae alias in ex? Eos
            consectetur recusandae aliquid maxime eligendi odit esse deleniti,
            corporis dolor, error laborum laudantium incidunt quia voluptates
            aperiam? Sint animi repellat, expedita id nobis laudantium laborum
            nisi corporis maiores officiis voluptatem alias facilis labore quo
            eum repudiandae eos ab soluta qui repellendus aperiam
            necessitatibus! Cupiditate est magnam harum velit, corrupti quaerat
            pariatur sint.
          </p>
        </div>
      </div>
    </>
  );
}
