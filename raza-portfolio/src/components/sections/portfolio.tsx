import { Section } from "@/components/ui/section";
import { SectionHeading } from "@/components/ui/section-heading";
import { ProjectGrid } from "@/components/portfolio/project-grid";

export function Portfolio() {
  return (
    <Section id="portfolio">
      <SectionHeading label="Selected creative work" title="Where Ideas Become Visual Experiences." />
      <p className="-mt-6 mb-10 max-w-2xl text-muted">
        Explore a collection of graphic design work, visual experiments, and creative concepts across different design disciplines.
      </p>
      <p className="mb-8 rounded-xl border border-line bg-card px-4 py-3 text-sm text-muted">
        The projects below are demonstration pieces, labeled Concept Project or Demo Artwork. They are not client work and will be replaced with real portfolio items.
      </p>
      <ProjectGrid />
    </Section>
  );
}
