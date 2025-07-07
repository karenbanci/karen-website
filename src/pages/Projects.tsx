import { motion } from "framer-motion";
import { Link } from "react-router-dom";

// Sample project data
const projects = [
  {
    id: 1,
    title: "Neural Network",
    description:
      "This is a project is focused on the design of an AI application that can predict and make decisions autonomously. ",
    tags: ["Python", "AI", "Machine Learning", "Neural Networking", "PyCharm"],
    image: "/images/neural-network1.png",
  },
  {
    id: 2,
    title: "EcoScan",
    description:
      "EcoScan empowers sustainable shopping by providing instant environmental impact data. Our Python-based Chrome extension and mobile app (with barcode scanner and search) reveal a product's carbon footprint and water usage. Make informed choices and contribute to a greener future with transparent, real-time insights from our database.",
    tags: ["Python", "Figma", "Software Development", "Web Development"],
    image: "/images/ecoScan5.webp",
  },
  {
    id: 3,
    title: "Eleva",
    description:
      "Eleva is a modern website for a life coach empowering women through The ELEVA Method™ to align life and financial goals.",
    tags: ["Wix"],
    image: "/images/eleva-home.png",
  },
  {
    id: 4,
    title: "Letih Beauty",
    description:
      "LETIH BEAUTY is a serene and elegant website created for a boutique beauty and wellness brand offering holistic treatments for face and body.",
    tags: ["JavaScript", "React", "Contentful", "Airtable"],
    image:
      "https://raw.githubusercontent.com/karenbanci/portfolio-images/refs/heads/main/letih-home.webp",
  },
  {
    id: 5,
    title: "Jairo Honorio",
    description:
      "This personal portfolio was created for Jairo Honorio, a Senior Software Engineer at Google.",
    tags: ["Jekill", "React", "JavaScript", "AMP"],
    image:
      "https://raw.githubusercontent.com/karenbanci/portfolio-images/refs/heads/main/jairo-home.webp",
  },
  {
    id: 6,
    title: "Slap of life (Global Game Jam)",
    description:
      "This group project, inspired by the Global Game Jam at USV University of Silicon Valley, is centered on Make me laugh.",
    tags: ["Blender", "Unreal Engine", "Game Jam"],
    image:
      "https://raw.githubusercontent.com/karenbanci/portfolio-images/refs/heads/main/slap-cover.webp",
  },
  {
    id: 7,
    title: "Periodic Table 3D",
    description:
      "An interactive 3D periodic table built with React and Three.js, showcasing elements in a visually appealing way.",
    tags: ["Three.js", "WebGL", "React", "Blender"],
    image: "/images/periodic-table-project.mov",
  },
  {
    id: 8,
    title: "Marble Race - Game React Three FIber",
    description:
      "A complete UX/UI overhaul of an e-commerce platform with 3D product visualization.",
    tags: ["React", "React Three Fiber", "Three.js", "Vite"],
    image: "/images/marble-race.mov",
  },
  {
    id: 9,
    title: "Mario Jump",
    description:
      "Mario Jump is an arcade-style endless runner game where the challenge is the player's endurance and reaction time.",
    tags: ["JavaScript", "CSS", "HTML", "Game"],
    image: "/images/mario-jump.mov",
  },
];

const fadeIn = {
  hidden: { opacity: 0, y: 20 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: "easeOut" } },
};

const staggerContainer = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.1,
      delayChildren: 0.2,
    },
  },
};

const ProjectCard = ({ project, index }: { project: any; index: number }) => {
  return (
    <motion.div
      className="bg-secondary-400/20 backdrop-blur-sm rounded-xl overflow-hidden shadow-xl hover:shadow-pink-500/10 transition-all duration-300"
      variants={fadeIn}
      whileHover={{ y: -10, transition: { duration: 0.2 } }}
    >
      <Link
        to={`/project/${project.id}`}
        className="inline-block text-sm font-medium text-primary-400 hover:text-primary-600 transition-colors w-full"
      >
        <div className="relative h-48 overflow-hidden">
          {/\.(mp4|webm|ogg|mov)$/i.test(project.image) ? (
            <video
              src={project.image}
              className="w-full h-full object-cover"
              autoPlay
              loop
              muted
              playsInline
            />
          ) : (
            <img
              src={project.image}
              alt={project.title}
              className="w-full h-full object-cover transform hover:scale-110 transition-transform duration-500"
            />
          )}
          <div className="absolute top-0 right-0 p-3">
            <div className="w-8 h-8 flex items-center justify-center bg-white/10 backdrop-blur-md rounded-full">
              <span className="text-xs font-semibold">#{index + 1}</span>
            </div>
          </div>
        </div>
      </Link>

      <div className="p-6">
        <h3 className="text-xl font-bold mb-2 text-primary-400">
          {project.title}
        </h3>
        <p className="text-gray-600 mb-4 text-sm">{project.description}</p>

        <div className="flex flex-wrap gap-2 mb-4">
          {project.tags.map((tag: string, i: number) => (
            <span
              key={i}
              className="text-xs px-2 py-1 rounded-full bg-primary-300/50 text-primary-400"
            >
              {tag}
            </span>
          ))}
        </div>

        <Link
          to={`/project/${project.id}`}
          className="inline-block text-sm font-medium text-primary-600 hover:text-secondary-400 transition-colors"
        >
          View Details →
        </Link>
      </div>
    </motion.div>
  );
};

export default function Projects() {
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
            className="text-4xl md:text-5xl font-bold mb-6 mt-20 text-primary-400"
            variants={fadeIn}
          >
            My Projects
          </motion.h1>
          <motion.p
            className="text-xl text-gray-600 max-w-3xl mx-auto"
            variants={fadeIn}
          >
            Explore my portfolio of creative development work, from interactive
            3D experiences to user interface designs.
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
