// app/sections/team.tsx
"use client";

import React from "react";
import { motion } from "framer-motion";
import { AtSign, Code2, Send, Globe, ArrowUpRight } from "lucide-react";

const team = [
  {
    name: "Prince",
    role: "Director",
    specialty: "Strategy & Operations",
    social: { linkedin: "#", twitter: "#" },
  },
  {
    name: "Gokul",
    role: "Director",
    specialty: "Engineering & Product",
    social: { linkedin: "#", github: "#" },
  }
];

export default function Team() {
  return (
    <section id="team" className="relative py-24 md:py-32 bg-transparent overflow-hidden">
      {/* Background Texture Consistency */}
      <div
        className="absolute inset-0 opacity-20 pointer-events-none mix-blend-multiply"
      />

      <div className="max-w-7xl mx-auto px-6 relative z-10">

        {/* Section Header */}
        <div className="mb-16 md:mb-24 flex flex-col md:flex-row md:items-end justify-between gap-8">
          <div className="max-w-2xl">
            <motion.span
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: false, margin: "-100px" }}
              className="text-blue-600 font-black text-[10px] tracking-[0.5em] uppercase mb-4 block"
            >
              The Collective
            </motion.span>
            <motion.h2
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: false, margin: "-100px" }}
              className="text-4xl md:text-5xl lg:text-6xl font-black text-slate-900 tracking-tighter leading-none"
            >
              Minds behind <br className="hidden md:block" /> the machine.
            </motion.h2>
          </div>
          <motion.p
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: false }}
            className="text-slate-500 text-lg font-medium max-w-xs border-l-2 border-slate-200 pl-6 italic md:pb-2"
          >
            "A story is only as strong as its narrators."
          </motion.p>
        </div>

        {/* Team Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-8 md:gap-16 max-w-3xl mx-auto">
          {team.map((member, idx) => (
            <TeamMemberCard key={idx} member={member} index={idx} />
          ))}
        </div>
      </div>
    </section>
  );
}

function TeamMemberCard({ member, index }: { member: any; index: number }) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 40 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ delay: index * 0.1, duration: 0.6 }}
      viewport={{ once: false, margin: "-50px" }}
      className="group"
    >
      {/* Portrait Frame */}
      <div className="relative aspect-[4/5] rounded-[2rem] overflow-hidden mb-6 bg-slate-100 border border-slate-200 shadow-sm cursor-pointer">
        {/* Placeholder for image */}
        <div className="absolute inset-0 bg-slate-200 transition-transform duration-700 group-hover:scale-105" />

        {/* Glass Social Overlay */}
        <div className="absolute bottom-6 inset-x-6 translate-y-4 opacity-0 group-hover:translate-y-0 group-hover:opacity-100 transition-all duration-500 z-20">
          <div className="bg-white/70 backdrop-blur-md border border-white/40 rounded-2xl p-4 flex justify-center gap-5 shadow-xl">
            {member.social.linkedin && <AtSign size={18} className="text-slate-700 hover:text-blue-600 transition-colors" />}
            {member.social.github && <Code2 size={18} className="text-slate-700 hover:text-blue-600 transition-colors" />}
            {member.social.twitter && <Send size={18} className="text-slate-700 hover:text-blue-600 transition-colors" />}
            {member.social.globe && <Globe size={18} className="text-slate-700 hover:text-blue-600 transition-colors" />}
          </div>
        </div>

        {/* Subtle Gradient Overly */}
        <div className="absolute inset-0 bg-gradient-to-t from-white/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
      </div>

      {/* Info Block */}
      <div className="px-2">
        <div className="flex items-center justify-between mb-1">
          <h3 className="text-xl font-black text-slate-900 group-hover:text-blue-600 transition-colors tracking-tight">
            {member.name}
          </h3>
          <ArrowUpRight size={16} className="text-slate-300 group-hover:text-slate-900 transition-all" />
        </div>
        <p className="text-[10px] font-black uppercase tracking-[0.2em] text-blue-600 mb-3">
          {member.role}
        </p>

        {/* Specialty Chip */}
        <div className="inline-flex px-3 py-1 rounded-lg bg-white border border-slate-200 group-hover:bg-blue-50 group-hover:border-blue-100 transition-colors duration-300">
          <span className="text-[10px] font-bold text-slate-500 group-hover:text-blue-700">
            {member.specialty}
          </span>
        </div>
      </div>
    </motion.div>
  );
}