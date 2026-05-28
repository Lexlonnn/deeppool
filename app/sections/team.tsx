// app/sections/team.tsx
"use client";

import React from "react";
import Image from "next/image";

const team = [
  {
    name: "PRINCE",
    role: "DIRECTOR",
    desc: "Strategy and operations leader ensuring seamless execution across all high-stakes campaigns and structural deployments.",
    img: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?q=80&w=100&auto=format&fit=crop"
  },
  {
    name: "GOKUL",
    role: "DIRECTOR",
    desc: "Engineering and product visionary driving scalable, cutting-edge architecture for market-dominating tech solutions.",
    img: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?q=80&w=100&auto=format&fit=crop"
  },
  {
    name: "ALEX",
    role: "LEAD DESIGNER",
    desc: "Crafting brutalist, conversion-focused user interfaces that break the mold and capture attention instantly.",
    img: "https://images.unsplash.com/photo-1534528741775-53994a69daeb?q=80&w=100&auto=format&fit=crop"
  },
  {
    name: "SARAH",
    role: "MARKETING HEAD",
    desc: "Orchestrating multi-channel growth strategies and precision targeting to guarantee maximum ROI for every client.",
    img: "https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?q=80&w=100&auto=format&fit=crop"
  }
];

export default function Team() {
  return (
    <section id="team" className="relative w-full py-24 md:py-32 px-6 md:px-12 flex flex-col items-center border-b border-black/10">
       
       {/* Section Title */}
       <h2 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-black font-[family-name:var(--font-orbitron)] text-black leading-[0.9] text-center max-w-4xl uppercase tracking-tighter mb-16">
          THE COLLECTIVE<br/>
          MINDS BEHIND THE MACHINE
       </h2>

       {/* Horizontal Cards Grid */}
       <div className="w-full max-w-7xl grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 mb-10">
          {team.map((member, idx) => (
             <div key={idx} className="bg-white/60 border border-black/5 rounded-lg p-6 flex flex-col">
                <div className="w-12 h-12 rounded-full overflow-hidden mb-6 bg-slate-200">
                   <Image 
                     src={member.img} 
                     alt={member.name} 
                     width={48} 
                     height={48} 
                     className="object-cover w-full h-full grayscale"
                   />
                </div>
                <p className="text-xs font-semibold text-black/80 leading-relaxed mb-8 flex-grow">
                   "{member.desc}"
                </p>
                <div className="border-t border-black/10 pt-4 mt-auto">
                   <h4 className="font-black font-[family-name:var(--font-orbitron)] text-sm tracking-widest text-black">
                      {member.name}
                   </h4>
                   <p className="text-[9px] font-bold tracking-[0.2em] uppercase text-black/40 mt-1">
                      {member.role}
                   </p>
                </div>
             </div>
          ))}
       </div>

       {/* Pseudo Pagination Indicators (Visual Match to Reference) */}
       <div className="flex items-center gap-2">
          <div className="w-8 h-8 bg-black flex items-center justify-center text-white cursor-pointer hover:bg-[#ff5a1f] transition-colors">
             <span className="text-xs font-bold font-sans">&lt;</span>
          </div>
          <div className="w-8 h-8 bg-black flex items-center justify-center text-white cursor-pointer hover:bg-[#ff5a1f] transition-colors">
             <span className="text-xs font-bold font-sans">&gt;</span>
          </div>
       </div>

    </section>
  );
}