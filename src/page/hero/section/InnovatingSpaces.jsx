// InnovatingSpaces.jsx
import React, { useState } from "react";


const InnovatingSpaces = () => {
  const [sliderPosition, setSliderPosition] = useState(65);
  const [pointerPosition, setPointerPosition] = useState(50);

  const handleSliderMove = (e) => {
    const sliderContainer = e.currentTarget.getBoundingClientRect();
    const newSliderPosition =
      ((e.clientX - sliderContainer.left) / sliderContainer.width) * 100;

    setSliderPosition(Math.min(100, Math.max(0, newSliderPosition)));
  };

  const handlePointerMove = (e) => {
    const sliderContainer = e.currentTarget.getBoundingClientRect();
    const newPointerPosition =
      ((e.clientY - sliderContainer.top) / sliderContainer.height) * 100;

    setPointerPosition(Math.min(100, Math.max(0, newPointerPosition)));
  };

  return (
    <div
      className="innovating"
      onMouseMove={(e) => {
        handleSliderMove(e);
        handlePointerMove(e);
      }}
      onTouchMove={(e) => {
        handleSliderMove({
          clientX: e.touches[0].clientX,
          currentTarget: e.currentTarget,
        });
        handlePointerMove({
          clientY: e.touches[0].clientY,
          currentTarget: e.currentTarget,
        });
      }}
    >
      <div
        className="innovating__image innovating__image--first"
        style={{ clipPath: `polygon(0 0, ${sliderPosition}% 0, ${sliderPosition}% 100%, 0% 100%)` }}
      ></div>

      <div
        className="innovating__image innovating__image--second"
        style={{ clipPath: `polygon(${sliderPosition}% 0, 100% 0, 100% 100%, ${sliderPosition}% 100%)` }}
      ></div>

      <div className="innovating__text">
        <h1>INNOVATING SPACES</h1>
      </div>

      <div className="innovating__slider">
        <div className="innovating__line" style={{ left: `${sliderPosition}%` }}>
          <div className="innovating__pointer" style={{ top: `${pointerPosition}%` }}></div>
        </div>
      </div>
    </div>
  );
};

export default InnovatingSpaces;
