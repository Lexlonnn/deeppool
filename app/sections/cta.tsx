"use client";

import React from "react";
import { motion } from "framer-motion";
import { ArrowRight, Sparkles, Send } from "lucide-react";

export default function CTA() {
  return (
    <section id="contact" className="relative py-12 md:py-24 px-4 md:px-8 w-full max-w-[1500px] mx-auto min-h-[80vh] flex items-center justify-center">
      
      {/* 
        PREMIUM DARK CARD WRAPPER
        This card contrasts beautifully against the light website theme.
        Using extreme rounding and deep shadow for a 'floating console' look.
      */}
      <motion.div
        initial={{ opacity: 0, y: 80, scale: 0.95 }}
        whileInView={{ opacity: 1, y: 0, scale: 1 }}
        viewport={{ once: false, margin: "-100px" }}
        transition={{ duration: 0.8, ease: [0.23, 1, 0.32, 1] }}
        className="relative w-full h-full min-h-[600px] md:min-h-[700px] rounded-[3rem] md:rounded-[5rem] overflow-hidden shadow-[0_40px_100px_-20px_rgba(0,0,0,0.15)] flex flex-col items-center justify-center bg-slate-950 border border-slate-800"
      >
        {/* Dynamic Backgrounds - Optimized for Performance */}
        <div className="absolute inset-0 z-0 pointer-events-none">
          {/* Subtle Grid Pattern */}
          <div 
            className="absolute inset-0 opacity-[0.03]"
            style={{ 
              backgroundImage: `url("data:image/svg+xml,%3Csvg width='40' height='40' viewBox='0 0 40 40' xmlns='http://www.w3.org/2000/svg'%3E%3Cpath d='M0 0h40v40H0V0zm20 20h20v20H20V20zM0 20h20v20H0V20z' fill='%23ffffff' fill-rule='evenodd'/%3E%3C/svg%3E")`,
              backgroundSize: '40px 40px' 
            }}
          />
          {/* Ambient Lighting Orbs - using Radial Gradients instead of heavy DOM blur filters */}
          <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top_left,rgba(37,99,235,0.15)_0%,transparent_60%)]" />
          <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_bottom_right,rgba(216,158,92,0.12)_0%,transparent_60%)]" />
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,rgba(99,102,241,0.05)_0%,transparent_50%)]" />
        </div>

        {/* Ambient Watermark Text Behind Content */}
        <span className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 text-[150px] md:text-[300px] font-black text-white/[0.02] tracking-tighter cursor-default pointer-events-none select-none z-0">
          SCALE
        </span>

        {/* MAIN CONTENT CONTAINER */}
        <div className="relative z-10 flex flex-col items-center text-center px-6 md:px-12 max-w-5xl">
          
          {/* Tag */}
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: false }}
            transition={{ delay: 0.2, duration: 0.6 }}
            className="inline-flex items-center gap-2.5 px-5 py-2.5 bg-white/5 backdrop-blur-xl rounded-full border border-white/10 mb-10 md:mb-14 shadow-lg"
          >
            <div className="relative flex items-center justify-center w-5 h-5 rounded-full bg-blue-500/20">
              <Sparkles className="w-3 h-3 text-blue-400 animate-pulse" />
            </div>
            <span className="text-[11px] md:text-sm font-black tracking-[0.25em] uppercase text-slate-300">
              Your Next Chapter Begins Here
            </span>
          </motion.div>

          {/* Heading - Stacked & Massive */}
          <motion.h2 
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: false }}
            transition={{ delay: 0.3, duration: 0.8 }}
            className="flex flex-col items-center justify-center gap-2 md:gap-4 mb-8 md:mb-10 w-full"
          >
            <span className="text-4xl md:text-6xl lg:text-8xl font-black text-white tracking-tight leading-none drop-shadow-lg">
              Let's Build The
            </span>
            <span className="text-5xl md:text-7xl lg:text-9xl font-black text-transparent bg-clip-text bg-gradient-to-r from-blue-400 via-indigo-400 to-blue-600 tracking-tighter pb-4">
              FUTURE.
            </span>
          </motion.h2>

          {/* Body */}
          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: false }}
            transition={{ delay: 0.4, duration: 0.8 }}
            className="text-slate-400 text-base md:text-2xl font-medium max-w-3xl mb-14 md:mb-16 leading-relaxed px-4"
          >
            Whether it's market-dominating campaigns or highly scalable digital products, our dual-engine expertise is ready to scale your vision.
          </motion.p>

          {/* Buttons Framework */}
          <motion.div 
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: false }}
            transition={{ delay: 0.5, duration: 0.6, type: "spring", stiffness: 120 }}
            className="flex flex-col sm:flex-row items-center gap-5 sm:gap-8 w-full sm:w-auto"
          >
            {/* Primary Magnetic Button Style */}
            <button className="group relative w-full sm:w-auto overflow-hidden rounded-[2rem] bg-blue-600 p-[2px] transition-all duration-300 hover:scale-[1.03] hover:shadow-[0_0_50px_rgba(37,99,235,0.4)] active:scale-95">
              <span className="absolute inset-0 bg-gradient-to-r from-blue-400 via-indigo-500 to-amber-400 opacity-60 group-hover:opacity-100 transition-opacity duration-300" />
              <div className="relative flex items-center justify-center gap-3 bg-slate-950 px-10 py-5 md:px-12 md:py-6 rounded-[calc(2rem-2px)] group-hover:bg-opacity-0 transition-all duration-300">
                <span className="font-black text-white tracking-[0.15em] uppercase text-xs md:text-sm group-hover:text-white">
                  Start a Project
                </span>
                <Send className="w-4 h-4 md:w-5 md:h-5 text-blue-400 group-hover:text-white group-hover:-translate-y-1 group-hover:translate-x-1 transition-all duration-300" />
              </div>
            </button>
            
            {/* Secondary Text Link with Underline Hover */}
            <button className="group relative w-full sm:w-auto px-6 py-4 flex items-center justify-center gap-3 transition-all duration-300">
              <span className="font-bold text-slate-300 group-hover:text-white tracking-widest uppercase text-xs md:text-sm transition-colors">
                Contact Sales
              </span>
              <ArrowRight className="w-4 h-4 text-slate-500 group-hover:text-white group-hover:translate-x-2 transition-all duration-300" />
              
              {/* Animated Underline */}
              <div className="absolute bottom-2 left-1/2 -translate-x-1/2 w-0 h-[2px] bg-white group-hover:w-[70%] transition-all duration-500 ease-out opacity-0 group-hover:opacity-100" />
            </button>
          </motion.div>

        </div>
      </motion.div>
    </section>
  );
}
