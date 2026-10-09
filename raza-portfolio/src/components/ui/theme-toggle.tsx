"use client";
import { useSyncExternalStore } from "react";
import { useTheme } from "next-themes";
import { Moon, Sun, Monitor } from "lucide-react";
import { AnimatePresence, motion } from "motion/react";

const order = ["light", "dark", "system"] as const;
const icons = { light: Sun, dark: Moon, system: Monitor };

export function ThemeToggle({ withLabel = false }: { withLabel?: boolean }) {
  const { theme = "system", setTheme } = useTheme();
  const mounted = useSyncExternalStore(
    () => () => {},
    () => true,
    () => false,
  );

  const current = (mounted ? theme : "system") as (typeof order)[number];
  const next = order[(order.indexOf(current) + 1) % order.length];
  const Icon = icons[current];

  return (
    <button
      type="button"
      onClick={() => setTheme(next)}
      aria-label={`Theme: ${current}. Switch to ${next}`}
      className="glass inline-flex h-10 items-center gap-2 rounded-full px-3 text-fg transition hover:border-purple"
    >
      <span className="relative h-5 w-5">
        <AnimatePresence mode="wait" initial={false}>
          <motion.span
            key={current}
            initial={{ rotate: -60, opacity: 0 }}
            animate={{ rotate: 0, opacity: 1 }}
            exit={{ rotate: 60, opacity: 0 }}
            transition={{ duration: 0.18 }}
            className="absolute inset-0 grid place-items-center"
          >
            <Icon size={18} />
          </motion.span>
        </AnimatePresence>
      </span>
      {withLabel && <span className="text-sm capitalize">{current}</span>}
    </button>
  );
}
