// app/sections/hero.tsx
"use client";

import React from "react";
import { motion } from "framer-motion";
import Image from "next/image";
import SpinningGraphic from "../components/SpinningGraphic";

export default function Hero() {
  return (
    <section id="home" className="relative w-full h-screen flex flex-col justify-between overflow-hidden pt-32">

      {/* Top Tagline */}
      <div className="w-full text-center mt-4 mb-4 z-20 flex flex-col items-center gap-2">
        <motion.div
          initial="hidden"
          animate="visible"
          variants={{
            hidden: { opacity: 0 },
            visible: {
              opacity: 1,
              transition: {
                staggerChildren: 0.05,
                delayChildren: 0.2,
              },
            },
          }}
          className="flex font-mono text-sm md:text-base tracking-widest text-black/80 uppercase font-bold"
        >
          {"Welcome to Deep Pool".split("").map((char, index) => (
            <motion.span
              key={index}
              variants={{
                hidden: { opacity: 0, y: 15 },
                visible: { opacity: 1, y: 0, transition: { type: "spring", damping: 12, stiffness: 100 } }
              }}
            >
              {char === " " ? "\u00A0" : char}
            </motion.span>
          ))}
        </motion.div>
        <span className="font-mono text-[10px] md:text-xs tracking-widest text-black/40 uppercase font-semibold">
          THE ULTIMATE PRODUCT & MARKETING NEXUS
        </span>
      </div>

      {/* Massive Typography & Central Graphic */}
      <div className="relative w-full flex-grow flex flex-col items-center justify-start pointer-events-none pt-12">

        {/* ARCHITECTING (Behind Graphic) */}
        <div className="absolute inset-x-0 top-0 flex flex-col items-center justify-start font-[family-name:var(--font-orbitron)] font-black text-[#1a1a1a] leading-[0.85] text-center w-full z-10">
          <h1 className="text-[14vw] md:text-[12vw] tracking-tighter whitespace-nowrap">
            ARCHITECTING
          </h1>
        </div>

        {/* Central Space Placeholder (Graphic is now sticky in wrapper) */}
        <div className="relative z-10 w-full h-[50vh] flex items-center justify-center pointer-events-none" />

        {/* PERCEPTION (In Front of Graphic) */}
        <div className="absolute inset-x-0 top-32 md:top-40 flex flex-col items-center justify-start font-[family-name:var(--font-orbitron)] font-black text-black leading-[0.85] text-center z-40 w-full pointer-events-none drop-shadow-sm">
          <h1 className="text-[14vw] md:text-[12vw] tracking-tighter whitespace-nowrap mt-[2vw]">
            PERCEPTION
          </h1>
          <div className="flex flex-col items-center mt-12 gap-2 max-w-md w-full relative z-40 opacity-90">
            <div className="w-full flex items-center gap-2">
              <div className="h-px bg-black flex-1"></div>
              <div className="h-px bg-black flex-1"></div>
            </div>
            <p className="font-mono text-sm tracking-widest text-black/80 uppercase font-semibold">
              PURE. REFRESHING. BLOCKCHAIN-POWERED.
            </p>
          </div>
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
