"use client";

import { useEffect, useMemo, useRef, useState } from "react";

type SectionId = "work" | "services" | "about" | "contact";

export default function Navbar() {
  const [solid, setSolid] = useState(false);
  const [active, setActive] = useState<SectionId | null>(null);
  const [open, setOpen] = useState(false);
  const rafRef = useRef<number | null>(null);

  const sections = useMemo(
    () => [
      { id: "work" as const, label: "WORK" },
      { id: "services" as const, label: "SERVICES" },
      { id: "about" as const, label: "ABOUT" },
      { id: "contact" as const, label: "CONTACT" },
    ],
    []
  );

  useEffect(() => {
    const onScroll = () => setSolid(window.scrollY > 20);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    const ids: SectionId[] = ["work", "services", "about", "contact"];
    const els = ids
      .map((id) => document.getElementById(id))
      .filter(Boolean) as HTMLElement[];

    if (!els.length) return;

    const computeActive = () => {
      const targetY = window.innerHeight * 0.35;
      let bestId: SectionId | null = null;
      let bestDist = Number.POSITIVE_INFINITY;

      for (const el of els) {
        const rect = el.getBoundingClientRect();
        if (rect.bottom < 0 || rect.top > window.innerHeight) continue;

        const dist = Math.abs(rect.top - targetY);
        if (dist < bestDist) {
          bestDist = dist;
          bestId = el.id as SectionId;
        }
      }

      setActive((prev) => (bestId && prev !== bestId ? bestId : prev));
    };

    const onScroll = () => {
      if (rafRef.current) return;
      rafRef.current = requestAnimationFrame(() => {
        rafRef.current = null;
        computeActive();
      });
    };

    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    window.addEventListener("resize", onScroll);

    return () => {
      window.removeEventListener("scroll", onScroll);
      window.removeEventListener("resize", onScroll);
      if (rafRef.current) cancelAnimationFrame(rafRef.current);
    };
  }, []);

  return (
    <header
      className={[
        "fixed top-0 left-0 right-0 z-50 transition-all duration-300",
        solid
          ? "bg-black/85 backdrop-blur-md border-b border-white/10"
          : "bg-transparent",
      ].join(" ")}
    >
      {/* ZERO THICKNESS NAVBAR */}
      <div className="mx-auto max-w-7xl px-6 py-0 flex items-center justify-between relative">

        {/* HUGE LOGO */}
        <a href="#" className="flex items-center" onClick={() => setOpen(false)}>
          <img
            src="/images/logo.png"
            alt="Erdmann Visuals"
            className="h-36 md:h-40 lg:h-48 w-auto -mt-6 md:-mt-8"
            draggable={false}
          />
        </a>

        {/* Desktop Navigation */}
        <nav className="hidden md:flex gap-16 text-base tracking-[0.25em] font-medium">
          {sections.map((s) => {
            const isActive = active === s.id;
            return (
              <a
                key={s.id}
                href={`#${s.id}`}
                className={[
                  "relative transition hover:text-white",
                  isActive ? "text-white" : "text-white/70",
                ].join(" ")}
              >
                {s.label}
                <span
                  className={[
                    "absolute left-0 -bottom-2 h-px w-full transition-opacity duration-300",
                    isActive ? "opacity-100" : "opacity-0",
                  ].join(" ")}
                  style={{ background: "rgba(255,255,255,0.6)" }}
                />
              </a>
            );
          })}
        </nav>

        {/* Right Side */}
        <div className="flex items-center gap-4">
          <a
            href="#contact"
            className="hidden md:inline-flex rounded-full border border-white/25 px-8 py-3 text-base tracking-[0.2em] font-medium text-white/90 hover:border-white/50 transition"
          >
            GET A QUOTE
          </a>

          {/* Mobile Menu Button */}
          <button
            className="md:hidden rounded-full border border-white/25 px-5 py-2 text-sm tracking-[0.22em] text-white/90 hover:border-white/50 transition"
            onClick={() => setOpen((v) => !v)}
          >
            {open ? "CLOSE" : "MENU"}
          </button>
        </div>
      </div>

      {/* Smooth Mobile Dropdown */}
      <div
        className={[
          "md:hidden overflow-hidden transition-all duration-500 ease-in-out",
          open
            ? "max-h-96 opacity-100 border-t border-white/10 bg-black/90 backdrop-blur-md"
            : "max-h-0 opacity-0",
        ].join(" ")}
      >
        <div className="mx-auto max-w-7xl px-6 py-6 flex flex-col gap-6 text-lg tracking-[0.2em]">
          {sections.map((s) => (
            <a
              key={s.id}
              href={`#${s.id}`}
              onClick={() => setOpen(false)}
              className="text-white/90 transition hover:text-white"
            >
              {s.label}
            </a>
          ))}

          <a
            href="#contact"
            onClick={() => setOpen(false)}
            className="mt-4 inline-flex justify-center rounded-full bg-white text-black px-8 py-4 text-base font-semibold tracking-[0.2em] transition hover:bg-white/90"
          >
            CONTACT
          </a>
        </div>
      </div>
    </header>
  );
}