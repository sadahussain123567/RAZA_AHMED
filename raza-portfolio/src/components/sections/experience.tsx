import { Section } from "@/components/ui/section";
import { SectionHeading } from "@/components/ui/section-heading";
import { Reveal } from "@/components/ui/reveal";
import { experience } from "@/data/experience";

export function Experience() {
  return (
    <Section id="experience">
      <SectionHeading label="My creative journey" title="Experience Across Creative Industries." />
      <ol className="relative ml-3 border-l border-line md:ml-0 md:border-l-0">
        <span aria-hidden className="absolute left-1/2 top-0 hidden h-full w-px -translate-x-1/2 bg-gradient-to-b from-purple via-cyan to-transparent md:block" />
        {experience.map((e, i) => (
          <li key={e.company} className="relative mb-10 pl-8 md:mb-14 md:grid md:grid-cols-2 md:gap-16 md:pl-0">
            <span aria-hidden className="absolute -left-[7px] top-6 h-3.5 w-3.5 rounded-full bg-gradient-to-br from-purple to-cyan md:left-1/2 md:-translate-x-1/2" />
            <Reveal className={i % 2 ? "md:col-start-2" : ""}>
              <article className="glass rounded-2xl p-6">
                <p className="text-sm font-medium text-cyan">{e.duration}</p>
                <h3 className="mt-1 font-display text-2xl font-bold">{e.company}</h3>
                <p className="mt-3 leading-relaxed text-muted">{e.description}</p>
              </article>
            </Reveal>
          </li>
        ))}
      </ol>
    </Section>
  );
}
