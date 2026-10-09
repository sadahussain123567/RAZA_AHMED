import { Navbar } from "@/components/layout/navbar";
import { Footer } from "@/components/layout/footer";
import { Hero } from "@/components/sections/hero";
import { About } from "@/components/sections/about";
import { Experience } from "@/components/sections/experience";
import { Skills } from "@/components/sections/skills";
import { Services } from "@/components/sections/services";
import { Process } from "@/components/sections/process";
import { Education } from "@/components/sections/education";
import { WhyWorkWithMe } from "@/components/sections/why-work-with-me";
import { Contact } from "@/components/sections/contact";
import { Portfolio } from "@/components/sections/portfolio";

export default function Home() {
  return (
    <>
      <Navbar />
      <main>
        <Hero />
        <About />
        <Experience />
        <Skills />
        <Portfolio />
        <Services />
        <Process />
        <Education />
        <WhyWorkWithMe />
        <Contact />
      </main>
      <Footer />
    </>
  );
}
