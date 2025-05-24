import React, { useState } from "react";
import { FaMapMarkerAlt } from "react-icons/fa";
import { LuSquare } from "react-icons/lu";
import PropTypes from "prop-types";

const ProjectCard = ({
  image,
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
      <img src={image} alt="Project" className="projects__image" />

      {hovered && (
        <div
          className="projects__hover-overlay"
          style={{ left: position.x, top: position.y }}
        >
          View
        </div>
      )}

      <div className="projects__details">
        <div className="projects__info">
          <div className="projects__info-item">
            <FaMapMarkerAlt className="projects__icon" />
            <span>{location}</span>
          </div>
          <div className="projects__info-item">
            <LuSquare className="projects__icon" />
            <span>{area}</span>
          </div>
        </div>
      </div>
    </div>
  );
};

ProjectCard.propTypes = {
  image: PropTypes.string.isRequired,
  className: PropTypes.string,
  location: PropTypes.string,
  area: PropTypes.string,
};

export default ProjectCard;
