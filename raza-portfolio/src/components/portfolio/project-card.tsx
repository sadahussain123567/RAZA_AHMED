import Image from "next/image";
import Link from "next/link";
import type { Project } from "@/data/projects";
import { isSvg } from "@/lib/utils";

export function ProjectCard({ project: p, priority = false }: { project: Project; priority?: boolean }) {
  return (
    <Link href={`/projects/${p.slug}`} className="group block" aria-label={`${p.title}, ${p.category}. View case study`}>
      <div className="relative overflow-hidden rounded-2xl border border-line bg-card" style={{ aspectRatio: p.aspect }}>
        <Image
          src={p.cover}
          alt={p.coverAlt}
          fill
          unoptimized={isSvg(p.cover)}
          priority={priority}
          sizes={p.featured ? "(min-width: 1024px) 66vw, 100vw" : "(min-width: 1024px) 33vw, 100vw"}
          className="object-cover transition duration-700 group-hover:scale-105"
        />
        {p.demo && <span className="glass absolute left-3 top-3 rounded-full px-3 py-1 text-xs font-medium text-fg">{p.demo}</span>}
        <span aria-hidden className="absolute inset-x-0 bottom-0 h-1 origin-left scale-x-0 bg-gradient-to-r from-purple to-cyan transition duration-500 group-hover:scale-x-100" />
      </div>
      <div className="mt-3 flex items-baseline justify-between gap-3">
        <h3 className="font-display text-lg font-bold">{p.title}</h3>
        <p className="shrink-0 text-xs text-cyan">{p.category}</p>
      </div>
    </Link>
  );
}
