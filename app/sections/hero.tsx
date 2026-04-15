// app/sections/hero.tsx
"use client";

import React, { useState } from "react";
import { MousePointer2 } from "lucide-react";
import Image from "next/image";

export default function Hero() {
  const [hoveredCard, setHoveredCard] = useState<'left' | 'right' | null>(null);

  return (
    <section id="home" className="relative flex items-center justify-center overflow-hidden pt-[100px] md:pt-[130px] pb-12 w-full min-h-[85vh]">
      {/* Background Image */}
      <div className="absolute inset-0 z-0">
        <Image
          src="/hero-bg.png"
          alt="Office background"
          fill
          sizes="100vw"
          className="object-cover opacity-[0.25] blur-[2px]"
          priority
        />
      </div>

      {/* Subtle f(x) watermark */}
      <span className="absolute bottom-[2%] md:bottom-[5%] right-[20%] md:right-[30%] text-[80px] md:text-[140px] font-serif italic text-slate-300/25 pointer-events-none select-none z-[1]">
        f(x)
      </span>

      {/* ───────────── MAIN CONTENT ───────────── */}
      <div className="relative z-10 w-full max-w-[1300px] mx-auto px-4 md:px-8 flex flex-col items-center justify-center">

        {/* Balanced, beautiful cards wrapper */}
        <div className="relative w-full flex flex-col md:flex-row items-stretch gap-6 md:gap-0 h-auto md:h-[65vh] md:min-h-[500px] md:max-h-[640px]">

          {/* ─── LEFT CARD: MARKETING ─── */}
          <div
            className="relative flex-1 z-10 md:filter 
                       md:drop-shadow-[0_0_25px_rgba(24,119,242,0.25)]
                       transition-all duration-700 ease-[cubic-bezier(0.23,1,0.32,1)] 
                       md:hover:flex-[1.2] md:hover:z-20 group/left"
            onMouseEnter={() => setHoveredCard('left')}
            onMouseLeave={() => setHoveredCard(null)}
          >
            <div
              className="relative bg-white/95 backdrop-blur-md border border-[#1877f2]/30 overflow-hidden h-full w-full cursor-pointer md:clip-left rounded-3xl md:rounded-l-[2rem] md:rounded-r-none transition-all duration-500 hover:bg-white flex flex-col justify-between"
            >
              <div className="absolute inset-0 opacity-10 bg-[radial-gradient(circle_at_20%_30%,#1877f2,transparent_70%)] pointer-events-none" />

              {/* Icon / Top Section */}
              <div className="p-8 lg:p-10 relative z-10 w-full flex justify-start">
                <div className="w-[80px] h-[70px] lg:w-[120px] lg:h-[100px] transition-transform duration-700 group-hover/left:scale-[1.05] group-hover/left:-translate-y-2 opacity-80 group-hover/left:opacity-100">
                  <div className="w-full h-full border-[3px] border-[#1877f2]/20 rounded-xl bg-gradient-to-tr from-[#1877f2]/10 to-transparent relative overflow-hidden backdrop-blur-sm">
                    <div className="absolute bottom-3 left-3 flex items-end gap-1.5 lg:gap-2 h-1/2">
                      <div className="w-2.5 lg:w-4 bg-[#1877f2]/60 h-1/3 rounded-sm" />
                      <div className="w-2.5 lg:w-4 bg-[#1877f2]/80 h-2/3 rounded-sm" />
                      <div className="w-2.5 lg:w-4 bg-[#1877f2] h-full rounded-sm" />
                      <div className="w-2.5 lg:w-4 bg-[#1877f2]/40 h-1/2 rounded-sm" />
                    </div>
                  </div>
                </div>
              </div>

              {/* Text / Bottom Section */}
              <div className="relative z-[4] flex flex-col justify-end p-8 lg:p-10 md:pr-[25%] mt-auto pb-[40px] md:pb-[60px]">
                <div className="inline-flex items-center gap-2 px-3 py-1 bg-blue-50 text-blue-600 rounded-full text-[10px] font-black uppercase tracking-[0.2em] mb-4 w-max border border-blue-100 shadow-sm transition-all group-hover/left:shadow-md">
                  DeepPool Segment
                </div>

                <h2 className="text-[32px] md:text-[40px] lg:text-[56px] font-black text-slate-900 leading-[1.05] mb-3 md:mb-5 tracking-tighter transition-transform duration-700 md:group-hover/left:translate-x-2">
                  DeepPool
                  <br />
                  <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-blue-400">Marketing</span>
                </h2>
                <p className="text-slate-500 text-sm lg:text-[15px] font-medium max-w-[280px] mb-6 md:mb-8 leading-relaxed opacity-80 md:group-hover/left:opacity-100 transition-opacity">
                  Strengthen your market presence and engineer campaigns that convert and dominate.
                </p>
                <button className="text-red-500 font-bold text-sm lg:text-base flex items-center gap-2 group/btn tracking-widest uppercase hover:text-red-600 transition-colors">
                  Discover Now
                  <span className="transition-transform duration-300 group-hover/btn:translate-x-1.5">→</span>
                </button>
              </div>
            </div>
          </div>

          {/* ─── RIGHT CARD: PRODUCT DEVELOPMENT ─── */}
          <div
            className="relative flex-1 z-[5] md:-ml-[8%] md:filter 
                       md:drop-shadow-[0_0_25px_rgba(216,158,92,0.25)]
                       transition-all duration-700 ease-[cubic-bezier(0.23,1,0.32,1)] 
                       md:hover:flex-[1.2] md:hover:z-20 group/right pt-2 md:pt-0"
            onMouseEnter={() => setHoveredCard('right')}
            onMouseLeave={() => setHoveredCard(null)}
          >
            <div
              className="relative bg-white/95 backdrop-blur-md border border-[#d89e5c]/30 overflow-hidden h-full w-full cursor-pointer md:clip-right rounded-3xl md:rounded-l-none md:rounded-r-[2rem] transition-all duration-500 hover:bg-white flex flex-col justify-between"
            >
              <div className="absolute inset-0 opacity-10 bg-[radial-gradient(circle_at_80%_70%,#d89e5c,transparent_70%)] pointer-events-none" />

              {/* Icon / Top Section */}
              <div className="p-8 lg:p-10 relative z-10 w-full flex justify-end md:justify-center md:pl-[20%]">
                <div className="w-[70px] h-[70px] lg:w-[100px] lg:h-[100px] transition-transform duration-700 group-hover/right:scale-[1.05] md:group-hover/right:rotate-6 opacity-80 group-hover/right:opacity-100">
                  <div className="w-full h-full border-[3px] border-[#d89e5c]/20 rounded-full bg-gradient-to-tr from-[#d89e5c]/10 to-transparent flex items-center justify-center relative backdrop-blur-sm">
                    <span className="text-[32px] lg:text-[40px] animate-[bounce_2.5s_infinite]">🚀</span>
                  </div>
                </div>
              </div>

              {/* Text / Bottom Section */}
              <div className="relative z-[4] flex flex-col items-start md:items-end text-left md:text-right p-8 lg:p-10 md:pl-[25%] mt-auto pb-[40px] md:pb-[60px]">
                <div className="inline-flex items-center gap-2 px-3 py-1 bg-amber-50 text-amber-600 rounded-full text-[10px] font-black uppercase tracking-[0.2em] mb-4 w-max border border-amber-100 shadow-sm md:ml-auto transition-all group-hover/right:shadow-md">
                  DeepPool Segment
                </div>

                <h2 className="text-[32px] md:text-[40px] lg:text-[56px] font-black text-slate-900 leading-[1.05] mb-3 md:mb-5 tracking-tighter transition-transform duration-700 md:group-hover/right:-translate-x-2">
                  Product
                  <br />
                  <span className="text-transparent bg-clip-text bg-gradient-to-r from-amber-500 to-orange-400">Development</span>
                </h2>
                <p className="text-slate-500 text-sm lg:text-[15px] font-medium max-w-[300px] mb-6 md:mb-8 leading-relaxed opacity-80 md:group-hover/right:opacity-100 transition-opacity">
                  Explore the fascinating world of digital products, scalable platforms, and AI integrations.
                </p>
                <div className="flex w-full justify-start md:justify-end">
                  <button className="text-red-500 font-bold text-sm lg:text-base flex items-center gap-2 group/btn tracking-widest uppercase hover:text-red-600 transition-colors">
                    <span className="hidden md:inline-block transition-transform duration-300 group-hover/btn:-translate-x-1.5">←</span>
                    Discover Now
                    <span className="md:hidden inline-block transition-transform duration-300 group-hover/btn:translate-x-1.5">→</span>
                  </button>
                </div>
              </div>

            </div>
          </div>

          {/* ─── CENTRAL HIGHLIGHT PILL ─── */}
          <div className="hidden md:flex absolute top-[45%] md:top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 z-30 pointer-events-none drop-shadow-xl transition-all duration-500">
            <div
              className={`rounded-full p-[1.5px] transition-all duration-500 ${hoveredCard ? 'scale-105' : 'scale-90 lg:scale-100'}`}
              style={{
                transform: "rotate(-64deg)",
                background: "linear-gradient(to right, #1877f2 50%, #d89e5c 50%)"
              }}
            >
              <div className="relative bg-white rounded-full px-5 lg:px-6 h-[48px] lg:h-[56px] flex items-center justify-center overflow-hidden w-[270px] lg:w-[320px] shadow-inner font-sans">

                {/* Marketing Text */}
                <div className={`flex items-center justify-center transition-all duration-500 ease-[cubic-bezier(0.23,1,0.32,1)] overflow-hidden whitespace-nowrap pointer-events-auto cursor-default shrink-0 ${hoveredCard === 'right' ? 'max-w-0 opacity-0 px-0' : 'max-w-[150px] opacity-100'}`}>
                  <span className={`text-[10px] lg:text-[11px] font-black tracking-[0.2em] uppercase transition-colors duration-500 ${hoveredCard === 'left' ? 'text-blue-600' : 'text-slate-800'}`}>
                    Marketing
                  </span>
                </div>

                {/* Divider Line */}
                <div className={`flex items-center justify-center transition-all duration-500 ease-[cubic-bezier(0.23,1,0.32,1)] overflow-hidden shrink-0 ${hoveredCard !== null ? 'max-w-0 opacity-0' : 'max-w-[50px] opacity-100'}`}>
                  <div className="h-5 lg:h-6 bg-slate-200 w-[1.5px] mx-3 lg:mx-5" />
                </div>

                {/* Tech Solutions Text */}
                <div className={`flex items-center justify-center transition-all duration-500 ease-[cubic-bezier(0.23,1,0.32,1)] overflow-hidden whitespace-nowrap pointer-events-auto cursor-default shrink-0 ${hoveredCard === 'left' ? 'max-w-0 opacity-0 px-0' : 'max-w-[160px] opacity-100'}`}>
                  <span className={`text-[10px] lg:text-[11px] font-black tracking-[0.2em] uppercase transition-colors duration-500 ${hoveredCard === 'right' ? 'text-amber-500' : 'text-slate-800'}`}>
                    Tech Solutions
                  </span>
                </div>

              </div>
            </div>
          </div>

        </div>
      </div>

      <style dangerouslySetInnerHTML={{
        __html: `
        @media (min-width: 768px) {
          .md\\:clip-left { clip-path: polygon(0 0, 100% 0, 65% 100%, 0 100%); }
          .md\\:clip-right { clip-path: polygon(35% 0, 100% 0, 100% 100%, 0 100%); }
        }
      `}} />
    </section>
  );
}
