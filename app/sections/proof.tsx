// app/sections/proof.tsx
"use client";

import React from "react";
import { motion } from "framer-motion";
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
  return (
    <section id="method" className="relative py-24 md:py-32 bg-white overflow-hidden">
      <div
        className="absolute inset-0 opacity-30 pointer-events-none mix-blend-multiply"
        style={{ backgroundImage: `url('/paper-texture.jpg')`, backgroundSize: "400px" }}
      />

      <div className="max-w-7xl mx-auto px-6 relative z-10">

        {/* Title */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: false, margin: "-100px" }}
          transition={{ duration: 0.6 }}
          className="text-center md:text-left mb-16 md:mb-24"
        >
          <span className="text-blue-600 font-black text-[10px] tracking-[0.4em] uppercase mb-4 block">
            The Method
          </span>
          <h2 className="text-4xl md:text-5xl lg:text-7xl font-black text-slate-900 tracking-tighter leading-[0.9]">
            How we build <br className="hidden md:block" /> your success.
          </h2>
        </motion.div>

        {/* Steps Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {processSteps.map((step, idx) => (
            <ProcessStep
              key={idx}
              step={step}
              index={idx}
            />
          ))}
        </div>

      </div>
    </section>
  );
}

function ProcessStep({ step, index }: { step: any, index: number }) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 40 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: false, margin: "-50px" }}
      transition={{ duration: 0.6, delay: index * 0.1 }}
      className="w-full flex-1"
    >
      <div className="flex flex-col h-full bg-slate-50 border border-slate-200/60 p-10 rounded-[2rem] hover:bg-white hover:border-blue-100 hover:shadow-[0_20px_50px_rgba(37,99,235,0.08)] transition-all duration-500 hover:-translate-y-2 group">

        <div className="relative mb-12">
          <span className="text-7xl font-black text-slate-200 italic select-none group-hover:text-blue-50 transition-colors duration-500">
            {step.num}
          </span>
          <div className="absolute top-1/2 left-4 -translate-y-1/2 p-4 bg-white shadow-[0_10px_30px_rgba(0,0,0,0.05)] rounded-2xl group-hover:scale-110 group-hover:rotate-6 transition-all duration-500">
            <step.icon className="w-6 h-6 text-blue-600" />
          </div>
        </div>

        <div className="flex-grow">
          <h3 className="text-2xl font-black text-slate-900 mb-4 tracking-tight leading-snug">{step.title}</h3>
          <p className="text-slate-500 text-sm md:text-base leading-relaxed mb-8">{step.desc}</p>
        </div>

        <div className="mt-auto">
          <div className="inline-flex items-center gap-3 px-5 py-2.5 rounded-full bg-white border border-slate-200 group-hover:bg-blue-600 group-hover:border-blue-600 group-hover:text-white transition-all duration-300 shadow-sm">
            <CheckCircle2 className="w-4 h-4 text-slate-400 group-hover:text-white transition-colors" />
            <span className="text-[10px] font-black uppercase tracking-widest text-slate-900 group-hover:text-white transition-colors">{step.result}</span>
          </div>
        </div>
      </div>
    </motion.div>
  );
}