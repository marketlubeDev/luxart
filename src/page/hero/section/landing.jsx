import React from "react";
import phoneIcon from "../../../assets/phone.svg";

const landing = () => {
  return (
    <section className="landing">
      <div className="landing__content">
        <h1 className="landing__title">
          <span>Premium</span> Housing
        </h1>
        <p className="landing__subtitle">at not so premium pricing</p>
        <div className="landing__buttons">
          <button className="btn btn--primary">
            <img src={phoneIcon} alt="Phone Icon" className="btn__icon" />
            Enquire now
          </button>
          <button className="btn btn--secondary">Explore Projects</button>
        </div>
      </div>
    </section>
  );
};

export default landing;
