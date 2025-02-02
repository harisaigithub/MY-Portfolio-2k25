import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom"; // Change this to react-router-dom
import { Helmet } from "react-helmet";
import LightLogo from "./light-navbar.png"; // Light theme logo
import DarkLogo from "./dark-navbar.png"; // Dark theme logo
import "./navbar.css";
import "@fortawesome/fontawesome-free/css/all.min.css";

const Navbar = ({ isDarkTheme, toggleTheme }) => {
  const [menuVisible, setMenuVisible] = useState(false);

  const toggleMenu = () => {
    setMenuVisible(!menuVisible);
  };

  const closeMenu = () => {
    setMenuVisible(false);
  };

  useEffect(() => {
    const savedTheme = localStorage.getItem("theme");
    if (savedTheme === "dark") {
      document.body.classList.add("dark-theme");
    }
  }, []);

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };
  return (
    <div
      className={`navbar-container ${isDarkTheme ? "dark-nav" : "light-nav"}`}
    >
      <Helmet>
        <link
          href="https://fonts.googleapis.com/css2?family=Akshar:wght@400;500&display=swap"
          rel="stylesheet"
        />
      </Helmet>
      <nav className="navbar">
        {/* Logo that changes based on the theme */}
        <div className="logo">
          <Link to="/" onClick={closeMenu}>
            <img src={isDarkTheme ? DarkLogo : LightLogo} alt="Logo" />
          </Link>
        </div>

        {/* Navbar links aligned to the right */}
        <ul
          style={{ fontFamily: "Akshar, sans-serif" }}
          className={`nav-links ${menuVisible ? "active" : ""}`}
        >
          <li>
            <Link
              to="/about"
              onClick={() => {
                closeMenu();
                scrollToTop();
              }}
            >
              About
            </Link>
          </li>
          <li>
            <Link
              to="/qualification"
              onClick={() => {
                closeMenu();
                scrollToTop();
              }}
            >
              Qualification
            </Link>
          </li>
          <li>
            <Link
              to="/experience"
              onClick={() => {
                closeMenu();
                scrollToTop();
              }}
            >
              Experience
            </Link>
          </li>
          <li>
            <Link
              to="/projects"
              onClick={() => {
                closeMenu();
                scrollToTop();
              }}
            >
              Projects
            </Link>
          </li>
          <li>
            <Link
              to="/achievements"
              onClick={() => {
                closeMenu();
                scrollToTop();
              }}
            >
              Achievements
            </Link>
          </li>
        </ul>

        {/* Hire Me button */}
        <div className="nbox13">
          <a
            style={{ fontFamily: "Akshar, sans-serif" }}
            className="hireme"
            href="https://www.canva.com/design/DAF5foCas_c/HvuS7R5LdrdxCXK7EaZUNw/view?utm_content=DAF5foCas_c&utm_campaign=designshare&utm_medium=link&utm_source=editor"
            target="_blank"
            rel="noopener noreferrer"
          >
            Hire Me
          </a>
        </div>

        {/* Theme toggle button */}
        <div className="theme-toggle" onClick={toggleTheme}>
          {isDarkTheme ? (
            <i className="fa-solid fa-sun" style={{ color: "yellow" }}></i>
          ) : (
            <i className="fa-solid fa-moon" style={{ color: "#000" }}></i>
          )}
        </div>

        {/* Hamburger menu for mobile view */}
        <div className="hamburger">
          <i className="fa-solid fa-bars" id="iconic" onClick={toggleMenu}></i>
        </div>
      </nav>
    </div>
  );
};

export default Navbar;
