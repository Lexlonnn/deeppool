// components/Navbar.tsx
"use client";
import React, { useState } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { Menu, X } from 'lucide-react';
import { useModal } from '../context/ModalContext';

export default function Navbar() {
  const { openContactModal } = useModal();
  const [isOpen, setIsOpen] = useState(false);

  const navItems = [
    { name: 'HOME', id: 'home' },
    { name: 'SERVICES', id: 'services' },
    { name: 'PORTFOLIO', id: 'portfolio' },
    { name: 'TEAM', id: 'team' },
  ];

  const handleScrollTo = (e: React.MouseEvent<HTMLAnchorElement>, id: string) => {
    e.preventDefault();
    const element = document.getElementById(id);
    if (element) {
      const navHeight = 80;
      const elementPosition = element.getBoundingClientRect().top;
      const offsetPosition = elementPosition + window.pageYOffset - navHeight;

      window.scrollTo({
        top: offsetPosition,
        behavior: "smooth"
      });
    }
    setIsOpen(false);
  };

  return (
    <>
      <div className="fixed top-6 left-0 right-0 z-50 flex justify-center px-4 md:px-8 pointer-events-none">
      <header className="w-full max-w-6xl bg-white rounded-2xl shadow-sm border border-black/5 py-4 px-6 md:px-8 flex items-center justify-between font-sans pointer-events-auto">
        
        {/* LOGO */}
        <Link href="/" onClick={(e) => handleScrollTo(e, 'home')} className="flex items-center group">
          <div className="relative font-[family-name:var(--font-orbitron)] font-black text-xl tracking-widest text-black">
             DEEPPOOL
          </div>
        </Link>

        {/* DESKTOP LINKS */}
        <nav className="hidden md:flex items-center gap-8">
          {navItems.map((item) => (
            <Link
              key={item.name}
              href={`#${item.id}`}
              onClick={(e) => handleScrollTo(e, item.id)}
              className="text-xs font-semibold tracking-wide capitalize text-black/80 hover:text-black transition-colors"
            >
              {item.name}
            </Link>
          ))}
        </nav>

        {/* CTA & MOBILE MENU */}
        <div className="flex items-center gap-4">
          <button 
            onClick={openContactModal} 
            className="hidden sm:inline-block bg-[#ff5a1f] text-white px-6 py-2.5 text-xs font-bold tracking-wide rounded-lg hover:bg-black transition-colors"
          >
            Coming Soon
          </button>

          <button
            onClick={() => setIsOpen(!isOpen)}
            className="md:hidden p-2 text-black"
          >
            {isOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>
      </header>
    </div>

      {/* MOBILE MENU DROPDOWN */}
      <div 
        className={`fixed inset-0 z-40 bg-[#e5e5e5] pt-32 px-6 transition-transform duration-300 ease-in-out md:hidden flex flex-col ${
          isOpen ? 'translate-y-0' : '-translate-y-full'
        }`}
      >
        <div className="flex flex-col gap-6 h-full pb-10">
          {navItems.map((item) => (
            <Link
              key={item.name}
              href={`#${item.id}`}
              onClick={(e) => handleScrollTo(e, item.id)}
              className="text-3xl font-black tracking-widest text-black hover:text-[#ff5a1f]"
            >
              {item.name}
            </Link>
          ))}
          <button 
            onClick={() => {
              openContactModal();
              setIsOpen(false);
            }} 
            className="bg-[#ff5a1f] text-white w-full py-5 text-sm font-black tracking-widest uppercase mt-8 hover:bg-black transition-colors rounded-xl"
          >
            Coming Soon
          </button>
        </div>
      </div>
    </>
  );
}