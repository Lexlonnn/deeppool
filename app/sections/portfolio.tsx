// app/sections/portfolio.tsx
"use client";

import React from "react";
import Image from "next/image";
import { ArrowUpRight } from "lucide-react";

export default function Portfolio() {
  return (
    <section id="portfolio" className="relative w-full py-24 md:py-32 px-6 md:px-12 flex justify-center">
      <div className="w-full max-w-6xl grid grid-cols-1 md:grid-cols-2 gap-4">
        
        {/* Left Tall Image Box */}
        <div className="w-full aspect-square md:aspect-[3/4] bg-white rounded-lg shadow-sm overflow-hidden border border-black/5 relative group">
           {/* Placeholder for project image */}
           <Image 
             src="https://images.unsplash.com/photo-1551288049-bebda4e38f71?q=80&w=2070&auto=format&fit=crop"
             alt="Project Image"
             fill
             className="object-cover group-hover:scale-105 transition-transform duration-700"
           />
           <div className="absolute inset-0 bg-black/10 group-hover:bg-transparent transition-colors duration-500" />
        </div>

        {/* Right Stacked Boxes */}
        <div className="flex flex-col gap-4">
          
          {/* Top Right: Gradient Card with Button */}
          <div className="w-full flex-1 min-h-[250px] rounded-lg shadow-sm border border-black/5 p-8 flex flex-col justify-between relative overflow-hidden bg-gradient-to-br from-[#c8b3a7] via-[#a78b7b] to-[#795d51]">
            <div className="flex justify-between items-start">
               <span className="font-[family-name:var(--font-orbitron)] font-black text-white/90 text-sm tracking-widest">ECOSPHERE AI</span>
               <span className="font-sans font-bold text-white/60 text-xs tracking-widest">PRODUCT DEV</span>
            </div>
            
            <div className="flex justify-end">
               <button className="w-12 h-12 rounded-full bg-[#ff5a1f] flex items-center justify-center text-white hover:bg-black transition-colors shadow-lg group">
                  <ArrowUpRight className="w-6 h-6 group-hover:scale-110 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-all" />
               </button>
            </div>
          </div>

          {/* Bottom Right: Typography Card */}
          <div className="w-full flex-1 min-h-[250px] bg-white rounded-lg shadow-sm border border-black/5 p-8 flex items-center justify-center">
             <h3 className="text-4xl sm:text-5xl lg:text-6xl font-black font-[family-name:var(--font-orbitron)] text-black leading-[0.8] text-center uppercase tracking-tighter">
                BUILD IT.<br />
                <span className="text-[#ff5a1f]">SCALE IT.</span>
             </h3>
          </div>

        </div>

      </div>
    </section>
  );
}