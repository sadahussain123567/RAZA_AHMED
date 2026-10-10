"use client";
import { useState } from "react";
import { AnimatePresence, MotionConfig, motion } from "motion/react";
import { projects } from "@/data/projects";
import { ProjectCard } from "./project-card";
import { Tilt } from "@/components/ui/tilt";
import { ProjectFilters, type Filter } from "./project-filters";

export function ProjectGrid() {
  const [filter, setFilter] = useState<Filter>("All Projects");
  const shown = filter === "All Projects" ? projects : projects.filter((p) => p.category === filter);

  return (
    <MotionConfig reducedMotion="user">
      <ProjectFilters value={filter} onChange={setFilter} />
      <p className="sr-only" aria-live="polite">{shown.length} {shown.length === 1 ? "project" : "projects"} shown</p>
      {shown.length === 0 ? (
        <p className="rounded-2xl border border-dashed border-line p-10 text-center text-muted">
          No projects in {filter} yet. Add one in <code>src/data/projects.ts</code>.
        </p>
      ) : (
        <ul className="grid grid-flow-dense items-start gap-x-5 gap-y-10 sm:grid-cols-2 lg:grid-cols-3">
          <AnimatePresence mode="popLayout">
            {shown.map((p, i) => (
              <motion.li
                key={p.slug}
                layout
                initial={{ opacity: 0, scale: 0.96 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.96 }}
                transition={{ duration: 0.25 }}
                className={p.featured ? "sm:col-span-2" : ""}
              >
                <Tilt><ProjectCard project={p} priority={i < 2} /></Tilt>
              </motion.li>
            ))}
          </AnimatePresence>
        </ul>
      )}
    </MotionConfig>
  );
}
