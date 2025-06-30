import React from "react";
import { useNavigate } from "react-router-dom";

const engineers = [
  {
    id: 1,
    name: "Shabeer A.M",
    title: "Founder of Shabeer Saleel Associates",
    // experience: "12 years",
    // area: "4,00,000 sq.ft",
    image:
      "https://res.cloudinary.com/dznxxalrb/image/upload/v1750339104/shabeer_etu53m.jpg",
    projectBy: "shabeer",
  },
  {
    id: 2,
    name: "Shiju Pareed",
    title: "Principal Architect",
    // experience: "08 years",
    // area: "2,60,000 sq.ft",
    image:
      "https://res.cloudinary.com/dznxxalrb/image/upload/v1750339104/shiju_apq2br.jpg",
    projectBy: "shiju",
  },
  {
    id: 3,
    name: "P C Rasheed",
    title: "Founder of P C Rasheed and Associates, TSSA Luxart Builders",
    // experience: "16 years",
    // area: "8,90,000 sq.ft",
    image:
      "https://res.cloudinary.com/dzuqczvb7/image/upload/v1750836806/32456_aytsev.jpg",
    projectBy: "rasheed",
  },
  {
    id: 4,
    name: "Imthiyas Ahamed",
    title: "Founder of Ingrid Architects",
    // experience: "16 years",
    // area: "5,90,000 sq.ft",
    image:
      "https://res.cloudinary.com/dzuqczvb7/image/upload/v1750835956/IMG_8524_3_gsktvp.jpg",
    projectBy: "imthiyas",
  },
];

const ChooseExpert = () => {
  const navigate = useNavigate();

  const handleCardClick = (projectBy) => {
    localStorage.setItem("selectedArchitect", projectBy);
    window.scrollTo({ top: 0, behavior: "smooth" });
    navigate(`/projects`);
  };

  return (
    <section className="choose-expert">
      <h2 className="choose-expert__title">
        Our empanelled <span className="highlight">Architects</span>
      </h2>
      <p className="choose-expert__subtitle">
        Our engineers are here to design, secure, and support—every step of the
        way.
      </p>

      <div className="choose-expert__cards">
        {engineers.map((engineer) => (
          <div
            key={engineer.id}
            className="expert-card"
            onClick={() => handleCardClick(engineer.projectBy)}
            style={{ cursor: "pointer" }}
          >
            <img
              src={engineer.image}
              alt={engineer.name}
              className="expert-card__image"
            />
            <div className="expert-card__info">
              <div className="expert-card__meta"></div>
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
