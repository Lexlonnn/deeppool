"use client";

import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { useModal } from "../../context/ModalContext";
import { X, Send, CheckCircle2 } from "lucide-react";

export default function ContactModal() {
  const { isContactModalOpen, closeContactModal } = useModal();
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSuccess, setIsSuccess] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    // Simulate API call
    setTimeout(() => {
      setIsSubmitting(false);
      setIsSuccess(true);
      setTimeout(() => {
        setIsSuccess(false);
        closeContactModal();
      }, 3000);
    }, 1500);
  };

  return (
    <AnimatePresence>
      {isContactModalOpen && (
        <div className="fixed inset-0 z-[100] flex items-center justify-center p-4">
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={closeContactModal}
            className="absolute inset-0 bg-slate-900/60 backdrop-blur-sm"
          />

          <motion.div
            initial={{ opacity: 0, scale: 0.95, y: 20 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.95, y: 20 }}
            className="relative w-full max-w-lg bg-white/90 backdrop-blur-xl border border-white/50 rounded-3xl shadow-2xl p-8 overflow-y-auto max-h-[96dvh] hide-scrollbar overscroll-contain"
            style={{ scrollbarWidth: 'none', WebkitOverflowScrolling: 'touch' }}
            data-lenis-prevent={true}
            onWheel={(e) => e.stopPropagation()}
          >
            {/* Close button */}
            <button
              onClick={closeContactModal}
              className="absolute top-6 right-6 p-2 rounded-full hover:bg-slate-100 text-slate-500 transition-colors z-10"
            >
              <X className="w-5 h-5" />
            </button>

            {isSuccess ? (
              <div className="flex flex-col items-center justify-center py-12 text-center h-full">
                <motion.div
                  initial={{ scale: 0 }}
                  animate={{ scale: 1 }}
                  transition={{ type: "spring", stiffness: 200, damping: 20 }}
                >
                  <CheckCircle2 className="w-20 h-20 text-emerald-500 mb-6" />
                </motion.div>
                <h3 className="text-2xl font-black text-slate-900 mb-3">Message Sent</h3>
                <p className="text-slate-600 font-medium max-w-xs">
                  We've received your request and will be in touch shortly to start building together.
                </p>
              </div>
            ) : (
              <>
                <div className="mb-8 pr-8">
                  <h3 className="text-3xl font-black text-slate-900 mb-2">Let's Talk</h3>
                  <p className="text-slate-600 font-medium">Ready to scale? Drop us a line and our experts will reach out to you.</p>
                </div>

                <form onSubmit={handleSubmit} className="space-y-5">
                  <div className="grid grid-cols-2 gap-5">
                     <div className="col-span-2 sm:col-span-1">
                       <label className="block text-[11px] font-bold text-slate-500 uppercase tracking-widest mb-1.5 ml-2">First Name</label>
                       <input required type="text" className="w-full px-5 py-4 rounded-xl bg-slate-50 border border-slate-200 focus:outline-none focus:ring-2 focus:ring-blue-500/50 focus:bg-white transition-all text-sm font-medium" placeholder="E.g. Jane" />
                     </div>
                     <div className="col-span-2 sm:col-span-1">
                       <label className="block text-[11px] font-bold text-slate-500 uppercase tracking-widest mb-1.5 ml-2">Last Name</label>
                       <input type="text" className="w-full px-5 py-4 rounded-xl bg-slate-50 border border-slate-200 focus:outline-none focus:ring-2 focus:ring-blue-500/50 focus:bg-white transition-all text-sm font-medium" placeholder="E.g. Doe" />
                     </div>
                  </div>

                  <div>
                    <label className="block text-[11px] font-bold text-slate-500 uppercase tracking-widest mb-1.5 ml-2">Email Address</label>
                    <input required type="email" className="w-full px-5 py-4 rounded-xl bg-slate-50 border border-slate-200 focus:outline-none focus:ring-2 focus:ring-blue-500/50 focus:bg-white transition-all text-sm font-medium" placeholder="jane@company.com" />
                  </div>

                  <div>
                    <label className="block text-[11px] font-bold text-slate-500 uppercase tracking-widest mb-1.5 ml-2">How can we help?</label>
                    <textarea required rows={4} className="w-full px-5 py-4 rounded-xl bg-slate-50 border border-slate-200 focus:outline-none focus:ring-2 focus:ring-blue-500/50 focus:bg-white transition-all text-sm font-medium" placeholder="Tell us about your project goals..." />
                  </div>

                  <button
                    type="submit"
                    disabled={isSubmitting}
                    className="w-full py-4 mt-2 bg-blue-600 hover:bg-blue-700 text-white font-bold rounded-xl flex items-center justify-center gap-2 transition-all hover:shadow-[0_0_20px_rgba(37,99,235,0.3)] disabled:opacity-70 disabled:cursor-not-allowed group relative overflow-hidden"
                  >
                    <span className="relative z-10 flex items-center gap-2">
                       {isSubmitting ? "Sending..." : "Submit Request"}
                       {!isSubmitting && <Send className="w-4 h-4 group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform" />}
                    </span>
                  </button>
                </form>
              </>
            )}
          </motion.div>
        </div>
      )}
    </AnimatePresence>
  );
}
