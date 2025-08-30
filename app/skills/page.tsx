'use client';

import { motion } from 'framer-motion';
import { IconContext } from 'react-icons';
import { FaHtml5, FaCss3Alt, FaJs, FaReact, FaPython, FaLinux, FaCode } from 'react-icons/fa';
import { SiTypescript, SiExpress, SiMongodb, SiCplusplus, SiMysql } from 'react-icons/si';
import { MdAnimation } from "react-icons/md";

interface Skill {
    name: string;
    icon: React.ReactNode;
    color: string;
    glow: string; 
}

const skills: Skill[] = [
    { name: 'HTML', icon: <FaHtml5 />, color: 'text-orange-500', glow: 'shadow-orange-500/70' },
    { name: 'CSS', icon: <FaCss3Alt />, color: 'text-blue-500', glow: 'shadow-blue-500/70' },
    { name: 'JavaScript', icon: <FaJs />, color: 'text-yellow-400', glow: 'shadow-yellow-400/70' },
    { name: 'TypeScript', icon: <SiTypescript />, color: 'text-blue-400', glow: 'shadow-blue-400/70' },
    { name: 'React Js', icon: <FaReact />, color: 'text-cyan-400', glow: 'shadow-cyan-400/70' },
    { name: 'Express Js', icon: <SiExpress />, color: 'text-white', glow: 'shadow-gray-400/70' },
    { name: 'Mongo DB', icon: <SiMongodb />, color: 'text-green-500', glow: 'shadow-green-500/70' },
    { name: 'SQL', icon: <SiMysql />, color: 'text-orange-400', glow: 'shadow-orange-400/70' },
    { name: 'Web Animation', icon: <MdAnimation />, color: 'text-purple-400', glow: 'shadow-purple-400/70' },
    { name: 'Python', icon: <FaPython />, color: 'text-yellow-500', glow: 'shadow-yellow-500/70' },
    { name: 'C++', icon: <SiCplusplus />, color: 'text-blue-600', glow: 'shadow-blue-600/70' },
    { name: 'C#', icon: <FaCode />, color: 'text-purple-600', glow: 'shadow-purple-600/70' }, 
    { name: 'Linux', icon: <FaLinux />, color: 'text-white', glow: 'shadow-gray-200/70' },
];

export default function SkillsPage() {
    return (
        <IconContext.Provider value={{ size: '40' }}>
            <div className="flex flex-col items-center p-2 min-h-screen  bg-gray-900 text-white">
                <h1 className="text-4xl font-bold mb-12">My Technical Skills 🛠️</h1>
                <motion.div
                    className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-5 gap-8"
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ duration: 0.5 }}
                >
                    {skills.map((skill, index) => (
                        <motion.div
                            key={skill.name}
                            className={`flex flex-col items-center p-6 bg-gray-800 rounded-lg shadow-lg transition-all duration-300`}
                            initial={{ opacity: 0, y: 50 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.5, delay: index * 0.1 }}
                            whileHover={{
                                scale: 1.1,
                                y: -5,
                                boxShadow: `0px 0px 20px 4px rgba(255,255,255,0.2)`,
                            }}
                        >
                            <span className={`${skill.color} text-5xl`}>{skill.icon}</span>
                            <span className="mt-4 text-lg font-medium">{skill.name}</span>
                        </motion.div>
                    ))}
                </motion.div>
            </div>
        </IconContext.Provider>
    );
}
