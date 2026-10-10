"use client";
import { useEffect, useRef } from "react";
import { Canvas } from "@react-three/fiber";
import { Environment, Lightformer } from "@react-three/drei";
import { FloatingObjects } from "./floating-objects";

type Props = { light: boolean; mobile: boolean; animate: boolean };

export default function HeroScene({ light, mobile, animate }: Props) {
  const pointer = useRef({ x: 0, y: 0 });

  useEffect(() => {
    if (mobile || !animate) return;
    const onMove = (e: PointerEvent) => {
      pointer.current.x = (e.clientX / window.innerWidth) * 2 - 1;
      pointer.current.y = (e.clientY / window.innerHeight) * 2 - 1;
    };
    window.addEventListener("pointermove", onMove, { passive: true });
    return () => window.removeEventListener("pointermove", onMove);
  }, [mobile, animate]);

  const base = light ? 0.8 : 0.35;

  return (
    <Canvas
      className="pointer-events-none absolute inset-0"
      frameloop={animate ? "always" : "demand"}
      dpr={mobile ? 1 : [1, 1.75]}
      camera={{ position: [0, 0, 7], fov: 40 }}
      gl={{ alpha: true, antialias: !mobile, powerPreference: "high-performance" }}
    >
      <ambientLight intensity={base} />
      <directionalLight position={[4, 5, 5]} intensity={light ? 1.4 : 1.1} />
      <pointLight position={[-4, -2, 3]} intensity={light ? 8 : 18} color={light ? "#7c3aed" : "#8b5cf6"} />
      <pointLight position={[4, -3, 2]} intensity={light ? 6 : 14} color={light ? "#0891b2" : "#22d3ee"} />
      {/* Procedural environment: no HDR download, so no external requests. */}
      <Environment resolution={mobile ? 64 : 128}>
        <color attach="background" args={[light ? "#e9edf6" : "#0a0c14"]} />
        <Lightformer form="rect" intensity={light ? 3 : 4} position={[-5, 2, -1]} scale={[8, 4, 1]} color={light ? "#ffffff" : "#8b5cf6"} />
        <Lightformer form="rect" intensity={light ? 3 : 4} position={[5, 1, 2]} scale={[6, 3, 1]} color={light ? "#fef3c7" : "#22d3ee"} />
        <Lightformer form="ring" intensity={2.5} position={[0, 4, 3]} scale={5} color="#ffffff" />
      </Environment>
      <FloatingObjects light={light} mobile={mobile} animate={animate} pointer={pointer} />
    </Canvas>
  );
}
