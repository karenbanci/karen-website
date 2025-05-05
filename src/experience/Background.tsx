import { useRef, useMemo } from 'react';
import { useFrame } from '@react-three/fiber';
import { Points, PointMaterial } from '@react-three/drei';
import * as THREE from 'three';
import * as random from 'maath/random';

interface BackgroundProps {
  count?: number;
  size?: number;
  radius?: number;
  colors?: [string, string];
  speed?: number;
}

export default function Background({
  count = 5000,
  size = 0.015,
  radius = 3.5,
  colors = ['#7928CA', '#FF0080'],
  speed = 0.2,
}: BackgroundProps) {
  const points = useRef<THREE.Points>(null);
  
  // Generate random points in a sphere
  const particlesPosition = useMemo(() => {
    const positions = new Float32Array(count * 3);
    random.inSphere(positions, { radius });
    return positions;
  }, [count, radius]);

  // Create the color array
  const particleColors = useMemo(() => {
    const colorArray = new Float32Array(count * 3);
    const color1 = new THREE.Color(colors[0]);
    const color2 = new THREE.Color(colors[1]);
    
    for (let i = 0; i < count; i++) {
      const mixedColor = color1.clone().lerp(color2, Math.random());
      colorArray[i * 3] = mixedColor.r;
      colorArray[i * 3 + 1] = mixedColor.g;
      colorArray[i * 3 + 2] = mixedColor.b;
    }
    
    return colorArray;
  }, [count, colors]);

  // Animation
  useFrame((state, delta) => {
    if (points.current) {
      points.current.rotation.x += delta * speed * 0.15;
      points.current.rotation.y += delta * speed * 0.2;
    }
  });

  return (
    <Points ref={points} positions={particlesPosition} colors={particleColors} stride={3}>
      <PointMaterial
        transparent
        vertexColors
        size={size}
        sizeAttenuation
        depthWrite={false}
        blending={THREE.AdditiveBlending}
      />
    </Points>
  );
} 