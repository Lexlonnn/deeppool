// components/Footer.tsx
"use client";

import React from 'react';
import Link from 'next/link';
import { useModal } from '../context/ModalContext';

export default function Footer() {
  const { openContactModal } = useModal();

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
  };

  return (
    <footer className="w-full flex flex-col items-center overflow-hidden pt-24 pb-8">
      
      {/* Top Footer Links */}
      <div className="w-full max-w-7xl px-6 md:px-12 flex flex-col md:flex-row items-center justify-between gap-8 mb-16">
        <div className="flex gap-6">
          <Link href="#home" onClick={(e) => handleScrollTo(e, 'home')} className="text-xs font-black tracking-widest text-black hover:text-[#ff5a1f]">HOME</Link>
          <Link href="#services" onClick={(e) => handleScrollTo(e, 'services')} className="text-xs font-black tracking-widest text-black hover:text-[#ff5a1f]">SERVICES</Link>
          <Link href="#portfolio" onClick={(e) => handleScrollTo(e, 'portfolio')} className="text-xs font-black tracking-widest text-black hover:text-[#ff5a1f]">PORTFOLIO</Link>
        </div>
        <button 
          onClick={openContactModal}
          className="text-xs font-black tracking-widest text-black hover:text-[#ff5a1f] uppercase border-b-2 border-black hover:border-[#ff5a1f] pb-1"
        >
          CONTACT US
        </button>
      </div>

      {/* Massive Typography Footer */}
      <div className="w-full flex justify-center px-4 w-full">
         <h1 className="font-[family-name:var(--font-orbitron)] font-black text-black leading-none text-[15vw] tracking-tighter w-full text-center select-none">
            DEEPPOOL
         </h1>
      </div>

    </footer>
  );
}
