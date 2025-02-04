import Particles, { initParticlesEngine } from "@tsparticles/react";
import { useEffect, useMemo, useState } from "react";
import { loadSlim } from "@tsparticles/slim"; // loadSlim for optimized performance

const ParticlesComponent = (props) => {
  const [init, setInit] = useState(false);

  // This effect is triggered once when the component mounts
  useEffect(() => {
    initParticlesEngine(async (engine) => {
      await loadSlim(engine); // Load optimized slim version of particles.js
    }).then(() => {
      setInit(true);
    });
  }, []);

  const particlesLoaded = (container) => {
    console.log(container); // For debugging
  };

  const options = useMemo(
    () => ({
      background: {
        color: {
          value: "transparent", // Set background to transparent
        },
      },
      fpsLimit: 120,
      interactivity: {
        events: {
          onClick: {
            enable: true,
            mode: "repulse",
          },
          onHover: {
            enable: true,
            mode: "grab",
          },
        },
        modes: {
          push: {
            distance: 100,
            duration: 5,
          },
          grab: {
            distance: 100,
          },
        },
      },
      particles: {
        color: {
          value: props.isDarkTheme ? "#FFFFFF" : "#000000", // Dynamically change based on theme
        },
        links: {
          color: props.isDarkTheme ? "#FFFFFF" : "#000000", // Change link color based on theme
          distance: 150,
          enable: true,
          opacity: 0.3,
          width: 1,
        },
        move: {
          direction: "none",
          enable: true,
          outModes: {
            default: "bounce",
          },
          random: true,
          speed: 1,
          straight: false,
        },
        number: {
          density: {
            enable: true,
          },
          value: 150,
        },
        opacity: {
          value: 1.0,
        },
        shape: {
          type: "circle",
        },
        size: {
          value: { min: 1, max: 3 },
        },
      },
      detectRetina: true,
    }),
    [props.isDarkTheme] // Recreate options when theme changes
  );

  return <Particles id={props.id} init={particlesLoaded} options={options} />;
};

export default ParticlesComponent;
