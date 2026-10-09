import Link from "next/link";
import { PenTool, Palette, Share2, MonitorPlay, BookOpen, FileText, RectangleHorizontal, Shapes } from "lucide-react";
import { Section } from "@/components/ui/section";
import { SectionHeading } from "@/components/ui/section-heading";
import { Reveal } from "@/components/ui/reveal";
import { services } from "@/data/services";

const icons = { logo: PenTool, brand: Palette, social: Share2, thumbnail: MonitorPlay, brochure: BookOpen, flyer: FileText, banner: RectangleHorizontal, vector: Shapes } as const;

export function Services() {
  return (
    <Section id="services">
      <SectionHeading label="What I offer" title="Creative Solutions for Modern Brands." />
      <ul className="grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
        {services.map((s, i) => {
          const Icon = icons[s.slug as keyof typeof icons];
          return (
            <li key={s.slug}>
              <Reveal delay={(i % 4) * 0.05} className="h-full">
                <article className="relative h-full rounded-2xl bg-gradient-to-br from-purple/50 via-line to-cyan/50 p-px">
                  <div className="flex h-full flex-col rounded-[15px] bg-bg-2 p-6">
                    <Icon size={24} className="mb-5 text-cyan" />
                    <h3 className="font-display text-lg font-bold">{s.title}</h3>
                    <p className="mt-2 flex-1 text-sm leading-relaxed text-muted">{s.description}</p>
                    <Link
                      href={`/?project=${encodeURIComponent(s.projectType)}#contact`}
                      scroll
                      className="mt-6 inline-flex min-h-11 items-center text-sm font-semibold text-purple hover:underline"
                    >
                      Discuss Your Project
                    </Link>
                  </div>
                </article>
              </Reveal>
            </li>
          );
        })}
      </ul>
    </Section>
  );
}
