import { GraduationCap, School } from "lucide-react";
import { Section } from "@/components/ui/section";
import { SectionHeading } from "@/components/ui/section-heading";
import { Reveal } from "@/components/ui/reveal";

export function Education() {
  return (
    <Section id="education">
      <SectionHeading label="Education" title="My Learning Journey." />
      <div className="grid gap-5 md:grid-cols-2">
        <Reveal>
          <article className="h-full rounded-2xl border border-line bg-card p-6">
            <School className="mb-4 text-purple" />
            <h3 className="font-display text-xl font-bold">Intermediate</h3>
            <p className="mt-2 text-muted">Education level: Intermediate.</p>
          </article>
        </Reveal>
        <Reveal delay={0.08}>
          <article className="h-full rounded-2xl border border-line bg-card p-6">
            <GraduationCap className="mb-4 text-cyan" />
            <h3 className="font-display text-xl font-bold">GCUH — University Studies</h3>
            <p className="mt-2 text-muted">Continued university studies for 2 semesters at GCUH.</p>
          </article>
        </Reveal>
      </div>
    </Section>
  );
}
