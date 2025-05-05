import { useParams, Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { useEffect, useState } from 'react';
import { useScene } from '../experience/Scene';

// Sample project data (same as in Projects.tsx)
const projects = [
  {
    id: 1,
    title: "Interactive 3D Web Experience",
    description: "An immersive WebGL-based storytelling platform with dynamic animations and user interactions.",
    fullDescription: "This project pushed the boundaries of web-based storytelling by combining narrative elements with interactive 3D visualizations. Users navigate through a series of interconnected scenes, each revealing parts of a story through both visual and interactive elements. Built with Three.js and React, it features custom shaders, post-processing effects, and optimized asset loading for smooth performance across devices.",
    tags: ["Three.js", "WebGL", "React"],
    image: "https://images.unsplash.com/photo-1558655146-364adaf1fcc9?w=800&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8M3x8M2QlMjBkZXNpZ258ZW58MHx8MHx8fDA%3D",
    additionalImages: [
      "https://images.unsplash.com/photo-1620641788421-7a1c342ea42e?w=800&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NHx8M2QlMjBkZXNpZ258ZW58MHx8MHx8fDA%3D",
      "https://images.unsplash.com/photo-1633250411108-3b4fd16df31c?w=800&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTV8fDNkJTIwZGVzaWdufGVufDB8fDB8fHww"
    ],
    shape: "sphere",
    color: "#FF0080",
    client: "Media Entertainment Corp",
    duration: "3 months",
    role: "Lead Developer",
    year: "2023",
    link: "https://example.com/project1"
  },
  {
    id: 2,
    title: "E-Commerce Platform Redesign",
    description: "A complete UX/UI overhaul of an e-commerce platform with 3D product visualization.",
    fullDescription: "This project involved reimagining the online shopping experience for a major retail brand. The redesign focused on incorporating 3D product visualization technology, allowing customers to view products from all angles and even place them in their own space using AR. The new interface streamlined the purchasing process while adding immersive features that significantly increased conversion rates and customer engagement.",
    tags: ["React", "Framer Motion", "Three.js"],
    image: "https://images.unsplash.com/photo-1626544827763-d516dce335e2?w=800&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTh8fDNkJTIwZGVzaWdufGVufDB8fDB8fHww",
    additionalImages: [
      "https://images.unsplash.com/photo-1543512214-318c7553f230?w=800&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MjB8fHByb2R1Y3QlMjBkZXNpZ258ZW58MHx8MHx8fDA%3D",
      "https://images.unsplash.com/photo-1586495777744-4413f21062fa?w=800&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTl8fHByb2R1Y3QlMjBkZXNpZ258ZW58MHx8MHx8fDA%3D"
    ],
    shape: "box",
    color: "#7928CA",
    client: "RetailX Inc.",
    duration: "6 months",
    role: "Frontend Developer & 3D Specialist",
    year: "2022",
    link: "https://example.com/project2"
  },
  {
    id: 3,
    title: "AR Product Catalog",
    description: "An augmented reality mobile application for visualizing furniture in real space.",
    fullDescription: "This AR application revolutionized how customers shop for furniture by allowing them to visualize products in their own homes before purchasing. Using the latest AR technologies, the app features realistic lighting and shadows, accurate scaling, and intuitive placement controls. Users can browse through hundreds of products, customize materials and colors, and see exactly how pieces would look in their space, dramatically reducing return rates and increasing customer satisfaction.",
    tags: ["React Native", "AR.js", "3D Modeling"],
    image: "https://images.unsplash.com/photo-1633356122544-f134324a6cee?w=800&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8YXVnbWVudGVkJTIwcmVhbGl0eXxlbnwwfHwwfHx8MA%3D%3D",
    additionalImages: [
      "https://images.unsplash.com/photo-1622979135225-d2ba269cf1ac?w=800&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTJ8fGF1Z21lbnRlZCUyMHJlYWxpdHl8ZW58MHx8MHx8fDA%3D",
      "https://images.unsplash.com/photo-1617802690992-15d93263d3a9?w=800&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTh8fGF1Z21lbnRlZCUyMHJlYWxpdHl8ZW58MHx8MHx8fDA%3D"
    ],
    shape: "torus",
    color: "#0070F3",
    client: "HomeStyle Furniture",
    duration: "4 months",
    role: "AR Developer",
    year: "2022",
    link: "https://example.com/project3"
  },
  {
    id: 4,
    title: "Interactive Data Visualization",
    description: "A 3D data visualization dashboard for complex financial datasets with interactive controls.",
    fullDescription: "This data visualization project transformed complex financial information into intuitive 3D representations that help analysts identify trends and make decisions. The interactive dashboard allows users to manipulate datasets in real-time, viewing information from multiple angles and applying various filters. Custom animations highlight changes over time, while the responsive design ensures the tool works seamlessly across devices, from desktop workstations to tablets used in meetings and presentations.",
    tags: ["D3.js", "Three.js", "TypeScript"],
    image: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=800&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8M3x8ZGF0YSUyMHZpc3VhbGl6YXRpb258ZW58MHx8MHx8fDA%3D",
    additionalImages: [
      "https://images.unsplash.com/photo-1523961131990-5ea7c61b2107?w=800&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NHx8ZGF0YSUyMHZpc3VhbGl6YXRpb258ZW58MHx8MHx8fDA%3D",
      "https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=800&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTZ8fGRhdGElMjB2aXN1YWxpemF0aW9ufGVufDB8fDB8fHww"
    ],
    shape: "octahedron",
    color: "#50E3C2",
    client: "Global Finance Partners",
    duration: "5 months",
    role: "Data Visualization Specialist",
    year: "2021",
    link: "https://example.com/project4"
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

export default function ProjectDetail() {
  const { id } = useParams<{ id: string }>();
  const { addShape, clearShapes } = useScene();
  const [currentImageIndex, setCurrentImageIndex] = useState(0);
  const [loading, setLoading] = useState(true);

  // Find project with matching id
  const project = projects.find(p => p.id === parseInt(id || '0')) || projects[0];

  useEffect(() => {
    // Simulate loading
    setTimeout(() => {
      setLoading(false);
    }, 500);

    // Clear any existing shapes first
    clearShapes();

    // Add shape to the scene when the component mounts
    addShape({
      position: [0, 0, -3],
      shape: project.shape as any,
      size: 0.8,
      color: project.color,
      floatIntensity: 1.5,
      wobbleSpeed: 0.8
    });

  }, [addShape, clearShapes, project, id]);

  if (loading) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <div className="w-16 h-16 border-4 border-pink-500 border-t-transparent rounded-full animate-spin"></div>
      </div>
    );
  }

  if (!project) {
    return (
      <div className="min-h-screen flex flex-col items-center justify-center px-4">
        <h1 className="text-3xl font-bold mb-4">Project Not Found</h1>
        <p className="text-gray-300 mb-8">The project you're looking for doesn't exist.</p>
        <Link 
          to="/projects" 
          className="px-6 py-3 rounded-full bg-gradient-to-r from-pink-500 to-purple-500 text-white"
        >
          Back to Projects
        </Link>
      </div>
    );
  }

  // Combine the main image with additional images
  const allImages = [project.image, ...(project.additionalImages || [])];

  return (
    <div className="min-h-screen py-20 px-4 md:px-8">
      {/* Main content */}
      <div className="container mx-auto max-w-6xl">
        <Link 
          to="/projects" 
          className="inline-flex items-center text-gray-300 hover:text-white mb-8 transition-colors"
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
          Back to Projects
        </Link>
        
        <motion.div
          initial="hidden"
          animate="visible"
          variants={staggerContainer}
        >
          <motion.h1 
            className="text-4xl md:text-5xl font-bold mb-4"
            variants={fadeIn}
          >
            {project.title}
          </motion.h1>
          
          <motion.div 
            className="flex flex-wrap gap-2 mb-8"
            variants={fadeIn}
          >
            {project.tags.map((tag: string, index: number) => (
              <span 
                key={index} 
                className="text-sm px-3 py-1 rounded-full bg-gray-800 text-gray-300"
              >
                {tag}
              </span>
            ))}
          </motion.div>
          
          <motion.div 
            className="mb-12 grid grid-cols-1 md:grid-cols-3 gap-8"
            variants={fadeIn}
          >
            <div className="md:col-span-2">
              <div className="relative rounded-xl overflow-hidden aspect-video mb-4">
                <img 
                  src={allImages[currentImageIndex]} 
                  alt={`${project.title} - Image ${currentImageIndex + 1}`}
                  className="w-full h-full object-cover"
                />
                
                {allImages.length > 1 && (
                  <>
                    <button 
                      onClick={() => setCurrentImageIndex(prev => (prev === 0 ? allImages.length - 1 : prev - 1))} 
                      className="absolute left-4 top-1/2 transform -translate-y-1/2 w-10 h-10 rounded-full bg-black/50 flex items-center justify-center hover:bg-black/70 transition-colors"
                      aria-label="Previous image"
                    >
                      <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
                      </svg>
                    </button>
                    <button 
                      onClick={() => setCurrentImageIndex(prev => (prev === allImages.length - 1 ? 0 : prev + 1))} 
                      className="absolute right-4 top-1/2 transform -translate-y-1/2 w-10 h-10 rounded-full bg-black/50 flex items-center justify-center hover:bg-black/70 transition-colors"
                      aria-label="Next image"
                    >
                      <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                      </svg>
                    </button>
                  </>
                )}
              </div>
              
              {allImages.length > 1 && (
                <div className="flex space-x-2 overflow-x-auto py-2">
                  {allImages.map((img: string, idx: number) => (
                    <button 
                      key={idx}
                      onClick={() => setCurrentImageIndex(idx)}
                      className={`w-20 h-16 rounded overflow-hidden flex-shrink-0 ${currentImageIndex === idx ? 'ring-2 ring-pink-500' : 'opacity-70 hover:opacity-100'}`}
                    >
                      <img 
                        src={img} 
                        alt={`Thumbnail ${idx + 1}`}
                        className="w-full h-full object-cover"
                      />
                    </button>
                  ))}
                </div>
              )}
            </div>
            
            <div className="backdrop-blur-sm bg-gray-900/30 p-6 rounded-xl">
              <h3 className="text-xl font-semibold mb-4 pb-2 border-b border-gray-700">Project Details</h3>
              
              <div className="space-y-4">
                <div>
                  <p className="text-gray-400 text-sm mb-1">Client</p>
                  <p>{project.client}</p>
                </div>
                
                <div>
                  <p className="text-gray-400 text-sm mb-1">Year</p>
                  <p>{project.year}</p>
                </div>
                
                <div>
                  <p className="text-gray-400 text-sm mb-1">Duration</p>
                  <p>{project.duration}</p>
                </div>
                
                <div>
                  <p className="text-gray-400 text-sm mb-1">Role</p>
                  <p>{project.role}</p>
                </div>
                
                {project.link && (
                  <div>
                    <p className="text-gray-400 text-sm mb-1">Live Preview</p>
                    <a 
                      href={project.link} 
                      target="_blank" 
                      rel="noopener noreferrer"
                      className="text-pink-500 hover:text-pink-400 flex items-center"
                    >
                      Visit Site
                      <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 ml-1" viewBox="0 0 20 20" fill="currentColor">
                        <path fillRule="evenodd" d="M10.293 5.293a1 1 0 011.414 0l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414-1.414L12.586 11H5a1 1 0 110-2h7.586l-2.293-2.293a1 1 0 010-1.414z" clipRule="evenodd" />
                      </svg>
                    </a>
                  </div>
                )}
              </div>
            </div>
          </motion.div>
          
          <motion.div variants={fadeIn} className="mb-16">
            <h2 className="text-2xl font-bold mb-6">About this project</h2>
            <div className="text-gray-300 space-y-4">
              <p>{project.fullDescription}</p>
            </div>
          </motion.div>
          
          <motion.div variants={fadeIn} className="flex justify-between items-center">
            <Link 
              to={`/project/${project.id > 1 ? project.id - 1 : projects.length}`} 
              className="px-6 py-3 bg-gray-800 rounded-lg hover:bg-gray-700 transition-colors flex items-center"
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
              Previous Project
            </Link>
            
            <Link 
              to={`/project/${project.id < projects.length ? project.id + 1 : 1}`} 
              className="px-6 py-3 bg-gray-800 rounded-lg hover:bg-gray-700 transition-colors flex items-center"
            >
              Next Project
              <svg 
                xmlns="http://www.w3.org/2000/svg" 
                className="h-5 w-5 ml-2" 
                viewBox="0 0 20 20" 
                fill="currentColor"
              >
                <path 
                  fillRule="evenodd" 
                  d="M10.293 5.293a1 1 0 011.414 0l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414-1.414L12.586 11H5a1 1 0 110-2h7.586l-2.293-2.293a1 1 0 010-1.414z" 
                  clipRule="evenodd" 
                />
              </svg>
            </Link>
          </motion.div>
        </motion.div>
      </div>
    </div>
  );
} 