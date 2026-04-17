"use client";

import React, { useState } from "react";
import { motion } from "framer-motion";
import { ArrowRight, BarChart3, Rocket, Code2, Globe2, Sparkles, ChevronRight, Layers } from "lucide-react";
import { useModal } from "../context/ModalContext";

export default function Hero() {
  const [activeSector, setActiveSector] = useState<'marketing' | 'product' | null>(null);
  const { openContactModal, openDetailModal } = useModal();

  const staggerContainer = {
    hidden: { opacity: 0 },
    show: {
      opacity: 1,
      transition: {
        staggerChildren: 0.15,
      },
    },
  };

  const fadeInUp = {
    hidden: { opacity: 0, y: 30 },
    show: { opacity: 1, y: 0, transition: { type: "spring" as const, stiffness: 50, duration: 0.8 } },
  };

  return (
    <section id="home" className="relative w-full min-h-screen pt-32 lg:pt-40 pb-20 flex flex-col items-center justify-center overflow-hidden">
      
      {/* Decorative Interactive Background Elements removed */}

      <div className="relative z-10 w-full max-w-[1300px] mx-auto px-4 md:px-8 flex flex-col items-center">
        
        {/* Floating Mini-Badges for Depth (Hidden on Mobile) */}
        <motion.div
           animate={{ y: [0, -15, 0], rotate: [0, 3, 0] }}
           transition={{ duration: 6, repeat: Infinity, ease: "easeInOut" }}
           className="hidden xl:flex absolute top-[10%] left-0 bg-white/80 backdrop-blur-md border border-slate-200/60 shadow-xl px-5 py-4 rounded-2xl items-center gap-4 z-20 hover:scale-105 transition-transform"
        >
          <div className="w-10 h-10 rounded-full bg-blue-100 flex items-center justify-center text-blue-600 shadow-inner">
            <BarChart3 className="w-5 h-5" />
          </div>
          <div>
            <div className="text-[10px] text-slate-500 font-extrabold uppercase tracking-widest">Sector 1</div>
            <div className="text-sm font-black text-slate-800">Growth Marketing</div>
          </div>
        </motion.div>

        <motion.div
           animate={{ y: [0, 20, 0], rotate: [0, -3, 0] }}
           transition={{ duration: 7, repeat: Infinity, ease: "easeInOut", delay: 1 }}
           className="hidden xl:flex absolute top-[25%] right-[2%] bg-white/80 backdrop-blur-md border border-slate-200/60 shadow-xl px-5 py-4 rounded-2xl items-center gap-4 z-20 hover:scale-105 transition-transform"
        >
          <div className="w-10 h-10 rounded-full bg-amber-100 flex items-center justify-center text-amber-600 shadow-inner">
            <Code2 className="w-5 h-5" />
          </div>
          <div>
            <div className="text-[10px] text-slate-500 font-extrabold uppercase tracking-widest">Sector 2</div>
            <div className="text-sm font-black text-slate-800">Core Engineering</div>
          </div>
        </motion.div>

        {/* Intro Badge */}
        <motion.div 
           initial={{ opacity: 0, scale: 0.8, y: 20 }}
           animate={{ opacity: 1, scale: 1, y: 0 }}
           transition={{ duration: 0.6, delay: 0.1, type: "spring" }}
           className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white/80 backdrop-blur-md border border-slate-200 shadow-sm mb-10 hover:shadow-md transition-shadow cursor-default"
        >
          <Sparkles className="w-4 h-4 text-blue-600" />
          <span className="text-[13px] font-bold tracking-widest uppercase text-slate-700 bg-clip-text text-transparent bg-gradient-to-r from-blue-700 to-indigo-700">
            Welcome to DeepPool
          </span>
        </motion.div>

        {/* Headline Container */}
        <motion.div 
           variants={staggerContainer}
           initial="hidden"
           animate="show"
           className="text-center max-w-5xl mb-12"
        >
          <motion.h1 
             variants={fadeInUp}
             className="text-[48px] md:text-[72px] lg:text-[88px] font-black tracking-tighter leading-[1.05] text-slate-900 mb-8"
          >
            Accelerate Growth.<br className="hidden md:block"/>
            <span className="relative inline-block mt-2 pb-2">
              <span className="relative z-10 bg-clip-text text-transparent bg-gradient-to-r from-blue-600 via-indigo-600 to-amber-500 drop-shadow-sm">
                Engineer Excellence.
              </span>
            </span>
          </motion.h1>
          
          <motion.p 
             variants={fadeInUp}
             className="text-lg md:text-xl lg:text-2xl text-slate-600 font-medium max-w-3xl mx-auto leading-relaxed"
          >
            We are the ultimate nexus between cutting-edge <strong className="font-bold text-slate-800">product architecture</strong> and hyper-targeted <strong className="font-bold text-slate-800">marketing strategies</strong>.
          </motion.p>
        </motion.div>

        {/* Global CTA */}
        <motion.div 
           initial={{ opacity: 0, y: 20 }}
           animate={{ opacity: 1, y: 0 }}
           transition={{ delay: 0.5, duration: 0.8 }}
           className="flex flex-col sm:flex-row items-center gap-4 mb-24"
        >
           <button onClick={openContactModal} className="px-8 py-4 w-full sm:w-auto rounded-full bg-slate-900 text-white font-bold tracking-wide hover:bg-blue-600 hover:shadow-xl hover:shadow-blue-500/20 hover:-translate-y-1 transition-all duration-300 flex items-center justify-center gap-2 group">
             Start Your Project
             <ArrowRight className="w-4 h-4 group-hover:translate-x-1.5 transition-transform" />
           </button>
           <button onClick={() => document.getElementById('services')?.scrollIntoView({ behavior: 'smooth' })} className="px-8 py-4 w-full sm:w-auto rounded-full bg-white text-slate-800 border border-slate-200 font-bold tracking-wide hover:bg-slate-50 hover:border-slate-300 hover:shadow-lg hover:-translate-y-1 transition-all duration-300 flex items-center justify-center gap-2 group">
             <Layers className="w-4 h-4 opacity-70" />
             View Capabilities
           </button>
        </motion.div>

        {/* THE 2 SECTORS */}
        <div className="w-full grid grid-cols-1 lg:grid-cols-2 gap-6 lg:gap-8 relative z-20">
           
           {/* Marketing Sector Card */}
           <motion.div 
              initial={{ opacity: 0, y: 40 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.7, type: "spring", stiffness: 40 }}
              onMouseEnter={() => setActiveSector('marketing')}
              onMouseLeave={() => setActiveSector(null)}
              className="group relative w-full h-full lg:-mt-12"
           >
              <div className={`absolute inset-0 bg-blue-500 rounded-[2.5rem] blur-2xl transition-all duration-700 ${activeSector === 'marketing' ? 'opacity-20 scale-105' : 'opacity-0 scale-100'}`} />
              <div className="relative h-full p-8 lg:p-14 bg-white/70 backdrop-blur-2xl border border-slate-200/60 rounded-[2.5rem] shadow-[0_20px_40px_-15px_rgba(0,0,0,0.05)] hover:bg-white hover:border-blue-200 hover:shadow-[0_30px_60px_-15px_rgba(24,119,242,0.15)] transition-all duration-500 overflow-hidden flex flex-col">
                 
                 {/* Decorative Background Icon */}
                 <div className="absolute -top-10 -right-10 p-8 opacity-5 group-hover:opacity-10 group-hover:scale-125 transition-all duration-1000 pointer-events-none">
                   <BarChart3 className="w-64 h-64 text-blue-600 rotate-12" />
                 </div>

                 {/* Top Icon Area */}
                 <div className="relative z-10 mb-12">
                   <div className="w-20 h-20 rounded-[1.5rem] bg-gradient-to-br from-blue-500 to-indigo-600 flex items-center justify-center text-white shadow-xl shadow-blue-500/30 group-hover:-translate-y-2 group-hover:rotate-3 transition-all duration-500">
                     <Rocket className="w-10 h-10" />
                   </div>
                 </div>

                 {/* Content Area */}
                 <div className="relative z-10 flex-grow flex flex-col">
                   <div className="inline-flex items-center gap-2 px-3 py-1 bg-blue-50 text-blue-600 rounded-full text-[10px] font-black uppercase tracking-widest mb-6 w-max border border-blue-100 shadow-sm transition-all group-hover:shadow-md">
                      Sector 01
                   </div>
                   <h3 className="text-4xl lg:text-5xl font-black text-slate-900 mb-6 tracking-tight leading-none group-hover:text-blue-600 transition-colors duration-300">
                     DeepPool<br/>
                     <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-indigo-500">Marketing</span>
                   </h3>
                   <p className="text-slate-600 font-medium text-lg leading-relaxed mb-12 max-w-[90%]">
                     Dominate your market segment. We engineer data-driven campaigns, brand positioning, and dynamic growth strategies that convert leads to champions.
                   </p>
                   
                   <div 
                     onClick={() => openDetailModal({
                       title: "DeepPool Marketing",
                       tagline: "Dominate your market segment.",
                       desc: "We engineer data-driven campaigns, brand positioning, and dynamic growth strategies that convert leads to champions.",
                       type: "sector",
                       content: "• Strategic Brand Positioning\n• Data-Driven Performance Marketing\n• Social Media Dominance\n• SEO & Organic Pipeline Architecture\n\nOur marketing labs use top-tier analytics to outmaneuver competitors and secure your market share."
                     })}
                     className="mt-auto pt-8 border-t border-slate-100 flex items-center text-blue-600 font-bold group-hover:translate-x-3 transition-transform duration-500 cursor-pointer w-max uppercase tracking-widest text-sm">
                     Explore Marketing <ChevronRight className="w-5 h-5 ml-2" />
                   </div>
                 </div>

              </div>
           </motion.div>

           {/* Product Sector Card */}
           <motion.div 
              initial={{ opacity: 0, y: 40 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.9, type: "spring", stiffness: 40 }}
              onMouseEnter={() => setActiveSector('product')}
              onMouseLeave={() => setActiveSector(null)}
              className="group relative w-full h-full lg:mt-12"
           >
              <div className={`absolute inset-0 bg-amber-500 rounded-[2.5rem] blur-2xl transition-all duration-700 ${activeSector === 'product' ? 'opacity-20 scale-105' : 'opacity-0 scale-100'}`} />
              <div className="relative h-full p-8 lg:p-14 bg-white/70 backdrop-blur-2xl border border-slate-200/60 rounded-[2.5rem] shadow-[0_20px_40px_-15px_rgba(0,0,0,0.05)] hover:bg-white hover:border-amber-200 hover:shadow-[0_30px_60px_-15px_rgba(245,158,11,0.15)] transition-all duration-500 overflow-hidden flex flex-col">
                 
                 {/* Decorative Background Icon */}
                 <div className="absolute -top-10 -right-10 p-8 opacity-5 group-hover:opacity-10 group-hover:scale-125 transition-all duration-1000 pointer-events-none text-amber-500">
                   <Code2 className="w-64 h-64 -rotate-12" />
                 </div>

                 {/* Top Icon Area */}
                 <div className="relative z-10 mb-12">
                   <div className="w-20 h-20 rounded-[1.5rem] bg-gradient-to-br from-amber-400 to-orange-500 flex items-center justify-center text-white shadow-xl shadow-amber-500/30 group-hover:-translate-y-2 group-hover:-rotate-3 transition-all duration-500">
                     <Globe2 className="w-10 h-10" />
                   </div>
                 </div>

                 {/* Content Area */}
                 <div className="relative z-10 flex-grow flex flex-col">
                   <div className="inline-flex items-center gap-2 px-3 py-1 bg-amber-50 text-amber-600 rounded-full text-[10px] font-black uppercase tracking-widest mb-6 w-max border border-amber-100 shadow-sm transition-all group-hover:shadow-md">
                      Sector 02
                   </div>
                   <h3 className="text-4xl lg:text-5xl font-black text-slate-900 mb-6 tracking-tight leading-none group-hover:text-amber-500 transition-colors duration-300">
                     Product<br/>
                     <span className="text-transparent bg-clip-text bg-gradient-to-r from-amber-500 to-orange-400">Development</span>
                   </h3>
                   <p className="text-slate-600 font-medium text-lg leading-relaxed mb-12 max-w-[90%]">
                     Build the platforms of tomorrow. From scalable web applications to elite AI integrations, our engineering teams construct digital excellence.
                   </p>
                   
                   <div 
                     onClick={() => openDetailModal({
                       title: "Product Development",
                       tagline: "Build the platforms of tomorrow.",
                       desc: "From scalable web applications to elite AI integrations, our engineering teams construct digital excellence.",
                       type: "sector",
                       content: "• Scalable Web & Mobile Apps\n• Custom API & Cloud Architecture\n• AI & Machine Learning Integration\n• High-Performance Enterprise Solutions\n\nOur engineering team builds resilient, high-speed applications tailored specifically to your unique operational needs."
                     })}
                     className="mt-auto pt-8 border-t border-slate-100 flex items-center text-amber-600 font-bold group-hover:translate-x-3 transition-transform duration-500 cursor-pointer w-max uppercase tracking-widest text-sm">
                     Explore Product <ChevronRight className="w-5 h-5 ml-2" />
                   </div>
                 </div>

              </div>
           </motion.div>

        </div>
      </div>
    </section>
  );
}
