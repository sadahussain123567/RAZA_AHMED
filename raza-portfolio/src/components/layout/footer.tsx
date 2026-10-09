import Link from "next/link";
import { ArrowUp } from "lucide-react";
import { navLinks, site, socials } from "@/data/site";
import { CurrentYear } from "@/components/ui/current-year";

export function Footer() {
  return (
    <footer className="border-t border-line bg-bg-2">
      <div className="mx-auto grid max-w-7xl gap-10 px-5 py-14 md:grid-cols-3 md:px-8">
        <div>
          <p className="font-display text-xl font-bold">MUHAMMAD RAZA</p>
          <p className="mt-3 max-w-xs text-sm text-muted">
            Graphic designer in Hyderabad, Pakistan, working on logos, branding, and digital graphics.
          </p>
        </div>
        <nav aria-label="Footer">
          <ul className="grid grid-cols-2 gap-2 text-sm">
            {navLinks.map((l) => (
              <li key={l.id}>
                <Link href={`/#${l.id}`} className="text-muted hover:text-fg">{l.label}</Link>
              </li>
            ))}
          </ul>
        </nav>
        <div className="text-sm">
          <a href={`mailto:${site.email}`} className="text-fg hover:text-cyan">{site.email}</a>
          <ul className="mt-4 flex flex-wrap gap-x-4 gap-y-2">
            {socials.map((s) => (
              <li key={s.label}>
                {s.url ? (
                  <a href={s.url} target="_blank" rel="noopener noreferrer" className="text-muted hover:text-fg">
                    {s.label}
                  </a>
                ) : (
                  <span className="text-muted/60" title="Profile link not added yet">{s.label}</span>
                )}
              </li>
            ))}
          </ul>
        </div>
      </div>
      <div className="mx-auto flex max-w-7xl items-center justify-between border-t border-line px-5 py-5 text-xs text-muted md:px-8">
        <p>© <CurrentYear /> Muhammad Raza. All rights reserved.</p>
        <Link href="/#home" aria-label="Back to top" className="glass grid h-10 w-10 place-items-center rounded-full text-fg">
          <ArrowUp size={16} />
        </Link>
      </div>
    </footer>
  );
}
