import { Section } from "@/components/ui/section";
import { SectionHeading } from "@/components/ui/section-heading";
import { Reveal } from "@/components/ui/reveal";

const steps = [
  { title: "Discover", text: "Understand the client's objectives, target audience, requirements, and creative direction." },
  { title: "Explore", text: "Research references, develop ideas, and explore visual concepts." },
  { title: "Create", text: "Develop the design, refine details, and incorporate agreed feedback." },
  { title: "Deliver", text: "Prepare approved artwork and deliver the final files in suitable formats." },
];

export function Process() {
  return (
    <Section id="process">
      <SectionHeading label="How I work" title="From Concept to Creation." />
      <ol className="grid gap-8 md:grid-cols-4">
        {steps.map((s, i) => (
          <li key={s.title} className="relative">
            <Reveal delay={i * 0.08}>
              <span className="font-display text-5xl font-extrabold text-gradient">{String(i + 1).padStart(2, "0")}</span>
              <div className="mt-3 h-px w-full bg-gradient-to-r from-purple to-transparent" />
              <h3 className="mt-4 font-display text-xl font-bold">{s.title}</h3>
              <p className="mt-2 text-sm leading-relaxed text-muted">{s.text}</p>
            </Reveal>
          </li>
        ))}
      </ol>
    </Section>
  );
}
