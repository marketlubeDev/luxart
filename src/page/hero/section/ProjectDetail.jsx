// src/pages/ProjectDetail.jsx
import React from "react";
import { useParams } from "react-router-dom";
import projectData from "./ProjectData";
import areaIcon from "../../../assets/area.svg";
import locationIcon from "../../../assets/footer1.svg";

const ProjectDetail = () => {
  const { projectId } = useParams();
  const project = projectData.find((p) => p.id === projectId);

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
      </div>
    </section>
  );
};

export default ProjectDetail;
