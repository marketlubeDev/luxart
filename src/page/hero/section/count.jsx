import React, { useState, useEffect } from "react";

const stats = [
  { value: 100, label: "Happy Clients", suffix: "+" },
  { value: 25, label: "Architect", suffix: "+" },
  { value: 100, label: "Sq. ft", suffix: "K+" },
];

const Count = () => {
  const [animatedValues, setAnimatedValues] = useState(stats.map(() => 0));
  const [hasAnimated, setHasAnimated] = useState(false);

  useEffect(() => {
    if (!hasAnimated) {
      setHasAnimated(true);

      stats.forEach((stat, index) => {
        let startValue = 0;
        const endValue = stat.value;
        const duration = 2000; // 2 seconds
        const startTime = Date.now();

        const animate = () => {
          const currentTime = Date.now();
          const elapsed = currentTime - startTime;
          const progress = Math.min(elapsed / duration, 1);

          // Easing function for smooth animation
          const easeOutExpo =
            progress === 1 ? 1 : 1 - Math.pow(2, -10 * progress);
          const currentValue = Math.floor(
            startValue + (endValue - startValue) * easeOutExpo
          );

          setAnimatedValues((prev) => {
            const newValues = [...prev];
            newValues[index] = currentValue;
            return newValues;
          });

          if (progress < 1) {
            requestAnimationFrame(animate);
          }
        };

        // Start animation with a slight delay for each item
        setTimeout(() => {
          requestAnimationFrame(animate);
        }, index * 200);
      });
    }
  }, [hasAnimated]);

  return (
    <section className="count">
      <div className="count__wrapper">
        {stats.map((stat, index) => (
          <div className="count__item" key={index}>
            <h2 className="count__value">
              {animatedValues[index]}
              {stat.suffix}
            </h2>
            <p className="count__label">{stat.label}</p>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Count;
