"use client";

import React, { useRef } from "react";
import { motion, useScroll, useTransform } from "framer-motion";

export default function SpinningGraphic() {
  const containerRef = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start end", "end start"]
  });

  // Rotate based on scroll
  const rotateY = useTransform(scrollYProgress, [0, 1], [0, 360]);

  return (
    <div ref={containerRef} className="w-full h-full flex items-center justify-center perspective-[1000px]">
      <motion.div 
        style={{ rotateY, transformStyle: "preserve-3d" }}
        className="relative w-full h-full max-w-[200px] max-h-[260px] md:max-w-[320px] md:max-h-[400px] rounded-2xl bg-gradient-to-tr from-slate-800 to-slate-400 shadow-2xl flex items-center justify-center border border-slate-300 pointer-events-auto"
      >
        <div className="absolute inset-0 opacity-50 mix-blend-overlay rounded-2xl overflow-hidden" style={{ backgroundImage: `url("data:image/svg+xml,%3Csvg viewBox='0 0 200 200' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='noiseFilter'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.8' numOctaves='3' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23noiseFilter)'/%3E%3C/svg%3E")` }} />
        <div className="w-20 h-32 md:w-32 md:h-48 border border-white/20 rounded-lg flex items-center justify-center bg-white/5 backdrop-blur-md transform-gpu" style={{ transform: "translateZ(30px)" }}>
          <span className="font-[family-name:var(--font-orbitron)] text-white/50 text-xs tracking-widest">DP-01</span>
        </div>
      </motion.div>
    </div>
  );
}
