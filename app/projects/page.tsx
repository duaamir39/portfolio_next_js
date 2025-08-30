"use client";

import { motion } from "framer-motion";
import { FaGraduationCap, FaBoxes, FaGlassWhiskey, FaCode, FaApple, FaUsers } from "react-icons/fa";

const projects = [
  {
    title: "Course and Student Registration System",
    icon: <FaGraduationCap className="text-4xl text-amber-400" />, 
    link: "https://github.com/duaamir39/database_project.git",
  },
  {
    title: "Inventory Management System",
    icon: <FaBoxes className="text-4xl text-teal-400" />, 
    link: "https://github.com/duaamir39/Panacloud-website.git",
  },
  {
    title: "Pepsi Website Clone",
    icon: <FaGlassWhiskey className="text-4xl text-sky-400" />, 
    link: "https://github.com/duaamir39/pepsi-website-clone.git",
  },
  {
    title: "Online Code Editor",
    icon: <FaCode className="text-4xl text-violet-400" />, 
    link: "https://github.com/duaamir39/code-editor.git",
  },
  {
    title: "Apple Website Clone",
    icon: <FaApple className="text-4xl text-gray-200" />, 
    link: "https://github.com/duaamir39/apple-website-clone-.git",
  },
  {
    title: "Attendance App",
    icon: <FaUsers className="text-4xl text-emerald-400" />, 
    link: "https://github.com/duaamir39/hack02.git",
  },
];


export default function ProjectsPage() {
  return (
    <section className="px-6 md:px-16 bg-gray-900" id="projects">
      <motion.h1
        initial={{ opacity: 0, y: -40 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        className="text-4xl font-bold text-center mb-12 text-white"
      >
        My Projects
      </motion.h1>
      <motion.div
        initial="hidden"
        animate="visible"
        variants={{
          hidden: { opacity: 0 },
          visible: {
            opacity: 1,
            transition: { staggerChildren: 0.2 }, 
          },
        }}
        className="grid gap-8 sm:grid-cols-2 md:grid-cols-3"
      >
        {projects.map((project, index) => (
          <motion.div
            key={index}
            variants={{
              hidden: { opacity: 0, y: 40 },
              visible: { opacity: 1, y: 0 },
            }}
            transition={{ duration: 0.6 }}
            whileHover={{ scale: 1.05, boxShadow: `0px 0px 20px 4px rgba(255,255,255,0.2)` }}
            whileTap={{ scale: 0.95 }}
            className="p-6 rounded-2xl shadow-lg bg-gray-800 flex flex-col items-center text-center hover:shadow-2xl transition-shadow"
          >
            <div className="mb-4">{project.icon}</div>
            <h3 className="text-lg font-semibold mb-4 text-white">{project.title}</h3>
            <a
              href={project.link}
              target="_blank"
              className="bg-gray-900 text-white px-4 py-2 rounded-xl 
             border border-pink-600 
             hover:bg-pink-600 hover:text-white 
             transition">
              View Project
            </a>
          </motion.div>
        ))}
      </motion.div>
    </section>
  );
}
