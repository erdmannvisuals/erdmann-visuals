"use client";

import { motion } from "framer-motion";

export default function Hero() {
  return (
    <section className="relative pt-38 pb-20">
      <div className="mx-auto max-w-7xl px-5">
        <motion.h1
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          className="text-5xl sm:text-6xl md:text-7xl leading-[0.98] font-semibold text-white/90"
        >
          <span className="font-serif font-medium">CINEMATIC</span>{" "}
          VISUAL STORYTELLING
          <span className="block text-white/65">Designed for visual impact.</span>
        </motion.h1>

        <motion.p
          initial={{ opacity: 0, y: 14 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.75, ease: "easeOut", delay: 0.1 }}
          className="mt-6 text-white/60 max-w-2xl leading-relaxed"
        >
          Drone panoramas and luxury-grade edits for brands, destinations, and events.
          Minimal design, intentional pacing, and premium presentation.
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 14 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.75, ease: "easeOut", delay: 0.15 }}
          className="mt-8 flex flex-wrap gap-3"
        >
          <a
            href="#work"
            className="relative overflow-hidden rounded-full bg-white text-black px-6 py-3 text-xs tracking-[0.22em] font-semibold transition group"
          >
            <span className="relative z-10">VIEW WORK</span>
            <span className="absolute inset-0 bg-black/5 opacity-0 group-hover:opacity-100 transition duration-300" />
          </a>

          <a
            href="#contact"
            className="relative overflow-hidden rounded-full border border-white/20 px-6 py-3 text-xs tracking-[0.22em] font-semibold text-white/85 transition group"
          >
            <span className="relative z-10">CONTACT</span>
            <span className="absolute inset-0 bg-white/5 opacity-0 group-hover:opacity-100 transition duration-300" />
          </a>
        </motion.div>

        {/* HERO VIDEO */}
        <motion.div
          initial={{ opacity: 0, y: 18 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.9, ease: "easeOut", delay: 0.22 }}
          className="mt-12 sm:mt-16"
        >
          <div className="relative rounded-[28px] border border-white/12 bg-white/5 p-3 overflow-hidden">
            <div className="pointer-events-none absolute inset-0 opacity-70 [background:radial-gradient(70%_60%_at_50%_10%,rgba(255,255,255,0.18),transparent_60%)]" />

            <div className="rounded-[22px] overflow-hidden border border-white/10 bg-black">
              <div className="relative aspect-video">
                <video
                  className="absolute inset-0 h-full w-full object-cover"
                  autoPlay
                  muted
                  loop
                  playsInline
                  preload="metadata"
                >
                  <source src="/video/hero.mp4" type="video/mp4" />
                </video>

                <div className="absolute inset-0 bg-linear-to-t from-black/35 via-transparent to-black/25" />
              </div>
            </div>

            {/* tags */}
            <div className="mt-4 grid grid-cols-2 md:grid-cols-4 gap-3 text-[11px] tracking-[0.26em] text-white/60">
              <div className="rounded-2xl border border-white/10 bg-black/30 px-4 py-3">
                DRONE
              </div>
              <div className="rounded-2xl border border-white/10 bg-black/30 px-4 py-3">
                TRAVEL
              </div>
              <div className="rounded-2xl border border-white/10 bg-black/30 px-4 py-3">
                EVENTS
              </div>
              <div className="rounded-2xl border border-white/10 bg-black/30 px-4 py-3">
                BRAND
              </div>
            </div>
          </div>
        </motion.div>

        <div className="mt-16 h-px bg-white/10" />
      </div>
    </section>
  );
}