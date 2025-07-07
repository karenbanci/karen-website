import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import { useEffect, useState } from "react";
import BtnResume from "../components/BtnResume";
import { useScene } from "../experience/Scene";

const fadeIn = {
  hidden: { opacity: 0, y: 20 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.6, ease: "easeOut" },
  },
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

export default function Home() {
  const [isMounted, setIsMounted] = useState(false);

  useEffect(() => {
    setIsMounted(true);
  }, []);

  return (
    <div className="relative min-h-screen flex flex-col justify-center items-center px-4 md:px-8">
      {/* Main content */}
      <motion.div
        className="container mx-auto max-w-4xl text-center z-10"
        initial="hidden"
        animate={isMounted ? "visible" : "hidden"}
        variants={{
          hidden: { opacity: 0, y: 20 },
          visible: {
            opacity: 1,
            y: 0,
            transition: {
              delay: 0.3,
              duration: 0.8,
              ease: [0.165, 0.84, 0.44, 1],
            },
          },
        }}
      >
        <motion.div
          className="backdrop-blur-sm bg-makara-50/10 p-8 rounded-2xl shadow-xl"
          variants={fadeIn}
        >
          <motion.h1
            className="text-5xl md:text-7xl font-bold mb-6 bg-clip-text text-primary-600"
            variants={fadeIn}
          >
            Karen Banci
          </motion.h1>

          <motion.h2
            className="text-2xl md:text-3xl mb-8 text-gray-500"
            variants={fadeIn}
          >
            Full Stack Developer
          </motion.h2>

          <motion.p
            className="text-lg md:text-xl mb-12 max-w-2xl mx-auto text-gray-600"
            variants={fadeIn}
          >
            I build dynamic web applications, blending design, and codeI.
            Specializing in React, ThreeJS, and Python, I create interactive 3D
            experiences and AI-driven solutions. Passionate about innovation and
            problem-solving, I’m eager for new challenges in software
            development.
          </motion.p>

          <motion.div
            className="flex flex-wrap justify-center gap-4"
            variants={fadeIn}
          >
            <Link
              to="/projects"
              className="px-8 py-3 rounded-full bg-primary-600 text-white font-medium
            hover:shadow-lg hover:text-gray-600 hover:bg-primary-100 hover:shadow-primary-400 transition-all duration-300"
            >
              View Projects
            </Link>
            <Link
              to="/contact"
              className="px-8 py-3 rounded-full border border-primary-400 text-primary-400 font-medium
            hover:border-primary-600 hover:text-primary-600 transition-all duration-300"
            >
              Contact Me
            </Link>
            <BtnResume />
          </motion.div>
        </motion.div>
      </motion.div>
    </div>
  );
}
