import React from "react";

import expert3 from "../../../assets/expert3.jpg";
import shabeer from "../../../assets/shabeer.jpeg";
import shiju from "../../../assets/shiju.jpeg";
import rasheed from "../../../assets/pmrasheed.jpg";
import imtiaz from "../../../assets/imtiaz.jpg";

import experienceIcon from "../../../assets/bag.svg";
import areaIcon from "../../../assets/area.svg";

const engineers = [
  {
    id: 1,
    name: "Shabeer",
    title: "Founder of shabeer saleel Associates",
    experience: "12 years",
    area: "4,00,000 sq.ft",
    image: shabeer,
  },
  {
    id: 2,
    name: "Shiju Pareed",
    title: "Principal Architect",
    experience: "08 years",
    area: "2,60,000 sq.ft",
    image: shiju,
  },
  {
    id: 3,
    name: "Pc rasheed",
    title: "founder of PCRasheed and Associates, TSSA Luxart Builders",
    experience: "16 years",
    area: "8,90,000 sq.ft",
    image: rasheed,
  },
  {
    id: 4,
    name: "Imthiyaz Ahmmed",
    title: "Founder of Ingrid Architects",
    experience: "16 years",
    area: "8,90,000 sq.ft",
    image: imtiaz,
  },
];

const ChooseExpert = () => {
  return (
    <section className="choose-expert">
      <h2 className="choose-expert__title">
        Our empanel <span className="highlight">Architects</span>
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
                <span>
                  <img
                    src={experienceIcon}
                    alt="experience icon"
                    className="experience-icon"
                  />
                  {engineer.experience} experience
                </span>
                <span>
                  <img
                    src={areaIcon}
                    alt="area icon"
                    className="expert-card__icon"
                  />
                  {engineer.area}
                </span>
              </div>
              <h3 className="expert-card__name">{engineer.name}</h3>
              <p className="expert-card__role">{engineer.title}</p>
              <p className="expert-card__detail">
                With over 12 years of experience in luxury housing,{" "}
                {engineer.name} ensures your home stands strong—inside and out.
              </p>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default ChooseExpert;
