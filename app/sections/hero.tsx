// app/sections/hero.tsx
"use client";

import React from "react";
import { motion } from "framer-motion";
import Image from "next/image";
import SpinningGraphic from "../components/SpinningGraphic";

export default function Hero() {
  return (
    <section id="home" className="relative w-full min-h-screen flex flex-col justify-between overflow-hidden pt-32">
      
      {/* Top Tagline */}
      <div className="w-full text-center mt-12 mb-8">
        <p className="text-[10px] md:text-xs font-black tracking-[0.4em] uppercase text-black">
          THE ULTIMATE PRODUCT & MARKETING NEXUS
        </p>
      </div>

      {/* Massive Typography & Central Graphic */}
      <div className="relative w-full flex-grow flex items-center justify-center pointer-events-none">
        
        {/* HYDRATION (Behind Graphic) */}
        <div className="absolute inset-0 flex flex-col items-center justify-center font-[family-name:var(--font-orbitron)] font-black text-[#1a1a1a] leading-[0.85] text-center w-full z-0 pt-[18vw] md:pt-[12vw]">
          <h1 className="text-[13vw] md:text-[11vw] tracking-tighter whitespace-nowrap">
            HYDRATION
          </h1>
          <div className="flex flex-col items-center mt-12 gap-2 max-w-md w-full relative z-30 opacity-90">
             <div className="w-full flex items-center gap-2">
                <div className="h-px bg-black flex-1"></div>
                <div className="h-px bg-black flex-1"></div>
             </div>
             <p className="font-mono text-sm tracking-widest text-black/80 uppercase font-semibold">
                PURE. REFRESHING. BLOCKCHAIN-POWERED.
             </p>
          </div>
        </div>

        {/* Central Spinning Graphic */}
        <motion.div 
          initial={{ y: 50, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ duration: 1, ease: "easeOut" }}
          className="relative z-10 w-full h-[60vh] md:h-[80vh] flex items-center justify-center pointer-events-auto"
        >
           <SpinningGraphic />
        </motion.div>

        {/* TOKENIZING (In Front of Graphic) */}
        <div className="absolute inset-0 flex flex-col items-center justify-center font-[family-name:var(--font-orbitron)] font-black text-black leading-[0.85] text-center z-20 w-full pb-[18vw] md:pb-[12vw] pointer-events-none drop-shadow-sm">
          <h1 className="text-[13vw] md:text-[11vw] tracking-tighter whitespace-nowrap">
            TOKE<span className="opacity-0">NIZ</span>ING
          </h1>
          {/* Creating an outline effect for the front text so you can see the spinning graphic behind the text */}
        </div>

      </div>

      {/* Ticker / Marquee at the bottom (Capsule style) */}
      <div className="w-full flex justify-center mt-12 mb-16 px-4 relative z-30">
        <div className="w-full max-w-5xl rounded-2xl border border-black overflow-hidden bg-[#e5e5e5]/80 backdrop-blur-sm h-14 flex relative">
          <div className="flex w-max animate-[marquee_20s_linear_infinite] h-full">
            {[...Array(4)].map((_, i) => (
              <div key={i} className="flex h-full">
                <div className="flex items-center justify-center px-12 md:px-24 border-r border-black h-full">
                   <span className="font-sans text-black font-black text-sm tracking-widest flex items-center gap-3">
                      <div className="w-5 h-5 bg-black" style={{ clipPath: 'polygon(50% 0%, 100% 25%, 100% 75%, 50% 100%, 0% 75%, 0% 25%)' }}></div>
                      Chainlink
                   </span>
                </div>
                <div className="flex items-center justify-center px-12 md:px-24 border-r border-black h-full">
                   <span className="font-[family-name:var(--font-orbitron)] text-black font-black text-sm tracking-widest">
                      TRON
                   </span>
                </div>
                <div className="flex items-center justify-center px-12 md:px-24 border-r border-black h-full">
                   <span className="font-sans text-black font-black text-sm tracking-widest flex items-center gap-2">
                      <div className="w-4 h-4 bg-black rounded-sm"></div>
                      BNB
                   </span>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
      
    </section>
  );
}
