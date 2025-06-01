'use client';

import { motion } from 'framer-motion';
import { Code, CheckCircle } from 'lucide-react';
import Image from 'next/image';

interface Project {
    id: number;
    title: string;
    description: string;
    technologies: string[];
    link: string;
    image: string;
    highlights: string[];
}

interface ProjectsSectionProps {
    projects: Project[];
}

export default function ProjectsSection({ projects }: ProjectsSectionProps) {
    return (
        <section id="projects" className="py-20 relative">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                {/* Section Header */}
                <motion.div
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.6 }}
                    className="text-center mb-16"
                >
                    <div className="flex items-center justify-center mb-4">
                        <Code className="w-8 h-8 text-cyan-400 mr-3" />
                        <h2 className="text-4xl md:text-5xl font-bold text-white">
                            Featured Projects
                        </h2>
                    </div>
                    <p className="text-xl text-gray-300 max-w-3xl mx-auto">
                        A collection of DevOps and cloud infrastructure projects that demonstrate my expertise
                    </p>
                </motion.div>

                {/* Projects Grid */}
                <div className="space-y-16">
                    {projects.map((project, index) => (
                        <motion.div
                            key={project.id}
                            initial={{ opacity: 0, y: 50 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.8, delay: index * 0.2 }}
                            className={`flex flex-col ${index % 2 === 0 ? 'lg:flex-row' : 'lg:flex-row-reverse'
                                } gap-8 lg:gap-12 items-center`}
                        >
                            {/* Project Image */}
                            <div className="flex-1 relative group">
                                <motion.div
                                    whileHover={{ scale: 1.02 }}
                                    transition={{ duration: 0.3 }}
                                    className="relative aspect-video rounded-xl overflow-hidden bg-slate-800 border border-slate-700"
                                >
                                    {/* Project image */}
                                    <div className="relative w-full h-full">
                                        {/* Loading state (shown by default) */}
                                        <div
                                            id={`loading-${project.id}`}
                                            className="absolute inset-0 w-full h-full bg-gradient-to-br from-slate-800 via-slate-700 to-slate-800 flex items-center justify-center z-10"
                                        >
                                            <div className="text-center">
                                                <div className="w-12 h-12 border-2 border-cyan-400 border-t-transparent rounded-full animate-spin mx-auto mb-4"></div>
                                                <p className="text-gray-400 text-sm">Loading preview...</p>
                                            </div>
                                        </div>

                                        <Image
                                            src={project.image}
                                            alt={`${project.title} preview`}
                                            fill
                                            sizes="(max-width: 768px) 100vw, 50vw"
                                            className="object-cover z-20"
                                            priority={index === 0}
                                            onLoad={() => {
                                                // Hide loader when image loads
                                                const loadingEl = document.getElementById(`loading-${project.id}`);
                                                if (loadingEl) loadingEl.style.display = 'none';
                                            }}
                                            onError={(e) => {
                                                // Fallback to placeholder on error
                                                const target = e.target as HTMLImageElement;
                                                target.onerror = null; // Prevent infinite callbacks
                                                target.style.display = 'none';
                                                const loadingEl = document.getElementById(`loading-${project.id}`);
                                                if (loadingEl) loadingEl.style.display = 'none';
                                                const fallbackEl = document.getElementById(`fallback-${project.id}`);
                                                if (fallbackEl) fallbackEl.style.display = 'flex';
                                            }}
                                        />

                                        {/* Fallback placeholder (hidden by default) */}
                                        <div
                                            id={`fallback-${project.id}`}
                                            className="absolute inset-0 w-full h-full bg-gradient-to-br from-slate-800 via-slate-700 to-slate-800 flex items-center justify-center hidden z-20"
                                        >
                                            <div className="text-center">
                                                <Code className="w-16 h-16 text-cyan-400 mx-auto mb-4" />
                                                <h3 className="text-xl font-semibold text-white mb-2">{project.title}</h3>
                                                <p className="text-gray-400 text-sm">Project Preview</p>
                                            </div>
                                        </div>
                                    </div>

                                    {/* Overlay */}
                                    <div className="absolute inset-0 bg-black/0 group-hover:bg-black/20 transition-all duration-300" />

                                    {/* Action Buttons */}
                                    <div className="absolute top-4 right-4 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex gap-2">
                                        <motion.a
                                            href={project.link}
                                            target="_blank"
                                            rel="noopener noreferrer"
                                            whileHover={{ scale: 1.1 }}
                                            whileTap={{ scale: 0.9 }}
                                            className="inline-flex items-center justify-center w-10 h-10 bg-slate-800/80 backdrop-blur-sm border border-slate-600 rounded-lg text-white hover:text-cyan-400 hover:border-cyan-500 transition-all duration-200"
                                        >
                                            <Code className="w-5 h-5" />
                                        </motion.a>
                                    </div>
                                </motion.div>
                            </div>

                            {/* Project Info */}
                            <div className="flex-1 space-y-6">
                                <div>
                                    <h3 className="text-3xl font-bold text-white mb-4">
                                        {project.title}
                                    </h3>
                                    <p className="text-lg text-gray-300 leading-relaxed">
                                        {project.description}
                                    </p>
                                </div>

                                {/* Key Highlights */}
                                <div>
                                    <h4 className="text-lg font-semibold text-cyan-400 mb-3">Key Achievements</h4>
                                    <ul className="space-y-2">
                                        {project.highlights.map((highlight, idx) => (
                                            <li key={idx} className="flex items-start">
                                                <CheckCircle className="w-5 h-5 text-green-400 mr-3 mt-0.5 flex-shrink-0" />
                                                <span className="text-gray-300">{highlight}</span>
                                            </li>
                                        ))}
                                    </ul>
                                </div>

                                {/* Technologies */}
                                <div>
                                    <h4 className="text-lg font-semibold text-cyan-400 mb-3">Technologies Used</h4>
                                    <div className="flex flex-wrap gap-2">
                                        {project.technologies.map((tech, idx) => (
                                            <span
                                                key={idx}
                                                className="px-3 py-1 text-sm bg-slate-700/50 border border-slate-600/50 rounded-full text-gray-300 hover:border-cyan-500/50 hover:text-cyan-400 transition-all duration-200"
                                            >
                                                {tech}
                                            </span>
                                        ))}
                                    </div>
                                </div>

                                {/* Action Buttons */}
                                <div className="flex flex-col sm:flex-row gap-4">
                                    <motion.a
                                        href={project.link}
                                        target="_blank"
                                        rel="noopener noreferrer"
                                        whileHover={{ scale: 1.02, y: -2 }}
                                        whileTap={{ scale: 0.98 }}
                                        className="inline-flex items-center justify-center px-6 py-3 bg-slate-700 border border-slate-600 text-white rounded-lg hover:bg-slate-600 hover:border-cyan-500 transition-all duration-200 font-medium"
                                    >
                                        <Code className="w-5 h-5 mr-2" />
                                        View Project
                                    </motion.a>
                                </div>
                            </div>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
}
