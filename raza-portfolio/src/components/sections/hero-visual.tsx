"use client";
import { Component, type ReactNode, useSyncExternalStore } from "react";
import dynamic from "next/dynamic";
import { useTheme } from "next-themes";
import { HeroCards, HeroShapes } from "./hero-art";

const HeroScene = dynamic(() => import("@/components/three/hero-scene"), { ssr: false });

let webgl: boolean | undefined;
function detectWebGL() {
  if (webgl === undefined) {
    try {
      const c = document.createElement("canvas");
      webgl = !!(c.getContext("webgl2") || c.getContext("webgl"));
    } catch {
      webgl = false;
    }
  }
  return webgl;
}

function useMedia(query: string) {
  return useSyncExternalStore(
    (cb) => {
      const m = window.matchMedia(query);
      m.addEventListener("change", cb);
      return () => m.removeEventListener("change", cb);
    },
    () => window.matchMedia(query).matches,
    () => false,
  );
}

class Boundary extends Component<{ fallback: ReactNode; children: ReactNode }, { failed: boolean }> {
  state = { failed: false };
  static getDerivedStateFromError() {
    return { failed: true };
  }
  render() {
    return this.state.failed ? this.props.fallback : this.props.children;
  }
}

export function HeroVisual() {
  const { resolvedTheme } = useTheme();
  const hasWebGL = useSyncExternalStore(() => () => {}, detectWebGL, () => false);
  const mobile = useMedia("(max-width: 767px)");
  const reduced = useMedia("(prefers-reduced-motion: reduce)");
  const light = resolvedTheme === "light";
  const fallback = <HeroShapes />;

  return (
    <div aria-hidden className="relative mx-auto aspect-square w-full max-w-[34rem]" style={{ perspective: "1200px" }}>
      <div className="absolute inset-[8%] rounded-full bg-gradient-to-br from-purple/30 to-cyan/20 blur-3xl" />
      {hasWebGL ? (
        <Boundary fallback={fallback}>
          <HeroScene light={light} mobile={mobile} animate={!reduced} />
        </Boundary>
      ) : (
        fallback
      )}
      <HeroCards />
    </div>
  );
}
