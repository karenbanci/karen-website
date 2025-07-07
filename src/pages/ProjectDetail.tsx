import { useParams, Link } from "react-router-dom";
import { motion } from "framer-motion";
import { useEffect, useState } from "react";
import { useScene } from "../experience/Scene";

// Sample project data (same as in Projects.tsx)
const projects = [
  {
    id: 1,
    title: "Neural Network ",
    description:
      "This is a project is focused on the design of an AI application that can predict and make decisions autonomously.",
    fullDescription:
      "Designed and implemented an advanced AI application in Python, a hands-on project from Foothill College, focused on autonomous prediction and decision-making. This highlights the creation of intelligent agents that can analyze data, foresee outcomes, and execute actions independently.",
    tags: ["Python", "AI", "Machine Learning", "Neural Networking", "PyCharm"],
    image: "/images/neural-network.mov",
    additionalImages: ["/images/neural-network-result.png"],
    client: "Academic Project at Foothill College",
    duration: "12 weeks",
    role: "Computer Science",
    year: "2023",
    link: "https://github.com/karenbanci/study_material/tree/master/mini-projects/neural-network",
  },
  {
    id: 2,
    title: "EcoScan - Hackathon Project - 4th place",
    description:
      "Eleva is a modern website for a life coach empowering women through The ELEVA Method™ to align life and financial goals.",
    fullDescription: `My core contribution to EcoScan centered on front-end development, creating the intuitive Chrome extension and mobile app UI for seamless eco-impact insights. I focused on delivering a user-friendly experience for barcode scanning, search, and real-time data display.
      We're building EcoScan, a suite of tools designed to seamlessly integrate environmental impact data into your shopping experience. Whether you're Browse on Amazon or in the grocery store, EcoScan provides instant transparency.Our solution includes: Browser Extension: A Chrome extension that overlays product listings with critical carbon emission and environmental impact details. Mobile App: A powerful app featuring: Barcode Scanner: Instantly scan products to view their carbon and water footprints, and see how they compare to alternatives. Search Function: Manually search our real-time database for product environmental information.Favorites & History: Track preferred eco-friendly products and review your scanning history. Scoring Methodology: Understand how products are scored for their environmental impact. EcoScan empowers consumers to make informed, sustainable decisions. By providing accessible data on a product's lifecycle – from farm to transport – we help individuals contribute to global zero-carbon pledges and broader sustainability goals. Our real-time database, hosted on Airtable, pulls data from government resources and product sheets, allowing us to continuously update and refine information. This robust backend ensures that you always have access to accurate, up-to-date environmental insights. Team: Karen Banci, Jairo Honorio, Sarah Young and Phil Roth.`,
    tags: ["Python", "Figma", "Software Development", "Web Development"],
    image: "/images/ecoScan5.webp",
    additionalImages: [
      "images/ecoScan4.webp",
      "images/ecoScan3.webp",
      "images/ecoScan2.webp",
      "images/ecoScan1.webp",
    ],
    client: "Self Project",
    duration: "24 hours",
    role: "Frontend Developer",
    year: "2023",
    link: "https://www.youtube.com/watch?v=RBm_2s8Qh4s&ab_channel=KarenHonorioBanci",
  },
  {
    id: 3,
    title: "Eleva – Life Strategy & Coaching Website",
    description:
      "Eleva is a modern website for a life coach empowering women through The ELEVA Method™ to align life and financial goals.",
    fullDescription:
      "Clean, elegant design with strategic use of white space and calming colors to inspire trust and clarity. Clear calls-to-action, including client onboarding and newsletter signup. Hero section with compelling messaging and a strong personal brand image. Structured comparison of “where you are” vs. “where you want to be” to speak directly to user pain points. Responsive layout and optimized performance across devices.",
    tags: ["Wix"],
    image: "/images/eleva-home.png",
    additionalImages: [
      "images/eleva-home-pt.png",
      "images/eleva-contact.png",
      "images/eleva-plan.png",
      "images/eleva-mockup.png",
    ],
    client: "Eleva",
    duration: "5 month",
    role: "Frontend Developer",
    year: "2025",
    link: "http://www.eleva.live",
  },
  {
    id: 4,
    title: "LETIH BEAUTY – Aesthetic Wellness Brand Website",
    description:
      "LETIH BEAUTY is a serene and elegant website created for a boutique beauty and wellness brand offering holistic treatments for face and body. The goal was to reflect the brand’s philosophy of inner calm, rejuvenation, and personalized care through a sophisticated and user-friendly digital experience.",
    fullDescription:
      "Clean, minimalist design with earthy tones and natural imagery to evoke tranquility. Mobile-optimized layout for on-the-go users. Highlight sections for mission, vision, and core values. Visual hierarchy built around photography to establish trust and showcase the spa environment. WhatsApp contact integration for quick communication. ",
    tags: ["JavaScript", "React", "Contentful", "Airtable"],
    image: "images/letih-home.webp",
    additionalImages: [
      "images/letih-about.webp",
      "images/letih-login.webp",
      "images/letih-client.webp",
      "images/letih-skin-routine.png",
      "images/letih-mockup.png",
    ],
    shape: "box",
    color: "#7928CA",
    client: "Letih Beauty",
    duration: "7 months",
    role: "Full Stack Developer",
    year: "2025",
    link: "https://letihbeauty.com/",
  },
  {
    id: 5,
    title: "Jairo Honorio – Personal Portfolio",
    description:
      "This personal portfolio was created for Jairo Honorio, a Senior Software Engineer at Google. The goal was to showcase his professional journey, leadership roles, and technical expertise in a clean, engaging, and easy-to-navigate format.",
    fullDescription:
      "Hero Section: A vibrant, welcoming photo paired with a clear title and CTA. About Me: A brief yet impactful introduction that highlights Jairo’s entrepreneurial and software engineering background. Interactive Timeline: Visually structured career path including roles, volunteer work, and achievements. Contact Section: Encourages direct communication with an inviting message and essential contact links. To create a personal brand website that effectively communicates the impact and experience of a senior tech professional, helping him connect with collaborators, recruiters, and peers.",
    tags: ["Jekill", "React", "JavaScript", "AMP"],
    image:
      "https://raw.githubusercontent.com/karenbanci/portfolio-images/refs/heads/main/jairo-home.webp",
    additionalImages: [
      "https://raw.githubusercontent.com/karenbanci/portfolio-images/refs/heads/main/jairo-contact.webp",
      "images/jairo-mockup.jpeg",
    ],
    shape: "torus",
    color: "#0070F3",
    client: "Jairo Honorio",
    duration: "2 months",
    role: "Full Stack Developer",
    year: "2022",
    link: "https://jairo.jahdsoft.com/",
  },
  {
    id: 6,
    title: "Slap of life (Global Game Jam)",
    description:
      "You live your life like any other. Wake up, eat some breakfast, go to work, save the day from government conspiracies. But there is just one thing, you MUST SLAP EVERYTHING!",
    fullDescription:
      "This group project, inspired by the Global Game Jam at USV University of Silicon Valley, is centered on Make me laugh. I developed the scenario (houses, trees, and streets) in 3D using Blender and Unreal Engine.",
    tags: ["Blender", "Unreal Engine", "Game Jam"],
    image: "images/slap-cover.webp",
    additionalImages: [
      "images/slap-city.webp",
      "images/slap-car-2.webp",
      "images/slap-car.webp",
      "images/slap-unreal.webp",
    ],
    shape: "octahedron",
    color: "#50E3C2",
    client: "Self Project",
    duration: "24 hours",
    role: "3D Developer",
    year: "2024",
    link: "https://globalgamejam.org/games/2024/slap-life-6",
  },
  {
    id: 7,
    title: "Immersive Periodic Table 3D",
    description:
      "An interactive 3D periodic table built with React and Three.js, showcasing elements in a visually appealing way.",
    fullDescription:
      "This project involved creating a fully interactive 3D periodic table using React and Three.js. The table allows users to explore the properties of each element in a visually engaging way. The project was designed to be part of my portfolio and improve my skills in web development.",
    tags: ["Three.js", "WebGL", "React", "Blender"],
    image: "/images/periodic-table-project.mov",
    additionalImages: ["/images/periodic-table-project2.png"],
    shape: "sphere",
    color: "#FF0080",
    client: "Self Project",
    duration: "1 month",
    role: "Frontend Developer",
    year: "2023",
    link: "https://karenbanci.github.io/periodic_table_development/",
  },
  {
    id: 8,
    title: "Marble Race - Game React Three FIber",
    description:
      "Bruno Simon's course project, a marble race game built with React Three Fiber.",
    fullDescription:
      "This project is a part of learning course of Bruno Simon. The project was built using React Three Fiber, a React renderer for Three.js, allowing for a seamless integration of 3D graphics into the React ecosystem. It works just only desktop version. The game features a marble racing through a 3D course, with various obstacles and challenges. ",
    tags: ["React", "React Three Fiber", "Three.js", "Vite"],
    image: "/images/marble-race.mov",
    additionalImages: ["images/marble-race-finish.png"],
    shape: "box",
    color: "#7928CA",
    client: "Self Project",
    duration: "3 days",
    role: "Frontend Developer & 3D Specialist",
    year: "2024",
    link: "https://karenbanci.github.io/game-react-three-fiber/",
  },
  {
    id: 9,
    title: "Mario Jump",
    description:
      "Mario Jump is an arcade-style endless runner game where the challenge is the player's endurance and reaction time. The goal is not to finish a level, but to survive as long as possible to achieve a high score.",
    fullDescription:
      "Make Mario jump over a continuous series of green pipes that move from the right to the left of the screen. The game is controlled with a single action. The player can press any key on the keyboard or click the screen to make Mario jump. The score increases by one point for each pipe the player successfully jumps over. The game ends immediately if Mario collides with one of the pipes. A Game Over screen appears, and the final score is recorded.",
    tags: ["JavaScript", "CSS", "HTML", "Game"],
    image: "/images/mario-jump.mov",
    additionalImages: ["images/mario-jump.png"],
    shape: "box",
    color: "#7928CA",
    client: "Self Project",
    duration: "2 hours",
    role: "Frontend Developer",
    year: "2022",
    link: "https://karenbanci.github.io/mini-games/mario-jump/index.html",
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

export default function ProjectDetail() {
  const { id } = useParams<{ id: string }>();
  const [currentImageIndex, setCurrentImageIndex] = useState(0);
  const [loading, setLoading] = useState(true);

  // Find project with matching id
  const project =
    projects.find((p) => p.id === parseInt(id || "0")) || projects[0];

  useEffect(() => {
    // Simulate loading
    setTimeout(() => {
      setLoading(false);
    }, 500);
  }, [project, id]);

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
        <p className="text-gray-300 mb-8">
          The project you're looking for doesn't exist.
        </p>
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
          className="inline-flex items-center text-primary-100 hover:text-white mb-8 transition-colors"
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

          <motion.div className="flex flex-wrap gap-2 mb-8" variants={fadeIn}>
            {project.tags.map((tag: string, index: number) => (
              <span
                key={index}
                className="text-sm px-3 py-1 rounded-full border border-primary-400 text-primary-400"
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
                {(() => {
                  const currentMedia = allImages[currentImageIndex];
                  const isVideo = /\.(mp4|webm|ogg|mov)$/i.test(currentMedia);
                  return isVideo ? (
                    <video
                      src={currentMedia}
                      className="w-full h-full object-cover"
                      controls
                      autoPlay
                      loop
                      muted
                      playsInline
                    />
                  ) : (
                    <img
                      src={currentMedia}
                      alt={`${project.title} - Image ${currentImageIndex + 1}`}
                      className="w-full h-full object-cover"
                    />
                  );
                })()}

                {allImages.length > 1 && (
                  <>
                    <button
                      onClick={() =>
                        setCurrentImageIndex((prev) =>
                          prev === 0 ? allImages.length - 1 : prev - 1
                        )
                      }
                      className="absolute left-4 top-1/2 transform -translate-y-1/2 w-10 h-10 rounded-full bg-black/50 flex items-center justify-center hover:bg-black/70 transition-colors"
                      aria-label="Previous image"
                    >
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        className="h-6 w-6"
                        fill="none"
                        viewBox="0 0 24 24"
                        stroke="currentColor"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth={2}
                          d="M15 19l-7-7 7-7"
                        />
                      </svg>
                    </button>
                    <button
                      onClick={() =>
                        setCurrentImageIndex((prev) =>
                          prev === allImages.length - 1 ? 0 : prev + 1
                        )
                      }
                      className="absolute right-4 top-1/2 transform -translate-y-1/2 w-10 h-10 rounded-full bg-black/50 flex items-center justify-center hover:bg-black/70 transition-colors"
                      aria-label="Next image"
                    >
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        className="h-6 w-6"
                        fill="none"
                        viewBox="0 0 24 24"
                        stroke="currentColor"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth={2}
                          d="M9 5l7 7-7 7"
                        />
                      </svg>
                    </button>
                  </>
                )}
              </div>

              {allImages.length > 1 && (
                <div className="flex space-x-2 overflow-x-auto py-2">
                  {allImages.map((media: string, idx: number) => {
                    const isVideo = /\.(mp4|webm|ogg|mov)$/i.test(media);
                    return (
                      <button
                        key={idx}
                        onClick={() => setCurrentImageIndex(idx)}
                        className={`w-20 h-16 rounded overflow-hidden flex-shrink-0 ${
                          currentImageIndex === idx
                            ? "ring-2 ring-pink-500"
                            : "opacity-70 hover:opacity-100"
                        }`}
                      >
                        {isVideo ? (
                          <video
                            src={media}
                            className="w-full h-full object-cover"
                            muted
                            playsInline
                            preload="metadata"
                          />
                        ) : (
                          <img
                            src={media}
                            alt={`Thumbnail ${idx + 1}`}
                            className="w-full h-full object-cover"
                          />
                        )}
                      </button>
                    );
                  })}
                </div>
              )}
            </div>

            <div className="backdrop-blur-sm bg-makara-50/30 p-6 rounded-xl">
              <h3 className="text-xl font-semibold mb-4 pb-2 border-b border-gray-700 text-primary-500">
                Project Details
              </h3>

              <div className="space-y-4">
                <div>
                  <p className="text-primary-500 text-sm mb-1">Client</p>
                  <p className="text-background-light ">{project.client}</p>
                </div>

                <div>
                  <p className="text-primary-500 text-sm mb-1">Year</p>
                  <p className="text-background-light ">{project.year}</p>
                </div>

                <div>
                  <p className="text-primary-500 text-sm mb-1">Duration</p>
                  <p className="text-background-light ">{project.duration}</p>
                </div>

                <div>
                  <p className="text-primary-500 text-sm mb-1">Role</p>
                  <p className="text-background-light ">{project.role}</p>
                </div>

                {project.link && (
                  <div>
                    <p className="text-primary-500 text-sm mb-1">
                      Live Preview
                    </p>
                    <a
                      href={project.link}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-primary-400 hover:text-background-light flex items-center my-5 px-3 py-1 rounded-full border border-primary-400 w-[8rem]"
                    >
                      Visit Site
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        className="h-4 w-4 ml-1"
                        viewBox="0 0 20 20"
                        fill="currentColor"
                      >
                        <path
                          fillRule="evenodd"
                          d="M10.293 5.293a1 1 0 011.414 0l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414-1.414L12.586 11H5a1 1 0 110-2h7.586l-2.293-2.293a1 1 0 010-1.414z"
                          clipRule="evenodd"
                        />
                      </svg>
                    </a>
                  </div>
                )}
              </div>
            </div>
          </motion.div>

          <motion.div variants={fadeIn} className="mb-16">
            <h2 className="text-2xl font-bold mb-6 text-primary-400">
              About this project
            </h2>
            <div className="text-background-light space-y-4">
              <p>{project.fullDescription}</p>
            </div>
          </motion.div>

          <motion.div
            variants={fadeIn}
            className="flex justify-between items-center"
          >
            <Link
              to={`/project/${
                project.id > 1 ? project.id - 1 : projects.length
              }`}
              className="px-6 py-3 flex items-center text-primary-100 rounded-full bg-primary-500 text-white font-medium hover:shadow-lg hover:text-primary-500  hover:bg-background-light hover:shadow-primary-100 transition-all duration-300 inline-block w-[13rem]"
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
              to={`/project/${
                project.id < projects.length ? project.id + 1 : 1
              }`}
              className="px-6 py-3 flex items-center text-primary-100 rounded-full bg-primary-500 text-white font-medium hover:shadow-lg hover:text-primary-500  hover:bg-background-light hover:shadow-primary-100 transition-all duration-300 inline-block w-[11rem]"
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
