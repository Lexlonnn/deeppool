"use client";

import React, { useRef } from "react";
import { motion, useScroll, useTransform, useSpring } from "framer-motion";
import { ExternalLink, GitBranch, ArrowUpRight, Droplets } from "lucide-react";

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

function ProjectCard({ project }: { project: (typeof projects)[0] }) {
  return (
    <motion.div
      whileHover={{ y: -10, transition: { duration: 0.3 } }}
      className="group relative w-[420px] flex-shrink-0 cursor-pointer"
      style={{ height: "540px" }}
    >
      {/* Light Glow behind card */}
      <div
        className="absolute -inset-2 rounded-[2rem] opacity-0 group-hover:opacity-20 blur-2xl transition-all duration-700"
        style={{ backgroundColor: project.color }}
      />

      {/* Card Shell */}
      <div className="relative h-full rounded-[2rem] overflow-hidden border border-slate-200 bg-white/70 backdrop-blur-xl shadow-[0_20px_50px_rgba(0,0,0,0.04)] group-hover:shadow-[0_30px_60px_rgba(0,0,0,0.08)] transition-all duration-500">
        
        {/* Top Accent Line */}
        <div 
          className="absolute top-0 left-0 right-0 h-1 z-10"
          style={{ backgroundColor: project.color }}
        />

        {/* Preview Area */}
        <div className="relative h-[240px] w-full overflow-hidden bg-slate-100">
          {/* Animated Mesh Gradient for Light Theme */}
          <div
            className="absolute inset-0 opacity-20 group-hover:scale-110 transition-transform duration-700"
            style={{ 
              background: `radial-gradient(circle at 50% 50%, ${project.color}, transparent 70%)` 
            }}
          />

          {/* Project Number Watermark */}
          <div
            className="absolute bottom-[-10px] left-4 text-[100px] font-black leading-none select-none pointer-events-none"
            style={{ color: `${project.color}15` }}
          >
            {project.num}
          </div>

          {/* Tag Chips in Preview */}
          <div className="absolute inset-0 flex items-center justify-center gap-2 flex-wrap px-10">
            {project.tags.map((tag, i) => (
              <span
                key={tag}
                className="px-3 py-1 rounded-full text-[10px] font-bold border bg-white/80 shadow-sm transition-transform duration-500"
                style={{ 
                  color: project.color, 
                  borderColor: `${project.color}30`,
                  transform: `translateY(${i % 2 === 0 ? '-10px' : '10px'})`
                }}
              >
                {tag}
              </span>
            ))}
          </div>

          {/* Floating Actions */}
          <div className="absolute top-6 right-6 flex gap-2 opacity-0 group-hover:opacity-100 translate-x-4 group-hover:translate-x-0 transition-all duration-300">
            <div className="p-2 bg-white rounded-full shadow-lg text-slate-900 hover:text-blue-600 transition-colors">
              <ExternalLink size={16} />
            </div>
          </div>
        </div>

        {/* Content Area */}
        <div className="p-8 flex flex-col h-[300px] bg-white">
          <div className="flex items-center justify-between mb-4">
            <span className="text-[10px] font-black tracking-[0.2em] text-blue-600 uppercase">
              {project.category}
            </span>
            <ArrowUpRight className="text-slate-300 group-hover:text-slate-900 transition-colors group-hover:translate-x-1 group-hover:-translate-y-1" size={20} />
          </div>

          <h3 className="text-2xl font-black text-slate-900 mb-4 leading-tight">
            {project.title}
          </h3>

          <p className="text-slate-500 text-sm leading-relaxed mb-6 flex-1 line-clamp-3">
            {project.desc}
          </p>

          <div className="flex items-center justify-between pt-6 border-t border-slate-100">
             <div className="flex gap-2">
                {project.tags.slice(0, 2).map(tag => (
                   <span key={tag} className="text-[10px] font-bold text-slate-400">#{tag.toUpperCase()}</span>
                ))}
             </div>
             <button className="text-xs font-black tracking-widest text-slate-900 group-hover:text-blue-600 transition-colors">
                VIEW CASE
             </button>
          </div>
        </div>
      </div>
    </motion.div>
  );
}

