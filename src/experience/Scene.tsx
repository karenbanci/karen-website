import { Canvas } from '@react-three/fiber';
import { OrbitControls, PerspectiveCamera } from '@react-three/drei';
import Background from './Background';
import { ReactNode, createContext, useContext, useState } from 'react';
import GeometricShape from './GeometricShape';

// Create a context to manage shapes
interface Shape {
  id: string;
  position: [number, number, number];
  shape?: 'box' | 'sphere' | 'torus' | 'tetrahedron' | 'octahedron';
  color?: string;
  size?: number;
  floatIntensity?: number;
  wobbleSpeed?: number;
  wobbleStrength?: number;
}

interface SceneContextType {
  addShape: (shape: Omit<Shape, 'id'>) => string;
  removeShape: (id: string) => void;
  clearShapes: () => void;
  shapes: Shape[];
}

const SceneContext = createContext<SceneContextType | null>(null);

// Hook to use the Scene context
export function useScene() {
  const context = useContext(SceneContext);
  if (!context) {
    throw new Error('useScene must be used within a SceneProvider');
  }
  return context;
}

interface SceneProps {
  children?: ReactNode;
}

// Main Scene component that provides the Canvas and context
export function SceneProvider({ children }: SceneProps) {
  const [shapes, setShapes] = useState<Shape[]>([]);

  // Add a shape to the scene
  const addShape = (shape: Omit<Shape, 'id'>) => {
    const id = Math.random().toString(36).substr(2, 9);
    setShapes(prev => [...prev, { ...shape, id }]);
    return id;
  };

  // Remove a shape from the scene
  const removeShape = (id: string) => {
    setShapes(prev => prev.filter(shape => shape.id !== id));
  };

  // Clear all shapes from the scene
  const clearShapes = () => {
    setShapes([]);
  };

  return (
    <SceneContext.Provider value={{ addShape, removeShape, clearShapes, shapes }}>
      <Canvas style={{ position: 'fixed', top: 0, left: 0, right: 0, bottom: 0, zIndex: -1, pointerEvents: 'none' }}>
        <PerspectiveCamera makeDefault position={[0, 0, 5]} fov={75} />
        <OrbitControls enableZoom={false} enablePan={false} enableRotate={false} />
        <ambientLight intensity={0.5} />
        <directionalLight position={[10, 10, 5]} intensity={1} />
        <Background />
        {/* Render all shapes inside the Canvas */}
        {shapes.map(shape => (
          <GeometricShape
            key={shape.id}
            position={shape.position}
            shape={shape.shape}
            color={shape.color}
            size={shape.size}
            floatIntensity={shape.floatIntensity}
            wobbleSpeed={shape.wobbleSpeed}
            wobbleStrength={shape.wobbleStrength}
          />
        ))}
      </Canvas>
      {children}
    </SceneContext.Provider>
  );
}

// Default export for backwards compatibility
export default function Scene({ children }: SceneProps) {
  return (
    <SceneProvider>
      {children}
    </SceneProvider>
  );
} 