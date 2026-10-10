export function SectionHeading({ label, title }: { label: string; title: string }) {
  return (
    <div className="mb-12 max-w-3xl">
      <p className="mb-3 text-sm font-medium tracking-widest text-cyan">{label}</p>
      <h2 className="font-display text-4xl font-bold leading-tight md:text-6xl">{title}</h2>
    </div>
  );
}
