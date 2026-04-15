"use client";

import React, { useRef } from "react";
import { motion, useScroll, useTransform, useSpring } from "framer-motion";
import { CheckCircle2, TrendingUp, Users, Zap } from "lucide-react";

const processSteps = [
  {
    num: "01",
    title: "Discovery & Strategy",
    desc: "We dive deep into your brand DNA to uncover the 'Why' behind your business.",
    icon: Users,
    result: "100% Alignment",
  },
  {
    num: "02",
    title: "Creative Engineering",
    desc: "Where code meets art. We build the infrastructure for your digital presence.",
    icon: Zap,
    result: "Blazing Speed",
  },
  {
    num: "03",
    title: "Growth & Scale",
    desc: "Launch is just the beginning. We optimize every pixel for conversion.",
    icon: TrendingUp,
    result: "300% Growth",
  },
];

export default function Process() {
  const containerRef = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start start", "end end"],
  });

  const smoothProgress = useSpring(scrollYProgress, {
    stiffness: 25,
    damping: 35,
    restDelta: 0.001,
  });

  // Title Animations (Center -> Left)
  const titleOpacity = useTransform(smoothProgress, [0, 0.1, 0.85, 0.95], [0, 1, 1, 0]);
  const titleX = useTransform(smoothProgress, [0.15, 0.28], ["0%", "-30%"]);
  const titleScale = useTransform(smoothProgress, [0.15, 0.28], [1, 0.85]);

  return (
    <section ref={containerRef} className="relative h-[450vh] bg-white">
      <div 
        className="fixed inset-0 opacity-30 pointer-events-none mix-blend-multiply"
        style={{ backgroundImage: `url('/paper-texture.jpg')`, backgroundSize: "400px" }}
      />

      <div className="sticky top-0 h-screen w-full flex items-center justify-center overflow-hidden">
        <div className="max-w-7xl mx-auto px-6 w-full relative flex items-center">
          
          {/* STICKY TITLE */}
          <motion.div
            style={{ 
              opacity: titleOpacity, 
              x: titleX, 
              scale: titleScale,
              position: "absolute",
              left: "50%",
              translateX: "-50%" 
            }}
            className="z-20 w-full max-w-xl text-center md:text-left origin-left"
          >
            <span className="text-blue-600 font-black text-xs tracking-[0.4em] uppercase mb-4 block">
              The Method
            </span>
            <h2 className="text-5xl md:text-7xl font-black text-slate-900 tracking-tighter leading-[0.85]">
              How we build <br /> your success.
            </h2>
          </motion.div>

          {/* SEQUENTIAL STEPS */}
          <div className="w-full flex justify-end">
            <div className="w-full md:w-1/2 relative h-[500px] flex items-center justify-center">
              {processSteps.map((step, idx) => (
                <ProcessStep 
                  key={idx} 
                  step={step} 
                  index={idx} 
                  progress={smoothProgress} 
                  total={processSteps.length} 
                />
              ))}
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}

function ProcessStep({ step, index, progress, total }: any) {
  // Define exact scroll windows for each card with smoother ranges
  const stepStart = 0.25 + (index * 0.22);
  const stepEnd = stepStart + 0.25;
  
  // 1. Opacity: Gradual fade in -> Hold -> Gradual fade out
  const opacity = useTransform(
    progress, 
    [stepStart, stepStart + 0.08, stepEnd - 0.08, stepEnd], 
    [0, 1, 1, 0]
  );

  // 2. Position: Smooth lift from bottom to center, then center to top
  const y = useTransform(
    progress, 
    [stepStart, stepStart + 0.08, stepEnd - 0.08, stepEnd], 
    [80, 0, 0, -80]
  );

  // 3. Scale: Subtle smooth pop effect
  const scale = useTransform(
    progress, 
    [stepStart, stepStart + 0.08, stepEnd - 0.08, stepEnd], 
    [0.92, 1, 1, 0.92]
  );

  return (
    <motion.div 
      style={{ opacity, y, scale, position: "absolute" }} 
      className="w-full"
    >
      <div className="flex gap-8 items-start bg-white/40 backdrop-blur-xl p-10 rounded-[2.5rem] border border-white/80 shadow-[0_20px_50px_rgba(0,0,0,0.05)]">
        <div className="relative shrink-0">
          <span className="text-8xl font-black text-slate-100 italic select-none">
            {step.num}
          </span>
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 p-5 bg-white shadow-xl rounded-2xl">
            <step.icon className="w-8 h-8 text-blue-600" />
          </div>
        </div>

        <div className="pt-4">
          <h3 className="text-3xl font-black text-slate-900 mb-4 tracking-tight">{step.title}</h3>
          <p className="text-slate-500 text-base leading-relaxed mb-6">{step.desc}</p>

          <div className="inline-flex items-center gap-3 px-5 py-2.5 rounded-full bg-blue-600 text-white shadow-[0_10px_20px_rgba(37,99,235,0.3)]">
            <CheckCircle2 className="w-4 h-4" />
            <span className="text-[10px] font-black uppercase tracking-widest">{step.result}</span>
          </div>
        </div>
      </div>
    </motion.div>
  );
}