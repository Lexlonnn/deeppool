"use client";

import React, { useRef } from "react";
import { motion, useScroll, useTransform } from "framer-motion";
import Hero from "./hero";
import Services from "./services";
import SpinningGraphic from "../components/SpinningGraphic";

export default function HeroAndServices() {
  const containerRef = useRef<HTMLDivElement>(null);
  
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start start", "end end"]
  });

  // Calculate transforms for the spinning graphic based on scroll progress through the combined Hero+Services section.
  // We want it to stay centered during the hero (progress 0 to ~0.3),
  // then transition to the right column of services (progress 0.3 to 0.7),
  // and stay there (progress 0.7 to 1).
  
  // X translation: 0 initially, moves to right (e.g. 25vw) on desktop
  const xDesktop = useTransform(scrollYProgress, [0, 0.4, 0.8, 1], ["0%", "0%", "25vw", "25vw"]);
  // On mobile, it stays centered. We can use CSS media queries to handle the difference, 
  // but framer-motion useTransform doesn't natively do responsive arrays easily without custom hooks.
  // A simple hack is to use CSS custom properties or just assume a rough translation.
  // Instead of translating X in JS, we can translate a CSS variable.

  // Let's use a simpler approach: 
  // We will pass scrollYProgress into a motion style that uses CSS viewport units.
  // x translates from Center (Hero) -> Right (Block 1) -> Left (Block 2)
  const x = useTransform(
    scrollYProgress, 
    [0, 0.3, 0.45, 0.7, 1], 
    ["0vw", "22vw", "22vw", "-22vw", "-22vw"]
  );
  
  // y stays perfectly centered initially, then moves slightly higher for the last section
  const y = useTransform(
    scrollYProgress, 
    [0, 0.3, 0.45, 0.7, 1], 
    ["0vh", "0vh", "0vh", "-8vh", "-8vh"]
  );
  
  // scales down when it leaves the hero
  const scale = useTransform(
    scrollYProgress, 
    [0, 0.3, 0.45, 0.7, 1], 
    [1, 0.85, 0.85, 0.85, 0.85]
  );
  
  // Rotates 360 going to Block 1, then another 360 going to Block 2
  const rotateY = useTransform(
    scrollYProgress, 
    [0, 0.3, 0.45, 0.7, 1], 
    [0, 360, 360, 720, 720]
  );
  const rotateZ = useTransform(
    scrollYProgress, 
    [0, 0.15, 0.3, 0.45, 0.55, 0.7, 1], 
    [0, 15, 0, 0, -15, 0, 0]
  );

  return (
    <div ref={containerRef} className="relative w-full">
      
      {/* Sticky overlay for the animating graphic */}
      <div className="absolute inset-0 z-30 pointer-events-none">
        <div className="sticky top-0 h-screen w-full flex items-center justify-center overflow-hidden">
          <motion.div 
            style={{ x, y, scale, rotateY, rotateZ, transformStyle: "preserve-3d" }}
            className="w-full flex items-center justify-center md:block md:w-auto md:flex-none"
          >
             {/* On mobile, we might not want the X shift. We can wrap it in a div that overrides transform on small screens using CSS. */}
             <div className="md:!transform-none !transform-none md:!translate-x-0 w-full flex justify-center max-w-[100vw]">
                <SpinningGraphic />
             </div>
          </motion.div>
        </div>
      </div>

      {/* Content Layers */}
      <Hero />
      <Services />

    </div>
  );
}
