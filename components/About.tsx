"use client";

import Reveal from "./Reveal";

export default function About() {
  return (
    <section id="about" className="mx-auto max-w-7xl px-5 py-10 md:py-20">
      <div className="grid md:grid-cols-2 gap-14 items-start">
        {/* Left: Photo */}
        <Reveal y={22} amount={0.35}>
          <div className="md:sticky md:top-24">
            <div className="relative overflow-hidden rounded-3xl border border-white/10 bg-white/4 p-3">
              <div className="pointer-events-none absolute inset-0 opacity-60 [background:radial-gradient(70%_60%_at_50%_0%,rgba(255,255,255,0.14),transparent_70%)]" />
              <div className="relative rounded-2xl overflow-hidden border border-white/10 bg-black">
                <div className="relative aspect-4/5">
                  <img
                    src="/images/michael.jpg"
                    alt="Michael Erdmann"
                    className="absolute inset-0 h-full w-full object-cover"
                    loading="lazy"
                  />
                  <div className="absolute inset-0 bg-linear-to-t from-black/35 via-transparent to-black/25" />
                </div>
              </div>
            </div>

            <div className="mt-5 text-[11px] tracking-[0.26em] text-white/45">
              MICHAEL ERDMANN — FOUNDER
            </div>
          </div>
        </Reveal>

        {/* Right: Text */}
        <div>
          <Reveal y={18} amount={0.35}>
            <h2 className="text-4xl md:text-5xl font-semibold text-white/90">
              ABOUT
            </h2>
          </Reveal>

          <Reveal y={18} delay={0.05} amount={0.35}>
            <div className="mt-8 text-white/70 leading-relaxed space-y-6">
              <p>
                I’m Michael Erdmann — founder of ERDMANN VISUALS. My focus is not just filming,
                but building atmosphere: controlled movement, refined pacing, and clean composition.
              </p>

              <p>
                Whether it’s a brand, a destination, or an event, the goal is always the same:
                make the story feel elevated — cinematic, minimal, and premium.
              </p>

              <p>
                My ambition is to create work that feels timeless.
                Not loud. Not random. Just intentional visuals that convince.
              </p>

              <div className="pt-6 border-t border-white/10">
                <div className="text-xs tracking-[0.30em] text-white/60">
                  FOCUS
                </div>

                <div className="mt-4 grid grid-cols-2 gap-3 text-[11px] tracking-[0.24em] text-white/60">
                  <div className="rounded-2xl border border-white/10 bg-black/20 px-4 py-3">
                    DRONE CINEMA
                  </div>
                  <div className="rounded-2xl border border-white/10 bg-black/20 px-4 py-3">
                    PREMIUM EDITING
                  </div>
                  <div className="rounded-2xl border border-white/10 bg-black/20 px-4 py-3">
                    COLOR & MOOD
                  </div>
                  <div className="rounded-2xl border border-white/10 bg-black/20 px-4 py-3">
                    BRAND STORY
                  </div>
                </div>
              </div>
            </div>
          </Reveal>
        </div>
      </div>

      <div className="mt-10 md:mt-20 h-px bg-white/10" />
    </section>
  );
}