import { PenTool, Shapes, Palette, Share2, MonitorPlay, BookOpen, FileText, RectangleHorizontal } from "lucide-react";
import { Section } from "@/components/ui/section";
import { SectionHeading } from "@/components/ui/section-heading";
import { Reveal } from "@/components/ui/reveal";

const skills = [
  { icon: PenTool, title: "Logo Design", text: "Creating distinctive and memorable logos that communicate a brand's personality and identity." },
  { icon: Shapes, title: "Vector Tracing", text: "Transforming suitable raster references into clean, scalable vector artwork." },
  { icon: Palette, title: "Branding & Visual Identity", text: "Building cohesive visual identities through logos, colors, typography, and supporting brand assets." },
  { icon: Share2, title: "Social Media Post Design", text: "Creating visually engaging social media graphics for marketing campaigns and digital communication." },
  { icon: MonitorPlay, title: "YouTube Thumbnail Design", text: "Designing attention-grabbing thumbnails with strong composition, clear visual hierarchy, and impactful imagery." },
  { icon: BookOpen, title: "Brochure Design", text: "Creating professional brochures that communicate business information, products, and services." },
  { icon: FileText, title: "Flyer Design", text: "Developing attractive promotional flyers for campaigns, events, products, and offers." },
  { icon: RectangleHorizontal, title: "Banner Design", text: "Designing effective banners for digital advertising, promotions, and brand communication." },
];

export function Skills() {
  return (
    <Section id="skills">
      <SectionHeading label="Creative capabilities" title="Visual Skills. Digital Imagination." />
      <ul className="grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
        {skills.map(({ icon: Icon, title, text }, i) => (
          <li key={title}>
            <Reveal delay={(i % 4) * 0.05} className="h-full">
              <article className="group h-full rounded-2xl border border-line bg-card p-6 transition duration-300 hover:-translate-y-1.5 hover:border-purple/60 hover:shadow-[var(--shadow)]">
                <span className="mb-5 grid h-12 w-12 place-items-center rounded-xl bg-gradient-to-br from-purple/20 to-cyan/20 text-purple transition group-hover:scale-110">
                  <Icon size={22} />
                </span>
                <h3 className="font-display text-lg font-bold">{title}</h3>
                <p className="mt-2 text-sm leading-relaxed text-muted">{text}</p>
              </article>
            </Reveal>
          </li>
        ))}
      </ul>
    </Section>
  );
}
