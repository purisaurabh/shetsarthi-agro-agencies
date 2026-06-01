"use client";

import { useRef, useMemo, Suspense, useEffect, useState } from "react";
import { Canvas, useFrame } from "@react-three/fiber";
import {
  Float,
  Environment,
  ContactShadows,
  PerspectiveCamera,
  Cloud,
  Clouds,
  Sky,
} from "@react-three/drei";
import * as THREE from "three";


function GroundPlane() {
  // Two-tone soil with subtle bumps using vertex displacement is heavy; use a flat plane with gradient material
  const ref = useRef<THREE.Mesh>(null);
  const tex = useMemo(() => {
    const c = document.createElement("canvas");
    c.width = c.height = 512;
    const ctx = c.getContext("2d")!;
    const grd = ctx.createLinearGradient(0, 0, 0, 512);
    grd.addColorStop(0, "#3a5e2a");
    grd.addColorStop(0.5, "#4a7a35");
    grd.addColorStop(1, "#2a4520");
    ctx.fillStyle = grd;
    ctx.fillRect(0, 0, 512, 512);
    // Add subtle noise
    for (let i = 0; i < 6000; i++) {
      const x = Math.random() * 512;
      const y = Math.random() * 512;
      const a = Math.random() * 0.08;
      ctx.fillStyle = `rgba(0,0,0,${a})`;
      ctx.fillRect(x, y, 2, 2);
    }
    const t = new THREE.CanvasTexture(c);
    t.wrapS = t.wrapT = THREE.RepeatWrapping;
    t.repeat.set(8, 8);
    return t;
  }, []);

  return (
    <mesh ref={ref} rotation={[-Math.PI / 2, 0, 0]} position={[0, -1.2, 0]} receiveShadow>
      <planeGeometry args={[80, 80, 1, 1]} />
      <meshStandardMaterial
        map={tex}
        roughness={1}
        metalness={0}
        color="#5a8a3a"
      />
    </mesh>
  );
}


function CropStalk({
  position,
  scale = 1,
  hue = 0,
  delay = 0,
}: {
  position: [number, number, number];
  scale?: number;
  hue?: number;
  delay?: number;
}) {
  const stem = useRef<THREE.Group>(null);

  useFrame(({ clock }) => {
    if (!stem.current) return;
    const t = clock.getElapsedTime() + delay;
    stem.current.rotation.z = Math.sin(t * 1.2) * 0.07;
    stem.current.rotation.x = Math.cos(t * 0.8) * 0.04;
  });

  const stemColor = useMemo(() => {
    const c = new THREE.Color().setHSL(0.25 + hue * 0.05, 0.45, 0.32);
    return c;
  }, [hue]);
  const headColor = useMemo(() => {
    const c = new THREE.Color().setHSL(0.12 + hue * 0.02, 0.7, 0.55);
    return c;
  }, [hue]);

  return (
    <group position={position} scale={scale}>
      <group ref={stem}>
        {/* stem */}
        <mesh position={[0, 0.5, 0]} castShadow>
          <cylinderGeometry args={[0.025, 0.04, 1.0, 6]} />
          <meshStandardMaterial color={stemColor} roughness={0.9} />
        </mesh>
        {/* head — wheat */}
        <mesh position={[0, 1.15, 0]} castShadow>
          <coneGeometry args={[0.1, 0.45, 8]} />
          <meshStandardMaterial color={headColor} roughness={0.7} />
        </mesh>
        {/* leaves */}
        <mesh position={[0.07, 0.5, 0]} rotation={[0, 0, -0.6]} castShadow>
          <coneGeometry args={[0.04, 0.4, 4]} />
          <meshStandardMaterial color={stemColor} roughness={0.9} />
        </mesh>
        <mesh position={[-0.07, 0.65, 0]} rotation={[0, 0, 0.6]} castShadow>
          <coneGeometry args={[0.04, 0.4, 4]} />
          <meshStandardMaterial color={stemColor} roughness={0.9} />
        </mesh>
      </group>
    </group>
  );
}

/** Field of crops — count adapts to viewport. */
function CropField({ count = 120 }: { count?: number }) {
  const stalks = useMemo(() => {
    const arr: { pos: [number, number, number]; scale: number; hue: number; delay: number }[] = [];
    for (let i = 0; i < count; i++) {
      const x = (Math.random() - 0.5) * 18;
      const z = -2 - Math.random() * 14;
      const scale = 0.9 + Math.random() * 0.6;
      arr.push({
        pos: [x, -1.2, z],
        scale,
        hue: Math.random(),
        delay: Math.random() * 5,
      });
    }
    return arr;
  }, [count]);

  return (
    <group>
      {stalks.map((s, i) => (
        <CropStalk
          key={i}
          position={s.pos}
          scale={s.scale}
          hue={s.hue}
          delay={s.delay}
        />
      ))}
    </group>
  );
}

/** Drifting clouds */
function FloatingClouds() {
  return (
    <Clouds material={THREE.MeshBasicMaterial}>
      <Cloud
        seed={1}
        bounds={[10, 2, 4]}
        volume={6}
        position={[-6, 6, -10]}
        opacity={0.5}
        speed={0.05}
        color="#fff8ee"
      />
      <Cloud
        seed={2}
        bounds={[12, 2, 4]}
        volume={8}
        position={[8, 7, -14]}
        opacity={0.45}
        speed={0.06}
        color="#fff8ee"
      />
      <Cloud
        seed={3}
        bounds={[8, 2, 4]}
        volume={5}
        position={[2, 8, -18]}
        opacity={0.4}
        speed={0.04}
        color="#fff0d8"
      />
    </Clouds>
  );
}

