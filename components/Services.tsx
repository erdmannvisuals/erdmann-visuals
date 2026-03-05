"use client";

import Reveal from "./Reveal";

const cards = [
  { src: "/images/dji-drone.jpg", label: "DRONE CINEMATOGRAPHY" },
  { src: "/images/osmo-mobile.jpg", label: "FILMING & PHOTOGRAPHY" },
  { src: "/images/editing.jpg", label: "VIDEO & PHOTO EDITING" },
  { src: "/images/website.jpg", label: "SITE CREATOR" },
];

const services = [
  "DRONE CINEMATOGRAPHY",
  "FILMING & PHOTOGRAPHY",
  "VIDEO & PHOTO EDITING",
  "COLOR GRADING",
  "TRAVEL & EVENT COVERAGE",
  "SITE CREATOR",
];

export default function Services() {
  return (
    <section id="services" className="mx-auto max-w-7xl px-5 py-10 md:py-20">
      <div className="grid md:grid-cols-2 md:grid-rows-[auto_1fr] gap-14 md:gap-16 items-start">
        {/* ROW 1 / COL 1 */}
        <div>
          <Reveal y={16} amount={0.5}>
            <h2 className="text-4xl md:text-5xl font-semibold text-white/90">
              SERVICES
            </h2>
          </Reveal>

          <Reveal delay={0.05} amount={0.5}>
            <p className="mt-6 text-white/60 max-w-md leading-relaxed">
              Every project is approached with precision, intention and a cinematic foundation.
              Pricing is quoted privately depending on scope, complexity and timeline.
            </p>
          </Reveal>
        </div>

        {/* ROW 1 / COL 2 empty */}
        <div className="hidden md:block" />

        {/* ROW 2 / COL 1 images */}
        <Reveal y={18}>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
            {cards.map((it) => (
              <div
                key={it.label}
                className="relative overflow-hidden rounded-3xl border border-white/10 bg-white/4"
              >
                <div className="relative aspect-4/3">
                  <img
                    src={it.src}
                    alt={it.label}
                    className="absolute inset-0 h-full w-full object-cover"
                    loading="lazy"
                  />
                  <div className="absolute inset-0 bg-linear-to-t from-black/45 via-transparent to-black/25" />
                </div>

                <div className="absolute left-5 bottom-5">
                  <div className="rounded-full border border-white/15 bg-black/35 px-4 py-2 text-[11px] tracking-[0.26em] text-white/85 backdrop-blur-sm">
                    {it.label}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </Reveal>

        {/* ROW 2 / COL 2 list (aligned to images height) */}
        <Reveal y={18}>
          <div className="h-full">
            <div className="h-full flex flex-col justify-between">
              {services.map((service, idx) => {
                const isLast = idx === services.length - 1;
                return (
                  <div key={service} className="pb-3">
                    <div className="text-lg tracking-[0.24em] text-white/80">
                      {service}
                    </div>
                    <div className={["mt-4 h-px bg-white/10", isLast ? "mb-0" : ""].join(" ")} />
                  </div>
                );
              })}
            </div>
          </div>
        </Reveal>
      </div>
      {/* no divider so About follows immediately */}
    </section>
  );
}