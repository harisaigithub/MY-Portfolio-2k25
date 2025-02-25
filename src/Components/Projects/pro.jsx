import React from "react";
import { useNavigate } from "react-router-dom";
import "./pro.css";
import "../../index.css";
import projects from "./Projects"; // Importing project data

function Projects() {
  const navigate = useNavigate();

  const handleNavigate = () => {
    navigate("/achievements");
  };

  return (
    <div className="proj-container">
      <div className="proj-title">Projects</div>

      <div className="proj-content">
        <div className="proj-grid">
          {projects.map((project, index) => (
            <div className="proj-card" key={index}>
              <a
                href={project.liveLink || "#"}
                target="_blank"
                rel="noreferrer"
              >
                <img
                  src={project.img}
                  alt={project.title}
                  className="proj-img"
                />
              </a>
              <div className="proj-details">
                <h3 className="proj-name">{project.title}</h3>
                <p className="proj-duration">{project.duration}</p>
                <p className="proj-desc">{project.desc}</p>
                <div className="proj-tags">
                  {project.tags.map((tag, tagIndex) => (
                    <span key={tagIndex} className="proj-tag">
                      {tag}
                    </span>
                  ))}
                </div>
                <div className="proj-links">
                  {/* Hide Live Project button if liveLink is missing */}
                  {project.liveLink && (
                    <a
                      href={project.liveLink}
                      target="_blank"
                      rel="noreferrer"
                      className="proj-link"
                    >
                      <i className="fa-regular fa-eye"></i> Live Project
                    </a>
                  )}
                  <a
                    href={project.github}
                    target="_blank"
                    rel="noreferrer"
                    className="proj-link"
                  >
                    <i className="fa-brands fa-github"></i> GitHub Repository
                  </a>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      <div className="continue-ach" onClick={handleNavigate}>
        <p>Let's Continue To Achievements</p>
        <svg className="arrow-svg">
          <path d="M21.883 12l-7.527 6.235.644.765 9-7.479-9-7.479-.645.764 7.529 6.236h-21.884v1h21.883z" />
        </svg>
      </div>

      <div className="home-footer">
        "This template is made with ❤️ by HARI SAI PARASA © 2025 💻 (✿◕‿◕✿)"
      </div>
    </div>
  );
}

export default Projects;
