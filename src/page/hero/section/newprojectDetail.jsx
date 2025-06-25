import React, { useEffect } from "react";
import { useParams } from "react-router-dom";
import {
  FaDownload,
  FaHome,
  FaRuler,
  FaChevronLeft,
  FaChevronRight,
} from "react-icons/fa";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination, Autoplay } from "swiper/modules";
import projectData from "./ProjectData";

// Import Swiper styles
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";

export default function NewProjectDetail() {
  const { projectId } = useParams();
  const project = projectData.find((p) => p.id === projectId);

  useEffect(() => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  }, []);

  if (!project) {
    return <div>Project not found</div>;
  }

  // Use images array if available, otherwise use the main image
  const allImages = project.images || [project.image];

  const handleDownloadPDF = () => {
    // Handle PDF download
    if (project.pdfLink) {
      window.open(project.pdfLink, "_blank");
    }
  };

  // Get previous and next projects
  const currentIndex = projectData.findIndex((p) => p.id === projectId);
  const previousIndex =
    currentIndex > 0 ? currentIndex - 1 : projectData.length - 1;
  const nextIndex =
    currentIndex < projectData.length - 1 ? currentIndex + 1 : 0;
  const previousProject = projectData[previousIndex];
  const nextProject = projectData[nextIndex];

  // Function to trim long project names
  const trimTitle = (title, maxLength = 20) => {
    return title.length > maxLength
      ? title.substring(0, maxLength) + "..."
      : title;
  };

  const handlePreviousProject = () => {
    window.location.href = `/projects/${previousProject.id}`;
  };

  const handleNextProject = () => {
    window.location.href = `/projects/${nextProject.id}`;
  };

  return (
    <section className="new-project-detail">
      <div className="new-project-detail__container">
        {/* Header Section */}
        <div className="new-project-detail__header">
          <div className="new-project-detail__title-section">
            <h1 className="new-project-detail__title">{project.title}</h1>
            <div className="new-project-detail__metadata">
              <div className="metadata-item">
                <FaHome className="metadata-icon" />
                <span>{project.experience}</span>
              </div>
              <div className="metadata-item">
                <FaRuler className="metadata-icon" />
                <span>{project.area}</span>
              </div>
            </div>
          </div>

          {project.pdfLink && (
            <button
              className="new-project-detail__download-btn"
              onClick={handleDownloadPDF}
            >
              <FaDownload className="download-icon" />
              Download PDF
            </button>
          )}
        </div>

        {/* Hero Image Section */}
        <div className="new-project-detail__hero-image">
          <img
            src={project.images[0]}
            alt={project.title}
            className="hero-image"
          />
        </div>

        {/* Description Section */}
        <div className="new-project-detail__description">
          <div className="description-content">
            <div className="description-text">
              <p>{project.description}</p>
            </div>

            {/* Project Credits */}
            <div className="new-project-detail__credits">
              <div className="credits-column">
                <span className="credits-label">Client Name</span>
                <span className="credits-value">{project.client}</span>
              </div>
              <div className="credits-column">
                <span className="credits-label">Architect</span>
                <span className="credits-value">{project.architect}</span>
              </div>
            </div>
          </div>
        </div>

        {/* Swiper Carousel Section */}
        <div className="new-project-detail__swiper-container">
          <Swiper
            modules={[Navigation, Pagination, Autoplay]}
            spaceBetween={30}
            slidesPerView={1}
            navigation={{
              prevEl: ".swiper-button-prev-custom",
              nextEl: ".swiper-button-next-custom",
            }}
            pagination={{
              clickable: true,
              bulletClass: "swiper-pagination-bullet-custom",
              bulletActiveClass: "swiper-pagination-bullet-active-custom",
            }}
            loop={true}
            autoplay={{
              delay: 5000,
              disableOnInteraction: false,
            }}
            className="project-swiper"
          >
            {allImages.map((image, index) => (
              <SwiperSlide key={index}>
                <div className="swiper-slide-content">
                  <img
                    src={image}
                    alt={`${project.title} - View ${index + 1}`}
                    className="swiper-image"
                  />

                  {/* Project Details Overlay */}
                  <div className="new-project-detail__project-details">
                    <div className="project-details__left">
                      <div className="detail-item">
                        <span className="detail-label">PROJECT TYPE</span>
                        <span className="detail-value">
                          {project.projectType}
                        </span>
                      </div>
                    </div>
                    <div className="project-details__center">
                      <div className="detail-item">
                        <span className="detail-label">CLIENT</span>
                        <span className="detail-value">
                          {project.contractor}
                        </span>
                      </div>
                    </div>
                    <div className="project-details__right">
                      <div className="detail-item">
                        <span className="detail-label">PROJECT CONSULTANT</span>
                        <span className="detail-value">
                          {project.consultant}
                        </span>
                      </div>
                    </div>
                  </div>
                </div>
              </SwiperSlide>
            ))}
          </Swiper>

          {/* Custom Navigation Buttons */}
          <button className="swiper-button-prev-custom">
            <FaChevronLeft />
          </button>
          <button className="swiper-button-next-custom">
            <FaChevronRight />
          </button>
        </div>

        {/* Navigation Section */}
        <div className="new-project-detail__navigation">
          <button
            className="nav-button nav-button--prev"
            onClick={handlePreviousProject}
          >
            <FaChevronLeft className="nav-icon" />
            <div className="nav-text">
              <span className="nav-label">Previous Project</span>
              <span className="nav-title">
                {trimTitle(previousProject.title)}
              </span>
            </div>
          </button>

          <button
            className="nav-button nav-button--next"
            onClick={handleNextProject}
          >
            <div className="nav-text">
              <span className="nav-label">Next Project</span>
              <span className="nav-title">{trimTitle(nextProject.title)}</span>
            </div>
            <FaChevronRight className="nav-icon" />
          </button>
        </div>
      </div>
    </section>
  );
}
