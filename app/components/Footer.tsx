"use client";

import React from "react";
import Link from "next/link";
import { Droplet, ArrowRight } from "lucide-react";
import { useModal } from "../context/ModalContext";

const TwitterIcon = (props: any) => <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" {...props}><path d="M23 3a10.9 10.9 0 0 1-3.14 1.53 4.48 4.48 0 0 0-7.86 3v1A10.66 10.66 0 0 1 3 4s-4 9 5 13a11.64 11.64 0 0 1-7 2c9 5 20 0 20-11.5a4.5 4.5 0 0 0-.08-.83A7.72 7.72 0 0 0 23 3z"/></svg>;
const LinkedinIcon = (props: any) => <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" {...props}><path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6zM2 9h4v12H2z"/><circle cx="4" cy="4" r="2"/></svg>;
const InstagramIcon = (props: any) => <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" {...props}><rect x="2" y="2" width="20" height="20" rx="5" ry="5"/><path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"/><line x1="17.5" y1="6.5" x2="17.51" y2="6.5"/></svg>;
const GithubIcon = (props: any) => <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" {...props}><path d="M9 19c-5 1.5-5-2.5-7-3m14 6v-3.87a3.37 3.37 0 0 0-.94-2.61c3.14-.35 6.44-1.54 6.44-7A5.44 5.44 0 0 0 20 4.77 5.07 5.07 0 0 0 19.91 1S18.73.65 16 2.48a13.38 13.38 0 0 0-7 0C6.27.65 5.09 1 5.09 1A5.07 5.07 0 0 0 5 4.77a5.44 5.44 0 0 0-1.5 3.78c0 5.42 3.3 6.61 6.44 7A3.37 3.37 0 0 0 9 18.13V22"/></svg>;

export default function Footer() {
  const { openContactModal } = useModal();
  return (
    <footer className="bg-slate-50 pt-20 pb-10 border-t border-slate-200 relative z-10">
      <div className="max-w-[1400px] mx-auto px-6 md:px-12">
        {/* Main Grid Layout */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-12 lg:gap-8 mb-16">
          
          {/* Brand & Newsletter Section (Spans 4 cols on large) */}
          <div className="lg:col-span-4 flex flex-col items-start pr-0 lg:pr-8">
            <Link href="/" className="flex items-center gap-3 mb-6 group cursor-pointer">
              <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-blue-600 text-white shadow-lg shadow-blue-600/20 transition-transform group-hover:scale-105">
                <Droplet className="h-5 w-5 fill-current" />
              </div>
              <span className="text-2xl font-black tracking-tight text-slate-900">
                DeepPool
              </span>
            </Link>
            <p className="text-slate-500 font-medium mb-8 leading-relaxed max-w-sm">
              We architect market-dominating brands and engineer scalable platforms. The dual-engine driving modern business growth.
            </p>
            
            <div className="flex items-center gap-4 mt-auto">
              {[TwitterIcon, LinkedinIcon, InstagramIcon, GithubIcon].map((Icon, i) => (
                <a 
                  key={i} 
                  href="#" 
                  className="w-10 h-10 flex items-center justify-center rounded-full border border-slate-200 text-slate-400 hover:text-blue-600 hover:border-blue-600 hover:bg-blue-50 transition-all duration-300 shadow-sm hover:shadow-md"
                >
                  <Icon className="w-4 h-4" />
                </a>
              ))}
            </div>
          </div>

          {/* Links Section 1 */}
          <div className="lg:col-span-2 flex flex-col gap-5 pt-2">
            <h4 className="font-bold text-slate-900 tracking-wide uppercase text-xs mb-2">Services</h4>
            <Link href="#" className="text-slate-500 hover:text-blue-600 font-medium transition-colors text-sm">Product Development</Link>
            <Link href="#" className="text-slate-500 hover:text-blue-600 font-medium transition-colors text-sm">Growth Marketing</Link>
            <Link href="#" className="text-slate-500 hover:text-blue-600 font-medium transition-colors text-sm">Brand Architecture</Link>
            <Link href="#" className="text-slate-500 hover:text-blue-600 font-medium transition-colors text-sm">Cloud Infrastructure</Link>
            <Link href="#" className="text-slate-500 hover:text-blue-600 font-medium transition-colors text-sm">UX/UI Design</Link>
          </div>

          {/* Links Section 2 */}
          <div className="lg:col-span-2 flex flex-col gap-5 pt-2">
            <h4 className="font-bold text-slate-900 tracking-wide uppercase text-xs mb-2">Company</h4>
            <Link href="#home" className="text-slate-500 hover:text-blue-600 font-medium transition-colors text-sm">About DeepPool</Link>
            <Link href="#portfolio" className="text-slate-500 hover:text-blue-600 font-medium transition-colors text-sm">Our Portfolio</Link>
            <Link href="/careers" className="text-slate-500 hover:text-blue-600 font-medium transition-colors text-sm flex items-center gap-2">Careers <span className="bg-amber-100 text-amber-700 text-[9px] px-2 py-0.5 rounded-full font-bold">HIRING</span></Link>
            <Link href="#method" className="text-slate-500 hover:text-blue-600 font-medium transition-colors text-sm">The Process</Link>
            <button onClick={openContactModal} className="text-left text-slate-500 hover:text-blue-600 font-medium transition-colors text-sm">Contact Us</button>
          </div>

          {/* Subscription Section */}
          <div className="lg:col-span-4 flex flex-col pt-2 lg:pl-10 lg:border-l border-slate-200">
            <h4 className="font-bold text-slate-900 tracking-wide uppercase text-xs mb-4">Stay Ahead</h4>
            <p className="text-slate-500 font-medium text-sm mb-6 leading-relaxed">
              Join 15,000+ industry leaders getting our insights on product strategy and data-driven marketing.
            </p>
            <form className="relative w-full group">
              <input 
                type="email" 
                placeholder="Business Email" 
                className="w-full bg-white border border-slate-300 rounded-full py-4 pl-6 pr-14 text-sm font-medium text-slate-900 outline-none transition-all focus:border-blue-500 focus:ring-4 focus:ring-blue-500/10 shadow-sm hover:shadow-md"
              />
              <button 
                type="button"
                className="absolute right-2 top-1/2 -translate-y-1/2 w-10 h-10 rounded-full bg-slate-900 flex items-center justify-center text-white hover:bg-blue-600 transition-colors shadow-md"
              >
                <ArrowRight className="w-4 h-4" />
              </button>
            </form>
          </div>

        </div>

        {/* Separator */}
        <div className="w-full h-px bg-slate-200 mb-8" />

        {/* Bottom Section */}
        <div className="flex flex-col md:flex-row items-center justify-between gap-6">
          <p className="text-slate-400 font-medium text-sm text-center md:text-left">
            © {new Date().getFullYear()} DeepPool Agency. All rights reserved. Let's Build The Future.
          </p>
          <div className="flex items-center gap-6">
            <Link href="/legal/privacy" className="text-slate-400 hover:text-slate-600 transition-colors text-xs font-bold uppercase tracking-wider">Privacy</Link>
            <Link href="/legal/terms" className="text-slate-400 hover:text-slate-600 transition-colors text-xs font-bold uppercase tracking-wider">Terms</Link>
            <Link href="/legal/cookies" className="text-slate-400 hover:text-slate-600 transition-colors text-xs font-bold uppercase tracking-wider">Cookies</Link>
          </div>
        </div>

      </div>
    </footer>
  );
}
