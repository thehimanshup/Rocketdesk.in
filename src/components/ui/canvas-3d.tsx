"use client";

import { useRef } from "react";
import { Canvas, useFrame } from "@react-three/fiber";
import { Sphere, MeshDistortMaterial, Float, Environment } from "@react-three/drei";
import * as THREE from "three";
import { useTheme } from "next-themes";

function AnimatedSphere() {
  const meshRef = useRef<THREE.Mesh>(null);
  const { theme } = useTheme();

  // Color logic based on dark/light mode
  const color = theme === "dark" ? "#6366f1" : "#f43f5e"; // Indigo/Rose mix
  
  useFrame((state) => {
    if (meshRef.current) {
      meshRef.current.rotation.x = state.clock.getElapsedTime() * 0.2;
      meshRef.current.rotation.y = state.clock.getElapsedTime() * 0.3;
    }
  });

  return (
    <Float speed={2} rotationIntensity={1} floatIntensity={2}>
      <mesh ref={meshRef} scale={1.5}>
        <sphereGeometry args={[1, 64, 64]} />
        <MeshDistortMaterial
          color={color}
          attach="material"
          distort={0.4}
          speed={2}
          roughness={0.2}
          metalness={0.8}
        />
      </mesh>
    </Float>
  );
}

export function Hero3DCanvas() {
  return (
    <div className="absolute inset-0 z-0 opacity-40 dark:opacity-50 pointer-events-none">
      <Canvas camera={{ position: [0, 0, 5], fov: 45 }}>
        <ambientLight intensity={1} />
        <directionalLight position={[10, 10, 5]} intensity={2} />
        <directionalLight position={[-10, -10, -5]} intensity={1} />
        <AnimatedSphere />
        <Environment preset="city" />
      </Canvas>
    </div>
  );
}
