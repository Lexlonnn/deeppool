"use client";

import React from "react";
import dynamic from 'next/dynamic';
import HeroAndServices from "./sections/HeroAndServices";

const Portfolio = dynamic(() => import('./sections/portfolio'));
const Process = dynamic(() => import('./sections/proof'));
const Team = dynamic(() => import('./sections/team'));
const CTA = dynamic(() => import('./sections/cta'));

export default function Home() {
  return (
    <div className="relative z-10">
      <HeroAndServices />
      <Process />
      <Portfolio />
      <Team />
      <CTA />
    </div>
  );
}
