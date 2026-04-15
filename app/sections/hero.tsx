// app/sections/hero/page.tsx
"use client";

import React from "react";
import { MousePointer2 } from "lucide-react";
import Image from "next/image";

export default function Hero() {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Background Image */}
      <div className="absolute inset-0 z-0">
        <Image
          src="/hero-bg.png"
          alt="Team collaboration"
          fill
          sizes="100vw"
          className="object-cover opacity-[0.15] blur-[1.5px]"
          priority
        />
      </div>

      {/* Subtle f(x) watermark */}
      <span className="absolute bottom-[14%] right-[36%] text-[110px] font-serif italic text-slate-300/25 pointer-events-none select-none z-[1]">
        f(x)
      </span>

      {/* ───────────── MAIN CONTENT ───────────── */}
      <div className="relative z-10 w-full max-w-[1200px] mx-auto px-6 pt-20">
        <div className="relative flex items-stretch gap-0" style={{ minHeight: "520px" }}>

          {/* ─── LEFT CARD: MARKETING ─── */}
          <div className="peer/left relative flex-1 z-10 filter 
                          drop-shadow-[0_0_25px_rgba(168,186,214,0.5)]
                          transition-all duration-700 ease-[cubic-bezier(0.23,1,0.32,1)] 
                          hover:flex-[2] hover:z-20 group/left">
            <div
              className="relative bg-white/95 backdrop-blur-sm border-2 border-[#a8bad6] overflow-hidden h-full w-full cursor-pointer"
              style={{
                clipPath: "polygon(0 0, 100% 0, 65% 100%, 0 100%)",
                borderRadius: "12px 0 0 12px",
              }}
            >
              <div className="absolute top-4 left-[25%] w-[200px] h-[170px] z-[2] transition-all duration-700 group-hover/left:scale-110 group-hover/left:-translate-y-2">
                <Image
                  src="/marketing-analytics.png"
                  alt="Marketing Analytics"
                  fill
                  sizes="200px"
                  className="object-contain"
                />
              </div>

              <div className="relative z-[4] flex flex-col justify-end h-full px-10 pb-10 pt-[190px]">
                <h2 className="text-[54px] font-black text-[#1a2332] leading-[1.05] mb-5 tracking-tight transition-transform duration-700 group-hover/left:translate-x-2">
                  DeepPool
                  <br />
                  <span className="text-[#1877f2]">Marketing</span>
                </h2>
                <p className="text-slate-500 text-[14px] font-medium max-w-[280px] mb-5 leading-relaxed opacity-60 group-hover/left:opacity-100 transition-opacity">
                  Strengthen problem-solving skills and master core math concepts.
                </p>
                <button className="text-[#c0392b] font-bold text-[16px] flex items-center gap-2 group/btn">
                  Enroll Now
                  <span className="transition-transform duration-300 group-hover/btn:translate-x-2">→</span>
                </button>
              </div>
            </div>
          </div>

          {/* ─── RIGHT CARD: PRODUCT DEVELOPMENT ─── */}
          <div className="peer/right relative flex-1 z-[5] -ml-[5%] filter 
                          drop-shadow-[0_0_25px_rgba(216,158,92,0.4)]
                          transition-all duration-700 ease-[cubic-bezier(0.23,1,0.32,1)] 
                          hover:flex-[2] hover:z-20 group/right">
            <div
              className="relative bg-white/95 backdrop-blur-sm border-2 border-[#d89e5c] overflow-hidden h-full w-full cursor-pointer"
              style={{
                clipPath: "polygon(35% 0, 100% 0, 100% 100%, 0 100%)",
                borderRadius: "0 12px 12px 0",
              }}
            >
              <div className="absolute bottom-[22%] left-[16%] w-[110px] h-[120px] z-[2] transition-all duration-700 group-hover/right:scale-110 group-hover/right:rotate-6">
                <Image
                  src="/rocket-illustration.png"
                  alt="Rocket Launch"
                  fill
                  sizes="110px"
                  className="object-contain"
                />
              </div>

              <div className="relative z-[4] flex flex-col items-end text-right h-full px-10 py-10">
                <div className="mb-2 mt-4 text-[#1a2332] font-bold text-[22px] leading-tight">
                  <p>DeepPool</p>
                </div>
                <h2 className="text-[48px] font-black text-[#1a2332] leading-[1.05] mb-4 tracking-tight transition-transform duration-700 group-hover/right:-translate-x-2">
                  Product
                  <br />
                  <span className="text-[#d89e5c]">Development</span>
                </h2>
                <p className="text-slate-500 text-[14px] font-medium max-w-[300px] mb-5 leading-relaxed opacity-60 group-hover/right:opacity-100 transition-opacity">
                  Explore the fascinating world of organisms and genetics.
                </p>
                <button className="text-[#c0392b] font-bold text-[16px] flex items-center gap-2 group/btn">
                  <span className="transition-transform duration-300 group-hover/btn:-translate-x-2">←</span>
                  Enroll Now
                </button>
              </div>
            </div>
          </div>

          {/* ─── CENTRAL HIGHLIGHT PILL (The Fixed Animation) ─── */}
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 z-30 pointer-events-none">
            <div
              className="rounded-xl p-[2.5px] shadow-2xl transition-all duration-500"
              style={{
                transform: "rotate(-64deg)",
                background: "linear-gradient(to right, #a8bad6 50%, #d89e5c 50%)"
              }}
            >
              {/* Inner Container: Ensure it has a fixed height and flex-center to keep text centered */}
              <div className="relative bg-white rounded-[9px] px-4 h-[48px] flex items-center justify-center overflow-hidden transition-all duration-500 min-w-[120px]">
                
                {/* 1. Marketing Text Block */}
                <div className="flex items-center transition-all duration-500 ease-in-out overflow-hidden
                                peer-hover/right:max-w-0 peer-hover/right:opacity-0">
                  <span className="text-[10px] font-black tracking-widest uppercase transition-colors duration-500 peer-hover/left:text-[#1877f2] text-slate-800">
                    Marketing
                  </span>
                </div>

                {/* 2. Divider Block: Shrinks when either side is hovered */}
                <div className="flex items-center transition-all duration-500 ease-in-out overflow-hidden
                                peer-hover/left:max-w-0 peer-hover/left:opacity-0
                                peer-hover/right:max-w-0 peer-hover/right:opacity-0">
                  <div className="h-5 bg-slate-200 w-[1px] mx-4" />
                </div>

                {/* 3. Tech Solutions Block */}
                <div className="flex items-center transition-all duration-500 ease-in-out overflow-hidden
                                peer-hover/left:max-w-0 peer-hover/left:opacity-0">
                  <span className="text-[10px] font-black tracking-widest uppercase transition-colors duration-500 peer-hover/right:text-[#d89e5c] text-slate-800">
                    Tech Solutions
                  </span>
                </div>

                {/* 4. Mouse Icon: Only visible when nothing is hovered */}
                <div className="flex items-center transition-all duration-500 ease-in-out overflow-hidden
                                peer-hover/left:max-w-0 peer-hover/left:opacity-0
                                peer-hover/right:max-w-0 peer-hover/right:opacity-0">
                  <MousePointer2 className="w-4 h-4 ml-3 text-slate-400 fill-current" style={{ transform: "rotate(55deg)" }} />
                </div>

              </div>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}