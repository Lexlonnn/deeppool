// app/sections/portfolio.tsx
"use client";

import React from "react";
import Image from "next/image";
import { ArrowUpRight } from "lucide-react";
import { motion } from "framer-motion";

export default function Portfolio() {
  return (
    <section id="portfolio" className="relative w-full py-16 md:py-20 px-6 md:px-12 flex justify-center">
      <div className="w-full max-w-5xl grid grid-cols-1 md:grid-cols-2 gap-4">
        
        {/* Left Tall Video Box */}
        <motion.div 
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.6, ease: "easeOut" }}
          className="w-full h-full min-h-[300px] md:min-h-[400px] bg-black rounded-lg shadow-sm overflow-hidden border border-black/5 relative group"
        >
           <video 
             autoPlay 
             loop 
             muted 
             playsInline
             className="object-cover w-full h-full group-hover:scale-105 transition-transform duration-700 opacity-90"
           >
              {/* Using a tech/dashboard placeholder video */}
              <source src="https://storage.googleapis.com/gtv-videos-bucket/sample/ForBiggerBlazes.mp4" type="video/mp4" />
           </video>
           <div className="absolute inset-0 bg-black/20 group-hover:bg-transparent transition-colors duration-500" />
           <div className="absolute bottom-6 left-6 flex items-center gap-2">
              <div className="w-2 h-2 rounded-full bg-red-500 animate-pulse" />
              <span className="font-mono text-xs text-white tracking-widest uppercase">LIVE PREVIEW</span>
           </div>
        </motion.div>

        {/* Right Stacked Boxes */}
        <div className="flex flex-col gap-4">
          
          {/* Top Right: Gradient Card with Button */}
          <motion.div 
            initial={{ opacity: 0, x: 40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.6, delay: 0.2, ease: "easeOut" }}
            className="w-full flex-1 min-h-[180px] rounded-lg shadow-sm border border-black/5 p-6 flex flex-col justify-between relative overflow-hidden bg-gradient-to-br from-[#c8b3a7] via-[#a78b7b] to-[#795d51]"
          >
            <div className="flex justify-between items-start">
               <span className="font-[family-name:var(--font-orbitron)] font-black text-white/90 text-sm tracking-widest">ECOSPHERE AI</span>
               <span className="font-sans font-bold text-white/60 text-[10px] tracking-widest">PRODUCT DEV</span>
            </div>
            
            <div className="flex justify-end">
               <button className="w-10 h-10 rounded-full bg-[#ff5a1f] flex items-center justify-center text-white hover:bg-black transition-colors shadow-lg group">
                  <ArrowUpRight className="w-5 h-5 group-hover:scale-110 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-all" />
               </button>
            </div>
          </motion.div>

          {/* Bottom Right: Typography Card */}
          <motion.div 
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.6, delay: 0.4, ease: "easeOut" }}
            className="w-full flex-1 min-h-[180px] bg-white rounded-lg shadow-sm border border-black/5 p-6 flex items-center justify-center"
          >
             <h3 className="text-3xl sm:text-4xl lg:text-5xl font-black font-[family-name:var(--font-orbitron)] text-black leading-[0.8] text-center uppercase tracking-tighter">
                BUILD IT.<br />
                <span className="text-[#ff5a1f]">SCALE IT.</span>
             </h3>
          </motion.div>

        </div>

      </div>
    </section>
  );
}