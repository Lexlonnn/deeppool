"use client";

import React from "react";
import { motion, AnimatePresence } from "framer-motion";
import { useModal } from "../../context/ModalContext";
import { X, ArrowRight } from "lucide-react";

export default function DetailModal() {
  const { isDetailModalOpen, closeDetailModal, activeDetail, openContactModal } = useModal();

  if (!activeDetail) return null;

  return (
    <AnimatePresence>
      {isDetailModalOpen && (
        <div className="fixed inset-0 z-[100] flex items-center justify-end">
          {/* Backdrop */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={closeDetailModal}
            className="absolute inset-0 bg-slate-900/60 backdrop-blur-sm"
          />

          {/* Floating Glass Panel */}
          <motion.div
            initial={{ x: 50, opacity: 0, scale: 0.95 }}
            animate={{ x: 0, opacity: 1, scale: 1 }}
            exit={{ x: 50, opacity: 0, scale: 0.95 }}
            transition={{ type: "spring", damping: 25, stiffness: 200 }}
            className="relative w-full max-w-2xl max-h-[96dvh] m-4 lg:m-6 bg-white/60 backdrop-blur-3xl border border-white/80 rounded-[2rem] shadow-[0_20px_60px_-15px_rgba(0,0,0,0.1)] overflow-y-auto hide-scrollbar overscroll-contain"
            style={{ scrollbarWidth: 'none', WebkitOverflowScrolling: 'touch' }}
            data-lenis-prevent={true}
            onWheel={(e) => e.stopPropagation()}
          >

              {/* Header section - Glassmorphic gradient */}
              <div className={`relative p-8 lg:p-12 pb-16 text-white overflow-hidden shrink-0 ${activeDetail.type === 'service' ? 'bg-gradient-to-br from-blue-500/90 to-blue-700/90' : activeDetail.type === 'portfolio' ? 'bg-gradient-to-br from-slate-800/90 to-slate-950/90' : 'bg-gradient-to-br from-amber-400/90 to-orange-500/90'}`}>
                <div className="absolute inset-0 bg-white/5 backdrop-blur-sm" />
                {/* Pattern overlay */}
                <div className="absolute inset-0 opacity-10 bg-[linear-gradient(rgba(255,255,255,0.5)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.5)_1px,transparent_1px)] bg-[size:40px_40px]" />

                <button
                  onClick={closeDetailModal}
                  className="absolute top-6 right-6 p-2.5 rounded-full bg-white/10 backdrop-blur-md hover:bg-white/25 border border-white/20 transition-all duration-300 z-20 text-white shadow-sm"
                >
                  <X className="w-5 h-5" />
                </button>

                <div className="relative z-10 mt-4">
                  <div className="inline-flex items-center gap-2 px-4 py-1.5 bg-white/20 border border-white/10 rounded-full text-[10px] font-black uppercase tracking-[0.2em] mb-6 w-max backdrop-blur-md shadow-sm">
                    {activeDetail.type}
                  </div>
                  <h2 className="text-3xl lg:text-5xl font-black mb-4 tracking-tight leading-[1.1] drop-shadow-sm">{activeDetail.title}</h2>
                  <p className="text-white/90 font-medium text-lg leading-relaxed max-w-lg drop-shadow-sm">{activeDetail.tagline}</p>
                </div>
              </div>

              {/* Body content - Semi-transparent */}
              <div className="p-8 lg:p-12 relative z-10 w-full block">

                <div className="mb-10">
                  <h3 className="text-[11px] font-bold text-slate-400 uppercase tracking-widest mb-4">Overview</h3>
                  <div className="p-6 rounded-[1.5rem] bg-white/50 border border-white/60 shadow-sm backdrop-blur-md">
                    <p className="text-slate-800 text-lg md:text-xl font-medium leading-relaxed">
                      {activeDetail.desc}
                    </p>
                  </div>
                </div>

                {activeDetail.content && (
                  <div className="mb-10">
                    <h3 className="text-[11px] font-bold text-slate-400 uppercase tracking-widest mb-4">Deep Dive</h3>
                    <div className="p-6 md:p-8 rounded-[1.5rem] bg-white/50 border border-white/60 shadow-sm backdrop-blur-md">
                      <div className="text-slate-700 leading-relaxed font-medium space-y-4 whitespace-pre-line text-sm md:text-base">
                        {activeDetail.content}
                      </div>
                    </div>
                  </div>
                )}

                <div className="relative overflow-hidden p-8 rounded-[2rem] border border-white shadow-xl bg-gradient-to-tl from-slate-50 to-white mt-8">
                  <h4 className="font-black text-slate-900 mb-2 text-xl md:text-2xl tracking-tight">Ready to leverage this?</h4>
                  <p className="text-slate-500 text-sm md:text-base mb-8 font-medium max-w-md">Let's discuss how {activeDetail.title} fits into your unique growth strategy.</p>
                  <button
                    onClick={() => {
                      closeDetailModal();
                      setTimeout(openContactModal, 300);
                    }}
                    className="w-full sm:w-auto px-8 py-4 bg-blue-600 hover:bg-blue-700 text-white rounded-[1.2rem] font-bold flex items-center justify-center gap-2 transition-all group shadow-lg shadow-blue-500/20"
                  >
                    Let's Discuss <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                  </button>
                </div>
              </div>
          </motion.div>
        </div>
      )}
    </AnimatePresence>
  );
}
