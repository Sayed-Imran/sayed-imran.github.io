'use client';

import { motion } from 'framer-motion';
import { ExternalLink, Calendar, Award, ChevronDown, ChevronUp } from 'lucide-react';
import Image from 'next/image';
import { useState } from 'react';

interface Certification {
    id: number;
    name: string;
    issuer: string;
    date: string;
    credentialId: string;
    logo: string;
    verificationUrl: string;
}

interface CertificationsSectionProps {
    certifications: Certification[];
}

export default function CertificationsSection({ certifications }: CertificationsSectionProps) {
    const [showAll, setShowAll] = useState(false);
    const displayedCertifications = showAll ? certifications : certifications.slice(0, 4);

    return (
        <section id="certifications" className="py-20 relative">
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
                        <Award className="w-8 h-8 text-cyan-400 mr-3" />
                        <h2 className="text-4xl md:text-5xl font-bold text-white">
                            Certifications
                        </h2>
                    </div>
                    <p className="text-xl text-gray-300 max-w-3xl mx-auto">
                        Professional certifications that validate my expertise in cloud technologies and DevOps practices
                    </p>
                </motion.div>

                {/* Certifications Grid */}
                <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                    {displayedCertifications.map((cert, index) => (
                        <motion.div
                            key={cert.id}
                            initial={{ opacity: 0, y: 30 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.6, delay: index * 0.1 }}
                            whileHover={{ y: -5 }}
                            className="group"
                        >
                            <div className="bg-slate-800/50 backdrop-blur-sm border border-slate-700/50 rounded-xl p-6 hover:border-cyan-500/50 transition-all duration-300 hover:shadow-lg hover:shadow-cyan-500/10">
                                {/* Logo and Header */}
                                <div className="flex items-start space-x-4 mb-4">
                                    <div className="flex-shrink-0 w-24 h-24 relative">
                                        <Image
                                            src={cert.logo}
                                            alt={`${cert.issuer} logo`}
                                            fill
                                            className="object-contain rounded-lg"
                                            unoptimized={true}
                                        />
                                    </div>
                                    <div className="flex-1 min-w-0">
                                        <h3 className="text-xl font-semibold text-white mb-1 group-hover:text-cyan-400 transition-colors">
                                            {cert.name}
                                        </h3>
                                        <p className="text-gray-300 text-sm mb-2">{cert.issuer}</p>
                                        <div className="flex items-center text-gray-400 text-sm">
                                            <Calendar className="w-4 h-4 mr-1" />
                                            <span>{cert.date}</span>
                                        </div>
                                    </div>
                                </div>

                                {/* Credential Info */}
                                <div className="space-y-3">
                                    <div className="bg-slate-700/30 rounded-lg p-3">
                                        <p className="text-xs text-gray-400 uppercase tracking-wider mb-1">
                                            Credential ID
                                        </p>
                                        <p className="text-sm text-gray-300 font-mono">
                                            {cert.credentialId}
                                        </p>
                                    </div>

                                    {/* Verification Link */}
                                    <motion.a
                                        href={cert.verificationUrl}
                                        target="_blank"
                                        rel="noopener noreferrer"
                                        whileHover={{ scale: 1.02 }}
                                        whileTap={{ scale: 0.98 }}
                                        className="inline-flex items-center justify-center w-full px-4 py-2 bg-gradient-to-r from-cyan-500/10 to-blue-600/10 border border-cyan-500/30 text-cyan-400 rounded-lg hover:from-cyan-500/20 hover:to-blue-600/20 transition-all duration-200 text-sm font-medium"
                                    >
                                        <ExternalLink className="w-4 h-4 mr-2" />
                                        Verify Credential
                                    </motion.a>
                                </div>

                                {/* Hover Effect Border */}
                                <div className="absolute inset-0 bg-gradient-to-r from-cyan-500/0 via-cyan-500/5 to-blue-600/0 rounded-xl opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none" />
                            </div>
                        </motion.div>
                    ))}
                </div>

                {/* Show All/Less Button */}
                {certifications.length > 4 && (
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.6, delay: 0.3 }}
                        className="flex justify-center mt-10"
                    >
                        <motion.button
                            onClick={() => setShowAll(!showAll)}
                            whileHover={{ scale: 1.05 }}
                            whileTap={{ scale: 0.95 }}
                            className="inline-flex items-center px-6 py-3 bg-gradient-to-r from-cyan-500/20 to-blue-600/20 border border-cyan-500/40 text-cyan-400 rounded-lg hover:from-cyan-500/30 hover:to-blue-600/30 transition-all duration-200 text-base font-medium"
                        >
                            {showAll ? (
                                <>
                                    <ChevronUp className="w-5 h-5 mr-2" />
                                    Show Less
                                </>
                            ) : (
                                <>
                                    <ChevronDown className="w-5 h-5 mr-2" />
                                    Show All Certifications
                                </>
                            )}
                        </motion.button>
                    </motion.div>
                )}

                {/* Stats */}
                <motion.div
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.6, delay: 0.4 }}
                    className="mt-16 text-center"
                >
                    <div className="inline-flex items-center space-x-8 bg-slate-800/30 backdrop-blur-sm border border-slate-700/50 rounded-xl px-8 py-4">
                        <div className="text-center">
                            <div className="text-2xl font-bold text-cyan-400">{certifications.length}</div>
                            <div className="text-sm text-gray-400">Active Certifications</div>
                        </div>
                        <div className="w-px h-10 bg-slate-600" />
                        <div className="text-center">
                            <div className="text-2xl font-bold text-cyan-400">3</div>
                            <div className="text-sm text-gray-400">Cloud Providers</div>
                        </div>
                        <div className="w-px h-10 bg-slate-600" />
                        <div className="text-center">
                            <div className="text-2xl font-bold text-cyan-400">2025</div>
                            <div className="text-sm text-gray-400">Latest Certification</div>
                        </div>
                    </div>
                </motion.div>
            </div>
        </section>
    );
}
