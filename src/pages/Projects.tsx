import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { useEffect } from 'react';
import { useScene } from '../experience/Scene';
import GeometricShape from '../experience/GeometricShape';

// Sample project data
const projects = [
  {
    id: 1,
    title: "Interactive 3D Web Experience",
    description: "An immersive WebGL-based storytelling platform with dynamic animations and user interactions.",
    tags: ["Three.js", "WebGL", "React"],
    image: "https://images.unsplash.com/photo-1558655146-364adaf1fcc9?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8M3x8M2QlMjBkZXNpZ258ZW58MHx8MHx8fDA%3D",
    shape: "sphere",
    color: "#FF0080"
  },
  {
    id: 2,
    title: "E-Commerce Platform Redesign",
    description: "A complete UX/UI overhaul of an e-commerce platform with 3D product visualization.",
    tags: ["React", "Framer Motion", "Three.js"],
    image: "https://images.unsplash.com/photo-1626544827763-d516dce335e2?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTh8fDNkJTIwZGVzaWdufGVufDB8fDB8fHww",
    shape: "box",
    color: "#7928CA"
  },
  {
    id: 3,
    title: "AR Product Catalog",
    description: "An augmented reality mobile application for visualizing furniture in real space.",
    tags: ["React Native", "AR.js", "3D Modeling"],
    image: "https://images.unsplash.com/photo-1633356122544-f134324a6cee?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8YXVnbWVudGVkJTIwcmVhbGl0eXxlbnwwfHwwfHx8MA%3D%3D",
    shape: "torus",
    color: "#0070F3"
  },
  {
    id: 4,
    title: "Interactive Data Visualization",
    description: "A 3D data visualization dashboard for complex financial datasets with interactive controls.",
    tags: ["D3.js", "Three.js", "TypeScript"],
    image: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8M3x8ZGF0YSUyMHZpc3VhbGl6YXRpb258ZW58MHx8MHx8fDA%3D",
    shape: "octahedron",
    color: "#50E3C2"
  },
];

const fadeIn = {
  hidden: { opacity: 0, y: 20 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: "easeOut" } }
};

const staggerContainer = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.1,
      delayChildren: 0.2
    }
  }
};

const ProjectCard = ({ project, index }: { project: any, index: number }) => {
  return (
    <motion.div 
      className="bg-gray-900/40 backdrop-blur-sm rounded-xl overflow-hidden shadow-xl hover:shadow-pink-500/10 transition-all duration-300"
      variants={fadeIn}
      whileHover={{ y: -10, transition: { duration: 0.2 } }}
    >
      <div className="relative h-48 overflow-hidden">
        <img 
          src={project.image} 
          alt={project.title}
          className="w-full h-full object-cover transform hover:scale-110 transition-transform duration-500"
        />
        <div className="absolute top-0 right-0 p-3">
          <div className="w-8 h-8 flex items-center justify-center bg-white/10 backdrop-blur-md rounded-full">
            <span className="text-xs font-semibold">#{index + 1}</span>
          </div>
        </div>
      </div>
      
      <div className="p-6">
        <h3 className="text-xl font-bold mb-2">{project.title}</h3>
        <p className="text-gray-300 mb-4 text-sm">{project.description}</p>
        
        <div className="flex flex-wrap gap-2 mb-4">
          {project.tags.map((tag: string, i: number) => (
            <span 
              key={i} 
              className="text-xs px-2 py-1 rounded-full bg-gray-700/50 text-gray-300"
            >
              {tag}
            </span>
          ))}
        </div>
        
        <Link 
          to={`/project/${project.id}`}
          className="inline-block text-sm font-medium text-pink-500 hover:text-pink-400 transition-colors"
        >
          View Details →
        </Link>
      </div>
    </motion.div>
  );
};

export default function Projects() {
  const { addShape, clearShapes } = useScene();

  useEffect(() => {
    // Clear any existing shapes first
    clearShapes();
    
    // Add shapes to the scene when the component mounts
    projects.forEach((project, index) => {
      addShape({
        position: [3 - (index * 2), 0, -3],
        shape: project.shape as any,
        size: 0.5,
        color: project.color,
        floatIntensity: 1 + (index * 0.2),
        wobbleSpeed: 1
      });
    });

  }, [addShape, clearShapes]);

  return (
    <div className="min-h-screen py-20 px-4 md:px-8">
      {/* Main content */}
      <div className="container mx-auto max-w-6xl">
        <motion.div
          initial="hidden"
          animate="visible"
          variants={staggerContainer}
          className="mb-16 text-center"
        >
          <motion.h1 
            className="text-4xl md:text-5xl font-bold mb-6"
            variants={fadeIn}
          >
            My Projects
          </motion.h1>
          <motion.p 
            className="text-xl text-gray-300 max-w-3xl mx-auto"
            variants={fadeIn}
          >
            Explore my portfolio of creative development work, from interactive 3D 
            experiences to user interface designs.
          </motion.p>
        </motion.div>
        
        <motion.div 
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
          initial="hidden"
          animate="visible"
          variants={staggerContainer}
        >
          {projects.map((project, index) => (
            <ProjectCard key={project.id} project={project} index={index} />
          ))}
        </motion.div>
      </div>
    </div>
  );
} 