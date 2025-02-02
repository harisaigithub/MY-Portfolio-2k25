// ParticlesBackground.js
import React, { useEffect, useRef } from "react";
import Particles from "react-tsparticles";

const ParticlesBackground = () => {
  const canvasRef = useRef(null);

  const initializeParticles = (theme) => {
    if (canvasRef.current) {
      // Clear previous particles if any exist
      const canvasElement = canvasRef.current;
      canvasElement.innerHTML = ""; // Remove all previous particles

      // Reinitialize particles
      Particles.init({
        selector: ".particles-background",
        maxParticles: 100,
        connectParticles: true,
        speed: 1, // Set constant speed
        minDistance: 100,
        sizeVariations: 3,
        color: theme === "dark-theme" ? "#ffffff" : "#000000",
        shape: "circle",
        opacity: {
          value: 0.5,
          random: true,
        },
        size: {
          value: 3,
          random: true,
        },
        line_linked: {
          enable: true,
          distance: 100,
          color: theme === "dark-theme" ? "#ffffff" : "#000000",
        },
        interactivity: {
          events: {
            onhover: {
              enable: true,
              mode: "repulse", // Repulse effect on hover
            },
            onclick: {
              enable: true,
              mode: "push", // Push new particles on click
            },
          },
        },
      });
    }
  };

  useEffect(() => {
    // Initialize particles with the current theme
    const bodyClass = document.body.className;
    initializeParticles(bodyClass);

    // Monitor for theme changes and reinitialize particles
    const themeObserver = new MutationObserver(() => {
      const newTheme = document.body.className;
      initializeParticles(newTheme); // Reinitialize with the new theme
    });

    themeObserver.observe(document.body, {
      attributes: true,
      attributeFilter: ["class"],
    });

    // Cleanup observer on unmount
    return () => themeObserver.disconnect();
  }, []);

  return <canvas ref={canvasRef} className="particles-background"></canvas>;
};

export default ParticlesBackground;
