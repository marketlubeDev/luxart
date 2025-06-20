import React from "react";
import ProjectCard from "../../../Components/ProjectCard";
import { Link, useNavigate, useLocation } from "react-router-dom";
import projectData from "./ProjectData";

const Projects = () => {
  const navigate = useNavigate();
  const location = useLocation();
  const isProjectsPage = location.pathname.replace(/\/$/, "") === "/projects";
  const isHomePage = location.pathname === "/";

  const handleShowAll = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
    navigate("/projects");
  };

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
        {!isProjectsPage && (
          <button className="projects__button" onClick={handleShowAll}>
            Show all
          </button>
        )}
      </div>

      <div className="projects__row projects__row--top">
        <div className="projects__grid">
          <div className="projects__item projects__item--azure">
            <Link to={`/projects/${projectData[0].id}`}>
              <ProjectCard
                className="projects__card--azure"
                image={projectData[0].images[0]}
                location={projectData[0].location}
                area={projectData[0].area}
                title={projectData[0].title}
              />
            </Link>
          </div>
          <div className="projects__item projects__item--emerald">
            <Link to={`/projects/${projectData[1].id}`}>
              <ProjectCard
                className="projects__card--emerald"
                image={projectData[1].images[0]}
                location={projectData[1].location}
                area={projectData[1].area}
                title={projectData[1].title}
              />
            </Link>
          </div>
        </div>
      </div>

      <div className="projects__row projects__row--bottom">
        <div className="projects__grid">
          <div className="projects__item projects__item--crystal-left">
            <Link to={`/projects/${projectData[2].id}`}>
              <ProjectCard
                className="projects__card--crystal-left"
                image={projectData[2].images[0]}
                location={projectData[2].location}
                area={projectData[2].area}
                title={projectData[2].title}
              />
            </Link>
          </div>
          <div className="projects__item projects__item--crystal-right">
            <Link to={`/projects/${projectData[3].id}`}>
              <ProjectCard
                className="projects__card--crystal-right"
                image={projectData[3].images[0]}
                location={projectData[3].location}
                area={projectData[3].area}
                title={projectData[3].title}
              />
            </Link>
          </div>
          {/* <div className="projects__item projects__item--azure">
            <Link to={`/projects/${projectData[4].id}`}>
              <ProjectCard
                className="projects__card--azure"
                image={projectData[4].image}
                location={projectData[4].location}
                area={projectData[4].area}
                title={projectData[4].title}
              />
            </Link>
          </div> */}
        </div>
        {!isHomePage && (
          <div className="projects__row projects__row--top">
            <div className="projects__grid">
              <div className="projects__item projects__item--azure">
                <Link to={`/projects/${projectData[4].id}`}>
                  <ProjectCard
                    className="projects__card--azure"
                    image={projectData[4].images[0]}
                    location={projectData[4].location}
                    area={projectData[4].area}
                    title={projectData[4].title}
                  />
                </Link>
              </div>
            </div>
          </div>
        )}
      </div>
    </section>
  );
};

export default Projects;
