'use client';

import { motion } from 'framer-motion';
import { FaBriefcase } from 'react-icons/fa';

interface ExperienceCardProps {
    title: string;
    company: string;
    description: string;
}

const ExperienceCard = ({ title, company, description }: ExperienceCardProps) => (
    <motion.div
        initial={{ opacity: 0, x: -50 }}
        whileInView={{ opacity: 1, x: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.5 }}
        whileHover={{ scale: 1.03, boxShadow: `0px 0px 20px 4px rgba(255,255,255,0.2)` }}
        className="bg-gray-800 p-6 rounded-lg shadow-lg mb-6 hover:shadow-pink-400/40 transition"
    >
        <div className="flex items-center gap-3 mb-3">
            <FaBriefcase className="text-pink-500 text-xl" />
            <h3 className="text-xl font-bold text-pink-500">{title}</h3>
        </div>
        <p className="text-gray-400 italic mb-2">{company}</p>
        <p className="text-gray-300">{description}</p>
    </motion.div>
);

export default function Home() {
    return (
        <main className="flex flex-col items-center min-h-screen p-8 pt-24 bg-gray-900 text-white">
            <motion.header
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8 }}
                className="text-center max-w-4xl"
            >
                <h1 className="text-6xl font-bold mb-2">Dua Amir</h1>
                <h2 className="text-2xl text-pink-500 mb-6">MERN Stack Developer</h2>
                <p className="max-w-2xl mx-auto mb-16 text-lg text-gray-300">
                    A dynamic MERN Stack Developer with two years of experience creating robust and scalable web applications. 
                    Passionate about leveraging modern technologies to deliver innovative solutions that meet user needs 
                    and drive engagement.
                </p>
            </motion.header>
            <section className="w-full max-w-4xl">
                <h2 className="text-4xl font-bold text-center mb-10">Work Experience</h2>
                <ExperienceCard
                    title="Senior Assistant Trainer"
                    company="Governor House Sindh (IT-Initiative)"
                    description="Managed 1,500 students by answering queries, checking assignments, debugging errors, and establishing a hierarchical team structure to streamline query resolution."
                />
                <ExperienceCard
                    title="MERN Stack Trainer"
                    company="Saylani Welfare International Trust"
                    description="Trained students in web development, conducted hackathons, and implemented a structured evaluation system that improved student performance."
                />
                <ExperienceCard
                    title="Web Development Intern"
                    company="Youth Evolution Foundation"
                    description="Developed and maintained MERN stack web applications, collaborated on user-friendly interface designs, and participated in code reviews and debugging."
                />
            </section>
        </main>
    );
}
