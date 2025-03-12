import React from "react";
import { useNavigate } from "react-router-dom";
import "./ach.css";
import "../../index.css";

import certifications from "./certifications"; // Importing the certifications array
import DEFAULT from "./images/default.png";

function Achievements() {
  const navigate = useNavigate();

  const handleNavigate = () => {
    navigate("/");
  };

  return (
    <div className="accomplishments-container">

      <div className="accomplishments-title">Achievements</div>

      <div className="accomplishments-content">
        <div className="accomplishments-grid">
          {certifications.map((cert, index) => (
            <div className="accomplishments-item" key={index}>
              <a href={cert.link || "#"} target="_blank" rel="noreferrer">
                <img
                  src={cert.img || DEFAULT}
                  alt={cert.title}
                  className="cimgg"
                />
              </a>
              <div className="card-content">
                <h3 className="card-title">{cert.title}</h3>
                <p className="card-org">
                  Issued by: <span>{cert.org}</span>
                </p>
                <p className="card-date">Validity: {cert.validity}</p>
                <p className="card-desc">{cert.desc}</p>
                <div className="card-tags">
                  {cert.tags.map((tag, tagIndex) => (
                    <span
                      key={tagIndex}
                      className={`tag ${
                        tagIndex === 0 ? "tag-primary" : "tag-secondary"
                      }`}
                    >
                      {tag}
                    </span>
                  ))}
                </div>
                <a
                  href={cert.link}
                  target="_blank"
                  rel="noreferrer"
                  className="view-cert"
                >
                  <i class="fa-solid fa-chevron-right fa-beat-fade"></i> View Certificate
                </a>
              </div>
            </div>
          ))}
        </div>
      </div>

      <div className="continue-home" onClick={handleNavigate}>
        <p>Let's Continue To Home</p>
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

      <div className="home-footer">
        "This template is made with ❤️ by HARI SAI PARASA © 2025 💻 (✿◕‿◕✿)"
      </div>
    </div>
  );
}

export default Achievements;
