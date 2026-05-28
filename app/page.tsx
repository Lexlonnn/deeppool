"use client";

import React from "react";
import Hero from "./sections/hero";
import dynamic from 'next/dynamic';

const Services = dynamic(() => import('./sections/services'));
const Portfolio = dynamic(() => import('./sections/portfolio'));
const Process = dynamic(() => import('./sections/proof'));
const Team = dynamic(() => import('./sections/team'));
const CTA = dynamic(() => import('./sections/cta'));

export default function Home() {
  return (
    <div className="relative z-10">
      <Hero />
      <Services />
      <Portfolio />
      <Process />
      <Team />
      <CTA />
    </div>
  );
}
