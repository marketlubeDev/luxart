// page/hero/section/projects.jsx
import React from "react";
import ProjectCard from "../../../Components/ProjectCard";

import img1 from "../../../assets/building1.jpg";
import img2 from "../../../assets/building1.jpg";
import img3 from "../../../assets/building3.jpg";
import img4 from "../../../assets/building3.jpg";

const Projects = () => {
  return (
    <section className="projects">
      <div className="projects__header">
        <div>
          <h2 className="projects__title">
            Our <span>Signature</span> Projects
          </h2>
          <p className="projects__subtitle">
            Transforming dreams into architectural masterpieces, one exceptional
            space at a time
          </p>
        </div>
        <button className="projects__button">Show all</button>
      </div>

      <div className="projects__row projects__row--top">
        <div className="projects__grid">
          <div className="projects__item projects__item--azure">
            <ProjectCard
              className="projects__card--azure"
              image={img1}
              location="Downtown metro"
              area="15,000 sq.ft"
              title="Azure Heights"
            />
          </div>
          <div className="projects__item projects__item--emerald">
            <ProjectCard
              className="projects__card--emerald"
              image={img2}
              location="Downtown metro"
              area="15,000 sq.ft"
              title="Emerald Heights"
            />
          </div>
        </div>
      </div>

      <div className="projects__row projects__row--bottom">
        <div className="projects__grid">
          <div className="projects__item projects__item--crystal-left">
            <ProjectCard
              className="projects__card--crystal-left"
              image={img3}
              location="Downtown metro"
              area="15,000 sq.ft"
              title="Crystal Heights"
            />
          </div>
          <div className="projects__item projects__item--crystal-right">
            <ProjectCard
              className="projects__card--crystal-right"
              image={img4}
              location="Downtown metro"
              area="15,000 sq.ft"
              title="Crystal Heights"
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Projects;
