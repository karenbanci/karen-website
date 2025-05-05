import { useRef, useEffect } from 'react';
import { useFrame } from '@react-three/fiber';
import { useGLTF } from '@react-three/drei';
import * as THREE from 'three';

interface FloatingModelProps {
  path: string;
  scale?: number;
  position?: [number, number, number];
  rotation?: [number, number, number];
  floatIntensity?: number;
  rotationIntensity?: number;
}

export default function FloatingModel({
  path,
  scale = 1,
  position = [0, 0, 0],
  rotation = [0, 0, 0],
  floatIntensity = 1,
  rotationIntensity = 1,
}: FloatingModelProps) {
  const modelRef = useRef<THREE.Group>(null);
  
  // Use the useGLTF hook to load the model
  const { scene } = useGLTF(path);
  
  // Preload the model when component mounts
  useEffect(() => {
    useGLTF.preload(path);
  }, [path]);
  
  // Clone the scene to avoid issues with reusing a model across components
  const clonedScene = scene.clone();

  // Animation for floating and rotating effect
  useFrame((state) => {
    if (!modelRef.current) return;
    
    const time = state.clock.getElapsedTime();
    
    // Floating animation
    modelRef.current.position.y = position[1] + Math.sin(time * 0.5) * 0.1 * floatIntensity;
    
    // Rotation animation
    modelRef.current.rotation.x = rotation[0] + Math.sin(time * 0.2) * 0.05 * rotationIntensity;
    modelRef.current.rotation.y = rotation[1] + time * 0.1 * rotationIntensity;
    modelRef.current.rotation.z = rotation[2] + Math.sin(time * 0.3) * 0.05 * rotationIntensity;
  });

  return (
    <primitive 
      ref={modelRef}
      object={clonedScene} 
      position={position}
      rotation={rotation}
      scale={scale} 
    />
  );
} 