import React, { useEffect, useState } from "react";
import "./home.css";
import "../../index.css";
import { useNavigate } from "react-router-dom";
import myImage from "./myImage.png";

const TypingAnimation = ({ words, delay }) => {
  const [displayedText, setDisplayedText] = useState("");
  const [completed, setCompleted] = useState(false);

  useEffect(() => {
    let currentWordIndex = 0;
    let currentCharIndex = 0;

    const intervalId = setInterval(() => {
      const currentWord = words[currentWordIndex];
      setDisplayedText(currentWord.substring(0, currentCharIndex));
      currentCharIndex++;

      if (currentCharIndex > currentWord.length) {
        currentWordIndex++;
        currentCharIndex = 0;
      }

      if (currentWordIndex >= words.length) {
        clearInterval(intervalId);
        setCompleted(true);

        setTimeout(() => {
          setCompleted(false);
          currentWordIndex = 0;
          currentCharIndex = 0;
        }, 1000);
      }
    }, delay);

    return () => clearInterval(intervalId);
  }, [words, delay, completed]);

  return (
    <div className="home-typing-container">
      <div
        style={{ fontFamily: "Alegreya SC, sans-serif" }}
        className="home-a-text"
      >
        A
      </div>
      <div className="home-typing-text">{displayedText}</div>
    </div>
  );
};

function Home() {
  const navigate = useNavigate();

  const handleNavigate = () => {
    navigate("/about");
  };

  const words = [
    "Full-Stack Developer",
    "MERN Stack Expert",
    "Cloud Enthusiast",
    "Problem Solver",
    "DSA Expert",
  ];

  return (
    <div className="home-container">
      <div className="home-content">
        <div className="home-intro-text">
          <h3
            style={{ fontFamily: "Agbalumo, sans-serif" }}
            className="home-hello-text"
          >
            HELLO!
          </h3>
          <h1
            style={{ fontFamily: "Aref Ruqaa Ink, sans-serif" }}
            className="home-i-am-text"
          >
            I'm{" "}
            <span
              style={{ fontFamily: "Arima, sans-serif" }}
              className="home-text-hari"
            >
              Hari
            </span>{" "}
            <span
              style={{ fontFamily: "Armata, sans-serif" }}
              className="home-text-sai"
            >
              Sai
            </span>
            <span
              style={{ fontFamily: "Armata, sans-serif" }}
              className="home-emoji"
            >
              🚀
            </span>
          </h1>
          <div
            style={{ fontFamily: "Alegreya Sans SC, sans-serif" }}
            className="home-typing-animation"
          >
            <TypingAnimation words={words} delay={200} />
          </div>
          <div
            style={{ fontFamily: "Amiri Quran, sans-serif" }}
            className="home-action-buttons"
          >
            <div className="home-icon-container">
              <a
                className="home-icon linkedin"
                href="https://www.linkedin.com/in/parasa-hari-sai"
                target="_blank"
                rel="noopener noreferrer"
              >
                <i className="fab fa-linkedin fa-fade"></i>
                <span>LinkedIn</span>
              </a>
              <a
                className="home-icon github"
                href="https://www.github.com/harisaigithub"
                target="_blank"
                rel="noopener noreferrer"
              >
                <i className="fab fa-github fa-fade"></i>
                <span>GitHub</span>
              </a>
              <a
                className="home-icon email"
                href="mailto:harisaiparasa@gmail.com"
              >
                <i className="fas fa-envelope fa-fade"></i>
                <span>Email</span>
              </a>
            </div>
            <p
              style={{ fontFamily: "Aldrich, sans-serif" }}
              className="home-short-description"
            >
              <h3
                style={{ fontFamily: "Aldrich, sans-serif" }}
                className="home-hari"
              >
                Hari Here! 😉
              </h3>
              As a passionate{" "}
              <b style={{ fontFamily: "Arima, sans-serif" }}>
                full-stack developer
              </b>
              , I’m driven by the challenge of creating efficient and impactful{" "}
              <b style={{ fontFamily: "Arima, sans-serif" }}>web solutions</b>.
              <br />
              <br />
              Currently in my final year of B.Tech at{" "}
              <a
                href="https://www.vvitguntur.com/"
                target="_blank"
                rel="noopener noreferrer"
              >
                <b>@Vasireddy Venkatadri Institute of Technology</b>
              </a>{" "}
              I’m committed to pushing boundaries and staying ahead with the
              latest technologies.
            </p>
          </div>
        </div>
        <div className="home-imgcontainer">
          <div className="home-image-container">
            <img src={myImage} alt="Hari Sai" />
          </div>
          <div
            className="home-continue-to-about"
            onClick={handleNavigate}
            style={{ cursor: "pointer" }}
          >
            <p>Lets Continue To About</p>
            <svg
              width="24"
              height="24"
              xmlns="http://www.w3.org/2000/svg"
              fillRule="evenodd"
              clipRule="evenodd"
              className="home-arrow-svg"
            >
              <path d="M21.883 12l-7.527 6.235.644.765 9-7.479-9-7.479-.645.764 7.529 6.236h-21.884v1h21.883z" />
            </svg>
          </div>
        </div>
      </div>
      <div
        style={{ fontFamily: "Alegreya SC, sans-serif" }}
        className="home-footer"
      >
        "This template is made with ❤️ by HARI SAI PARASA © 2025 💻 (✿◕‿◕✿)"
      </div>
    </div>
  );
}

export default Home;
