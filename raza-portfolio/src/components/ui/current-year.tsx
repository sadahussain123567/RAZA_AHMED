"use client";
import { useSyncExternalStore } from "react";

/** Renders the current year on the client only, so prerendering never reads the clock. */
export function CurrentYear() {
  const year = useSyncExternalStore(
    () => () => {},
    () => String(new Date().getFullYear()),
    () => "",
  );
  return <span suppressHydrationWarning>{year}</span>;
}
