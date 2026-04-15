// components/Navbar.tsx
"use client";
import React, { useState, useEffect } from 'react';
import Link from 'next/link';
import { Droplets, Menu, X } from 'lucide-react';

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [isVisible, setIsVisible] = useState(true);
  const [lastScrollY, setLastScrollY] = useState(0);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const currentScrollY = window.scrollY;

      // 1. Logic for glassy background threshold
      setScrolled(currentScrollY > 20);

      // 2. Logic for Reveal on Scroll Up
      if (currentScrollY > lastScrollY && currentScrollY > 100) {
        // Scrolling Down - Hide Navbar
        setIsVisible(false);
        setIsOpen(false); // Close mobile menu if user scrolls away
      } else {
        // Scrolling Up - Show Navbar
        setIsVisible(true);
      }
      
      setLastScrollY(currentScrollY);
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, [lastScrollY]);

  return (
    <nav 
      className={`fixed top-0 w-full z-[100] transition-all duration-500 ease-in-out ${
        isVisible ? "translate-y-0" : "-translate-y-full"
      } ${
        scrolled 
          ? "py-3 bg-white/40 shadow-[0_8px_32px_0_rgba(31,38,135,0.07)] backdrop-blur-md border-b border-white/20" 
          : "py-6 bg-transparent"
      }`}
    >
      <div className="max-w-[1400px] mx-auto px-8 flex items-center justify-between">
        
        {/* LOGO */}
        <Link href="/" className="flex items-center gap-2 group transition-transform hover:scale-105 active:scale-95">
          <div className="bg-blue-600 p-1.5 rounded-xl shadow-lg group-hover:rotate-[15deg] transition-transform duration-300">
            <Droplets className="text-white w-6 h-6" />
          </div>
          <span className="text-2xl font-black tracking-tight text-slate-900">
            DeepPool
          </span>
        </Link>

        {/* DESKTOP NAV */}
        <div className="hidden md:flex items-center gap-10">
          {['SERVICES', 'ABOUT', 'PORTFOLIO', 'BLOG', 'CONTACT'].map((item) => (
            <Link 
              key={item} 
              href={`#${item.toLowerCase()}`} 
              className="relative text-[11px] font-black tracking-[0.2em] text-slate-600 hover:text-blue-600 transition-colors group"
            >
              {item}
              <span className="absolute -bottom-1 left-1/2 w-0 h-0.5 bg-blue-600 transition-all duration-300 group-hover:w-full group-hover:left-0" />
            </Link>
          ))}
        </div>

        {/* CTA BUTTON */}
        <div className="flex items-center gap-4">
          <button className="hidden sm:block px-6 py-2.5 bg-blue-600 text-white text-xs font-black tracking-widest rounded-full hover:bg-blue-700 hover:shadow-[0_10px_20px_rgba(37,99,235,0.3)] transition-all duration-300 active:scale-95">
            FREE CONSULT
          </button>

          {/* Mobile Toggle */}
          <button 
            onClick={() => setIsOpen(!isOpen)} 
            className="md:hidden p-2 rounded-lg bg-slate-100 text-slate-800"
          >
            {isOpen ? <X size={20} /> : <Menu size={20} />}
          </button>
        </div>
      </div>

      {/* MOBILE MENU (Glassy) */}
      <div className={`md:hidden absolute top-full left-0 w-full bg-white/90 backdrop-blur-xl border-b border-slate-200 transition-all duration-300 overflow-hidden ${isOpen ? 'max-h-96 opacity-100' : 'max-h-0 opacity-0'}`}>
        <div className="flex flex-col p-8 gap-6">
          {['SERVICES', 'ABOUT', 'PORTFOLIO', 'BLOG', 'CONTACT'].map((item) => (
            <Link key={item} href={`#${item.toLowerCase()}`} onClick={() => setIsOpen(false)} className="text-sm font-bold tracking-widest text-slate-800">
              {item}
            </Link>
          ))}
        </div>
      </div>
    </nav>
  );
}