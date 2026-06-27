import { useRef } from 'react';
import { Canvas, useFrame } from '@react-three/fiber';
import { MeshDistortMaterial, Float, Sphere } from '@react-three/drei';
import * as THREE from 'three';

function FloatingGeometry() {
  const meshRef = useRef();
  const torusRef = useRef();

  useFrame((state) => {
    const t = state.clock.getElapsedTime();
    if (meshRef.current) {
      meshRef.current.rotation.x = t * 0.15;
      meshRef.current.rotation.y = t * 0.2;
    }
    if (torusRef.current) {
      torusRef.current.rotation.x = t * 0.1;
      torusRef.current.rotation.z = t * 0.15;
    }
  });

  return (
    <>
      {/* Ambient light */}
      <ambientLight intensity={0.3} />
      <pointLight position={[10, 10, 10]} intensity={1} color="#4f8ef7" />
      <pointLight position={[-10, -10, -10]} intensity={0.5} color="#a855f7" />
      <pointLight position={[0, 10, -10]} intensity={0.5} color="#22d3ee" />

      {/* Central icosahedron */}
      <Float speed={2} rotationIntensity={0.5} floatIntensity={0.8}>
        <mesh ref={meshRef}>
          <icosahedronGeometry args={[1.5, 1]} />
          <MeshDistortMaterial
            color="#4f8ef7"
            distort={0.3}
            speed={2}
            roughness={0}
            metalness={0.8}
            wireframe={false}
          />
        </mesh>
      </Float>

      {/* Torus ring */}
      <mesh ref={torusRef} position={[0, 0, 0]}>
        <torusGeometry args={[2.5, 0.08, 16, 100]} />
        <meshStandardMaterial
          color="#a855f7"
          emissive="#a855f7"
          emissiveIntensity={0.5}
          roughness={0}
          metalness={1}
        />
      </mesh>

      {/* Orbiting sphere */}
      <Float speed={3} rotationIntensity={0.3} floatIntensity={0.5}>
        <Sphere args={[0.4, 32, 32]} position={[2.8, 0.5, 0]}>
          <meshStandardMaterial
            color="#22d3ee"
            emissive="#22d3ee"
            emissiveIntensity={0.8}
            roughness={0}
            metalness={0.5}
          />
        </Sphere>
      </Float>

      {/* Small floating dots */}
      {[...Array(5)].map((_, i) => (
        <Float key={i} speed={1.5 + i * 0.3} rotationIntensity={0.2} floatIntensity={1}>
          <mesh position={[
            Math.sin(i * 1.2) * 3.5,
            Math.cos(i * 0.8) * 2,
            Math.sin(i * 0.5) * 1.5
          ]}>
            <sphereGeometry args={[0.08, 8, 8]} />
            <meshStandardMaterial
              color={['#4f8ef7', '#a855f7', '#22d3ee', '#ec4899', '#10b981'][i]}
              emissive={['#4f8ef7', '#a855f7', '#22d3ee', '#ec4899', '#10b981'][i]}
              emissiveIntensity={1}
            />
          </mesh>
        </Float>
      ))}
    </>
  );
}

export default function HeroCanvas() {
  return (
    <Canvas
      camera={{ position: [0, 0, 6], fov: 50 }}
      className="w-full h-full"
      gl={{ antialias: true, alpha: true }}
    >
      <FloatingGeometry />
    </Canvas>
  );
}
