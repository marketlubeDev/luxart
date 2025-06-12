// src/pages/ProjectDetail.jsx
import React, { useEffect } from "react";
import { useParams } from "react-router-dom";
import projectData from "./ProjectData";
import areaIcon from "../../../assets/area.svg";
import locationIcon from "../../../assets/footer1.svg";
import { FaDownload } from "react-icons/fa";

const ProjectDetail = () => {
  const { projectId } = useParams();
  const project = projectData.find((p) => p.id === projectId);
  useEffect(() => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  }, []);

  if (!project) {
    return <div>Project not found</div>;
  }

  return (
    <section className="project-detail">
      <div className="project-detail__left">
        <div className="project-detail__image">
          <img src={project.image} alt={project.title} />
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