export default function Portfolio() {
  const targetRef = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: targetRef,
    offset: ["start start", "end end"],
  });

  // Smooth the scroll
  const smoothProgress = useSpring(scrollYProgress, {
    stiffness: 70,
    damping: 25,
    restDelta: 0.001,
  });

  // Text Animations
  const textOpacity = useTransform(smoothProgress, [0, 0.12, 0.18], [1, 1, 0]);
  const textScale = useTransform(smoothProgress, [0, 0.18], [1, 0.95]);
  const textY = useTransform(smoothProgress, [0, 0.18], [0, -20]);

  // Horizontal Scroll
  const x = useTransform(smoothProgress, [0.22, 0.82], ["15%", "-75%"]);
  const cardsOpacity = useTransform(smoothProgress, [0.18, 0.25], [0, 1]);

  return (
    <section ref={targetRef} className="relative min-h-[500vh] bg-[#ffffff]">
      <div className="sticky top-0 h-screen flex items-center overflow-hidden">
        
        {/* Subtle Watermark Background */}
        <motion.div 
          style={{ 
            opacity: useTransform(smoothProgress, [0.2, 0.5, 0.8], [0, 0.1, 0]),
            x: useTransform(smoothProgress, [0.2, 1], [100, -100])
          }}
          className="absolute inset-0 flex items-center justify-center pointer-events-none"
        >
          <span className="text-[20vw] font-black text-slate-200 uppercase tracking-tighter italic">
            Visuals
          </span>
        </motion.div>

        {/* ── STAGE 1: THE STORY INTRO ── */}
        <motion.div
          style={{ opacity: textOpacity, scale: textScale, y: textY }}
          className="absolute inset-0 flex flex-col items-center justify-center z-20 px-4"
        >
          <motion.div 
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            className="flex items-center gap-3 mb-6"
          >
            <div className="h-[2px] w-8 bg-blue-600" />
            <span className="text-xs font-black tracking-[0.5em] text-blue-600 uppercase">
              The Collection
            </span>
            <div className="h-[2px] w-8 bg-blue-600" />
          </motion.div>

          <h2 className="font-black tracking-tighter leading-[0.85] text-center text-slate-900 text-[10vw] md:text-[8vw]">
            SELECTED <br /> <span className="text-transparent" style={{ WebkitTextStroke: "2px #0f172a" }}>WORKS</span>
          </h2>
          
          <motion.p className="text-slate-400 mt-10 text-sm font-medium tracking-widest uppercase">
            Chapter 01 — Scroll to Explore
          </motion.p>
        </motion.div>

        {/* ── STAGE 2: THE GALLERY ── */}
        <motion.div
          style={{ opacity: cardsOpacity }}
          className="w-full relative z-10"
        >
          <motion.div style={{ x }} className="flex gap-[10vw] px-[5vw] items-center">
            {projects.map((project, i) => (
              <ProjectCardWrapper 
                key={i} 
                project={project} 
                index={i} 
                progress={smoothProgress} 
              />
            ))}
            
            {/* The Cinematic Outro */}
            <div className="flex-shrink-0 w-[500px] pl-20">
                <p className="text-slate-200 text-9xl font-black tracking-tighter leading-none italic">
                  NEXT<br/>GEN.
                </p>
            </div>
          </motion.div>
        </motion.div>

      </div>
    </section>
  );
}

function ProjectCardWrapper({ project, index, progress }: any) {
  // Logic to make cards slightly "pop" when they are in focus
  const start = 0.22 + (index * 0.12);
  const end = start + 0.15;
  
  const scale = useTransform(progress, [start, (start + end) / 2, end], [0.9, 1.05, 0.9]);
  const rotate = useTransform(progress, [start, end], [2, -2]);

  return (
    <motion.div style={{ scale, rotate }}>
      <ProjectCard project={project} />
    </motion.div>
  );
}