/** Sun that glows */
function Sun() {
  const ref = useRef<THREE.Mesh>(null);
  useFrame(({ clock }) => {
    if (!ref.current) return;
    const t = clock.getElapsedTime();
    const m = ref.current.material as THREE.MeshBasicMaterial;
    if (m && "color" in m) {
      const intensity = 0.95 + Math.sin(t * 0.6) * 0.05;
      m.color.setRGB(1, 0.85 * intensity, 0.55 * intensity);
    }
  });
  return (
    <mesh ref={ref} position={[6, 4, -22]}>
      <sphereGeometry args={[2, 32, 32]} />
      <meshBasicMaterial color="#FFD08A" toneMapped={false} />
    </mesh>
  );
}

/** Birds — simple flying triangles that flap */
function Bird({
  start,
  speed = 1,
  delay = 0,
}: {
  start: [number, number, number];
  speed?: number;
  delay?: number;
}) {
  const ref = useRef<THREE.Group>(null);
  const wingL = useRef<THREE.Mesh>(null);
  const wingR = useRef<THREE.Mesh>(null);

  useFrame(({ clock }) => {
    if (!ref.current) return;
    const t = clock.getElapsedTime() + delay;
    ref.current.position.x = start[0] + ((t * speed) % 30) - 15;
    ref.current.position.y = start[1] + Math.sin(t * 0.8) * 0.3;
    ref.current.position.z = start[2] + Math.cos(t * 0.5) * 0.2;
    const flap = Math.sin(t * 12) * 0.6;
    if (wingL.current) wingL.current.rotation.z = flap;
    if (wingR.current) wingR.current.rotation.z = -flap;
  });
  return (
    <group ref={ref} position={start} scale={0.3}>
      <mesh ref={wingL} position={[-0.2, 0, 0]}>
        <coneGeometry args={[0.3, 0.6, 3]} />
        <meshBasicMaterial color="#222" />
      </mesh>
      <mesh ref={wingR} position={[0.2, 0, 0]}>
        <coneGeometry args={[0.3, 0.6, 3]} />
        <meshBasicMaterial color="#222" />
      </mesh>
    </group>
  );
}

/** Camera reacting to mouse for depth-of-field feel */
function CameraRig({ isMobile }: { isMobile: boolean }) {
  const cam = useRef<THREE.PerspectiveCamera>(null);
  useFrame((state) => {
    if (!cam.current) return;
    const target = new THREE.Vector3(
      state.pointer.x * 0.6,
      (isMobile ? 1.4 : 0.4) + state.pointer.y * 0.3,
      isMobile ? 9 : 6,
    );
    cam.current.position.lerp(target, 0.04);
    cam.current.lookAt(0, 0.5, -8);
  });
  return (
    <PerspectiveCamera
      ref={cam}
      makeDefault
      fov={isMobile ? 60 : 50}
      position={[0, isMobile ? 1.4 : 0.4, isMobile ? 9 : 6]}
    />
  );
}

/** Floating 3D seed orbs — premium hero accent */
function SeedOrb({
  position,
  color,
}: {
  position: [number, number, number];
  color: string;
}) {
  return (
    <Float speed={1.4} rotationIntensity={1} floatIntensity={1.5}>
      <mesh position={position}>
        <icosahedronGeometry args={[0.18, 1]} />
        <meshStandardMaterial
          color={color}
          roughness={0.2}
          metalness={0.6}
          emissive={color}
          emissiveIntensity={0.3}
        />
      </mesh>
    </Float>
  );
}

function Scene({ isMobile }: { isMobile: boolean }) {
  return (
    <>
      <CameraRig isMobile={isMobile} />

      <Sky
        sunPosition={[6, 4, -22]}
        turbidity={4}
        rayleigh={2}
        mieCoefficient={0.005}
        mieDirectionalG={0.8}
        distance={450000}
      />

      <ambientLight intensity={0.6} />
      <directionalLight
        position={[6, 10, -8]}
        intensity={2}
        color="#fff5d6"
        castShadow={!isMobile}
        shadow-mapSize={isMobile ? [512, 512] : [2048, 2048]}
      />
      <hemisphereLight args={["#ffe4b8", "#3b5a25", 0.5]} />

      <Sun />
      <FloatingClouds />

      <GroundPlane />
      <CropField count={isMobile ? 50 : 120} />

      <Bird start={[-10, 3, -8]} speed={0.8} delay={0} />
      {!isMobile && <Bird start={[-12, 4, -10]} speed={1} delay={3} />}
      {!isMobile && <Bird start={[-14, 3.5, -12]} speed={0.7} delay={6} />}

      <SeedOrb position={[-3.5, 1.5, -2]} color="#66BB6A" />
      <SeedOrb position={[3.5, 2, -3]} color="#F9A825" />
      {!isMobile && <SeedOrb position={[2, -0.5, -1]} color="#2E7D32" />}
      {!isMobile && <SeedOrb position={[-2.5, 0.2, 0]} color="#F9A825" />}

      <ContactShadows
        position={[0, -1.19, 0]}
        opacity={0.4}
        scale={20}
        blur={2.5}
        far={4}
      />

      <Environment preset="sunset" background={false} />
    </>
  );
}

export default function HeroScene() {
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const mq = window.matchMedia("(max-width: 767px)");
    const update = () => setIsMobile(mq.matches);
    update();
    mq.addEventListener("change", update);
    return () => mq.removeEventListener("change", update);
  }, []);

  return (
    <Canvas
      key={isMobile ? "m" : "d"}
      gl={{ antialias: !isMobile, alpha: true, powerPreference: "high-performance" }}
      dpr={isMobile ? [1, 1] : [1, 1.5]}
      shadows={!isMobile}
      className="!absolute inset-0"
    >
      <Suspense fallback={null}>
        <Scene isMobile={isMobile} />
      </Suspense>
    </Canvas>
  );
}
