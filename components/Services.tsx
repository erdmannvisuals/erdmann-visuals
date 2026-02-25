"use client";

import { motion } from "framer-motion";

export default function Services() {
  return (
    <section id="services" className="mx-auto max-w-7xl px-5 py-10 md:py-20">
      <div className="grid md:grid-cols-2 gap-14 md:gap-16 items-start">
        
        {/* LEFT COLUMN */}
        <div>
          <motion.h2
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="text-4xl md:text-5xl font-semibold text-white/90"
          >
            SERVICES
          </motion.h2>

          <p className="mt-6 text-white/60 max-w-md leading-relaxed">
            Every project is approached with precision, intention and a cinematic foundation.
            Pricing is quoted privately depending on scope, complexity and timeline.
          </p>

          {/* IMAGES UNDER TEXT */}
          <motion.div
            initial={{ opacity: 0, y: 26 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.85 }}
            className="mt-10 grid grid-cols-1 sm:grid-cols-2 gap-5"
          >
            {/* DJI Drone */}
            <div className="relative overflow-hidden rounded-3xl border border-white/10 bg-white/4">
              <div className="relative aspect-4/3">
                <img
                  src="/images/dji-drone.jpg"
                  alt="DJI Drone"
                  className="absolute inset-0 h-full w-full object-cover"
                  loading="lazy"
                />
                <div className="absolute inset-0 bg-linear-to-t from-black/40 via-transparent to-black/25" />
              </div>
              <div className="px-5 py-4 text-[11px] tracking-[0.24em] text-white/60">
                DJI DRONE
              </div>
            </div>

            {/* Osmo Mobile */}
            <div className="relative overflow-hidden rounded-3xl border border-white/10 bg-white/4">
              <div className="relative aspect-4/3">
                <img
                  src="/images/osmo-mobile.jpg"
                  alt="DJI Osmo Mobile"
                  className="absolute inset-0 h-full w-full object-cover"
                  loading="lazy"
                />
                <div className="absolute inset-0 bg-linear-to-t from-black/40 via-transparent to-black/25" />
              </div>
              <div className="px-5 py-4 text-[11px] tracking-[0.24em] text-white/60">
                OSMO MOBILE
              </div>
            </div>
          </motion.div>
        </div>

        {/* RIGHT COLUMN (SERVICE LIST) */}
        <div className="space-y-10">
          {[
            "DRONE CINEMATOGRAPHY",
            "FILMING & DIRECTION",
            "VIDEO EDITING",
            "COLOR GRADING",
            "TRAVEL & EVENT COVERAGE",
          ].map((service) => (
            <motion.div
              key={service}
              initial={{ opacity: 0, y: 26 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.75 }}
              className="border-b border-white/10 pb-6"
            >
              <div className="text-lg tracking-[0.24em] text-white/80">
                {service}
              </div>
            </motion.div>
          ))}
        </div>
      </div>

      <div className="mt-10 md:mt-20 h-px bg-white/10" />
    </section>
  );
}