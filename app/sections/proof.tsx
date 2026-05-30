// app/sections/proof.tsx
"use client";

import React from "react";
import { motion } from "framer-motion";

export default function DarkBreak() {
  return (
    <section id="method" className="relative w-full py-32 md:py-48 bg-[#1a1a1a] px-6 md:px-12 flex flex-col items-center justify-center overflow-hidden">
       <motion.div 
         initial={{ opacity: 0, y: 80 }}
         whileInView={{ opacity: 1, y: 0 }}
         viewport={{ once: true, margin: "-100px" }}
         transition={{ duration: 0.8, ease: "easeOut" }}
         className="flex flex-col items-center justify-center w-full max-w-5xl"
       >
         <span className="text-[10px] md:text-xs font-black tracking-[0.3em] uppercase text-white/50 mb-12">
            Global Operations Infrastructure
         </span>
         
         <motion.h2 
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-100px" }}
            variants={{
              hidden: { opacity: 0 },
              visible: {
                opacity: 1,
                transition: { staggerChildren: 0.1, delayChildren: 0.2 }
              }
            }}
            className="text-3xl sm:text-5xl md:text-6xl lg:text-7xl font-black font-[family-name:var(--font-orbitron)] text-white leading-none text-center uppercase tracking-tighter mix-blend-difference mb-8"
         >
            <span>
              {"WELCOME TO DEEPPOOL".split(" ").map((word, i, arr) => (
                <motion.span key={`w1-${i}`} variants={{ hidden: { opacity: 0, y: 30 }, visible: { opacity: 1, y: 0, transition: { type: "spring", damping: 15, stiffness: 100 } } }} className={`inline-block ${i === arr.length - 1 ? '' : 'mr-[0.25em]'}`}>
                  {word}
                </motion.span>
              ))}
            </span>
            <br className="hidden md:block"/>
            <span>
              {"WHERE VISION MEETS".split(" ").map((word, i, arr) => (
                <motion.span key={`w2-${i}`} variants={{ hidden: { opacity: 0, y: 30 }, visible: { opacity: 1, y: 0, transition: { type: "spring", damping: 15, stiffness: 100 } } }} className={`inline-block ${i === arr.length - 1 ? '' : 'mr-[0.25em]'}`}>
                  {word}
                </motion.span>
              ))}
            </span>
            <br className="hidden md:block"/>
            <motion.span variants={{ hidden: { opacity: 0, y: 30 }, visible: { opacity: 1, y: 0, transition: { type: "spring", damping: 15, stiffness: 100 } } }} className="inline-block text-transparent bg-clip-text bg-gradient-to-r from-white via-slate-300 to-white mt-2 md:mt-0">
              EXECUTION
            </motion.span>
         </motion.h2>

         <p className="text-xs md:text-sm text-white/60 max-w-3xl text-center font-medium leading-relaxed tracking-wider">
           Scale up strategies achieving exponential growth through precision targeting. Launch is just the beginning. We optimize every pixel for maximum conversion and enduring market dominance.
         </p>
       </motion.div>
    </section>
  );
}