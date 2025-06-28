import React, { useState, useEffect } from "react";
import ProjectCard from "../../../Components/ProjectCard";
import { Link, useNavigate, useLocation } from "react-router-dom";
import projectData from "./ProjectData";

const Projects = () => {
  const navigate = useNavigate();
  const location = useLocation();
  const isProjectsPage = location.pathname.replace(/\/$/, "") === "/projects";
  const isHomePage = location.pathname === "/";

  // State for filtered projects
  const [filteredProjects, setFilteredProjects] = useState(projectData);
  const [selectedArchitect, setSelectedArchitect] = useState(null);

  // Effect to handle filtering based on localStorage and route changes
  useEffect(() => {
    const architectFromStorage = localStorage.getItem("selectedArchitect");

    if (architectFromStorage && isProjectsPage) {
      // Filter projects based on selected architect when on projects page
      const filtered = projectData.filter(
        (project) => project.projectBy === architectFromStorage
      );

      if (filtered.length > 0) {
        setSelectedArchitect(architectFromStorage);
        setFilteredProjects(filtered);
      } else {
        // If no projects found for the architect, show all projects but clear the selection
        setSelectedArchitect(null);
        setFilteredProjects(projectData);
        localStorage.removeItem("selectedArchitect");
      }
    } else {
      // Clear the filter when not on projects page or no architect selected
      setSelectedArchitect(null);
      setFilteredProjects(projectData);
      if (!isProjectsPage) {
        // Only clear localStorage when leaving projects page
        localStorage.removeItem("selectedArchitect");
      }
    }
  }, [location.pathname, isProjectsPage]);

  // Clear filter function
  const clearFilter = () => {
    localStorage.removeItem("selectedArchitect");
    setSelectedArchitect(null);
    setFilteredProjects(projectData);
  };

  const handleShowAll = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
    navigate("/projects");
  };

  // Use filtered projects instead of original projectData
  const projectsToShow = isHomePage ? 4 : filteredProjects.length;
  const displayProjects = (isHomePage ? projectData : filteredProjects).slice(
    0,
    projectsToShow
  );

  // Helper function to get card class based on index
  const getCardClass = (index) => {
    const patterns = ["azure", "emerald", "crystal-left", "crystal-right"];
    return `projects__card--${patterns[index % 4]}`;
  };

  const getItemClass = (index) => {
    const patterns = ["azure", "emerald", "crystal-left", "crystal-right"];
    return `projects__item--${patterns[index % 4]}`;
  };

  const getRowClass = (index) => {
    return index % 4 < 2 ? "projects__row--top" : "projects__row--bottom";
  };

  // Group projects into rows of 2
  const groupedProjects = [];
  for (let i = 0; i < displayProjects.length; i += 2) {
    groupedProjects.push(displayProjects.slice(i, i + 2));
  }

  return (
    <section className="projects">
      <div className="projects__header">
        <div>
          <h2 className="projects__title">
            Our <span>Signature</span> Projects
            {selectedArchitect && (
              <span className="projects__filter-info">
                {" "}
                {/* - by {selectedArchitect} */}
              </span>
            )}
          </h2>
          <p className="projects__subtitle">
            Transforming dreams into architectural masterpieces, one exceptional
            space at a time
            {selectedArchitect && (
              <span className="projects__filter-subtitle">
                {" "}
                {/* Showing projects by {selectedArchitect} */}
              </span>
            )}
          </p>
        </div>
        {selectedArchitect && isProjectsPage && (
          <button className="projects__button" onClick={clearFilter}>
            Show All Projects
          </button>
        )}
        {!isProjectsPage && (
          <button className="projects__button" onClick={handleShowAll}>
            Show all
          </button>
        )}
      </div>

      {groupedProjects.map((projectGroup, groupIndex) => (
        <div
          key={groupIndex}
          className={`projects__row ${getRowClass(groupIndex * 2)}`}
        >
          <div className="projects__grid">
            {projectGroup.map((project, projectIndex) => {
              const overallIndex = groupIndex * 2 + projectIndex;
              return (
                <div
                  key={project.id}
                  className={`projects__item ${getItemClass(overallIndex)}`}
                >
                  <Link to={`/projects/${project.id}`}>
                    <ProjectCard
                      className={getCardClass(overallIndex)}
                      image={project.images[0]}
                      location={project.location}
                      area={project.area}
                      title={project.title}
                      architect={project.architect}
                    />
                  </Link>
                </div>
              );
            })}
          </div>
        </div>
      ))}
    </section>
  );
};

export default Projects;
