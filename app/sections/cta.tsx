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
      
      {/* 3 Square Gallery Grid */}
      <div className="w-full max-w-6xl grid grid-cols-1 sm:grid-cols-3 gap-4 mb-32">
         {[
           "https://images.unsplash.com/photo-1550751827-4bd374c3f58b?q=80&w=2070&auto=format&fit=crop",
           "https://images.unsplash.com/photo-1518770660439-4636190af475?q=80&w=2070&auto=format&fit=crop",
           "https://images.unsplash.com/photo-1618005182384-a83a8bd57fbe?q=80&w=2564&auto=format&fit=crop"
         ].map((img, i) => (
           <div key={i} className="aspect-square bg-white border border-black/10 overflow-hidden relative group">
              <Image 
                src={img} 
                alt="Gallery Image" 
                fill 
                className="object-cover grayscale group-hover:grayscale-0 transition-all duration-700"
              />
           </div>
         ))}
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
