import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { useEffect } from 'react';
import { useScene } from '../experience/Scene';

export default function NotFound() {
  const { addShape, clearShapes } = useScene();

  useEffect(() => {
    // Clear any existing shapes first
    clearShapes();
    
    // Add shape to the scene when the component mounts
    addShape({
      position: [0, 0, -3],
      shape: "box",
      size: 0.7,
      color: "#ff4040",
      floatIntensity: 1.5,
      wobbleSpeed: 2
    });

    // No need to return cleanup function as shapes will persist
  }, [addShape, clearShapes]);

  return (
    <div className="min-h-screen flex flex-col items-center justify-center px-4 py-12">
      {/* 3D elements for this page */}
      <div className="three-elements">
        {/* GeometricShape component will be added dynamically */}
      </div>
      
      <motion.div 
        className="text-center max-w-xl"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
      >
        <motion.h1 
          className="text-9xl font-bold mb-6 bg-clip-text text-transparent bg-gradient-to-r from-pink-500 to-purple-500"
          initial={{ scale: 0.8 }}
          animate={{ scale: 1 }}
          transition={{ 
            duration: 0.8, 
            delay: 0.2,
            type: "spring",
            stiffness: 100
          }}
        >
          404
        </motion.h1>
        
        <h2 className="text-3xl md:text-4xl font-bold mb-4">Page Not Found</h2>
        
        <p className="text-gray-300 mb-8 text-lg">
          The page you're looking for doesn't exist or has been moved to another dimension.
        </p>
        
        <Link
          to="/"
          className="px-8 py-3 rounded-full bg-gradient-to-r from-pink-500 to-purple-500 text-white font-medium 
          hover:shadow-lg hover:shadow-pink-500/30 transition-all duration-300 inline-flex items-center"
        >
          <svg 
            xmlns="http://www.w3.org/2000/svg" 
            className="h-5 w-5 mr-2" 
            viewBox="0 0 20 20" 
            fill="currentColor"
          >
            <path 
              fillRule="evenodd" 
              d="M9.707 14.707a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414l4-4a1 1 0 011.414 1.414L7.414 9H15a1 1 0 110 2H7.414l2.293 2.293a1 1 0 010 1.414z" 
              clipRule="evenodd" 
            />
          </svg>
          Back to Home
        </Link>
      </motion.div>
    </div>
  );
} 