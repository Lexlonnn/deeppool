import React from "react";

export default function TermsPage() {
  return (
    <div className="pt-40 pb-24 md:pt-48 md:pb-32 px-6 max-w-3xl mx-auto min-h-screen relative z-10">
       <span className="text-slate-400 font-black text-[10px] tracking-[0.4em] uppercase mb-4 block">
          Legal Directory
       </span>
       <h1 className="text-4xl md:text-5xl font-black text-slate-900 mb-6 tracking-tight">Terms of Service</h1>
       <p className="text-slate-500 font-medium mb-16 border-b border-slate-200 pb-8">Last updated: {new Date().toLocaleDateString()}</p>
       
       <div className="space-y-8 text-slate-600 font-medium leading-relaxed bg-white/70 backdrop-blur-lg border border-slate-200 p-8 md:p-12 rounded-[2rem] shadow-lg">
         <section>
           <h3 className="text-xl font-black text-slate-900 mb-3">1. Acceptance of Terms</h3>
           <p>By accessing and using DeepPool's website and services, you agree to comply with and be bound by these Terms of Service.</p>
         </section>
         <section>
           <h3 className="text-xl font-black text-slate-900 mb-3">2. Intellectual Property</h3>
           <p>All content on this website, including text, graphics, logos, and digital assets, are the property of DeepPool Agency and protected by intellectual property laws.</p>
         </section>
         <section>
           <h3 className="text-xl font-black text-slate-900 mb-3">3. Limitation of Liability</h3>
           <p>DeepPool shall not be liable for any indirect, incidental, special, consequential, or punitive damages resulting from your use or inability to use our services.</p>
         </section>
       </div>
    </div>
  )
}
