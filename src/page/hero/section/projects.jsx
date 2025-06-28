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
            <Link to={`/projects/${projectData[0]?.id}`}>
              <ProjectCard
                className="projects__card--azure"
                image={projectData[0].images[0]}
                location={projectData[0].location}
                area={projectData[0].area}
                title={projectData[0].title}
                architect={projectData[0].architect}
              />
            </Link>
          </div>
          <div className="projects__item projects__item--emerald">
            <Link to={`/projects/${projectData[1]?.id}`}>
              <ProjectCard
                className="projects__card--emerald"
                image={projectData[1].images[0]}
                location={projectData[1].location}
                area={projectData[1].area}
                title={projectData[1].title}
                architect={projectData[1].architect}
              />
            </Link>
          </div>
        </div>
      </div>

      <div className="projects__row projects__row--bottom">
        <div className="projects__grid">
          <div className="projects__item projects__item--crystal-left">
            <Link to={`/projects/${projectData[2]?.id}`}>
              <ProjectCard
                className="projects__card--crystal-left"
                image={projectData[2].images[0]}
                location={projectData[2].location}
                area={projectData[2].area}
                title={projectData[2].title}
                architect={projectData[2].architect}
              />
            </Link>
          </div>
          <div className="projects__item projects__item--crystal-right">
            <Link to={`/projects/${projectData[3]?.id}`}>
              <ProjectCard
                className="projects__card--crystal-right"
                image={projectData[3].images[0]}
                location={projectData[3].location}
                area={projectData[3].area}
                title={projectData[3].title}
                architect={projectData[3].architect}
              />
            </Link>
          </div>
        </div>
      </div>
      {!isHomePage && (
        <>
          <div className="projects__row projects__row--top">
            <div className="projects__grid">
              <div className="projects__item projects__item--azure">
                <Link to={`/projects/${projectData[4]?.id}`}>
                  <ProjectCard
                    className="projects__card--azure"
                    image={projectData[4].images[0]}
                    location={projectData[4].location}
                    area={projectData[4].area}
                    title={projectData[4].title}
                    architect={projectData[4].architect}
                  />
                </Link>
              </div>
              <div className="projects__item projects__item--emerald">
                <Link to={`/projects/${projectData[5]?.id}`}>
                  <ProjectCard
                    className="projects__card--emerald"
                    image={projectData[5].images[0]}
                    location={projectData[5].location}
                    area={projectData[5].area}
                    title={projectData[5].title}
                    architect={projectData[5].architect}
                  />
                </Link>
              </div>
            </div>
          </div>
          <div className="projects__row projects__row--bottom">
            <div className="projects__grid">
              <div className="projects__item projects__item--crystal-left">
                <Link to={`/projects/${projectData[6]?.id}`}>
                  <ProjectCard
                    className="projects__card--crystal-left"
                    image={projectData[6].images[0]}
                    location={projectData[6].location}
                    area={projectData[6].area}
                    title={projectData[6].title}
                    architect={projectData[6].architect}
                  />
                </Link>
              </div>
              <div className="projects__item projects__item--crystal-right">
                <Link to={`/projects/${projectData[7]?.id}`}>
                  <ProjectCard
                    className="projects__card--crystal-right"
                    image={projectData[7].images[0]}
                    location={projectData[7].location}
                    area={projectData[7].area}
                    title={projectData[7].title}
                    architect={projectData[7].architect}
                  />
                </Link>
              </div>
            </div>
          </div>
          <div className="projects__row projects__row--top">
            <div className="projects__grid">
              <div className="projects__item projects__item--azure">
                <Link to={`/projects/${projectData[8]?.id}`}>
                  <ProjectCard
                    className="projects__card--azure"
                    image={projectData[8].images[0]}
                    location={projectData[8].location}
                    area={projectData[8].area}
                    title={projectData[8].title}
                    architect={projectData[8].architect}
                  />
                </Link>
              </div>
              <div className="projects__item projects__item--emerald">
                <Link to={`/projects/${projectData[9]?.id}`}>
                  <ProjectCard
                    className="projects__card--emerald"
                    image={projectData[9].images[0]}
                    location={projectData[9].location}
                    area={projectData[9].area}
                    title={projectData[9].title}
                    architect={projectData[9].architect}
                  />
                </Link>
              </div>
            </div>
          </div>
          <div className="projects__row projects__row--bottom">
            <div className="projects__grid">
              <div className="projects__item projects__item--crystal-left">
                <Link to={`/projects/${projectData[10]?.id}`}>
                  <ProjectCard
                    className="projects__card--crystal-left"
                    image={projectData[10].images[0]}
                    location={projectData[10].location}
                    area={projectData[10].area}
                    title={projectData[10].title}
                    architect={projectData[10].architect}
                  />
                </Link>
              </div>
              <div className="projects__item projects__item--crystal-right">
                <Link to={`/projects/${projectData[11]?.id}`}>
                  <ProjectCard
                    className="projects__card--crystal-right"
                    image={projectData[11].images[0]}
                    location={projectData[11].location}
                    area={projectData[11].area}
                    title={projectData[11].title}
                    architect={projectData[11].architect}
                  />
                </Link>
              </div>
            </div>
          </div>
          <div className="projects__row projects__row--top">
            <div className="projects__grid">
              <div className="projects__item projects__item--azure">
                <Link to={`/projects/${projectData[12]?.id}`}>
                  <ProjectCard
                    className="projects__card--azure"
                    image={projectData[12].images[0]}
                    location={projectData[12].location}
                    area={projectData[12].area}
                    title={projectData[12].title}
                    architect={projectData[12].architect}
                  />
                </Link>
              </div>
              {/* <div className="projects__item projects__item--emerald">
                <Link to={`/projects/${projectData[9]?.id}`}>
                  <ProjectCard
                    className="projects__card--emerald"
                    image={projectData[9].images[0]}
                    location={projectData[9].location}
                    area={projectData[9].area}
                    title={projectData[9].title}
                  />
                </Link>
              </div> */}
            </div>
          </div>
        </>
      )}
    </section>
  );
};

export default Projects;
