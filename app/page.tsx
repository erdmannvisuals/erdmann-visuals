"use client";

import { useEffect } from "react";
import Navbar from "@/components/Navbar";
import GrainOverlay from "@/components/GrainOverlay";
import Hero from "@/components/Hero";
import Work from "@/components/Work";
import Services from "@/components/Services";
import About from "@/components/About";
import Contact from "@/components/Contact";
import Footer from "@/components/Footer";

export default function Page() {
  return (
    <>
      <Navbar />
      <GrainOverlay />
      <main>
        <Hero />
        <Work />
        <Services />
        <About />
        <Contact />
        <Footer />
      </main>
    </>
  );
}