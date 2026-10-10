import { Suspense } from "react";
import { Mail, MessageCircle, Phone } from "lucide-react";
import { Section } from "@/components/ui/section";
import { SectionHeading } from "@/components/ui/section-heading";
import { site, socials } from "@/data/site";
import { ContactForm } from "./contact-form";

const action = "inline-flex min-h-11 items-center gap-2 rounded-full border border-line px-5 text-sm font-medium transition hover:border-purple";

export function Contact() {
  return (
    <Section id="contact">
      <SectionHeading label="Let's create something" title="Have an idea? Let's bring it to life." />
      <div className="grid gap-12 lg:grid-cols-2 lg:gap-16">
        <div>
          <p className="max-w-xl text-lg leading-relaxed text-muted">
            Have a brand to build, a visual identity to develop, or a graphic design project in mind? Get in touch, and let&apos;s discuss your next creative project.
          </p>
          <div className="mt-8">
            <p className="font-display text-2xl font-bold">{site.name}</p>
            <p className="text-muted">{site.title}</p>
            <p className="text-muted">Hyderabad, Pakistan</p>
          </div>
          <dl className="mt-6 space-y-2 text-sm">
            <div className="flex gap-2"><dt className="w-36 text-muted">Email</dt><dd><a href={`mailto:${site.email}`} className="hover:text-cyan">{site.email}</a></dd></div>
            <div className="flex gap-2"><dt className="w-36 text-muted">Primary phone</dt><dd><a href="tel:+923273202560" className="hover:text-cyan">{site.phones.primary.display}</a></dd></div>
            <div className="flex gap-2"><dt className="w-36 text-muted">Alternative phone</dt><dd><a href="tel:+923103181829" className="hover:text-cyan">{site.phones.alternative.display}</a></dd></div>
          </dl>
          <div className="mt-8 flex flex-wrap gap-3">
            <a href={`mailto:${site.email}`} className={action}><Mail size={16} /> Send an Email</a>
            <a href={site.phones.primary.whatsapp} target="_blank" rel="noopener noreferrer" aria-label="Message Muhammad Raza on WhatsApp, primary number (opens in a new tab)" className={action}><MessageCircle size={16} /> WhatsApp (primary)</a>
            <a href={site.phones.alternative.whatsapp} target="_blank" rel="noopener noreferrer" aria-label="Message Muhammad Raza on WhatsApp, alternative number (opens in a new tab)" className={action}><Phone size={16} /> WhatsApp (alternative)</a>
          </div>
          <div className="mt-10">
            <h3 className="mb-3 text-sm font-medium text-muted">Find me online</h3>
            <ul className="flex flex-wrap gap-2">
              {socials.map((s) => (
                <li key={s.label}>
                  {s.url ? (
                    <a href={s.url} target="_blank" rel="noopener noreferrer" className="inline-flex min-h-10 items-center rounded-full border border-line px-4 text-sm transition hover:border-cyan">{s.label}</a>
                  ) : (
                    <span className="inline-flex min-h-10 items-center rounded-full border border-dashed border-line px-4 text-sm text-muted/70">{s.label}: link not added yet</span>
                  )}
                </li>
              ))}
            </ul>
          </div>
        </div>
        <Suspense fallback={<div className="h-96 rounded-2xl border border-line bg-bg-2" aria-hidden />}>
          <ContactForm />
        </Suspense>
      </div>
    </Section>
  );
}
