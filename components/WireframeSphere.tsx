"use client";

import { useRef } from "react";
import { Canvas, useFrame } from "@react-three/fiber";
import * as THREE from "three";

function Mesh() {
  const ref = useRef<THREE.Mesh>(null);

  useFrame((_, delta) => {
    if (!ref.current) return;
    ref.current.rotation.x += delta * 0.18;
    ref.current.rotation.y += delta * 0.28;
  });

  return (
    <mesh ref={ref}>
      <icosahedronGeometry args={[1.4, 3]} />
      <meshBasicMaterial color="#0a0a0a" wireframe />
    </mesh>
  );
}

export default function WireframeSphere({ className }: { className?: string }) {
  return (
    <div className={className} style={{ background: "transparent" }}>
      <Canvas
        camera={{ position: [0, 0, 4], fov: 45 }}
        gl={{ alpha: true, antialias: true }}
        style={{ background: "transparent" }}
      >
        <Mesh />
      </Canvas>
    </div>
  );
}
