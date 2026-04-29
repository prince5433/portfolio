"use client";

import Particles from "react-tsparticles";
import type { Engine } from "tsparticles-engine";
import { loadSlim } from "tsparticles-slim";
import { useCallback } from "react";

export function HeroParticles() {
  const onInit = useCallback(async (engine: Engine) => {
    await loadSlim(engine);
  }, []);

  return (
    <Particles
      id="hero-particles"
      className="absolute inset-0 -z-10"
      init={onInit}
      options={{
        fullScreen: false,
        background: { color: { value: "transparent" } },
        fpsLimit: 60,
        particles: {
          number: { value: 30, density: { enable: true, area: 1200 } },
          color: { value: ["#38bdf8", "#22d3ee", "#a855f7"] },
          opacity: { value: 0.35 },
          size: { value: { min: 1, max: 3 } },
          move: { enable: true, speed: 0.35, direction: "none", outModes: { default: "out" } },
          links: { enable: true, opacity: 0.15, distance: 140, color: "#38bdf8" }
        },
        interactivity: {
          events: {
            onHover: { enable: true, mode: "repulse" },
            resize: true
          },
          modes: {
            repulse: { distance: 80, duration: 0.3 }
          }
        },
        detectRetina: true
      }}
    />
  );
}