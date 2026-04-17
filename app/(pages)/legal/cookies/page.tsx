import React from "react";

export default function CookiesPage() {
  return (
    <div className="pt-40 pb-24 md:pt-48 md:pb-32 px-6 max-w-3xl mx-auto min-h-screen relative z-10">
       <span className="text-slate-400 font-black text-[10px] tracking-[0.4em] uppercase mb-4 block">
          Legal Directory
       </span>
       <h1 className="text-4xl md:text-5xl font-black text-slate-900 mb-6 tracking-tight">Cookie Policy</h1>
       <p className="text-slate-500 font-medium mb-16 border-b border-slate-200 pb-8">Last updated: {new Date().toLocaleDateString()}</p>
       
       <div className="space-y-8 text-slate-600 font-medium leading-relaxed bg-white/70 backdrop-blur-lg border border-slate-200 p-8 md:p-12 rounded-[2rem] shadow-lg">
         <section>
           <h3 className="text-xl font-black text-slate-900 mb-3">What Are Cookies?</h3>
           <p>Cookies are small text files that are placed on your computer or mobile device when you visit a website. They are widely used to make websites work more efficiently and provide a better user experience.</p>
         </section>
         <section>
           <h3 className="text-xl font-black text-slate-900 mb-3">How We Use Them</h3>
           <p>We use essential cookies to make our site work. With your consent, we may also use non-essential cookies to improve user experience and analyze website traffic.</p>
         </section>
       </div>
    </div>
  )
}
