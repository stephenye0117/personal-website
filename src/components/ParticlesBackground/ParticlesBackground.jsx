import React, { useCallback } from 'react';
import Particles from "react-particles";
import { loadFull } from "tsparticles";

const ParticlesBackground = () => {
  const particlesInit = useCallback(async engine => {
    await loadFull(engine);
  }, []);

  return (
    <Particles
      id="tsparticles"
      init={particlesInit}
      className="fixed inset-0 -z-10"
      options={{
        background: {
          opacity: 0
        },
        fpsLimit: 60,
        particles: {
          color: {
            value: "#3b82f6"
          },
          links: {
            color: "#3b82f6",
            distance: 150,
            enable: true,
            opacity: 0.3,
            width: 1
          },
          move: {
            enable: true,
            outModes: {
              default: "bounce"
            },
            random: false,
            speed: 2,
            straight: false
          },
          number: {
            density: {
              enable: true,
              area: 800
            },
            value: 80
          },
          opacity: {
            value: 0.4
          },
          shape: {
            type: "circle"
          },
          size: {
            value: { min: 1, max: 3 }
          }
        },
        detectRetina: true
      }}
    />
  );
};

export default ParticlesBackground;