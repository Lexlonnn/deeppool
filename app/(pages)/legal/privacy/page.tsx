import React from "react";

export default function PrivacyPage() {
  return (
    <div className="pt-40 pb-24 md:pt-48 md:pb-32 px-6 max-w-3xl mx-auto min-h-screen relative z-10">
       <span className="text-slate-400 font-black text-[10px] tracking-[0.4em] uppercase mb-4 block">
          Legal Directory
       </span>
       <h1 className="text-4xl md:text-5xl font-black text-slate-900 mb-6 tracking-tight">Privacy Policy</h1>
       <p className="text-slate-500 font-medium mb-16 border-b border-slate-200 pb-8">Last updated: {new Date().toLocaleDateString()}</p>
       
       <div className="space-y-8 text-slate-600 font-medium leading-relaxed bg-white/70 backdrop-blur-lg border border-slate-200 p-8 md:p-12 rounded-[2rem] shadow-lg">
         <section>
           <h3 className="text-xl font-black text-slate-900 mb-3">1. Information Collection</h3>
           <p>We collect information you provide directly to us when you fill out a contact form or subscribe to our newsletter. This includes your name, email address, and any project details.</p>
         </section>
         <section>
           <h3 className="text-xl font-black text-slate-900 mb-3">2. Data Security</h3>
           <p>We use industry-standard measures to protect all data and ensure confidentiality. However, please be aware that no transmission over the Internet is perfectly secure.</p>
         </section>
         <section>
           <h3 className="text-xl font-black text-slate-900 mb-3">3. Communication</h3>
           <p>By providing your email, you consent to receive communication regarding your inquiry or updates about DeepPool services.</p>
         </section>
       </div>
    </div>
  )
}
