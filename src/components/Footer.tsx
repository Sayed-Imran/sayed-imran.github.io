'use client';

import { motion } from 'framer-motion';
import { Github, Linkedin, Mail, FileText, Heart, ArrowUp } from 'lucide-react';

interface FooterProps {
    personalData: {
        name: string;
        linkedin: string;
        github: string;
        medium: string;
    };
}

export default function Footer({ personalData }: FooterProps) {
    const scrollToTop = () => {
        window.scrollTo({ top: 0, behavior: 'smooth' });
    };

    const currentYear = new Date().getFullYear();

    const socialLinks = [
        { icon: Github, href: personalData.github, label: 'GitHub' },
        { icon: Linkedin, href: personalData.linkedin, label: 'LinkedIn' },
        { icon: FileText, href: personalData.medium, label: 'Medium' },
    ];

    const quickLinks = [
        { name: 'About', href: '#about' },
        { name: 'Certifications', href: '#certifications' },
        { name: 'Projects', href: '#projects' },
        { name: 'Articles', href: '#articles' },
        { name: 'Speaking', href: '#speaking' },
        { name: 'Contact', href: '#contact' },
    ];

    return (
        <footer className="relative bg-slate-900/50 backdrop-blur-sm border-t border-slate-700/50">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
                <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
                    {/* Brand Section */}
                    <div className="md:col-span-1">
                        <motion.div
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.6 }}
                        >
                            <div className="text-2xl font-bold mb-4">
                                <span className="text-cyan-400">Dev</span>
                                <span className="text-white">Ops</span>
                            </div>
                            <p className="text-gray-400 text-sm leading-relaxed">
                                Building scalable infrastructure and empowering teams through DevOps excellence,
                                cloud innovation, and modern engineering practices.
                            </p>
                        </motion.div>
                    </div>

                    {/* Quick Links */}
                    <div className="md:col-span-1">
                        <motion.div
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.6, delay: 0.1 }}
                        >
                            <h3 className="text-white font-semibold mb-4">Quick Links</h3>
                            <ul className="space-y-2">
                                {quickLinks.map((link) => (
                                    <li key={link.name}>
                                        <a
                                            href={link.href}
                                            className="text-gray-400 hover:text-cyan-400 transition-colors duration-200 text-sm"
                                        >
                                            {link.name}
                                        </a>
                                    </li>
                                ))}
                            </ul>
                        </motion.div>
                    </div>

                    {/* Technologies */}
                    <div className="md:col-span-1">
                        <motion.div
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.6, delay: 0.2 }}
                        >
                            <h3 className="text-white font-semibold mb-4">Expertise</h3>
                            <ul className="space-y-2 text-sm text-gray-400">
                                <li>Kubernetes & Docker</li>
                                <li>AWS, GCP, Azure</li>
                                <li>Terraform & Ansible</li>
                                <li>CI/CD & GitOps</li>
                                <li>Monitoring & Observability</li>
                                <li>Infrastructure as Code</li>
                            </ul>
                        </motion.div>
                    </div>

                    {/* Contact & Social */}
                    <div className="md:col-span-1">
                        <motion.div
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.6, delay: 0.3 }}
                        >
                            <h3 className="text-white font-semibold mb-4">Connect</h3>
                            <div className="flex space-x-4 mb-4">
                                {socialLinks.map((link) => {
                                    const Icon = link.icon;
                                    return (
                                        <motion.a
                                            key={link.label}
                                            href={link.href}
                                            target="_blank"
                                            rel="noopener noreferrer"
                                            whileHover={{ scale: 1.1, y: -2 }}
                                            whileTap={{ scale: 0.9 }}
                                            className="text-gray-400 hover:text-cyan-400 transition-colors duration-200"
                                            aria-label={link.label}
                                        >
                                            <Icon className="w-5 h-5" />
                                        </motion.a>
                                    );
                                })}
                            </div>
                            <div className="text-sm text-gray-400">
                                <p>Available for:</p>
                                <ul className="mt-2 space-y-1">
                                    <li>• Consulting projects</li>
                                    <li>• Speaking engagements</li>
                                    <li>• Architecture reviews</li>
                                </ul>
                            </div>
                        </motion.div>
                    </div>
                </div>

                {/* Bottom Section */}
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.6, delay: 0.4 }}
                    className="mt-12 pt-8 border-t border-slate-700/50 flex flex-col md:flex-row justify-between items-center"
                >
                    <div className="flex items-center text-gray-400 text-sm">
                        <span>© {currentYear} {personalData.name}. Built with</span>
                        <Heart className="w-4 h-4 mx-1 text-red-400" />
                        <span>and Next.js</span>
                    </div>

                    <div className="flex items-center space-x-6 mt-4 md:mt-0">
                        <div className="text-xs text-gray-500">
                            Last updated: {new Date().toLocaleDateString('en-GB', {
                                day: '2-digit',
                                month: '2-digit',
                                year: 'numeric'
                            })}
                        </div>

                        <motion.button
                            onClick={scrollToTop}
                            whileHover={{ scale: 1.1, y: -2 }}
                            whileTap={{ scale: 0.9 }}
                            className="flex items-center justify-center w-10 h-10 bg-slate-800 border border-slate-600 rounded-lg text-gray-400 hover:text-cyan-400 hover:border-cyan-500 transition-all duration-200"
                            aria-label="Scroll to top"
                        >
                            <ArrowUp className="w-5 h-5" />
                        </motion.button>
                    </div>
                </motion.div>
            </div>

            {/* Background Pattern */}
            <div className="absolute inset-0 opacity-5">
                <div className="absolute inset-0 bg-gradient-to-b from-transparent to-slate-900" />
                <svg className="absolute inset-0 w-full h-full" xmlns="http://www.w3.org/2000/svg">
                    <defs>
                        <pattern id="footer-grid" x="0" y="0" width="40" height="40" patternUnits="userSpaceOnUse">
                            <path d="M 40 0 L 0 0 0 40" fill="none" stroke="currentColor" strokeWidth="1" />
                        </pattern>
                    </defs>
                    <rect width="100%" height="100%" fill="url(#footer-grid)" />
                </svg>
            </div>
        </footer>
    );
}
