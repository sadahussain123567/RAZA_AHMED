"use client";
import { categories, type Category } from "@/data/projects";
import { cn } from "@/lib/utils";

export type Filter = "All Projects" | Category;

export function ProjectFilters({ value, onChange }: { value: Filter; onChange: (f: Filter) => void }) {
  const all: Filter[] = ["All Projects", ...categories];
  return (
    <div role="group" aria-label="Filter projects by category" className="mb-10 flex flex-wrap gap-2">
      {all.map((f) => (
        <button
          key={f}
          type="button"
          aria-pressed={value === f}
          onClick={() => onChange(f)}
          className={cn(
            "min-h-10 rounded-full border px-4 text-sm transition",
            value === f
              ? "border-transparent bg-gradient-to-r from-purple to-cyan font-semibold text-white"
              : "border-line text-muted hover:border-purple hover:text-fg",
          )}
        >
          {f}
        </button>
      ))}
    </div>
  );
}
