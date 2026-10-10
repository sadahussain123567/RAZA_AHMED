import { Briefcase, Layers, MonitorSmartphone, MapPin } from "lucide-react";
import { Section } from "@/components/ui/section";
import { SectionHeading } from "@/components/ui/section-heading";
import { Reveal } from "@/components/ui/reveal";

const facts = [
  { icon: Briefcase, title: "3 Years", text: "of Experience" },
  { icon: Layers, title: "Branding", text: "& Identity" },
  { icon: MonitorSmartphone, title: "Digital", text: "Graphic Design" },
  { icon: MapPin, title: "Hyderabad", text: "Pakistan" },
];

export function About() {
  return (
    <Section id="about">
      <SectionHeading label="Behind the pixels" title="Creativity Meets Purpose." />
      <div className="grid gap-12 lg:grid-cols-[1.25fr_1fr] lg:gap-20">
        <Reveal className="max-w-2xl space-y-5 leading-relaxed text-muted">
          <p>Hello, I&apos;m Muhammad Raza, a graphic designer based in Hyderabad, Pakistan. With 3 years of experience across different creative and business environments, I have developed a versatile approach to graphic design and visual communication.</p>
          <p>My professional journey includes experience at a software house, a travel agency, a creative solutions company, and freelance projects. These experiences have helped me understand different creative requirements and develop a broader perspective on visual design.</p>
          <p>I specialize in logo design, branding, social media graphics, YouTube thumbnails, brochures, flyers, banners, and vector tracing.</p>
          <p>I enjoy combining creativity, composition, typography, and visual storytelling to develop designs that communicate ideas clearly and professionally.</p>
          <p>My goal is to continue growing as a designer while creating meaningful visual experiences for brands and businesses.</p>
        </Reveal>
        <Reveal delay={0.1}>
          <ul className="grid grid-cols-2 gap-4">
            {facts.map(({ icon: Icon, title, text }, i) => (
              <li key={title} className={`rounded-2xl border border-line bg-card p-5 ${i % 2 ? "translate-y-6" : ""}`}>
                <Icon size={22} className="mb-4 text-purple" />
                <p className="font-display text-xl font-bold">{title}</p>
                <p className="text-sm text-muted">{text}</p>
              </li>
            ))}
          </ul>
        </Reveal>
      </div>
    </Section>
  );
}
