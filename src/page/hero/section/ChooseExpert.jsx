import React from "react";
import expert1 from "../../../assets/expert1.jpg";
import expert2 from "../../../assets/expert2.jpg";
import expert3 from "../../../assets/expert3.jpg";

const engineers = [
  {
    id: 1,
    name: "Engineer 1",
    title: "Structural Specialist",
    experience: "12 years",
    area: "4,00,000 sq.ft",
    image: expert1,
  },
  {
    id: 2,
    name: "Engineer 2",
    title: "Project Manager & Civil Engineer",
    experience: "08 years",
    area: "2,60,000 sq.ft",
    image: expert2,
  },
  {
    id: 3,
    name: "Engineer 3",
    title: "Design-Focused Engineer",
    experience: "16 years",
    area: "8,90,000 sq.ft",
    image: expert3,
  },
];

const ChooseExpert = () => {
  return (
    <section className="choose-expert">
      <h2 className="choose-expert__title">
        Choose Your <span className="highlight">Expert</span>
      </h2>
      <p className="choose-expert__subtitle">
        Our engineers are here to design, secure, and support—every step of the
        way.
      </p>

      <div className="choose-expert__cards">
        {engineers.map((engineer) => (
          <div key={engineer.id} className="expert-card">
            <img
              src={engineer.image}
              alt={engineer.name}
              className="expert-card__image"
            />
            <div className="expert-card__info">
              <div className="expert-card__meta">
                <span>🗓 {engineer.experience} experience</span>
                <span>📐 {engineer.area}</span>
              </div>
              <h3 className="expert-card__name">{engineer.name}</h3>
              <p className="expert-card__role">{engineer.title}</p>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default ChooseExpert;
