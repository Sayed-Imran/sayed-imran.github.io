'use client';

import { motion } from 'framer-motion';
import { useState, useEffect } from 'react';
import { Menu, X, Github, Linkedin, Mail, FileText } from 'lucide-react';

export default function Navigation() {
    const [isOpen, setIsOpen] = useState(false);
    const [scrolled, setScrolled] = useState(false);

    useEffect(() => {
        const handleScroll = () => {
            setScrolled(window.scrollY > 50);
        };
        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    const navItems = [
        { name: 'About', href: '#about' },
        { name: 'Certifications', href: '#certifications' },
        { name: 'Projects', href: '#projects' },
        { name: 'Articles', href: '#articles' },
        { name: 'Speaking', href: '#speaking' },
        { name: 'Contact', href: '#contact' },
    ];

    return (
        <motion.nav
            initial={{ y: -100 }}
            animate={{ y: 0 }}
            className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${scrolled
                ? 'bg-slate-900/90 backdrop-blur-md border-b border-cyan-500/20'
                : 'bg-transparent'
                }`}
        >
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="flex justify-between items-center py-4">
                    {/* Logo */}
                    <motion.div
                        whileHover={{ scale: 1.05 }}
                        className="text-2xl font-bold"
                    >
                        <span className="text-cyan-400">Dev</span>
                        <span className="text-white">Ops</span>
                    </motion.div>

                    {/* Desktop Navigation */}
                    <div className="hidden md:flex space-x-8">
                        {navItems.map((item) => (
                            <motion.a
                                key={item.name}
                                href={item.href}
                                whileHover={{ y: -2 }}
                                className="text-gray-300 hover:text-cyan-400 transition-colors duration-200 font-medium"
                            >
                                {item.name}
                            </motion.a>
                        ))}
                    </div>

                    {/* Social Links */}
                    <div className="hidden md:flex items-center space-x-4">
                        <motion.a
                            href="https://github.com"
                            target="_blank"
                            rel="noopener noreferrer"
                            whileHover={{ scale: 1.1, y: -2 }}
                            className="text-gray-400 hover:text-cyan-400 transition-colors"
                        >
                            <Github size={20} />
                        </motion.a>
                        <motion.a
                            href="https://linkedin.com"
                            target="_blank"
                            rel="noopener noreferrer"
                            whileHover={{ scale: 1.1, y: -2 }}
                            className="text-gray-400 hover:text-cyan-400 transition-colors"
                        >
                            <Linkedin size={20} />
                        </motion.a>
                        <motion.a
                            href="https://medium.com"
                            target="_blank"
                            rel="noopener noreferrer"
                            whileHover={{ scale: 1.1, y: -2 }}
                            className="text-gray-400 hover:text-cyan-400 transition-colors"
                        >
                            <FileText size={20} />
                        </motion.a>
                        {/* Email link removed */}
                    </div>

                    {/* Mobile menu button */}
                    <div className="md:hidden">
                        <button
                            onClick={() => setIsOpen(!isOpen)}
                            className="text-gray-300 hover:text-cyan-400 transition-colors"
                        >
                            {isOpen ? <X size={24} /> : <Menu size={24} />}
                        </button>
                    </div>
                </div>

                {/* Mobile Navigation */}
                {isOpen && (
                    <motion.div
                        initial={{ opacity: 0, height: 0 }}
                        animate={{ opacity: 1, height: 'auto' }}
                        exit={{ opacity: 0, height: 0 }}
                        className="md:hidden border-t border-cyan-500/20 py-4"
                    >
                        <div className="flex flex-col space-y-4">
                            {navItems.map((item) => (
                                <a
                                    key={item.name}
                                    href={item.href}
                                    onClick={() => setIsOpen(false)}
                                    className="text-gray-300 hover:text-cyan-400 transition-colors duration-200 font-medium"
                                >
                                    {item.name}
                                </a>
                            ))}
                            <div className="flex space-x-4 pt-4 border-t border-cyan-500/20">
                                <a
                                    href="https://github.com"
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="text-gray-400 hover:text-cyan-400 transition-colors"
                                >
                                    <Github size={20} />
                                </a>
                                <a
                                    href="https://linkedin.com"
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="text-gray-400 hover:text-cyan-400 transition-colors"
                                >
                                    <Linkedin size={20} />
                                </a>
                                <a
                                    href="https://medium.com"
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="text-gray-400 hover:text-cyan-400 transition-colors"
                                >
                                    <FileText size={20} />
                                </a>
                                {/* Email link removed */}
                            </div>
                        </div>
                    </motion.div>
                )}
            </div>
        </motion.nav>
    );
}
