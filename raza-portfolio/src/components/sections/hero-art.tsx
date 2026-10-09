export function HeroShapes() {
  return (
    <>
      <div className="ring-a absolute inset-[6%] rounded-full border-[3px] border-metal/60" style={{ transformStyle: "preserve-3d" }} />
      <div className="ring-b absolute inset-[16%] rounded-full border-2 border-cyan/70" style={{ transformStyle: "preserve-3d" }} />
      <div className="float chrome absolute left-1/2 top-1/2 h-[46%] w-[46%] -translate-x-1/2 -translate-y-1/2 rounded-full" />
      <div className="float-slow absolute left-[8%] top-[14%] h-14 w-14 rotate-12 rounded-xl bg-gradient-to-br from-purple to-purple/40 shadow-xl" />
      <div
        className="float absolute bottom-[16%] right-[12%] h-16 w-16 bg-gradient-to-br from-cyan to-cyan/30"
        style={{ clipPath: "polygon(50% 0, 100% 100%, 0 100%)" }}
      />
    </>
  );
}

export function HeroCards() {
  return (
    <>
      <div className="glass float-slow absolute right-[2%] top-[10%] hidden w-36 rounded-2xl p-3 shadow-xl sm:block">
        <div className="mb-2 flex items-center gap-1.5">
          <span className="h-6 w-6 rounded-full bg-gradient-to-br from-purple to-cyan" />
          <span className="h-3 w-3 rotate-45 bg-fg" />
        </div>
        <p className="text-xs text-muted">Logo concept</p>
      </div>

      <div className="glass float absolute bottom-[8%] left-[2%] hidden w-40 rounded-2xl p-3 shadow-xl sm:block">
        <p className="font-display text-4xl font-bold leading-none">Aa</p>
        <p className="mt-2 text-xs text-muted">Typography study</p>
      </div>

      <div className="glass float-slow absolute left-[4%] top-[46%] hidden w-28 rounded-2xl p-3 text-center shadow-xl md:block">
        <div className="mx-auto mb-2 grid h-12 w-12 place-items-center rounded-full border border-dashed border-metal text-[10px] text-muted">
          Photo
        </div>
        <p className="text-[11px] text-muted">Portrait placeholder</p>
      </div>
    </>
  );
}
