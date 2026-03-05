"use client";

import Reveal from "./Reveal";

function WorkCard({
  kicker,
  title,
  desc,
  src,
  tags,
  reverse = false,
}: {
  kicker: string;
  title: string;
  desc: string;
  src: string;
  tags: string[];
  reverse?: boolean;
}) {
  return (
    <Reveal y={18}>
      <div className="rounded-3xl border border-white/10 bg-white/4 overflow-hidden">
        <div
          className={`grid md:grid-cols-2 ${
            reverse ? "md:[&>*:first-child]:order-2" : ""
          }`}
        >
          <div className="p-8 md:p-12 flex flex-col justify-center">
            <div className="text-xs tracking-[0.36em] text-white/60">{kicker}</div>

            <h3 className="mt-4 text-3xl md:text-4xl font-semibold leading-tight text-white/90">
              <span className="font-serif font-medium">{title}</span>
            </h3>

            <p className="mt-6 text-white/70 max-w-md leading-relaxed">{desc}</p>

            <div className="mt-8 flex flex-wrap gap-2 text-[11px] tracking-[0.24em] text-white/60">
              {tags.map((t) => (
                <span key={t} className="rounded-full border border-white/12 px-3 py-1">
                  {t}
                </span>
              ))}
            </div>
          </div>

          <div className="p-6 md:p-10">
            <div className="relative rounded-2xl overflow-hidden border border-white/10 bg-black/90">
              <div className="pointer-events-none absolute inset-0 opacity-70 [background:radial-gradient(70%_60%_at_50%_0%,rgba(255,255,255,0.15),transparent_70%)]" />
              <div className="relative aspect-video">
                <video
                  className="absolute inset-0 h-full w-full object-cover"
                  autoPlay
                  muted
                  loop
                  playsInline
                  preload="metadata"
                >
                  <source src={src} type="video/mp4" />
                </video>
                <div className="absolute inset-0 bg-linear-to-t from-black/40 via-transparent to-black/30" />
              </div>
            </div>
          </div>
        </div>
      </div>
    </Reveal>
  );
}

export default function Work() {
  return (
    <section id="work" className="mx-auto max-w-7xl px-5 py-10 md:py-20">
      <Reveal y={16} amount={0.5}>
        <div className="flex items-end justify-between gap-8">
          <h2 className="text-4xl md:text-5xl font-semibold text-white/90">WORK</h2>

          <p className="text-white/60 max-w-xl leading-relaxed">
            Three curated pieces — match transitions, coastal cinema, and high-altitude scale.
          </p>
        </div>
      </Reveal>

      <div className="mt-12 md:mt-16 grid gap-12 md:gap-16">
        <WorkCard
          kicker="CAMERA"
          title="Angle-matched transitions."
          desc="Shot on camera while walking — cutting between identical angles across different cities to create seamless match transitions."
          src="/video/work-01.mp4"
          tags={["MATCH CUTS", "PACE", "URBAN"]}
        />

        <WorkCard
          kicker="DRONE — SOUTH ITALY"
          title="Coastal panoramic cinema."
          desc="Slow cinematic reveals above the sea in Southern Italy — wide coastlines, gentle movement, calm atmosphere."
          src="/video/work-02.mp4"
          tags={["PANORAMAS", "SEA LIGHT", "SLOW MOVEMENT"]}
          reverse
        />

        <WorkCard
          kicker="DRONE — NORTH ITALY"
          title="High-altitude scale."
          desc="Very high altitude drone footage in Northern Italy — ultra-slow movement and huge landscapes designed to feel expansive."
          src="/video/work-03.mp4"
          tags={["ALTITUDE", "SCALE", "MINIMAL MOTION"]}
        />
      </div>

      <div className="mt-10 md:mt-20 h-px bg-white/10" />
    </section>
  );
}