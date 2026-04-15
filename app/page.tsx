"use client";

import React, { useEffect, useState } from "react";
import Particles, { initParticlesEngine } from "@tsparticles/react";
import { loadSlim } from "@tsparticles/slim";
import Hero from "./sections/hero";
import Services from "./sections/services";
import Portfolio from "./sections/portfolio";
import Process from "./sections/proof";
import Team from "./sections/team";

export default function Home() {
  const [init, setInit] = useState(false);

  useEffect(() => {
    initParticlesEngine(async (engine) => {
      await loadSlim(engine);
    }).then(() => {
      setInit(true);
    });
  }, []);

  const particlesOptions = {
    background: { color: { value: "transparent" } },
    fpsLimit: 120,
    interactivity: {
      events: { 
        onHover: { enable: true, mode: "grab" }, 
        resize: { enable: true } 
      },
      modes: { 
        grab: { distance: 100, links: { opacity: 0.2 } } 
      },
    },
    particles: {
      color: { value: ["#1877f2", "#d89e5c", "#64748b"] },
      links: { 
        color: "#ffffff", 
        distance: 120, 
        enable: true, 
        opacity: 0.08, 
        width: 1.5 
      },
      move: { 
        enable: true, 
        speed: 0.4, 
        direction: "none" as const, 
        outModes: { default: "out" as const } 
      },
      number: { density: { enable: true, area: 1000 }, value: 60 },
      opacity: { value: 0.15 },
      shape: { type: "circle" },
      size: { value: { min: 1.5, max: 3 } },
    },
    detectRetina: true,
  };

  return (
    <div className="relative">
      {/* Fixed Background */}
      <div className="fixed inset-0 bg-gradient-to-br from-slate-100 via-blue-50 to-amber-50 z-0" />

      {/* Fixed Particles Background */}
      {init && (
        <Particles
          id="tsparticles-global"
          options={particlesOptions}
          className="fixed inset-0 z-[1] pointer-events-none"
        />
      )}

      {/* Scrollable Content Wrapper */}
      <div className="relative z-10">
        <Hero />
        <Services />
        <Portfolio />
        <Process />
        <Team />

      </div>
    </div>
  );
}
