import { motion } from "framer-motion";
import BtnResume from "../components/BtnResume";
import { useEffect } from "react";
import { useScene } from "../experience/Scene";

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

// Skills data
const skills = [
  { name: "Python", level: 85 },
  { name: "Ruby", level: 65 },
  { name: "MySQL", level: 70 },
  { name: "React", level: 85 },
  { name: "Three.js", level: 60 },
  { name: "TypeScript", level: 50 },
  { name: "WebGL", level: 50 },
  { name: "Node.js", level: 70 },
];

// Experiences data
const experiences = [
  {
    id: 1,
    role: "Full Stack Developer - Freelancer",
    company: "VIVE Church",
    period: "Jan 2025 - Present",
    description:
      "Develop visually accurate and responsive pages from designs, manage and update CRM data efficiently, and identify and resolve bugs to enhance performance and user experience.",
    link: "https://www.vivechurch.org/",
  },
  {
    id: 2,
    role: "Full Stack Developer - Freelancer",
    company: "Frontier Digital",
    period: "Oct 2022 - Mar 2025",
    description:
      "Developed a Three.js 3D viewer for interactive model visualization, conducted audits to improve performance, security, and functionality, optimized the codebase for efficiency and scalability with client approval, and maintained JavaScript code while managing Netlify projects to ensure seamless operation.",
    link: "https://frontierdigital.io/",
  },
  {
    id: 3,
    role: "Frontend Developer - Volunteer",
    company: "Oppia Foundation",
    period: "Jul 2022 - Dec 2022",
    description:
      "Debugging and fixing issues in real-time to enhance user experience, writing open-source code based on technical requirements, reproducing and resolving bugs, reporting findings to Front-end Seniors, and identifying code improvement opportunities.",
    link: "https://www.oppiafoundation.org/",
  },
  {
    id: 4,
    role: "Career transition",
    company: "Career Break",
    period: "Sep 2021 - Jul 2022",
    description: "",
    link: "",
  },
  {
    id: 4,
    role: "Chemistry Scientist",
    company: "CPA Corantes e Produtos para Anodização de Alumínio Ltda",
    period: "Sep 2016 - Sep 2021",
    description:
      "Developed anodizing chemicals and dyes for dyeing aluminum, resulting in expansion of the product line, improved color consistency, entry into new markets with new products; Quality control following ISO 9001 standards, leading to reduction in product defects, successful recertification audits with zero non-conformances; Managed laboratory chemical purchases and controlled inventory efficiently; Drafting of FISPQ and MSDS safety documents, significantly improving workplace safety evidenced reduction in safety incidents, and fostering a stronger safety culture;  Developed chemical handling safety training programs, leading to improved employee safety awareness and compliance; Pioneer advancements in chemical engineering processes and production methodologies; Optimized spectrophotometer processes for advanced dye analysis development, resulting in a reduction in analysis time, improved accuracy of color matching, or accelerated the development of new dye formulations; Effluent treatment process optimization for enhanced environmental sustainability, reducing specific pollutant levels, decreasing water consumption, and achieving compliance with new stricter environmental regulations, saving potential fines ",
    link: "http://www.cpacorantes.com.br",
  },
];

const SkillBar = ({ name, level }: { name: string; level: number }) => (
  <div className="mb-4">
    <div className="flex justify-between mb-1">
      <span className="font-medium">{name}</span>
      <span className="text-gray-400">{level}%</span>
    </div>
    <div className="w-full bg-gray-800 rounded-full h-2">
      <motion.div
        className="h-2 rounded-full bg-gradient-to-r from-primary-500 to-white"
        initial={{ width: 0 }}
        animate={{ width: `${level}%` }}
        transition={{ duration: 1, ease: "easeOut", delay: 0.3 }}
      />
    </div>
  </div>
);

const Experience = ({
  role,
  company,
  period,
  description,
  link,
}: {
  role: string;
  company: string;
  period: string;
  description: string;
  link: string;
}) => (
  <motion.div
    className="mb-8 relative pl-8 before:content-[''] before:absolute before:left-0 before:top-2 before:w-3 before:h-3 before:bg-primary-500 before:rounded-full before:z-10 after:content-[''] after:absolute after:left-1.5 after:top-10 after:bottom-0 after:w-[1px] after:bg-gray-700 after:z-0 last:after:hidden"
    variants={fadeIn}
  >
    <h3 className="text-xl font-bold">{role}</h3>
    <div className="flex items-center text-sm text-gray-300 mb-2">
      <span>{company}</span>
      <span className="mx-2">•</span>
      <span>{period}</span>
    </div>
    <p className="text-gray-400">{description}</p>
    <a className="text-gray-400" href={link} target="_blank" rel="noreferrer">
      {link}
    </a>
  </motion.div>
);

