'use client';

import { motion } from 'framer-motion';
import { ArrowDown, Download, MapPin } from 'lucide-react';
import Image from 'next/image';

interface HeroSectionProps {
    data: {
        name: string;
        title: string;
        subtitle: string;
        bio: string;
        location: string;
    };
}

export default function HeroSection({ data }: HeroSectionProps) {
    const scrollToNext = () => {
        const nextSection = document.getElementById('about');
        nextSection?.scrollIntoView({ behavior: 'smooth' });
    };

    return (
        <section className="min-h-screen flex items-center justify-center relative overflow-hidden">
            {/* Content */}
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20 text-center relative z-10">
                <motion.div
                    initial={{ opacity: 0, y: 30 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8 }}
                    className="space-y-8"
                >
                    {/* Profile Image */}
                    <motion.div
                        initial={{ scale: 0 }}
                        animate={{ scale: 1 }}
                        transition={{ delay: 0.3, type: "spring", stiffness: 200 }}
                        className="mx-auto w-40 h-40 relative"
                    >
                        <div className="w-full h-full rounded-full bg-gradient-to-r from-cyan-500 to-blue-600 p-1">
                            <div className="w-full h-full rounded-full bg-slate-800 flex items-center justify-center text-6xl font-bold text-cyan-400">
                                {data.name.split(' ').map(n => n[0]).join('')}
                            </div>
                        </div>
                    </motion.div>

                    {/* Name and Title */}
                    <div className="space-y-4">
                        <motion.h1
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ delay: 0.5 }}
                            className="text-5xl md:text-7xl font-bold"
                        >
                            <span className="text-white">{data.name}</span>
                        </motion.h1>

                        <motion.div
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ delay: 0.7 }}
                            className="space-y-2"
                        >
                            <h2 className="text-2xl md:text-3xl font-semibold text-cyan-400">
                                {data.title}
                            </h2>
                            <h3 className="text-lg md:text-xl text-gray-300">
                                {data.subtitle}
                            </h3>
                        </motion.div>
                    </div>

                    {/* Bio */}
                    <motion.p
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: 0.9 }}
                        className="text-lg text-gray-300 max-w-3xl mx-auto leading-relaxed"
                    >
                        {data.bio}
                    </motion.p>

                    {/* Location */}
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: 1.1 }}
                        className="flex items-center justify-center text-gray-400"
                    >
                        <MapPin className="w-5 h-5 mr-2" />
                        <span>{data.location}</span>
                    </motion.div>

                    {/* CTA Button */}
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: 1.3 }}
                        className="flex justify-center items-center"
                    >
                        <motion.button
                            whileHover={{ scale: 1.05, y: -2 }}
                            whileTap={{ scale: 0.95 }}
                            onClick={scrollToNext}
                            className="px-8 py-3 bg-gradient-to-r from-cyan-500 to-blue-600 text-white font-semibold rounded-lg hover:from-cyan-600 hover:to-blue-700 transition-all duration-200 shadow-lg hover:shadow-cyan-500/25"
                        >
                            View My Work
                        </motion.button>
                    </motion.div>
                </motion.div>

                {/* Scroll Indicator */}
                <motion.div
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ delay: 2 }}
                    className="absolute bottom-8 left-1/2 transform -translate-x-1/2"
                >
                    <motion.button
                        onClick={scrollToNext}
                        animate={{ y: [0, 10, 0] }}
                        transition={{ repeat: Infinity, duration: 2 }}
                        className="text-cyan-400 hover:text-cyan-300 transition-colors"
                    >
                        <ArrowDown className="w-6 h-6" />
                    </motion.button>
                </motion.div>
            </div>

            {/* Gradient Overlay */}
            <div className="absolute inset-0 bg-gradient-to-b from-transparent via-slate-900/50 to-slate-900 pointer-events-none" />
        </section>
    );
}
