export default function Footer() {
  const year = new Date().getFullYear();
  return (
    <footer className="border-t border-white/10">
      <div className="mx-auto max-w-7xl px-5 py-10 flex flex-col md:flex-row gap-4 items-center justify-between text-[11px] tracking-[0.22em] text-white/45">
        <div>© {year} ERDMANN VISUALS</div>
        <div className="text-white/40">CINEMATIC VISUAL PRODUCTION</div>
      </div>
    </footer>
  );
}