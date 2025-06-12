// src/pages/ProjectDetail.jsx
import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import projectData from "./ProjectData";
import areaIcon from "../../../assets/area.svg";
import locationIcon from "../../../assets/footer1.svg";
import { FaDownload } from "react-icons/fa";
import { FaChevronLeft, FaChevronRight } from "react-icons/fa";

const ProjectDetail = () => {
  const { projectId } = useParams();
  const project = projectData.find((p) => p.id === projectId);
  const [currentImageIndex, setCurrentImageIndex] = useState(0);

  useEffect(() => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  }, []);

  if (!project) {
    return <div>Project not found</div>;
  }

  // Use images array if available, otherwise use the main image
  const allImages = project.images || [project.image];

  const handlePrevImage = () => {
    setCurrentImageIndex((prev) =>
      prev === 0 ? allImages.length - 1 : prev - 1
    );
  };

  const handleNextImage = () => {
    setCurrentImageIndex((prev) =>
      prev === allImages.length - 1 ? 0 : prev + 1
    );
  };

  return (
    <section className="project-detail">
      <div className="project-detail__left">
        <div className="project-detail__image">
          <div className="image-slider">
            <img
              src={allImages[currentImageIndex]}
              alt={`${project.title} - ${currentImageIndex + 1}`}
            />
            {allImages.length > 1 && (
              <>
                <button
                  className="slider-control prev"
                  onClick={handlePrevImage}
                  aria-label="Previous image"
                >
                  <FaChevronLeft />
                </button>
                <button
                  className="slider-control next"
                  onClick={handleNextImage}
                  aria-label="Next image"
                >
                  <FaChevronRight />
                </button>
                <div className="slider-dots">
                  {allImages.map((_, index) => (
                    <button
                      key={index}
                      className={`slider-dot ${
                        index === currentImageIndex ? "active" : ""
                      }`}
                      onClick={() => setCurrentImageIndex(index)}
                      aria-label={`Go to image ${index + 1}`}
                    />
                  ))}
                </div>
              </>
            )}
          </div>
        </div>
        <div className="project-detail__summary">
          <p>{project.summary}</p>
        </div>
      </div>
      <div className="project-detail__content">
        <h2>{project.title}</h2>
        <div className="project-detail__info">
          <div className="info-item">
            <img src={locationIcon} alt="Location" />
            {project.location}
          </div>
          <div className="info-item">
            <img src={areaIcon} alt="Area" />
            {project.area}
          </div>
        </div>

        <p className="project-detail__description">{project.description}</p>

        {project.id === "kalamassery" && (
          <a
            href={project.pdfLink}
            className="project-detail__download-btn"
            target="_blank"
            rel="noopener noreferrer"
          >
            <FaDownload className="download-icon" />
            &nbsp;Download
          </a>
        )}
      </div>
    </section>
  );
};

export default ProjectDetail;
