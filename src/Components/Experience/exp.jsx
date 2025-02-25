import React from "react";
import { useNavigate } from "react-router-dom";
import "./exp.css";
import "../../index.css";

// Importing the experience array from an external file
import experience from "./Experience"; // The experience array will be in a separate file
import DEFAULT from "./images/default.png"; // Default image in case any experience doesn't have an image

function Experience() {
  const navigate = useNavigate();

  const handleNavigate = () => {
    navigate("/projects");
  };

  return (
    <div className="exp-container">
      <div className="exp-title">Experience</div>

      <div className="exp-content">
        <div className="exp-grid">
          {experience.map ((exp, index) => (
            <div className="exp-column" key={index}>
              <div className="exp-row">
                <div className="exp-item">
                  <a
                    href={exp.link || "#"}
                    target="_blank"
                    rel="noreferrer"
                    style={{ cursor: "pointer" }}
                  >
                    <img
                      src={exp.img || DEFAULT}
                      alt={exp.title}
                      className="img"
                    />
                  </a>
                  <div className="exp-card-content">
                    <h3 className="exp-card-title">{exp.title}</h3>
                    <p className="exp-card-org">
                      Issued by: <span>{exp.org}</span>
                    </p>
                    <p className="exp-card-date">{exp.date}</p>
                    <p className="exp-card-desc">{exp.desc}</p>
                    <div className="exp-card-tags">
                      {exp.tags.map((tag, tagIndex) => (
                        <span
                          key={tagIndex}
                          className={`exptag ${
                            tagIndex === 0
                              ? "exptag-primary"
                              : "exptag-secondary"
                          }`}
                        >
                          {tag}
                        </span>
                      ))}
                    </div>
                    <a
                      href={exp.link}
                      target="_blank"
                      rel="noreferrer"
                      className="expview-cert"
                    >
                      <i className="fa-solid fa-chevron-right fa-bounce"></i> View
                      Certificate
                    </a>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>

        <div
          className="continue-projects"
          onClick={handleNavigate}
          style={{
            fontFamily: "Space Grotesk, sans-serif",
            cursor: "pointer",
          }}
        >
          <p>Let's Continue To Projects</p>
          <svg
            width="24"
            height="24"
            xmlns="http://www.w3.org/2000/svg"
            fillRule="evenodd"
            clipRule="evenodd"
            className="arrow-svg"
          >
            <path d="M21.883 12l-7.527 6.235.644.765 9-7.479-9-7.479-.645.764 7.529 6.236h-21.884v1h21.883z" />
          </svg>
        </div>
      </div>

      <div className="home-footer">
        "This template is made with ❤️ by HARI SAI PARASA © 2025 💻 (✿◕‿◕✿)"
      </div>
    </div>
  );
}

export default Experience;
