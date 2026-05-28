// app/sections/services.tsx
"use client";

import React from "react";
import { motion } from "framer-motion";
import SpinningGraphic from "../components/SpinningGraphic";

export default function Services() {
  return (
    <section id="services" className="relative w-full py-24 md:py-40 px-6 md:px-12 flex justify-center border-b border-black/10">
      <div className="w-full max-w-7xl grid grid-cols-1 md:grid-cols-2 gap-12 md:gap-24 items-start">
        
        {/* Left Text Column */}
        <div className="flex flex-col">
          <span className="text-[10px] md:text-xs font-black tracking-[0.3em] uppercase text-black/50 mb-8">
             Our Core Services
          </span>
          <h2 className="text-4xl md:text-6xl lg:text-7xl font-black font-[family-name:var(--font-orbitron)] text-black leading-none mb-6 uppercase tracking-tighter">
             PRODUCT<br />
             ARCHITECTURE
          </h2>
          <p className="text-sm md:text-base text-black/70 max-w-sm leading-relaxed font-semibold">
             We deploy modern stack architecture and completely redesigned user journeys. A resilient, high-conversion digital presence is essential to outpace established market leaders in today's economy.
          </p>
        </div>

        {/* Right Media Column */}
        <div className="flex flex-col gap-6 w-full h-full min-h-[400px]">
           <div className="w-full h-full flex-grow flex items-center justify-center">
             <SpinningGraphic />
           </div>
           
           <div className="flex justify-end mt-auto">
              <button className="bg-[#ff5a1f] text-white px-8 py-3 text-[10px] md:text-xs font-black tracking-[0.1em] uppercase hover:bg-black transition-colors w-full sm:w-auto text-center">
                 LEARN MORE
              </button>
           </div>
        </div>

      </div>
    </section>
  );
}