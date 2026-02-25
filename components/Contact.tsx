"use client";

import { motion } from "framer-motion";

export default function Contact() {
  return (
    <section id="contact" className="mx-auto max-w-7xl px-5 py-16">
      <motion.div
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.9 }}
        className="rounded-3xl border border-white/10 bg-white/5 p-12 md:p-20 text-center"
      >
        <h2 className="text-4xl md:text-5xl font-semibold text-white/90">
          LET’S CREATE SOMETHING
          <span className="block font-serif font-medium text-white/90">
            exceptional.
          </span>
        </h2>

        <p className="mt-6 text-white/60 max-w-2xl mx-auto leading-relaxed">
          Every collaboration begins with a conversation. Share your vision, timeline and
          expectations — and we’ll craft something elevated.
        </p>

        <div className="mt-12 flex flex-col md:flex-row justify-center gap-4">
          {/* EMAIL */}
          <a
            href="mailto:info@erdmannvisuals.com?subject=Video%20Project%20Inquiry&body=Hello%20Michael,%0D%0A%0D%0AI%20would%20like%20to%20discuss%20a%20project.%20Here%20are%20some%20details:%0D%0A-%20Type%20of%20project:%0D%0A-%20Timeline:%0D%0A-%20Budget%20range:%0D%0A%0D%0ALooking%20forward%20to%20hearing%20from%20you.%0D%0A%0D%0ARegards,"
            className="rounded-full bg-white text-black px-10 py-4 text-sm tracking-[0.28em] font-semibold transition hover:scale-[1.02] hover:opacity-90"
          >
            EMAIL
          </a>

          {/* WHATSAPP */}
          <a
            href="https://wa.me/32470477419?text=Hello%20Michael,%20I%20am%20interested%20in%20your%20video%20services.%20I%20would%20like%20to%20discuss%20a%20project."
            target="_blank"
            rel="noreferrer"
            className="rounded-full border border-white/20 px-10 py-4 text-sm tracking-[0.28em] font-semibold text-white/85 transition hover:border-white/50 hover:scale-[1.02]"
          >
            WHATSAPP
          </a>
        </div>

        <div className="mt-10 text-[11px] tracking-[0.22em] text-white/45">
          PRICING IS QUOTED PRIVATELY BASED ON SCOPE, COMPLEXITY AND TIMELINE.
        </div>
      </motion.div>
    </section>
  );
}