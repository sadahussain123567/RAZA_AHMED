import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { notFound } from "next/navigation";
import { ArrowLeft, ArrowRight } from "lucide-react";
import { Navbar } from "@/components/layout/navbar";
import { Footer } from "@/components/layout/footer";
import { getNeighbors, getProject, projects } from "@/data/projects";
import { isSvg } from "@/lib/utils";

export function generateStaticParams() {
  return projects.map((p) => ({ slug: p.slug }));
}

export async function generateMetadata({ params }: { params: Promise<{ slug: string }> }): Promise<Metadata> {
  const { slug } = await params;
  const p = getProject(slug);
  return p ? { title: `${p.title} | Muhammad Raza`, description: p.overview } : {};
}

export default async function ProjectPage({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const p = getProject(slug);
  if (!p) notFound();
  const { prev, next } = getNeighbors(slug);

  return (
    <>
      <Navbar />
      <main className="mx-auto max-w-5xl px-5 pb-24 pt-28 md:px-8 md:pt-36">
        <Link href="/#portfolio" className="mb-8 inline-flex min-h-11 items-center gap-2 text-sm text-muted hover:text-fg">
          <ArrowLeft size={16} /> Back to portfolio
        </Link>
        <p className="text-sm font-medium text-cyan">{p.category}{p.demo ? ` · ${p.demo}` : ""}</p>
        <h1 className="mt-2 font-display text-4xl font-extrabold md:text-6xl">{p.title}</h1>
        <p className="mt-4 max-w-2xl text-lg text-muted">{p.overview}</p>
        {p.demo && (
          <p className="mt-4 rounded-xl border border-line bg-card px-4 py-3 text-sm text-muted">
            This is a {p.demo.toLowerCase()} created as a sample. Any brief and concept below are illustrative, not a real client engagement.
          </p>
        )}

        <div className="relative mx-auto mt-10 overflow-hidden rounded-2xl border border-line bg-card" style={{ aspectRatio: p.aspect, maxHeight: "80vh" }}>
          <Image src={p.cover} alt={p.coverAlt} fill unoptimized={isSvg(p.cover)} priority sizes="(min-width: 1024px) 64rem, 100vw" className="object-contain" />
        </div>

        {(p.brief || p.concept) && (
        <div className="mt-14 grid gap-10 md:grid-cols-2">
          {p.brief && <section aria-labelledby="brief">
            <h2 id="brief" className="font-display text-2xl font-bold">Creative brief</h2>
            <p className="mt-3 leading-relaxed text-muted">{p.brief}</p>
          </section>}
          {p.concept && <section aria-labelledby="concept">
            <h2 id="concept" className="font-display text-2xl font-bold">Design concept</h2>
            <p className="mt-3 leading-relaxed text-muted">{p.concept}</p>
          </section>}
        </div>
        )}

        {p.process && p.process.length > 0 && (
        <section aria-labelledby="process" className="mt-14">
          <h2 id="process" className="font-display text-2xl font-bold">Design process</h2>
          <ol className="mt-5 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
            {p.process.map((step, i) => (
              <li key={step} className="rounded-2xl border border-line bg-card p-5">
                <span className="font-display text-2xl font-bold text-gradient">{String(i + 1).padStart(2, "0")}</span>
                <p className="mt-2 text-sm text-muted">{step}</p>
              </li>
            ))}
          </ol>
        </section>
        )}

        {p.gallery.length > 0 && (
        <section aria-labelledby="gallery" className="mt-14">
          <h2 id="gallery" className="font-display text-2xl font-bold">More from this project</h2>
          <ul className="mt-5 grid gap-5 md:grid-cols-2">
            {p.gallery.map((g) => (
              <li key={g.src} className="relative overflow-hidden rounded-2xl border border-line" style={{ aspectRatio: p.aspect }}>
                <Image src={g.src} alt={g.alt} fill unoptimized={isSvg(g.src)} sizes="(min-width: 768px) 50vw, 100vw" className="object-contain" />
              </li>
            ))}
          </ul>
        </section>
        )}

        <nav aria-label="Project navigation" className="mt-16 grid gap-4 border-t border-line pt-8 sm:grid-cols-2">
          <Link href={`/projects/${prev.slug}`} className="group rounded-2xl border border-line p-5 hover:border-purple">
            <span className="flex items-center gap-2 text-xs text-muted"><ArrowLeft size={14} /> Previous project</span>
            <span className="mt-1 block font-display text-lg font-bold">{prev.title}</span>
          </Link>
          <Link href={`/projects/${next.slug}`} className="group rounded-2xl border border-line p-5 text-right hover:border-purple">
            <span className="flex items-center justify-end gap-2 text-xs text-muted">Next project <ArrowRight size={14} /></span>
            <span className="mt-1 block font-display text-lg font-bold">{next.title}</span>
          </Link>
        </nav>
      </main>
      <Footer />
    </>
  );
}
