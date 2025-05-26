import React, { useState } from "react";
import areaIcon from "../assets/area.svg";
import locationIcon from "../assets/footer1.svg";
import PropTypes from "prop-types";

const ProjectCard = ({
  image,
  title,
  className,
  location = "Downtown metro",
  area = "15,000 sq.ft",
}) => {
  const [position, setPosition] = useState({ x: "50%", y: "50%" });
  const [hovered, setHovered] = useState(false);

  const handleMouseMove = (e) => {
    const rect = e.currentTarget.getBoundingClientRect();
    setPosition({
      x: `${e.clientX - rect.left}px`,
      y: `${e.clientY - rect.top}px`,
    });
  };

  return (
    <div
      className={`projects__card ${className}`}
      onMouseMove={handleMouseMove}
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
    >
      <img src={image} alt={title} className="projects__image" />

      {/* Hover effect */}
      {hovered && (
        <div
          className="projects__hover-overlay"
          style={{ left: position.x, top: position.y }}
        >
          View
        </div>
      )}

      {/* Title below the image */}
      {title && (
        <div className="projects__name">
          {title}
          {hovered && (
            <span className="projects__completed">● Completed 2024</span>
          )}
        </div>
      )}
      {hovered && (
        <div className="projects__details">
          <div className="projects__info">
            <div className="projects__info-item">
              <img
                src={locationIcon}
                alt="Location"
                className="projects__icon"
              />
              <span>{location}</span>
            </div>
            <div className="projects__info-item">
              <img src={areaIcon} alt="Area" className="projects__icon" />
              <span>{area}</span>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

ProjectCard.propTypes = {
  image: PropTypes.string.isRequired,
  title: PropTypes.string,
  className: PropTypes.string,
  location: PropTypes.string,
  area: PropTypes.string,
};

export default ProjectCard;
