// app/sections/portfolio.tsx
"use client";

import React from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ExternalLink, ArrowUpRight } from "lucide-react";
import { useModal } from "../context/ModalContext";

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
    isVideo: true,
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
    isVideo: true,
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

function ProjectCard({ project }: { project: any }) {
  const { openDetailModal } = useModal();
  return (
    <div
      onClick={() => openDetailModal({
         title: project.title,
         tagline: project.category,
         desc: project.desc,
         type: 'portfolio',
         content: `Stack: ${project.tags.join(', ')}\n\nChallenge:\nThe client needed a resilient, high-conversion digital presence to outpace established market leaders.\n\nSolution:\nWe deployed a modern stack architecture and a completely redesigned user journey.\n\nResults:\nTransformed their digital workflow and drove significant multi-platform growth.`
      })}
      className="group cursor-pointer relative w-[280px] md:w-[380px] aspect-[4/3] rounded-[2rem] overflow-hidden shadow-lg border border-slate-200/50 bg-slate-50 flex-shrink-0"
    >
      <div 
        className="absolute inset-0 transition-transform duration-[2s] group-hover:scale-110 ease-out bg-white"
      />
      
      {/* Fine noise texture overlay */}
      <div className="absolute inset-0 opacity-[0.15] mix-blend-overlay pointer-events-none" style={{ backgroundImage: `url("data:image/svg+xml,%3Csvg viewBox='0 0 200 200' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='noiseFilter'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.8' numOctaves='3' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23noiseFilter)'/%3E%3C/svg%3E")` }} />

      {/* Video Indicator */}
      {project.isVideo && (
         <div className="absolute inset-0 flex items-center justify-center z-10 pointer-events-none">
            <div className="w-16 h-16 md:w-20 md:h-20 rounded-full bg-slate-900/5 backdrop-blur-md flex items-center justify-center border border-slate-900/10 text-slate-800 shadow-xl opacity-80 group-hover:scale-110 group-hover:opacity-100 group-hover:bg-slate-900 group-hover:text-white transition-all duration-500">
              <svg className="w-6 h-6 md:w-8 md:h-8 ml-1" fill="currentColor" viewBox="0 0 24 24"><path d="M8 5v14l11-7z"/></svg>
            </div>
         </div>
      )}

      {/* Overlay that cleans the edge */}
      <div className="absolute inset-0 bg-gradient-to-t from-slate-200/50 via-transparent to-transparent opacity-70 group-hover:opacity-30 transition-opacity duration-500 z-10" />
    </div>
  );
}

export default function Portfolio() {
  // We duplicate the array to create a seamless infinite loop.
  // Using 4x to ensure there is no white space even on ultrawide monitors.
  const marqueeProjects = [...projects, ...projects, ...projects, ...projects];

  return (
    <section id="portfolio" className="relative py-24 md:py-32 bg-transparent overflow-hidden">
      <div className="max-w-6xl mx-auto px-6 relative z-10 mb-12 md:mb-16">
        {/* Header */}
        <motion.div
           initial={{ opacity: 0, y: 30 }}
           whileInView={{ opacity: 1, y: 0 }}
           viewport={{ once: true, margin: "-100px" }}
           transition={{ duration: 0.6 }}
           className="text-center"
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
      </div>

      {/* Infinite Horizontal Gallery Container */}
      <div className="relative flex w-full h-[300px] md:h-[400px]">
        <motion.div
          animate={{ x: ["0%", "-50%"] }}
          transition={{
            repeat: Infinity,
            ease: "linear",
            duration: 40, // 40s total duration means a slow, elegant glide
          }}
          className="flex gap-6 md:gap-8 w-max pr-6 md:pr-8"
        >
          {marqueeProjects.map((project, i) => (
            <ProjectCard
              key={`${project.title}-${i}`}
              project={project}
            />
          ))}
        </motion.div>
      </div>
    </section>
  );
}