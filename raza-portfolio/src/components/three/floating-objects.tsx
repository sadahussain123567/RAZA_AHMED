"use client";
import { useRef } from "react";
import { useFrame } from "@react-three/fiber";
import { Float } from "@react-three/drei";
import type { Group, Mesh } from "three";

type Props = { light: boolean; mobile: boolean; animate: boolean; pointer: React.RefObject<{ x: number; y: number }> };

export function FloatingObjects({ light, mobile, animate, pointer }: Props) {
  const root = useRef<Group>(null);
  const ringA = useRef<Mesh>(null);
  const ringB = useRef<Mesh>(null);
  const gem = useRef<Mesh>(null);

  const purple = light ? "#7c3aed" : "#8b5cf6";
  const cyan = light ? "#0891b2" : "#22d3ee";
  const silver = light ? "#8d96a8" : "#dde2eb";

  useFrame((_, delta) => {
    if (!animate) return;
    if (ringA.current) ringA.current.rotation.z += delta * 0.25;
    if (ringB.current) ringB.current.rotation.z -= delta * 0.18;
    if (gem.current) {
      gem.current.rotation.x += delta * 0.5;
      gem.current.rotation.y += delta * 0.7;
    }
    if (root.current && !mobile) {
      const p = pointer.current;
      root.current.rotation.y += (p.x * 0.35 - root.current.rotation.y) * 0.05;
      root.current.rotation.x += (-p.y * 0.2 - root.current.rotation.x) * 0.05;
    }
  });

  return (
    <group ref={root}>
      <Float speed={animate ? 1.4 : 0} floatIntensity={0.6} rotationIntensity={0.15}>
        <mesh>
          <sphereGeometry args={[1.15, mobile ? 40 : 96, mobile ? 40 : 96]} />
          <meshPhysicalMaterial color={silver} metalness={1} roughness={0.07} clearcoat={1} envMapIntensity={light ? 1.1 : 1.4} />
        </mesh>
      </Float>

      <mesh ref={ringA} rotation={[Math.PI / 2.4, 0.2, 0]}>
        <torusGeometry args={[1.95, 0.035, 16, mobile ? 80 : 160]} />
        <meshStandardMaterial color={silver} metalness={1} roughness={0.18} />
      </mesh>
      <mesh ref={ringB} rotation={[Math.PI / 2.1, -0.5, 0.3]}>
        <torusGeometry args={[2.45, 0.025, 16, mobile ? 80 : 160]} />
        <meshStandardMaterial color={cyan} emissive={cyan} emissiveIntensity={light ? 0.15 : 0.5} metalness={0.4} roughness={0.3} />
      </mesh>

      <Float speed={animate ? 1.8 : 0} floatIntensity={1} position={[-1.9, 1.5, 0.4]}>
        <mesh ref={gem}>
          <icosahedronGeometry args={[0.38, 0]} />
          <meshStandardMaterial color={purple} metalness={0.6} roughness={0.2} flatShading />
        </mesh>
      </Float>

      {!mobile && (
        <>
          <Float speed={animate ? 1.2 : 0} floatIntensity={1.2} position={[1.9, -1.4, 0.6]}>
            <mesh rotation={[0.4, 0.6, 0]}>
              <coneGeometry args={[0.4, 0.8, 4]} />
              <meshStandardMaterial color={cyan} metalness={0.5} roughness={0.25} flatShading />
            </mesh>
          </Float>
          <Float speed={animate ? 1.6 : 0} floatIntensity={0.8} position={[2.1, 1.3, -0.4]}>
            <mesh>
              <torusGeometry args={[0.22, 0.07, 16, 48]} />
              <meshStandardMaterial color={purple} metalness={0.8} roughness={0.2} />
            </mesh>
          </Float>
        </>
      )}
    </group>
  );
}
