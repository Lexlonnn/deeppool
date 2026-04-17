// app/sections/services.tsx
"use client";

import React from "react";
import { motion } from "framer-motion";
import { Lightbulb, Globe, Paintbrush, Video, ArrowUpRight } from "lucide-react";
import { useModal } from "../context/ModalContext";

const services = [
  {
    title: "Build Your Brand Identity",
    tagline: "Shape More Than a Business — Build a Legacy",
    desc: "At DeepPool, we transform businesses into iconic brands that inspire, influence, and endure. Through strategic positioning and compelling visuals.",
    icon: Lightbulb,
  },
  {
    title: "Digital Marketing",
    tagline: "Fuel Your Growth with Precision and Power",
    desc: "We empower brands to conquer the digital world with customized marketing strategies built for impact. From SEO to performance marketing.",
    icon: Globe,
  },
  {
    title: "Content Creation",
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
  return (
    <section id="services" className="relative py-24 md:py-32 bg-transparent overflow-hidden">
      {/* Texture Layer */}
      <div className="absolute inset-0 pointer-events-none opacity-40 mix-blend-multiply"
        style={{ backgroundImage: `url('/paper-texture.jpg')`, backgroundSize: '500px' }} />

      <div className="relative z-10 max-w-7xl mx-auto px-6">

        {/* Cinematic Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: false, margin: "-100px" }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16 md:mb-24"
        >
          <span className="text-blue-600 font-black text-[10px] tracking-[0.4em] uppercase mb-4 block">
            Our Expertise
          </span>
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-black text-slate-900 mb-6 tracking-tighter">
            What We Do
          </h2>
          <div className="h-1.5 w-16 bg-blue-600 mx-auto rounded-full shadow-[0_0_15px_rgba(37,99,235,0.4)]" />
        </motion.div>

        {/* The Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {services.map((service, idx) => (
            <ServiceCard
              key={idx}
              service={service}
              index={idx}
            />
          ))}
        </div>
      </div>
    </section>
  );
}

function ServiceCard({ service, index }: { service: any, index: number }) {
  const { openDetailModal } = useModal();
  return (
    <motion.div
      onClick={() => openDetailModal({
        title: service.title,
        tagline: service.tagline,
        desc: service.desc,
        type: 'service',
        icon: service.icon
      })}
      initial={{ opacity: 0, y: 40 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: false, margin: "-50px" }}
      transition={{ duration: 0.6, delay: index * 0.1 }}
      className="cursor-pointer group relative p-8 rounded-[2.5rem] bg-white/60 backdrop-blur-md border border-slate-200/50 
                 shadow-[0_10px_40px_-15px_rgba(0,0,0,0.05)] transition-all duration-500 hover:shadow-[0_40px_80px_-20px_rgba(0,0,0,0.1)] hover:border-blue-200 hover:bg-white/90 hover:-translate-y-2 flex flex-col h-full"
    >
      {/* Floating Icon Container */}
      <div className="mb-8 relative">
        <div className="w-14 h-14 rounded-2xl bg-white shadow-sm flex items-center justify-center text-blue-600 group-hover:scale-110 group-hover:rotate-6 transition-all duration-500">
          <service.icon size={28} />
        </div>
        <div className="absolute -inset-2 bg-blue-100 rounded-full blur-2xl opacity-0 group-hover:opacity-40 transition-opacity" />
      </div>

      <h3 className="text-xl md:text-2xl font-black text-slate-900 mb-3 leading-tight tracking-tight">
        {service.title}
      </h3>

      <h4 className="text-[12px] font-bold text-blue-600/80 mb-4 leading-relaxed uppercase tracking-widest">
        {service.tagline}
      </h4>

      <p className="text-slate-500 text-sm leading-relaxed flex-1 font-medium">
        {service.desc}
      </p>

      {/* Footer / CTA */}
      <div className="mt-8 pt-6 border-t border-slate-100 flex items-center justify-between">
        <div className="flex items-center gap-2">
          <span className="text-[10px] font-black uppercase tracking-[0.2em] text-slate-400 group-hover:text-blue-600 transition-colors">
            Explore
          </span>
        </div>
        <div className="p-2 rounded-full bg-slate-50 text-slate-400 group-hover:bg-slate-900 group-hover:text-white group-hover:rotate-45 transition-all duration-300">
          <ArrowUpRight size={18} />
        </div>
      </div>
    </motion.div>
  );
}