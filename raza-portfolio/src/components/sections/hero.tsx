import { ButtonLink } from "@/components/ui/button";
import { ChevronDown } from "lucide-react";
import { HeroVisual } from "./hero-visual";

export function Hero() {
  return (
    <section id="home" className="relative mx-auto grid min-h-svh max-w-7xl items-center gap-12 px-5 pb-20 pt-32 md:px-8 lg:grid-cols-2">
      <div>
        <p className="mb-5 text-sm font-medium text-cyan">Independent graphic designer in Pakistan</p>
        <h1 className="font-display text-5xl font-extrabold leading-[1.02] sm:text-6xl xl:text-7xl">
          Designing the <span className="text-gradient">future</span>, one pixel at a time.
        </h1>
        <p className="mt-6 max-w-xl text-lg leading-relaxed text-muted">
          Hi, I&apos;m Muhammad Raza, a graphic designer with 3 years of experience creating impactful visual identities,
          compelling digital graphics, and creative brand experiences. I transform ideas into visuals that communicate,
          inspire, and stand out.
        </p>
        <div className="mt-8 flex flex-wrap gap-3">
          <ButtonLink href="#portfolio">Explore My Work</ButtonLink>
          <ButtonLink href="#contact" variant="ghost">Let&apos;s Collaborate</ButtonLink>
        </div>
        <dl className="mt-10 flex flex-wrap gap-x-10 gap-y-3 text-sm">
          <div><dt className="sr-only">Experience</dt><dd className="text-muted">3 years of creative experience</dd></div>
          <div><dt className="sr-only">Location</dt><dd className="text-muted">Based in Hyderabad, Pakistan</dd></div>
        </dl>
      </div>
      <HeroVisual />
      <a href="#about" aria-label="Scroll to About" className="absolute bottom-6 left-1/2 hidden -translate-x-1/2 lg:block">
        <span className="relative block h-10 w-px overflow-hidden bg-line">
          <span className="scroll-cue absolute inset-x-0 top-0 h-1/2 bg-cyan" />
        </span>
        <ChevronDown size={14} className="mx-auto mt-1 text-muted" />
      </a>
    </section>
  );
}
