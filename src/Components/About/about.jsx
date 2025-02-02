import React from "react";
import { useNavigate } from "react-router-dom";
import ParticlesBackground from "../ParticlesBackground";
import TTIMG from "./logo11.png";
import { Helmet } from "react-helmet";
import "../../index.css";
import "./about.css";

const About = () => {
  const navigate = useNavigate();

  const handleNavigate = () => {
    navigate("/qualification");
  };

  return (
    <div className="about-section-container">
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
          href="https://fonts.googleapis.com/css2?family=Biryani:wght@400;500&display=swap"
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

      <ParticlesBackground />
      
      <div className="header-placeholder"></div>
      <div style={{ fontFamily: "Agbalumo, sans-serif" }} className="aboutme">
        About Me
      </div>
      <div className="content-wrapper">
        <div className="left-column">
          <div className="image-container">
            <img src={TTIMG} alt="profile" className="profile-image" />
          </div>
          <div
            style={{ fontFamily: "Amiri Quran, sans-serif" }}
            className="about-icon-container"
          >
            <a
              className="about-icon gcp"
              href="https://www.cloudskillsboost.google/public_profiles/38b2501f-47d8-4c19-a78c-d9a6428de9be"
              target="_blank"
              rel="noopener noreferrer"
            >
              <i className="fab fa-google"></i>
              <span>GCP Badges</span>
            </a>
            <a
              className="about-icon microsoft"
              href="https://learn.microsoft.com/en-us/users/parasaharisai-3316/"
              target="_blank"
              rel="noopener noreferrer"
            >
              <i className="fab fa-microsoft"></i>
              <span>Microsoft Badges</span>
            </a>
            <a
              className="about-icon Sf"
              href="https://www.salesforce.com/trailblazer/harisaiparasa"
              target="_blank"
              rel="noopener noreferrer"
            >
              <i className="fab fa-salesforce"></i>
              <span>SalesForce</span>
            </a>
          </div>
          <div
            style={{ fontFamily: "Aref Ruqaa Ink, sans-serif" }}
            className="resume-download"
          >
            <a
              href="https://www.canva.com/design/DAF5foCas_c/HvuS7R5LdrdxCXK7EaZUNw/view?utm_content=DAF5foCas_c&utm_campaign=designshare&utm_medium=link&utm_source=editor"
              target="_blank"
              rel="noopener noreferrer"
            >
              Download My Resume
            </a>
          </div>
        </div>

        <div className="right-column">
          <div className="text-content">
            <div className="intro-text">
              <h2 style={{ fontFamily: "Arima, sans-serif" }}>
                <i class="fa-solid fa-pen-nib fa-shake"></i> Hi, I’m Hari Sai!
                👨‍💻ㅤ
              </h2>
              <p style={{ fontFamily: "Biryani, sans-serif" }}>
                {" "}
                ✧ As a passionate full-stack developer and final-year B.Tech
                student at{" "}
                <a
                  href="https://www.vvitguntur.com/"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  @Vasireddy Venkatadri Institute of Technology
                </a>
                , I've developed a deep expertise in software development and
                problem-solving. My hands-on experience in tackling real-world
                challenges through robust and user-friendly applications has
                shaped my journey in tech.
              </p>
              <p style={{ fontFamily: "Biryani, sans-serif" }}>
                {" "}
                ✧ Starting with my first project in the MERN stack (MongoDB,
                Express.js, React.js, Node.js), I quickly discovered my love for
                building scalable, intuitive applications. Over the years, I’ve
                expanded my technical toolkit with languages like Java, Python,
                SQL, and explored cloud integration using AWS and Google Cloud,
                working on projects aimed at solving everyday problems.
              </p>

              <section>
                <h3 style={{ fontFamily: "Arima, sans-serif" }}>
                  <i class="fa-solid fa-star fa-flip"></i> What Makes Me Unique
                  🎯
                </h3>
                <p style={{ fontFamily: "Biryani, sans-serif" }}>
                  {" "}
                  ✧ I thrive on turning innovative ideas into reality through
                  code and continuous learning. Whether I’m navigating complex
                  coding challenges or contributing to impactful tech projects,
                  my focus remains on delivering high-quality, optimized
                  solutions. 
                  </p>
                  <p style={{ fontFamily: "Biryani, sans-serif" }}>
                  ✧ My ultimate goal? To build technologies that
                  inspire change and revolutionize industries.
                </p>
              </section>
            </div>
          </div>
        </div>
      </div>

      {/* The section for Key Competencies and Additional Details */}
      <div className="about-adjust">
        <section>
          <h3 style={{ fontFamily: "Arima, sans-serif" }}>
            <i class="fa-solid fa-arrow-right fa-bounce"></i> Key Competencies
            💼
          </h3>
          <ul style={{ fontFamily: "Aldrich, sans-serif" }}>
            <li>
              <span>Adaptability:</span> Quickly adjusting to new tools,
              frameworks, and environments.
            </li>
            <li>
              <span>Problem-Solving:</span> Leveraging data structures and
              algorithms to craft efficient solutions.
            </li>
            <li>
              <span>Collaboration:</span> A strong advocate for teamwork,
              ensuring shared success in projects.
            </li>
            <li>
              <span>Clear Communication:</span> Bridging the gap between
              technical and non-technical stakeholders.
            </li>
            <li>
              <span>Innovation:</span> Always seeking ways to push the envelope
              and improve processes.
            </li>
          </ul>
        </section>

        <section>
          <h3 style={{ fontFamily: "Arima, sans-serif" }}>
            <i class="fa-solid fa-arrow-right fa-bounce"></i> Areas I Excel In
            ⚡
          </h3>
          <ul style={{ fontFamily: "Aldrich, sans-serif" }}>
            <li>
              <span>Full-Stack Development:</span> Expert in building dynamic,
              scalable web applications using the MERN stack and React.js.
            </li>
            <li>
              <span>Predictive Analytics:</span> Passionate about unlocking
              insights from data to inform decisions.
            </li>
            <li>
              <span>Continuous Growth:</span> Eager to learn, adapt, and evolve
              in a fast-moving tech landscape.
            </li>
            <li>
              <span>Problem Solving with DSA:</span> Applying data structures
              and algorithms to craft efficient, scalable solutions is something
              I continually strive to master.
            </li>
          </ul>
        </section>

        <section>
          <h3 style={{ fontFamily: "Arima, sans-serif" }}>
            <i class="fa-solid fa-arrow-right fa-bounce"></i> Diving Deep Into
            📈
          </h3>
          <ul style={{ fontFamily: "Aldrich, sans-serif" }}>
            <li>
              <span>Cybersecurity:</span> Exploring methods to build secure
              digital environments.
            </li>
            <li>
              <span>AI & Machine Learning:</span> Discovering how algorithms can
              shape the future of tech.
            </li>
            <li>
              <span>Data Visualization:</span> Learning to communicate data
              insights effectively through visuals.
            </li>
            <li>
              <span>Entrepreneurship:</span> Gearing up for future ventures and
              innovations.
            </li>
          </ul>
        </section>

        <section>
          <h3 style={{ fontFamily: "Arima, sans-serif" }}>
            <i class="fa-solid fa-arrow-right fa-bounce"></i> Future Excited
            About the Future 🔮 & Aspirations 🏆
          </h3>
          <ul style={{ fontFamily: "Aldrich, sans-serif" }}>
            <li>
              • Develop groundbreaking web applications that push boundaries.
            </li>
            <li>• Master data science and advanced analytics techniques.</li>
            <li>
              • Collaborate on innovative and transformative projects that
              inspire change.
            </li>
          </ul>
          <p
            style={{
              fontFamily: "Agbalumo, sans-serif",
              fontSize: "1.2em",
              margin: "0",
            }}
          >
            <b>
              I’m actively pursuing a path toward entrepreneurship in the tech
              industry, with each project and experience bringing me closer to
              that vision.
            </b>
          </p>
        </section>
      </div>

      <div
        className="about-continue-to-Qualification"
        onClick={handleNavigate}
        style={{
          fontFamily: "Alegreya Sans SC, sans-serif",
          cursor: "pointer",
        }}
      >
        <p>Lets Continue To Qualification</p>
        <svg
          width="24"
          height="24"
          xmlns="http://www.w3.org/2000/svg"
          fillRule="evenodd"
          clipRule="evenodd"
          className="about-arrow-svg"
        >
          <path d="M21.883 12l-7.527 6.235.644.765 9-7.479-9-7.479-.645.764 7.529 6.236h-21.884v1h21.883z" />
        </svg>
      </div>
      <div
        style={{ fontFamily: "Alegreya SC, sans-serif" }}
        className="footer-note"
      >
        "This template is made with ❤️ by HARI SAI PARASA © 2024 💻 (✿◕‿◕✿)"
      </div>
    </div>
  );
};

export default About;
