'use client';

import { motion } from 'framer-motion';
import { Mail, Github, Linkedin, FileText, MessageCircle, Send, MapPin } from 'lucide-react';
import { useState } from 'react';

interface ContactSectionProps {
    personalData: {
        linkedin: string;
        github: string;
        medium: string;
        location: string;
    };
}

export default function ContactSection({ personalData }: ContactSectionProps) {
    // Replace topmate username with your actual username
    const topmateUsername = 'sayedimran';

    const openTopmate = () => {
        window.open(`https://topmate.io/${topmateUsername}`, '_blank');
    };

    const socialLinks = [
        {
            icon: Github,
            href: personalData.github,
            label: 'GitHub',
            username: '@sayed-imran',
            color: 'hover:text-gray-300'
        },
        {
            icon: Linkedin,
            href: personalData.linkedin,
            label: 'LinkedIn',
            username: '/in/sayed-imran',
            color: 'hover:text-blue-400'
        },
        {
            icon: FileText,
            href: personalData.medium,
            label: 'Medium',
            username: '@sayedimran',
            color: 'hover:text-green-400'
        },
        {
            icon: Mail,
            href: `https://topmate.io/${topmateUsername}`,
            label: 'Topmate',
            username: 'Book a session',
            color: 'hover:text-cyan-400'
        }
    ];

    return (
        <section id="contact" className="py-20 relative">
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
                        <MessageCircle className="w-8 h-8 text-cyan-400 mr-3" />
                        <h2 className="text-4xl md:text-5xl font-bold text-white">
                            Get In Touch
                        </h2>
                    </div>
                    <p className="text-xl text-gray-300 max-w-3xl mx-auto">
                        Ready to discuss DevOps strategies, cloud architecture, or collaboration opportunities?
                        Let's connect and explore how we can work together.
                    </p>
                </motion.div>

                <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
                    {/* Topmate Integration */}
                    <motion.div
                        initial={{ opacity: 0, x: -30 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.6 }}
                    >
                        <div className="bg-slate-800/50 backdrop-blur-sm border border-slate-700/50 rounded-xl p-8">
                            <h3 className="text-2xl font-bold text-white mb-6">Book a Session</h3>

                            <div className="space-y-6">
                                <div className="text-gray-300">
                                    <p className="mb-4">I use Topmate to schedule meetings, consultations, and mentorship sessions directly.</p>
                                    <p className="mb-6">Book a time slot that works for you, and let's connect to discuss your project, answer your questions, or explore collaboration opportunities.</p>
                                </div>

                                <div className="space-y-4">
                                    <div className="bg-slate-700/40 rounded-lg p-4 border border-slate-600/40">
                                        <h4 className="font-medium text-white mb-2">What to expect:</h4>
                                        <ul className="space-y-2 text-gray-300 text-sm">
                                            <li className="flex items-start">
                                                <div className="w-2 h-2 bg-cyan-400 rounded-full mt-1.5 mr-2"></div>
                                                <span>Personalized 1:1 discussion</span>
                                            </li>
                                            <li className="flex items-start">
                                                <div className="w-2 h-2 bg-cyan-400 rounded-full mt-1.5 mr-2"></div>
                                                <span>Professional advice based on your needs</span>
                                            </li>
                                            <li className="flex items-start">
                                                <div className="w-2 h-2 bg-cyan-400 rounded-full mt-1.5 mr-2"></div>
                                                <span>Flexible scheduling options</span>
                                            </li>
                                        </ul>
                                    </div>
                                </div>

                                <motion.button
                                    onClick={openTopmate}
                                    whileHover={{ scale: 1.02, y: -2 }}
                                    whileTap={{ scale: 0.98 }}
                                    className="w-full px-6 py-3 bg-gradient-to-r from-cyan-500 to-blue-600 text-white rounded-lg hover:from-cyan-600 hover:to-blue-700 transition-all duration-200 font-medium shadow-lg hover:shadow-cyan-500/25 flex items-center justify-center"
                                >
                                    <Send className="w-5 h-5 mr-2" />
                                    Schedule a Meeting
                                </motion.button>
                            </div>
                        </div>
                    </motion.div>

                    {/* Contact Info & Social Links */}
                    <motion.div
                        initial={{ opacity: 0, x: 30 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.6, delay: 0.2 }}
                        className="space-y-8"
                    >
                        {/* Location */}
                        <div className="bg-slate-800/50 backdrop-blur-sm border border-slate-700/50 rounded-xl p-6">
                            <div className="flex items-center mb-4">
                                <MapPin className="w-6 h-6 text-cyan-400 mr-3" />
                                <h3 className="text-xl font-semibold text-white">Location</h3>
                            </div>
                            <p className="text-gray-300">{personalData.location}</p>
                            <p className="text-sm text-gray-400 mt-2">
                                Available for remote work and on-site consultations
                            </p>
                        </div>

                        {/* Social Links */}
                        <div className="bg-slate-800/50 backdrop-blur-sm border border-slate-700/50 rounded-xl p-6">
                            <h3 className="text-xl font-semibold text-white mb-6">Connect With Me</h3>
                            <div className="space-y-4">
                                {socialLinks.map((link, index) => {
                                    const Icon = link.icon;
                                    return (
                                        <motion.a
                                            key={link.label}
                                            href={link.href}
                                            target="_blank"
                                            rel="noopener noreferrer"
                                            initial={{ opacity: 0, x: 20 }}
                                            whileInView={{ opacity: 1, x: 0 }}
                                            viewport={{ once: true }}
                                            transition={{ duration: 0.6, delay: index * 0.1 }}
                                            whileHover={{ x: 5 }}
                                            className={`flex items-center p-4 bg-slate-700/30 rounded-lg border border-slate-600/30 hover:border-cyan-500/50 transition-all duration-200 text-gray-300 ${link.color} group`}
                                        >
                                            <Icon className="w-6 h-6 mr-4 flex-shrink-0" />
                                            <div className="flex-1">
                                                <div className="font-medium">{link.label}</div>
                                                <div className="text-sm text-gray-400 group-hover:text-gray-300 transition-colors">
                                                    {link.username}
                                                </div>
                                            </div>
                                        </motion.a>
                                    );
                                })}
                            </div>
                        </div>

                        {/* Availability */}
                        <div className="bg-slate-800/50 backdrop-blur-sm border border-slate-700/50 rounded-xl p-6">
                            <h3 className="text-xl font-semibold text-white mb-4">Availability</h3>
                            <div className="space-y-3 text-gray-300">
                                <div className="flex items-center">
                                    <div className="w-3 h-3 bg-green-400 rounded-full mr-3"></div>
                                    <span>Available for freelance projects</span>
                                </div>
                                <div className="flex items-center">
                                    <div className="w-3 h-3 bg-green-400 rounded-full mr-3"></div>
                                    <span>Open to speaking opportunities</span>
                                </div>
                                <div className="flex items-center">
                                    <div className="w-3 h-3 bg-green-400 rounded-full mr-3"></div>
                                    <span>Consulting & architecture reviews</span>
                                </div>
                                <div className="flex items-center">
                                    <div className="w-3 h-3 bg-yellow-400 rounded-full mr-3"></div>
                                    <span>Full-time opportunities (selective)</span>
                                </div>
                            </div>
                        </div>
                    </motion.div>
                </div>
            </div>
        </section>
    );
}
