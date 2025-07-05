import React from "react";
import { useNavigate } from "react-router-dom";

const engineers = [
  {
    id: 1,
    name: "Shabeer A.M",
    title: "Founder of Shabeer Saleel Associates",
    image:
      "https://res.cloudinary.com/ds07e7rod/image/upload/v1751708084/DSC03534_1_ylb1eb.jpg",
    projectBy: "shabeer",
  },
  {
    id: 2,
    name: "Barun Patro, Sekar Dhandapani, Shiju Pareed",
    title: "Amar Architecture and Designs Pvt Ltd",
    image:
      "https://res.cloudinary.com/ds07e7rod/image/upload/v1751447351/S24_0602_1_jiiq4h.jpg",
    projectBy: "shiju",
  },
  {
    id: 3,
    name: "P C Rasheed",
    title: "Founder of P C Rasheed and Associates, TSSA Luxart Builders",
    image:
      "https://res.cloudinary.com/dzuqczvb7/image/upload/v1750836806/32456_aytsev.jpg",
    projectBy: "rasheed",
  },
  {
    id: 4,
    name: "Imthiyaz Ahammed",
    title: "Founder of Ingrid Architects",
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
