// app/sections/cta.tsx
"use client";

import React, { useState } from "react";
import Image from "next/image";

const faqs = [
  { q: "WHAT IS YOUR MAIN AREA OF EXPERTISE?", a: "We specialize in product architecture and targeted marketing strategies that drive exponential growth." },
  { q: "HOW DO YOU ACCELERATE PRODUCT GROWTH?", a: "Through a combination of cutting-edge tech stacks (React, Next.js, Web3) and data-driven marketing campaigns." },
  { q: "DO YOU WORK WITH EARLY STAGE STARTUPS?", a: "Yes, we partner with visionary founders to build resilient digital infrastructure from day one." },
  { q: "WHAT IS YOUR ENGAGEMENT PROCESS?", a: "It starts with a deep dive into your brand DNA, followed by rapid engineering cycles and aggressive market rollout." },
];

export default function CTAFAQ() {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  return (
    <section id="faq" className="relative w-full py-24 px-6 md:px-12 flex flex-col items-center">
      
      {/* Infinite Moving Cards Carousel */}
      <div className="w-full max-w-[100vw] overflow-hidden relative mb-32 group">
        
        {/* Left Gradient Fade */}
        <div className="absolute left-0 top-0 w-24 md:w-48 h-full bg-gradient-to-r from-white to-transparent z-10 pointer-events-none" />
        
        {/* Right Gradient Fade */}
        <div className="absolute right-0 top-0 w-24 md:w-48 h-full bg-gradient-to-l from-white to-transparent z-10 pointer-events-none" />

        {/* Marquee Track */}
        <div className="flex w-max animate-[marquee_30s_linear_infinite]">
           {/* Duplicate the array twice for seamless loop */}
           {[...Array(2)].map((_, arrayIndex) => (
             <div key={arrayIndex} className="flex gap-4 px-2">
               {[
                 "https://images.unsplash.com/photo-1460925895917-afdab827c52f?q=80&w=600&auto=format&fit=crop", // Analytics/laptop
                 "https://images.unsplash.com/photo-1542744173-8e7e53415bb0?q=80&w=600&auto=format&fit=crop", // Strategy/meeting
                 "https://images.unsplash.com/photo-1551288049-bebda4e38f71?q=80&w=600&auto=format&fit=crop", // Data dashboards
                 "https://images.unsplash.com/photo-1552581234-26160f608093?q=80&w=600&auto=format&fit=crop", // Creative marketing team
               ].map((img, i) => (
                 <div key={i} className="w-[280px] md:w-[400px] aspect-square bg-white border border-black/10 overflow-hidden relative shrink-0 rounded-2xl">
                    <Image 
                      src={img} 
                      alt="Gallery Image" 
                      fill 
                      className="object-cover transition-all duration-700"
                    />
                 </div>
               ))}
             </div>
           ))}
        </div>
      </div>

      {/* FAQ Header */}
      <h2 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-black font-[family-name:var(--font-orbitron)] text-black leading-[0.9] text-center max-w-4xl uppercase tracking-tighter mb-16">
         FREQUENTLY ASKED<br/>
         QUESTIONS
      </h2>

      {/* Accordion List */}
      <div className="w-full max-w-4xl flex flex-col gap-2">
         {faqs.map((faq, idx) => {
           const isOpen = openIndex === idx;
           return (
             <div 
               key={idx} 
               className="w-full border border-black/10 bg-white/40 flex flex-col transition-colors cursor-pointer hover:bg-white"
               onClick={() => setOpenIndex(isOpen ? null : idx)}
             >
                <div className="flex items-center justify-between p-5 md:p-6">
                   <h5 className="font-bold text-xs md:text-sm tracking-widest text-black/80">{faq.q}</h5>
                   <div className="w-8 h-8 bg-black flex items-center justify-center text-white shrink-0">
                      <span className="font-sans font-black leading-none">{isOpen ? "-" : "+"}</span>
                   </div>
                </div>
                {isOpen && (
                  <div className="px-5 md:px-6 pb-6 text-sm text-black/60 font-medium">
                     {faq.a}
                  </div>
                )}
             </div>
           );
         })}
      </div>

      {/* Light & Airy CTA Block (Oppo Enco Style) */}
      <div className="w-full max-w-6xl mt-32 relative overflow-hidden rounded-[2.5rem] bg-gradient-to-b from-[#fdfdfd] to-[#eff2f7] shadow-xl border border-white group hover:shadow-[0_40px_80px_-20px_rgba(154,158,201,0.4)] hover:-translate-y-2 transition-all duration-700 ease-out cursor-pointer">
        
        {/* Soft Abstract Background Elements - Now with continuous ambient animation */}
        <div className="absolute top-0 right-1/4 w-[600px] h-[600px] bg-white rounded-full blur-[100px] opacity-80 pointer-events-none -translate-y-1/3 animate-[pulse_6s_ease-in-out_infinite] group-hover:translate-x-12 group-hover:translate-y-12 group-hover:scale-110 transition-transform duration-1000 ease-out" />
        <div className="absolute bottom-0 left-0 w-[500px] h-[500px] bg-[#dbe0f2] rounded-full blur-[120px] opacity-60 pointer-events-none -translate-x-1/4 translate-y-1/4 animate-[pulse_8s_ease-in-out_infinite_reverse] group-hover:-translate-x-12 group-hover:-translate-y-12 group-hover:scale-110 transition-transform duration-1000 ease-out" />

        {/* Small floating particles */}
        <div className="absolute top-1/4 left-1/2 w-4 h-4 rounded-full bg-[#9a9ec9]/30 blur-sm animate-[bounce_4s_infinite]" />
        <div className="absolute bottom-1/3 right-1/3 w-6 h-6 rounded-full bg-white/60 blur-md animate-[pulse_3s_infinite]" />

        {/* Inner Container */}
        <div className="relative w-full h-full p-12 md:p-24 flex flex-col md:flex-row items-center justify-between gap-12 z-10">
          
          {/* Left Content */}
          <div className="flex flex-col items-center md:items-start text-center md:text-left w-full md:w-2/3">
            <h3 className="text-5xl md:text-6xl lg:text-[5.5rem] font-semibold tracking-tighter mb-6 text-[#9a9ec9] leading-[1.1] group-hover:text-[#888cba] transition-colors duration-700 relative">
              <span className="relative z-10">BUILD</span> <br/>
              <span className="relative z-10">YOUR VISION</span>
            </h3>
            
            <p className="max-w-lg text-[#8587a8] text-sm md:text-lg font-medium leading-relaxed group-hover:text-[#717394] transition-colors duration-700">
              A perfect plan for your digital ecosystem. Partner with us to engineer beautifully scalable solutions.
            </p>
          </div>

          {/* Right Button */}
          <div className="flex shrink-0 md:mt-0 mt-8 relative">
            {/* Continuous Pulsing Glow Behind Button */}
            <div className="absolute inset-0 bg-[#787ca5] blur-xl opacity-30 animate-[pulse_3s_ease-in-out_infinite] rounded-full" />
            
            <button className="relative bg-[#787ca5] text-white px-8 py-3.5 rounded-full flex items-center gap-3 font-medium tracking-wide text-sm transition-all duration-500 shadow-[0_8px_20px_-6px_rgba(120,124,165,0.5)] group-hover:shadow-none overflow-hidden group/btn">
              
              {/* Button Hover Background Fill */}
              <div className="absolute inset-0 bg-[#636792] translate-y-[100%] group-hover/btn:translate-y-0 transition-transform duration-500 ease-out" />
              
              <span className="relative z-10">Shop Solutions</span>
              
              <div className="relative z-10 w-6 h-6 rounded-full bg-white/20 flex items-center justify-center group-hover/btn:bg-white group-hover/btn:text-[#636792] transition-colors duration-500">
                 <svg className="w-3.5 h-3.5 group-hover/btn:translate-x-0.5 transition-transform duration-300 animate-[bounce_2s_infinite] [animation-direction:alternate] group-hover/btn:animate-none" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                   <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M14 5l7 7m0 0l-7 7m7-7H3" />
                 </svg>
              </div>
            </button>
          </div>
        </div>
      </div>

    </section>
  );
}
