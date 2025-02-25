import React, { useState, useEffect } from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Navbar from "./Components/Navbar/navbar";
import Home from "./Components/Home/home";
import About from "./Components/About/about";
import Qualification from "./Components/Qualification/qua";
import Projects from "./Components/Projects/pro";
import Experience from "./Components/Experience/exp";
import Achievements from "./Components/Achievements/ach";
import ParticlesComponent from "./Components/ParticlesBackground";

function App() {
  const [isDarkTheme, setIsDarkTheme] = useState(false);

  const toggleTheme = () => {
    setIsDarkTheme(!isDarkTheme);
    document.body.classList.toggle("dark-theme"); // Toggles dark theme
  };

  useEffect(() => {
    // Load the previously selected theme from localStorage
    const savedTheme = localStorage.getItem("theme");
    if (savedTheme === "dark") {
      setIsDarkTheme(true);
      document.body.classList.add("dark-theme");
    }
  }, []);

  useEffect(() => {
    // Save the user's theme preference to localStorage
    localStorage.setItem("theme", isDarkTheme ? "dark" : "light");
  }, [isDarkTheme]);

  return (
    <Router>
      <Navbar isDarkTheme={isDarkTheme} toggleTheme={toggleTheme} />
      <ParticlesComponent id="particles" isDarkTheme={isDarkTheme} />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/qualification" element={<Qualification />} />
        <Route path="/projects" element={<Projects />} />
        <Route path="/experience" element={<Experience />} />
        <Route path="/achievements" element={<Achievements />} />
      </Routes>
    </Router>
  );
}

export default App;
