import React from "react";
import { Helmet } from "react-helmet";
import { useNavigate } from "react-router-dom";
import ParticlesBackground from "../ParticlesBackground";
import "./qua.css";
import "../../index.css";
import AVG from "./skills/angular.svg";
import RET from "./skills/react.svg";
import FIGMA from "./skills/figma.svg";
import HTML from "./skills/html.svg";
import JS from "./skills/javascript.svg";
import CSS from "./skills/css.svg";
import SASS from "./skills/sass.svg";

function Home() {
  const navigate = useNavigate();

  const handleNavigate = () => {
    navigate("/experience");
  };

  return (
    <div className="qua-home-container">
      <Helmet>
        <link
          href="https://fonts.googleapis.com/css2?family=Agbalumo:wght@400;500&display=swap"
          rel="stylesheet"
        />
        {/* Other font links */}
      </Helmet>

      <ParticlesBackground />
      
      <div className="qua-home-content">
        <div className="qua-home-imgcontainer">
          {/* Education Section */}
          <div className="education">
            <h2>Education</h2>
            <div className="qualification__content" data-content id="education">
              {/* Qualification 1 */}
              <div className="qualification__data">
                <div>
                  <h3 className="qualification__title">HSC, Science</h3>
                  <span className="qualification__subtitle">
                    St. Mary's Academy
                  </span>
                  <div className="qualification__calendar">
                    <i className="uil uil-calendar-alt"></i> 2009-2011
                  </div>
                </div>
                <div>
                  <span className="qualification__rounder"></span>
                  <span className="qualification__line"></span> {/* Line connecting the two dots */}
                </div>
              </div>

              {/* Qualification 2 */}
              <div className="qualification__data">
                <div></div>
                <div>
                  <span className="qualification__rounder"></span>
                  <span className="qualification__line"></span> {/* Line continues */}
                </div>
                <div>
                  <h3 className="qualification__title">B.Tech, Electronics</h3>
                  <span className="qualification__subtitle">
                    Sharda University
                  </span>
                  <div className="qualification__calendar">
                    <i className="uil uil-calendar-alt"></i> 2011-2015
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Skills Section */}
          <div className="skills">
            <h2 className="section__title">Skills</h2>
            <span className="section__subtitle">My tech stack</span>
            <div className="skills__container container grid">
              <div className="skills__container-box">
                <img className="skills__container-img" src={AVG} alt="angular" />
                <div className="skills__container-name">Angular</div>
              </div>

              <div className="skills__container-box">
                <img className="skills__container-img" src={RET} alt="react" />
                <div className="skills__container-name">React</div>
              </div>

              <div className="skills__container-box">
                <img className="skills__container-img" src={FIGMA} alt="FIGMA" />
                <div className="skills__container-name">Figma</div>
              </div>

              <div className="skills__container-box">
                <img className="skills__container-img" src={HTML} alt="HTML" />
                <div className="skills__container-name">HTML</div>
              </div>

              <div className="skills__container-box">
                <img className="skills__container-img" src={JS} alt="javascript" />
                <div className="skills__container-name">JavaScript</div>
              </div>

              <div className="skills__container-box">
                <img className="skills__container-img" src={CSS} alt="css" />
                <div className="skills__container-name">CSS</div>
              </div>

              <div className="skills__container-box">
                <img className="skills__container-img" src={SASS} alt="sass" />
                <div className="skills__container-name">SASS</div>
              </div>
            </div>
          </div>
        </div>

        <div
          className="qua-home-continue-to-experience"
          onClick={handleNavigate}
          style={{ cursor: "pointer" }}
        >
          <p>Let's Continue To Experience</p>
          <svg
            width="24"
            height="24"
            xmlns="http://www.w3.org/2000/svg"
            fillRule="evenodd"
            clipRule="evenodd"
            className="qua-home-arrow-svg"
          >
            <path d="M21.883 12l-7.527 6.235.644.765 9-7.479-9-7.479-.645.764 7.529 6.236h-21.884v1h21.883z" />
          </svg>
        </div>
      </div>
      <div
        style={{ fontFamily: "Alegreya SC, sans-serif" }}
        className="qua-home-footer"
      >
        "This template is made with ❤️ by HARI SAI PARASA © 2024 💻 (✿◕‿◕✿)"
      </div>
    </div>
  );
}

export default Home;