export default function About() {
  return (
    <div className="min-h-screen py-20 px-4 md:px-8">
      <div className="container mx-auto max-w-6xl">
        <motion.div
          initial="hidden"
          animate="visible"
          variants={staggerContainer}
          className="mb-16 text-center"
        >
          <motion.h1
            className="text-4xl md:text-5xl font-bold mb-6 text-primary-500 mt-10"
            variants={fadeIn}
          >
            About Me
          </motion.h1>
          <motion.p
            className="text-xl text-gray-300 max-w-3xl mx-auto"
            variants={fadeIn}
          >
            Learn more about my journey, skills, and expertise in creative
            development.
          </motion.p>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">
          <motion.div
            className="backdrop-blur-sm bg-gray-900/30 p-8 rounded-2xl shadow-xl"
            variants={fadeIn}
          >
            <motion.div
              initial="hidden"
              animate="visible"
              variants={staggerContainer}
            >
              <motion.h2
                className="text-2xl font-bold mb-6 pb-2 border-b border-gray-800 text-primary-500"
                variants={fadeIn}
              >
                My Story
              </motion.h2>

              <motion.div variants={fadeIn} className="space-y-4 text-gray-300">
                <p>
                  Hello! I'm Karen Caroline Honorio Banci, a Full Stack
                  Developer with a background in Chemistry and a passion for
                  technology. My journey began in science, but in 2021, I
                  transitioned into software development, where I found my true
                  calling in coding and problem-solving.
                </p>
                <p>
                  Since moving to Silicon Valley, I've been expanding my
                  expertise in Computer Science at Foothill College while
                  building AI applications and interactive 3D experiences. I
                  specialize in React, ThreeJS, and Python, crafting dynamic and
                  immersive digital solutions that blend design and technology.
                </p>
                <p>
                  When I'm not coding, I enjoy exploring AI and staying updated
                  on the latest tech trends. I'm always eager for new challenges
                  and excited about opportunities to create innovative digital.
                </p>
                <br />
              </motion.div>

              <motion.h2
                className="text-2xl font-bold mt-12 mb-6 pb-2 border-b border-gray-800 text-primary-500"
                variants={fadeIn}
              >
                Skills
              </motion.h2>

              <motion.div
                className="grid grid-cols-1 gap-2"
                variants={staggerContainer}
                initial="hidden"
                animate="visible"
              >
                {skills.map((skill) => (
                  <motion.div key={skill.name} variants={fadeIn}>
                    <SkillBar name={skill.name} level={skill.level} />
                  </motion.div>
                ))}
              </motion.div>

              <motion.h2
                className="text-2xl font-bold mt-12 mb-6 pb-2 border-b border-gray-800 text-primary-500"
                variants={fadeIn}
              >
                Education
              </motion.h2>

              <motion.div variants={fadeIn}>
                <div className="mb-4">
                  <h3 className="text-xl font-bold text-primary-100">
                    Associate's Degree, Computer Science
                  </h3>
                  <div className="text-gray-300 text-sm mb-2">
                    Foothill College • 2022 - 2026
                  </div>
                  <p className="text-gray-400">
                    I gained expertise in programming, algorithms, data
                    structures, databases, operating systems, software
                    development, cybersecurity, artificial intelligence,
                    networking, and computational theory, developing strong
                    problem-solving skills for technology and software
                    engineering careers.
                  </p>
                </div>

                <div className="mb-4">
                  <h3 className="text-xl font-bold text-primary-100">
                    Bootcamp, Full Stack Web Developer - Batch #766
                  </h3>
                  <div className="text-gray-300 text-sm mb-2">
                    Le Wagon • Oct 2021 - Dec 2021
                  </div>
                  <p className="text-gray-400">
                    Developer tools and workflow, Ruby programming, Software
                    architecture, relational database, SQL & ORM, Bootstrap, JS,
                    HTML and CSS, Git, GitHub and marketplace development (like
                    Airbnb).
                  </p>
                </div>

                <div className="mb-4">
                  <h3 className="text-xl font-bold text-primary-100">
                    Bachelor's Degree, Chemistry
                  </h3>
                  <div className="text-gray-300 text-sm mb-2">
                    Faculdade São Bernardo - FASB, Brazil • Jan 2013 -Dec 2016
                  </div>
                  <p className="text-gray-400">
                    I studied organic, inorganic, physical, analytical, and
                    biochemistry, gaining expertise in laboratory techniques,
                    research methods, and chemical safety principles.
                  </p>
                </div>
              </motion.div>
            </motion.div>
          </motion.div>

          <motion.div
            className="backdrop-blur-sm bg-gray-900/30 p-8 rounded-2xl shadow-xl"
            variants={fadeIn}
          >
            <motion.div
              initial="hidden"
              animate="visible"
              variants={staggerContainer}
            >
              <motion.h2
                className="text-2xl font-bold mb-8 pb-2 border-b border-gray-800 text-primary-500"
                variants={fadeIn}
              >
                Experience
              </motion.h2>

              <motion.div
                className="space-y-4 text-primary-100"
                variants={staggerContainer}
                initial="hidden"
                animate="visible"
              >
                {experiences.map((exp) => (
                  <Experience
                    key={exp.id}
                    role={exp.role}
                    company={exp.company}
                    period={exp.period}
                    description={exp.description}
                    link={exp.link}
                  />
                ))}
              </motion.div>
              <div className="mb-4"> </div>

              <BtnResume />
            </motion.div>
          </motion.div>
        </div>
      </div>
    </div>
  );
}
