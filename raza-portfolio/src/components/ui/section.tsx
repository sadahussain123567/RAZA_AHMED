import type { ReactNode } from "react";
import { cn } from "@/lib/utils";

export function Section({ id, children, className }: { id: string; children: ReactNode; className?: string }) {
  return (
    <section id={id} className={cn("mx-auto max-w-7xl px-5 py-24 md:px-8 md:py-32", className)}>
      {children}
    </section>
  );
}
