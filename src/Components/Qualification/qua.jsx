import { React, useState } from "react";
import { useNavigate } from "react-router-dom";
import "./qua.css";
import "../../index.css";
import data from "./edu,skills,tools"; 

function Qua() {
  const navigate = useNavigate();
  const [selectedEducation, setSelectedEducation] = useState(null);
  const { educationList, skills, tools } = data;

  const handleNavigate = () => {
    navigate("/experience");
  };

  const handleDropdownChange = (index) => {
    setSelectedEducation(selectedEducation === index ? null : index);
  };

  return (
    <div className="qua-container">
      <div className="qua-title">Qualifications</div>

      <div className="qua-content">
        {/* Education Section */}
        <div className="Edu-container">
          <div className="Edu-header">
            <span className="dot"></span>
            <div className="small-dashed-line"></div>
            <span className="Edu-text">Education</span>
            <div className="large-dashed-line"></div>
            <span className="dot"></span>
          </div>

          <div className="sec-center">
            <input
              className="dropdown"
              type="checkbox"
              id="dropdown-education"
              name="dropdown"
            />
            <label className="for-dropdown" htmlFor="dropdown-education">
              Education <i class="fa-solid fa-arrow-right fa-fade"></i>
            </label>
            <div className="section-dropdown">
              {educationList.map((edu, index) => (
                <div key={index}>
                  <input
                    className="dropdown-sub"
                    type="checkbox"
                    id={`dropdown-${edu.degree.toLowerCase()}`}
                    name="dropdown-sub"
                    checked={selectedEducation === index}
                    onChange={() => handleDropdownChange(index)}
                  />
                  <label
                    className="for-dropdown-sub"
                    htmlFor={`dropdown-${edu.degree.toLowerCase()}`}
                  >
                    {edu.degree} <i class="fa-solid fa-plus fa-beat-fade"></i>
                  </label>
                  <div
                    className="section-dropdown-sub"
                    style={{
                      display: selectedEducation === index ? "block" : "none",
                    }}
                  >
                    <div className="degree-details">
                      <div className="left">
                        <p>
                          <span>Degree: </span> {edu.degree || "N/A"}
                        </p>
                        <p>
                          <span>Course: </span> {edu.course || "N/A"}
                        </p>
                        <p>
                          <span>Specialization: </span>
                          {edu.specialization || "N/A"}
                        </p>
                        <p>
                          <span>College: </span> {edu.college || "N/A"}
                        </p>
                      </div>
                      <div className="vertical-line">
                        <div className="v-line"></div>
                        <i className="fas fa-clover fa-spin"></i>
                        <div className="v-line"></div>
                      </div>
                      <div className="right">
                        <p>
                          <span>CGPA: </span>
                          {edu.cgpa || "N/A"}
                        </p>
                        <p>
                          <span>Year: </span>
                          {edu.year || "N/A"}
                        </p>
                        <p>
                          <span>Place: </span> {edu.place || "N/A"}
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Skills Section */}
        <div className="skills-container">
          <div className="skill-header">
            <span className="dot"></span>
            <div className="small-dashed-line"></div>
            <span className="skills-text">Skills</span>
            <div className="large-dashed-line"></div>
            <span className="dot"></span>
          </div>
          <div className="st-container">
            {skills.map((skill, index) => (
              <a
                key={index}
                href={skill.href}
                target="_blank"
                rel="noopener noreferrer"
                className="st-card"
                style={{ background: skill.gradient }}
              >
                <img
                  alt={skill.name}
                  src={skill.imgSrc}
                  className="st-icon"
                />
                <span>{skill.name}</span>
              </a>
            ))}
          </div>
        </div>

        {/* Tools Section */}
        <div className="Tools-container">
          <div className="Tool-header">
            <span className="dot"></span>
            <div className="small-dashed-line"></div>
            <span className="Tools-text">Tools</span>
            <div className="large-dashed-line"></div>
            <span className="dot"></span>
          </div>

          <div className="st-container">
            {tools.map((tool, index) => (
              <a
                key={index}
                href={tool.href}
                target="_blank"
                rel="noopener noreferrer"
                className="st-card"
                style={{ background: tool.gradient }}
              >
                <img
                  alt={tool.name}
                  src={tool.imgSrc}
                  className="st-icon"
                />
                <span>{tool.name}</span>
              </a>
            ))}
          </div>
        </div>

        {/* Continue to Experience */}
        <div
          className="continue-exp"
          onClick={handleNavigate}
          style={{ cursor: "pointer" }}
        >
          <p>Let's Continue To Experience</p>
          <svg
            width="24"
            height="24"
            xmlns="http://www.w3.org/2000/svg"
            fill="currentColor"
            viewBox="0 0 24 24"
            className="arrow-svg"
          >
            <path d="M21.883 12l-7.527 6.235.644.765 9-7.479-9-7.479-.645.764 7.529 6.236h-21.884v1h21.883z" />
          </svg>
        </div>
      </div>

      {/* Footer */}
      <div className="home-footer">
        "This template is made with ❤️ by HARI SAI PARASA © 2025 💻 (✿◕‿◕✿)"
      </div>
    </div>
  );
}

export default Qua;
