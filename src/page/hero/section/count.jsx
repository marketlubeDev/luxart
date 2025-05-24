import React from "react";

const stats = [
  { value: "100+", label: "Happy Clients" },
  { value: "25+", label: "Engineers" },
  { value: "100K+", label: "Sq. ft" },
];

const count = () => {
  return (
    <section className="count">
      <div className="count__wrapper">
        {stats.map((stat, index) => (
          <div className="count__item" key={index}>
            <h2 className="count__value">{stat.value}</h2>
            <p className="count__label">{stat.label}</p>
          </div>
        ))}
      </div>
    </section>
  );
};

export default count;
