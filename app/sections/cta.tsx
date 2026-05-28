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
                 "https://images.unsplash.com/photo-1550751827-4bd374c3f58b?q=80&w=600&auto=format&fit=crop",
                 "https://images.unsplash.com/photo-1518770660439-4636190af475?q=80&w=600&auto=format&fit=crop",
                 "https://images.unsplash.com/photo-1618005182384-a83a8bd57fbe?q=80&w=600&auto=format&fit=crop",
                 "https://images.unsplash.com/photo-1526374965328-7f61d4dc18c5?q=80&w=600&auto=format&fit=crop",
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

    </section>
  );
}
