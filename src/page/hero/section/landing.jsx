import React, { useState } from "react";
import phoneIcon from "../../../assets/Phone.svg";
import { useNavigate } from "react-router-dom";

const landing = () => {
  const [mousePos, setMousePos] = useState({ x: 50, y: 50 });
  const navigate = useNavigate();

  const handleMouseMove = (e) => {
    const bounds = e.target.getBoundingClientRect();
    const x = ((e.clientX - bounds.left) / bounds.width) * 100;
    const y = ((e.clientY - bounds.top) / bounds.height) * 100;
    setMousePos({ x, y });
  };

  return (
    <section className="landing">
      <div className="landing__content">
        <div
          className="landing__title-wrapper"
          onMouseMove={handleMouseMove}
          style={{
            "--mouse-x": `${mousePos.x}%`,
            "--mouse-y": `${mousePos.y}%`,
          }}
        >
          <h1 className="landing__title">
            <span>Premium</span> Housing
          </h1>
        </div>
        <p className="landing__subtitle">at not so premium pricing</p>
        <div className="landing__buttons">
          <button className="btn btn--primary">
            <img src={phoneIcon} alt="Phone Icon" className="btn__icon" />
            Enquire Now
          </button>
          <button
            className="btn btn--secondary"
            onClick={() => navigate("/projects")}
          >
            Explore Projects
          </button>
        </div>
      </div>
    </section>
  );
};

export default landing;
