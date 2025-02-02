import React from "react";
import { Helmet } from 'react-helmet';
import { useNavigate } from 'react-router-dom';
import "./pro.css";
import "../../index.css";

function Projects() {
  const navigate = useNavigate();

  const handleNavigate = () => {
    navigate('/achievements');
  };

  return (
    <div className="proj-container">
      <Helmet>
        <link href="https://fonts.googleapis.com/css2?family=Agbalumo:wght@400;500&display=swap" rel="stylesheet" />
        <link href="https://fonts.googleapis.com/css2?family=Aref+Ruqaa+Ink:wght@400;500&display=swap" rel="stylesheet" />
        <link href="https://fonts.googleapis.com/css2?family=Arima:wght@400;500&display=swap" rel="stylesheet" />
        <link href="https://fonts.googleapis.com/css2?family=Armata&display=swap" rel="stylesheet" />
        <link href="https://fonts.googleapis.com/css2?family=Amiri+Quran&display=swap" rel="stylesheet" />
        <link href="https://fonts.googleapis.com/css2?family=Aldrich:wght@400;500&display=swap" rel="stylesheet" />
        <link href="https://fonts.googleapis.com/css2?family=Alegreya+SC:wght@400;500&display=swap" rel="stylesheet" />
        <link href="https://fonts.googleapis.com/css2?family=Alegreya+Sans+SC:wght@400;500&display=swap" rel="stylesheet" />
      </Helmet>


      <div className="proj-content">
        <h2 className="proj-title">Projects</h2>

        <div className="proj-cards">

        
          <div className="proj-card">
            {/* Example Project Card */}
            <a href="https://example.com/project1" target="_blank" rel="noreferrer">
              <img src="path_to_image1.jpg" alt="Project 1" className="proj-img" />
            </a>
            <div className="proj-details">
              <h3>Project 1</h3>
              <p>January 2024 - March 2024</p>
              <p>Project description goes here...</p>
              <div className="proj-tags">
                <span className="proj-tag">React</span>
                <span className="proj-tag">Node.js</span>
                <span className="proj-tag">MongoDB</span>
              </div>
            </div>
          </div>

          <div className="proj-card">
            {/* Example Project Card */}
            <a href="https://example.com/project2" target="_blank" rel="noreferrer">
              <img src="path_to_image2.jpg" alt="Project 2" className="proj-img" />
            </a>
            <div className="proj-details">
              <h3>Project 2</h3>
              <p>April 2024 - June 2024</p>
              <p>Project description goes here...</p>
              <div className="proj-tags">
                <span className="proj-tag">Python</span>
                <span className="proj-tag">Flask</span>
                <span className="proj-tag">PostgreSQL</span>
              </div>
            </div>
          </div>

          <div className="proj-card">
            {/* Example Project Card */}
            <a href="https://example.com/project2" target="_blank" rel="noreferrer">
              <img src="path_to_image2.jpg" alt="Project 2" className="proj-img" />
            </a>
            <div className="proj-details">
              <h3>Project 2</h3>
              <p>April 2024 - June 2024</p>
              <p>Project description goes here...</p>
              <div className="proj-tags">
                <span className="proj-tag">Python</span>
                <span className="proj-tag">Flask</span>
                <span className="proj-tag">PostgreSQL</span>
              </div>
            </div>
          </div>
        </div>

        <div className="proj-continue-to-achievements" onClick={handleNavigate} style={{ cursor: 'pointer' }}>
          <p>Let's Continue To Achievements</p>
          <svg
            width="24"
            height="24"
            xmlns="http://www.w3.org/2000/svg"
            fillRule="evenodd"
            clipRule="evenodd"
            className="proj-arrow-svg"
          >
            <path d="M21.883 12l-7.527 6.235.644.765 9-7.479-9-7.479-.645.764 7.529 6.236h-21.884v1h21.883z" />
          </svg>
        </div>
      </div>

      <div className="proj-footer">
        "This template is made with ❤️ by HARI SAI PARASA © 2024 💻 (✿◕‿◕✿)"
      </div>
    </div>
  );
}

export default Projects;
