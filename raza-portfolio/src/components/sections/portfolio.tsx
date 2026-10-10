import { Section } from "@/components/ui/section";
import { SectionHeading } from "@/components/ui/section-heading";
import { projects } from "@/data/projects";
import { ProjectGrid } from "@/components/portfolio/project-grid";

export function Portfolio() {
  return (
    <Section id="portfolio">
      <SectionHeading label="Selected creative work" title="Where Ideas Become Visual Experiences." />
      <p className="-mt-6 mb-10 max-w-2xl text-muted">
        Explore a collection of graphic design work, visual experiments, and creative concepts across different design disciplines.
      </p>
      {projects.some((p) => p.demo) && (
        <p className="mb-8 rounded-xl border border-line bg-card px-4 py-3 text-sm text-muted">
          Pieces marked Demo Artwork or Concept Project are samples, not client work, and will be replaced with real projects.
        </p>
      )}
      <ProjectGrid />
    </Section>
  );
}
