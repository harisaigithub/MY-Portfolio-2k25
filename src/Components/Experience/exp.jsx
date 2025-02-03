import React from "react";
import { Helmet } from "react-helmet";
import { useNavigate } from "react-router-dom";
// import ParticlesBackground from "../ParticlesBackground";
import "./exp.css";
import "../../index.css";
// import CYBS from "./immg/cybs.webp";
// import DATAS from "./immg/datas.jpg";
// import JNET from "./immg/jnet.jpg";
// import LOWE from "./immg/lowe.webp";
import JAVAS from "./immg/java-full-stack.png";
// import SALS from "./immg/salesforce-2-1.jpg";
// import WEBD from "./immg/webd.jpeg";

function Experience() {
  const navigate = useNavigate();

  const handleNavigate = () => {
    navigate("/projects");
  };

  return (
    <div className="exp-container">
      <Helmet>
        <link
          href="https://fonts.googleapis.com/css2?family=Agbalumo:wght@400;500&display=swap"
          rel="stylesheet"
        />
        <link
          href="https://fonts.googleapis.com/css2?family=Aref+Ruqaa+Ink:wght@400;500&display=swap"
          rel="stylesheet"
        />
        <link
          href="https://fonts.googleapis.com/css2?family=Arima:wght@400;500&display=swap"
          rel="stylesheet"
        />
        <link
          href="https://fonts.googleapis.com/css2?family=Armata&display=swap"
          rel="stylesheet"
        />
        <link
          href="https://fonts.googleapis.com/css2?family=Amiri+Quran&display=swap"
          rel="stylesheet"
        />
        <link
          href="https://fonts.googleapis.com/css2?family=Aldrich:wght@400;500&display=swap"
          rel="stylesheet"
        />
        <link
          href="https://fonts.googleapis.com/css2?family=Alegreya+SC:wght@400;500&display=swap"
          rel="stylesheet"
        />
        <link
          href="https://fonts.googleapis.com/css2?family=Alegreya+Sans+SC:wght@400;500&display=swap"
          rel="stylesheet"
        />
      </Helmet>
      
      {/* <ParticlesBackground /> */}

      <div className="exp-title">Experience</div>
      <div className="exp-content">
        <div className="exp-grid">
          <div className="exp-column">
            <div className="exp-row">
              <div className="exp-item">
                <a
                  href="https://vvitguntur-my.sharepoint.com/:b:/g/personal/22bq5a4213_vvit_net/EW_YprbrR71Gpm4SKRfWq4QBHJPtnhW7bejqPVj8Dv0yKA?e=wtW9DS"
                  target="_blank"
                  rel="noreferrer"
                  style={{ cursor: "pointer" }} // Ensuring the cursor turns into a pointer
                >
                  <img
                    src={JAVAS} // Check that this variable is defined and correctly points to the image
                    alt="Graph of Facebook Misinformation"
                    className="cimgg"
                  />
                </a>
                <div className="card-content">
                  <h3 className="card-title">JAVA Full Stack Development</h3>
                  <p className="card-date">July 2024 - September 2024</p>
                  <p className="card-desc">
                    Java FullStack Developer Virtual Internship
                  </p>
                  <div className="card-tags">
                    <span className="tag">JAVA Full-Stack</span>
                    <span className="tag">COHORT-9</span>
                    <span className="tag">Virtual Internship</span>
                    <span className="tag">AICTE</span>
                    <span className="tag">By Edu Skills Academy</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div
          className="continue-home"
          onClick={handleNavigate}
          style={{
            fontFamily: "Alegreya Sans SC, sans-serif",
            cursor: "pointer",
          }}
        >
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
      </div>

      <div className="footer">
        "This template is made with ❤️ by HARI SAI PARASA © 2024 💻 (✿◕‿◕✿)"
      </div>
    </div>
  );
}

export default Experience;
