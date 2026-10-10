import { Lightbulb, LayoutGrid, Focus, MessagesSquare } from "lucide-react";
import { Section } from "@/components/ui/section";
import { SectionHeading } from "@/components/ui/section-heading";
import { Reveal } from "@/components/ui/reveal";

const items = [
  { icon: Lightbulb, title: "Creative Approach", text: "Develop visual concepts that match project requirements and creative direction." },
  { icon: LayoutGrid, title: "Versatile Design Skills", text: "Work across multiple graphic design formats, including branding and digital graphics." },
  { icon: Focus, title: "Attention to Detail", text: "Focus on composition, typography, spacing, and visual consistency." },
  { icon: MessagesSquare, title: "Professional Communication", text: "Maintain a clear, organized approach to discussing project requirements and feedback." },
];

export function WhyWorkWithMe() {
  return (
    <Section id="why">
      <SectionHeading label="Why work with me" title="Creative Thinking. Thoughtful Execution." />
      <ul className="grid gap-5 sm:grid-cols-2">
        {items.map(({ icon: Icon, title, text }, i) => (
          <li key={title}>
            <Reveal delay={(i % 2) * 0.08} className="h-full">
              <article className="relative h-full overflow-hidden rounded-2xl border border-line bg-card p-7">
                <span aria-hidden className="absolute -right-8 -top-8 h-28 w-28 rounded-full bg-gradient-to-br from-purple/25 to-cyan/20 blur-xl" />
                <Icon className="relative mb-4 text-purple" size={26} />
                <h3 className="relative font-display text-xl font-bold">{title}</h3>
                <p className="relative mt-2 leading-relaxed text-muted">{text}</p>
              </article>
            </Reveal>
          </li>
        ))}
      </ul>
    </Section>
  );
}
