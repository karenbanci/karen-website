import { useRef, useState } from 'react';
import { useFrame } from '@react-three/fiber';
import { MeshWobbleMaterial } from '@react-three/drei';
import * as THREE from 'three';

interface GeometricShapeProps {
  position?: [number, number, number];
  rotation?: [number, number, number];
  color?: string;
  shape?: 'box' | 'sphere' | 'torus' | 'tetrahedron' | 'octahedron';
  size?: number;
  wireframe?: boolean;
  floatIntensity?: number;
  wobbleSpeed?: number;
  wobbleStrength?: number;
}

export default function GeometricShape({
  position = [0, 0, 0],
  rotation = [0, 0, 0],
  color = '#ff0080',
  shape = 'torus',
  size = 1,
  wireframe = false,
  floatIntensity = 1,
  wobbleSpeed = 1,
  wobbleStrength = 0.5,
}: GeometricShapeProps) {
  const meshRef = useRef<THREE.Mesh>(null);
  const [hovered, setHovered] = useState(false);

  // Animation
  useFrame((state) => {
    if (!meshRef.current) return;
    
    const time = state.clock.getElapsedTime();
    
    // Floating animation
    meshRef.current.position.y = position[1] + Math.sin(time * 0.5) * 0.1 * floatIntensity;
    
    // Rotation
    meshRef.current.rotation.x = rotation[0] + time * 0.1;
    meshRef.current.rotation.y = rotation[1] + time * 0.15;
  });

  // Choose the geometry based on the shape prop
  const getGeometry = () => {
    switch (shape) {
      case 'box':
        return <boxGeometry args={[size, size, size]} />;
      case 'sphere':
        return <sphereGeometry args={[size * 0.7, 32, 32]} />;
      case 'torus':
        return <torusGeometry args={[size * 0.7, size * 0.3, 16, 100]} />;
      case 'tetrahedron':
        return <tetrahedronGeometry args={[size, 0]} />;
      case 'octahedron':
        return <octahedronGeometry args={[size, 0]} />;
      default:
        return <torusGeometry args={[size * 0.7, size * 0.3, 16, 100]} />;
    }
  };

  return (
    <mesh
      ref={meshRef}
      position={position}
      rotation={rotation}
      onPointerOver={() => setHovered(true)}
      onPointerOut={() => setHovered(false)}
    >
      {getGeometry()}
      <MeshWobbleMaterial 
        color={hovered ? '#7928CA' : color} 
        wireframe={wireframe}
        factor={wobbleStrength} 
        speed={wobbleSpeed}
      />
    </mesh>
  );
} 