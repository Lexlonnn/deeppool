"use client";
import React from "react";
import { motion } from "framer-motion";

export default function SpinningGraphic() {
  return (
    <div className="w-full h-full flex items-center justify-center perspective-[1000px]">
      <div 
        className="relative w-full h-full min-w-[200px] min-h-[280px] md:min-w-[280px] md:min-h-[380px] rounded-[2rem] bg-gradient-to-tr from-slate-800 to-slate-400 shadow-2xl flex items-center justify-center border border-slate-300 pointer-events-auto transform-gpu"
        style={{ transformStyle: "preserve-3d" }}
      >
        <div className="absolute inset-0 opacity-50 mix-blend-overlay rounded-[2rem] overflow-hidden" style={{ backgroundImage: `url("data:image/svg+xml,%3Csvg viewBox='0 0 200 200' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='noiseFilter'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.8' numOctaves='3' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23noiseFilter)'/%3E%3C/svg%3E")` }} />
        <div className="w-24 h-40 md:w-40 md:h-64 border border-white/20 rounded-xl flex items-center justify-center bg-white/5 backdrop-blur-md transform-gpu" style={{ transform: "translateZ(40px)" }}>
          <span className="font-[family-name:var(--font-orbitron)] text-white/50 text-sm tracking-widest">DP-01</span>
        </div>
      </div>
    </div>
  );
}
