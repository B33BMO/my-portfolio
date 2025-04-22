"use client";

import Particles from "react-tsparticles";
import { useCallback } from "react";
import { loadFull } from "tsparticles";

export default function WireframeBackground() {
  const particlesInit = useCallback(async (engine: any) => {
    console.log("✅ Particles Init");
    await loadFull(engine);
  }, []);

  return (
    <Particles
      id="tsparticles"
      init={particlesInit}
      options={{
        fullScreen: {
          enable: true,
          zIndex: -1
        },
        background: {
          color: "#0f0f0f",
        },
        particles: {
          number: {
            value: 100,
            density: {
              enable: true,
              area: 800,
            },
          },
          color: { value: "#ffffff" },
          shape: {
            type: "circle",
          },
          opacity: {
            value: 0.3,
          },
          size: {
            value: 2,
            random: true,
          },
          links: {
            enable: true,
            distance: 130,
            color: "#00ffff",
            opacity: 0.5,
            width: 1,
          },
          move: {
            enable: true,
            speed: 0.6,
            direction: "none",
            outModes: "bounce",
          },
        },
        detectRetina: true,
      }}
    />
  );
}
