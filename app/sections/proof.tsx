// app/sections/proof.tsx
"use client";

import React from "react";
import { motion } from "framer-motion";

export default function DarkBreak() {
  return (
    <section id="method" className="relative w-full py-32 md:py-48 bg-[#1a1a1a] px-6 md:px-12 flex flex-col items-center justify-center overflow-hidden">
       <span className="text-[10px] md:text-xs font-black tracking-[0.3em] uppercase text-white/50 mb-12">
          Global Operations Infrastructure
       </span>
       
       <h2 className="text-3xl sm:text-5xl md:text-6xl lg:text-7xl font-black font-[family-name:var(--font-orbitron)] text-white leading-none text-center max-w-5xl uppercase tracking-tighter mix-blend-difference mb-8">
          WELCOME TO DEEPPOOL <br className="hidden md:block"/>
          WHERE VISION MEETS <br className="hidden md:block"/>
          <span className="text-transparent bg-clip-text bg-gradient-to-r from-white via-slate-300 to-white">EXECUTION</span>
       </h2>

       <p className="text-xs md:text-sm text-white/60 max-w-3xl text-center font-medium leading-relaxed tracking-wider">
         Scale up strategies achieving exponential growth through precision targeting. Launch is just the beginning. We optimize every pixel for maximum conversion and enduring market dominance.
       </p>
    </section>
  );
}