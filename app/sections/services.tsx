"use client";

import React, { useRef, useState } from "react";
import { motion, useScroll, useTransform, useSpring, AnimatePresence } from "framer-motion";
import { Lightbulb, Globe, Paintbrush, Video, ArrowUpRight } from "lucide-react";

const services = [
  {
    title: "Build Your Brand Identity",
    tagline: "Shape More Than a Business — Build a Legacy",
    desc: "At Deep Pool, we transform businesses into iconic brands that inspire, influence, and endure. Through strategic positioning and compelling visuals.",
    icon: Lightbulb,
  },
  {
    title: "Digital Marketing",
    tagline: "Fuel Your Growth with Precision and Power",
    desc: "We empower brands to conquer the digital world with customized marketing strategies built for impact. From SEO to performance marketing.",
    icon: Globe,
  },
  {
    title: "Content Creation & Production",
    tagline: "Craft Stories That Sell, Images That Stay",
    desc: "We breathe cinematic life into brands through masterful content and visual production that captures the essence of your message.",
    icon: Paintbrush,
  },
  {
    title: "Advertising Campaigns",
    tagline: "Capture Attention — and Market Share",
    desc: "We design advertising campaigns that don't just make noise — they make history. With bold creativity and strategic precision.",
    icon: Video,
  },
];

export default function Services() {
  const containerRef = useRef<HTMLDivElement>(null);
  
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start start", "end end"],
  });

  const smoothProgress = useSpring(scrollYProgress, {
    stiffness: 35, 
    damping: 20,
  });

  return (
    <section 
      ref={containerRef} 
      className="relative h-[400vh] bg-[#fcfcfc] overflow-clip"
    >
      {/* Texture Layer */}
      <div className="fixed inset-0 pointer-events-none opacity-40 mix-blend-multiply" 
           style={{ backgroundImage: `url('/paper-texture.jpg')`, backgroundSize: '500px' }} />

      <div className="sticky top-0 h-screen w-full flex flex-col items-center justify-center px-6">
        
        {/* Cinematic Header */}
        <motion.div 
          style={{ 
            opacity: useTransform(smoothProgress, [0, 0.1, 0.8, 0.9], [0, 1, 1, 0]),
            scale: useTransform(smoothProgress, [0, 0.1], [0.95, 1])
          }}
          className="text-center mb-16 relative z-10"
        >
          <h2 className="text-5xl md:text-6xl font-black text-slate-900 mb-6 tracking-tighter">
            What We Do
          </h2>
          <div className="h-1.5 w-16 bg-blue-600 mx-auto rounded-full shadow-[0_0_15px_rgba(37,99,235,0.4)]" />
        </motion.div>

        {/* The Glass Grid */}
        <div className="relative w-full max-w-7xl mx-auto z-10">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {services.map((service, idx) => (
              <ServiceCard 
                key={idx} 
                service={service} 
                index={idx} 
                progress={smoothProgress} 
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

function ServiceCard({ service, index, progress }: any) {
  const [mousePos, setMousePos] = useState({ x: 0, y: 0 });
  const cardRef = useRef<HTMLDivElement>(null);

  const handleMouseMove = (e: React.MouseEvent) => {
    if (!cardRef.current) return;
    const rect = cardRef.current.getBoundingClientRect();
    setMousePos({ x: e.clientX - rect.left, y: e.clientY - rect.top });
  };

  // Story Reveal Logic
  const start = 0.1 + (index * 0.12);
  const end = start + 0.15;
  const y = useTransform(progress, [start, end], [60, 0]);
  const opacity = useTransform(progress, [start, end], [0, 1]);

  return (
    <motion.div
      ref={cardRef}
      onMouseMove={handleMouseMove}
      style={{ y, opacity }}
      className="group relative p-8 rounded-[2.5rem] bg-white/30 backdrop-blur-2xl border border-white/60 
                 shadow-[0_10px_40px_-15px_rgba(0,0,0,0.05)] transition-all duration-500 
                 hover:shadow-[0_40px_80px_-20px_rgba(0,0,0,0.1)] hover:bg-white/50 flex flex-col h-full"
    >
      {/* Inner "Spotlight" Glow */}
      <div 
        className="absolute inset-0 pointer-events-none transition-opacity duration-500 opacity-0 group-hover:opacity-100 rounded-[2.5rem]"
        style={{
          background: `radial-gradient(600px circle at ${mousePos.x}px ${mousePos.y}px, rgba(37, 99, 235, 0.06), transparent 40%)`
        }}
      />

      {/* Floating Icon Container */}
      <div className="mb-10 relative">
        <div className="w-14 h-14 rounded-2xl bg-white shadow-sm flex items-center justify-center text-blue-600 
                        group-hover:scale-110 group-hover:rotate-6 transition-all duration-500">
          <service.icon size={28} />
        </div>
        <div className="absolute -inset-2 bg-blue-100 rounded-full blur-2xl opacity-0 group-hover:opacity-40 transition-opacity" />
      </div>

      <h3 className="text-2xl font-black text-slate-900 mb-4 leading-none tracking-tight">
        {service.title}
      </h3>

      <h4 className="text-[13px] font-bold text-blue-600/80 mb-5 leading-relaxed uppercase tracking-widest">
        {service.tagline}
      </h4>

      <p className="text-slate-500 text-[15px] leading-relaxed flex-1 font-medium">
        {service.desc}
      </p>

      {/* Footer / CTA */}
      <div className="mt-10 pt-6 border-t border-slate-200/50 flex items-center justify-between">
         <div className="flex items-center gap-2">
            <div className="w-2 h-2 rounded-full bg-blue-600 animate-pulse" />
            <span className="text-[10px] font-black uppercase tracking-[0.2em] text-slate-400">Services</span>
         </div>
         <div className="p-2 rounded-full bg-slate-900 text-white translate-x-4 opacity-0 group-hover:translate-x-0 group-hover:opacity-100 transition-all duration-500">
            <ArrowUpRight size={18} />
         </div>
      </div>
    </motion.div>
  );
}