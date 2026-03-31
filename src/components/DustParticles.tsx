"use client";
import { useEffect, useState } from "react";
import Particles, { initParticlesEngine } from "@tsparticles/react";
import { loadSlim } from "@tsparticles/slim";
import type { ISourceOptions } from "@tsparticles/engine";

const options: ISourceOptions = {
  fullScreen: false,
  background: { color: { value: "transparent" } },
  fpsLimit: 30,
  particles: {
    number: { value: 35, density: { enable: true } },
    color: { value: ["#d5cabe", "#a68563", "#f0efec"] },
    shape: { type: "circle" },
    opacity: {
      value: { min: 0.05, max: 0.25 },
      animation: { enable: true, speed: 0.5, sync: false },
    },
    size: { value: { min: 1, max: 3 } },
    move: {
      enable: true,
      speed: 0.4,
      direction: "top",
      random: true,
      straight: false,
      outModes: { default: "out" },
    },
  },
  detectRetina: true,
};

export default function DustParticles() {
  const [ready, setReady] = useState(false);

  useEffect(() => {
    initParticlesEngine(async (engine) => {
      await loadSlim(engine);
    }).then(() => setReady(true));
  }, []);

  if (!ready) return null;

  return (
    <Particles
      id="dust"
      options={options}
      className="absolute inset-0 z-0 pointer-events-none"
    />
  );
}
