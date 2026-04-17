"use client";

import React, { useEffect, useState } from "react";
import Particles, { initParticlesEngine } from "@tsparticles/react";
import { loadSlim } from "@tsparticles/slim";
import Hero from "./sections/hero";
import dynamic from 'next/dynamic';

const Services = dynamic(() => import('./sections/services'));
const Portfolio = dynamic(() => import('./sections/portfolio'));
const Process = dynamic(() => import('./sections/proof'));
const Team = dynamic(() => import('./sections/team'));
const CTA = dynamic(() => import('./sections/cta'));

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
        onClick: { enable: true, mode: "push" },
        onHover: { enable: true, mode: ["grab", "bubble"] }, 
        resize: { enable: true } 
      },
      modes: { 
        grab: { distance: 250, links: { opacity: 0.5 } },
        bubble: { distance: 250, size: 3.5, duration: 2, opacity: 0.8 },
        push: { quantity: 2 }
      },
    },
    particles: {
      color: { value: ["#1877f2", "#94a3b8", "#cbd5e1"] },
      links: { 
        color: "#94a3b8", 
        distance: 150, 
        enable: true, 
        opacity: 0.15, 
        width: 1 
      },
      move: { 
        enable: true, 
        speed: 0.5, 
        direction: "top" as const, 
        outModes: { default: "out" as const } 
      },
      number: { density: { enable: true, area: 1000 }, value: 100 },
      opacity: { value: 0.35 },
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
        <CTA />

      </div>
    </div>
  );
}
