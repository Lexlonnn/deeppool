// app/sections/portfolio.tsx
"use client";

import React from "react";
import { motion } from "framer-motion";
import { ExternalLink, ArrowUpRight } from "lucide-react";

const projects = [
  {
    title: "EcoSphere AI",
    category: "Product Dev",
    desc: "A Next.js SaaS platform for carbon footprint tracking using AI-powered insights and real-time analytics.",
    tags: ["Three.js", "Appwrite", "Next.js"],
    color: "#22c55e",
    num: "01",
  },
  {
    title: "Global Reach Campaign",
    category: "Marketing",
    desc: "Scale-up strategy for a fintech startup, achieving 300% growth through precision ad targeting.",
    tags: ["SEO", "Meta Ads", "Data Analysis"],
    color: "#1877f2",
    num: "02",
  },
  {
    title: "Blinkr Wellness",
    category: "Product Dev",
    desc: "Automated eye-wellness tool with cross-platform integration and smart break reminders.",
    tags: ["React", "Python", "Tailwind"],
    color: "#a855f7",
    num: "03",
  },
  {
    title: "NovaBrand Identity",
    category: "Marketing",
    desc: "Full rebranding for a D2C skincare brand — visual identity, packaging, and launch campaign.",
    tags: ["Brand Strategy", "Figma", "Copywriting"],
    color: "#f59e0b",
    num: "04",
  },
  {
    title: "FlowBoard",
    category: "Product Dev",
    desc: "A real-time Kanban SaaS with AI task prioritization, built for remote-first teams.",
    tags: ["Next.js", "Socket.io", "Prisma"],
    color: "#ef4444",
    num: "05",
  },
];

function ProjectCard({ project, index }: { project: (typeof projects)[0], index: number }) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 50 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: false, margin: "-50px" }}
      transition={{ duration: 0.6, delay: index * 0.1 }}
      className="group relative w-full rounded-[2rem] overflow-hidden border border-slate-200 bg-white shadow-[0_10px_40px_rgba(0,0,0,0.03)] hover:shadow-[0_20px_50px_rgba(0,0,0,0.08)] transition-all duration-500 hover:-translate-y-2"
    >
      {/* Top Accent Line */}
      <div
        className="absolute top-0 left-0 right-0 h-1 z-10"
        style={{ backgroundColor: project.color }}
      />

      <div className="flex flex-col md:flex-row h-full">
        {/* Preview Area */}
        <div className="relative h-[250px] md:h-auto md:w-[45%] lg:w-[40%] overflow-hidden bg-slate-50 flex-shrink-0">
          <div
            className="absolute inset-0 opacity-10 group-hover:scale-110 group-hover:opacity-20 transition-all duration-700"
            style={{
              background: `radial-gradient(circle at 50% 50%, ${project.color}, transparent 70%)`
            }}
          />

          {/* Project Number Watermark */}
          <div
            className="absolute bottom-[-10px] left-4 text-[100px] font-black leading-none select-none pointer-events-none transition-all duration-500 group-hover:-translate-y-4"
            style={{ color: `${project.color}15` }}
          >
            {project.num}
          </div>

          {/* Tag Chips in Preview */}
          <div className="absolute inset-0 flex items-center justify-center gap-2 flex-wrap px-6">
            {project.tags.map((tag, i) => (
              <span
                key={tag}
                className="px-3 py-1 rounded-full text-[10px] sm:text-[11px] font-bold border bg-white/90 shadow-sm transition-transform duration-500"
                style={{
                  color: project.color,
                  borderColor: `${project.color}30`,
                }}
              >
                {tag}
              </span>
            ))}
          </div>
        </div>

        {/* Content Area */}
        <div className="p-8 md:p-10 flex flex-col justify-center flex-grow bg-white">
          <div className="flex items-center justify-between mb-4">
            <span className="text-[10px] font-black tracking-[0.2em] text-blue-600 uppercase">
              {project.category}
            </span>
            <ArrowUpRight className="text-slate-300 group-hover:text-slate-900 transition-colors group-hover:translate-x-1 group-hover:-translate-y-1" size={20} />
          </div>

          <h3 className="text-2xl md:text-3xl font-black text-slate-900 mb-4 leading-tight">
            {project.title}
          </h3>

          <p className="text-slate-500 text-sm md:text-base leading-relaxed mb-6">
            {project.desc}
          </p>

          <div className="flex items-center justify-between pt-6 border-t border-slate-100 mt-auto">
            <div className="flex gap-2">
              {project.tags.slice(0, 2).map(tag => (
                <span key={tag} className="text-[10px] font-bold text-slate-400">#{tag.toUpperCase()}</span>
              ))}
            </div>
            <button className="text-xs font-black tracking-widest text-slate-900 group-hover:text-blue-600 transition-colors flex items-center gap-2">
              VIEW CASE
            </button>
          </div>
        </div>
      </div>
    </motion.div>
  );
}

export default function Portfolio() {
  return (
    <section id="portfolio" className="relative py-24 md:py-32 bg-white">
      <div className="max-w-6xl mx-auto px-6 relative z-10">

        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: false, margin: "-100px" }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16 md:mb-24"
        >
          <div className="flex items-center justify-center gap-3 mb-6">
            <div className="h-[2px] w-8 bg-blue-600" />
            <span className="text-xs font-black tracking-[0.5em] text-blue-600 uppercase">
              The Collection
            </span>
            <div className="h-[2px] w-8 bg-blue-600" />
          </div>

          <h2 className="text-4xl md:text-5xl lg:text-6xl font-black text-slate-900 tracking-tighter">
            Selected Works
          </h2>
        </motion.div>

        {/* Vertical List of Projects */}
        <div className="flex flex-col gap-8 md:gap-12">
          {projects.map((project, i) => (
            <ProjectCard
              key={i}
              project={project}
              index={i}
            />
          ))}
        </div>

      </div>
    </section>
  );
}