import React from "react";

export default function CareersPage() {
  return (
    <div className="pt-40 pb-24 md:pt-48 md:pb-32 px-6 max-w-4xl mx-auto min-h-screen relative z-10">
       <span className="text-blue-600 font-black text-[10px] tracking-[0.4em] uppercase mb-4 block">
          Join Us
       </span>
       <h1 className="text-4xl md:text-6xl font-black text-slate-900 mb-8 tracking-tight">Careers at DeepPool</h1>
       <p className="text-xl text-slate-600 mb-12 font-medium">We're always looking for brilliant minds in engineering and growth marketing.</p>
       
       <div className="bg-white/80 backdrop-blur-xl border text-center border-slate-200 shadow-xl rounded-[2rem] p-16">
          <div className="w-16 h-16 bg-slate-100 rounded-full flex items-center justify-center mx-auto mb-6 text-2xl">
            🚀
          </div>
          <h2 className="text-2xl font-black text-slate-900 mb-4">Accepting Spontaneous Applications</h2>
          <p className="text-slate-500 font-medium">While we don't have any immediate openings, we are always open to meeting incredible talent. Send your portfolio to careers@deeppool.com</p>
       </div>
    </div>
  )
}
