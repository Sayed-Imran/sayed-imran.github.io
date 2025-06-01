'use client';

import { motion } from 'framer-motion';
import { Mic, Calendar, MapPin, Users, ExternalLink, Play } from 'lucide-react';

interface SpeakingEvent {
    id: number;
    event: string;
    title: string;
    date: string;
    location: string;
    type: string;
    description: string;
    slides?: string;
    video?: string;
    audience: number;
}

interface SpeakingSectionProps {
    events: SpeakingEvent[];
}

export default function SpeakingSection({ events }: SpeakingSectionProps) {
    return (
        <section id="speaking" className="py-20 relative">
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
                        <Mic className="w-8 h-8 text-cyan-400 mr-3" />
                        <h2 className="text-4xl md:text-5xl font-bold text-white">
                            Speaking Engagements
                        </h2>
                    </div>
                    <p className="text-xl text-gray-300 max-w-3xl mx-auto">
                        Sharing knowledge and experiences at conferences, meetups, and community events
                    </p>
                </motion.div>

                {/* Events Timeline */}
                <div className="relative">
                    {/* Timeline Line */}
                    <div className="absolute left-4 md:left-1/2 transform md:-translate-x-px top-0 bottom-0 w-0.5 bg-gradient-to-b from-cyan-500 via-blue-500 to-cyan-500" />

                    {/* Events */}
                    <div className="space-y-12">
                        {events.map((event, index) => (
                            <motion.div
                                key={event.id}
                                initial={{ opacity: 0, y: 50 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true }}
                                transition={{ duration: 0.6, delay: index * 0.1 }}
                                className={`relative flex items-center ${index % 2 === 0 ? 'md:flex-row' : 'md:flex-row-reverse'
                                    }`}
                            >
                                {/* Timeline Dot */}
                                <div className="absolute left-4 md:left-1/2 transform md:-translate-x-1/2 w-4 h-4 bg-cyan-400 rounded-full border-4 border-slate-900 z-10" />

                                {/* Content */}
                                <div className={`w-full md:w-1/2 ${index % 2 === 0 ? 'md:pr-12 pl-12 md:pl-0' : 'md:pl-12 pl-12'
                                    }`}>
                                    <motion.div
                                        whileHover={{ y: -5 }}
                                        className="bg-slate-800/50 backdrop-blur-sm border border-slate-700/50 rounded-xl p-6 hover:border-cyan-500/50 transition-all duration-300 hover:shadow-lg hover:shadow-cyan-500/10"
                                    >
                                        {/* Event Header */}
                                        <div className="mb-4">
                                            <div className="flex items-center justify-between mb-2">
                                                <span className="px-3 py-1 text-xs bg-cyan-500/20 text-cyan-300 rounded-full border border-cyan-500/30">
                                                    {event.type}
                                                </span>
                                                <div className="flex items-center text-gray-400 text-sm">
                                                    <Users className="w-4 h-4 mr-1" />
                                                    <span>{event.audience} attendees</span>
                                                </div>
                                            </div>

                                            <h3 className="text-xl font-semibold text-white mb-2">
                                                {event.title}
                                            </h3>

                                            <h4 className="text-lg text-cyan-400 font-medium mb-3">
                                                {event.event}
                                            </h4>
                                        </div>

                                        {/* Event Details */}
                                        <div className="space-y-3 mb-4">
                                            <div className="flex items-center text-gray-300 text-sm">
                                                <Calendar className="w-4 h-4 mr-2" />
                                                <span>{new Date(event.date).toLocaleDateString('en-US', {
                                                    year: 'numeric',
                                                    month: 'long',
                                                    day: 'numeric'
                                                })}</span>
                                            </div>

                                            <div className="flex items-center text-gray-300 text-sm">
                                                <MapPin className="w-4 h-4 mr-2" />
                                                <span>{event.location}</span>
                                            </div>
                                        </div>

                                        {/* Description */}
                                        <p className="text-gray-300 text-sm leading-relaxed mb-6">
                                            {event.description}
                                        </p>

                                        {/* Action Buttons */}
                                        <div className="flex flex-wrap gap-3">
                                            {event.slides && (
                                                <motion.a
                                                    href={event.slides}
                                                    target="_blank"
                                                    rel="noopener noreferrer"
                                                    whileHover={{ scale: 1.05 }}
                                                    whileTap={{ scale: 0.95 }}
                                                    className="inline-flex items-center px-4 py-2 text-sm bg-slate-700 border border-slate-600 text-white rounded-lg hover:bg-slate-600 hover:border-cyan-500 transition-all duration-200"
                                                >
                                                    <ExternalLink className="w-4 h-4 mr-2" />
                                                    View Slides
                                                </motion.a>
                                            )}

                                            {event.video && (
                                                <motion.a
                                                    href={event.video}
                                                    target="_blank"
                                                    rel="noopener noreferrer"
                                                    whileHover={{ scale: 1.05 }}
                                                    whileTap={{ scale: 0.95 }}
                                                    className="inline-flex items-center px-4 py-2 text-sm bg-gradient-to-r from-cyan-500/20 to-blue-600/20 border border-cyan-500/30 text-cyan-400 rounded-lg hover:from-cyan-500/30 hover:to-blue-600/30 transition-all duration-200"
                                                >
                                                    <Play className="w-4 h-4 mr-2" />
                                                    Watch Video
                                                </motion.a>
                                            )}
                                        </div>
                                    </motion.div>
                                </div>

                                {/* Spacer for the other half on larger screens */}
                                <div className="hidden md:block w-1/2" />
                            </motion.div>
                        ))}
                    </div>
                </div>

                {/* Speaking Stats */}
                <motion.div
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.6, delay: 0.4 }}
                    className="mt-16 text-center"
                >
                    <div className="inline-flex items-center space-x-8 bg-slate-800/30 backdrop-blur-sm border border-slate-700/50 rounded-xl px-8 py-4">
                        <div className="text-center">
                            <div className="text-2xl font-bold text-cyan-400">{events.length}</div>
                            <div className="text-sm text-gray-400">Speaking Events</div>
                        </div>
                        <div className="w-px h-10 bg-slate-600" />
                        <div className="text-center">
                            <div className="text-2xl font-bold text-cyan-400">
                                {events.reduce((sum, event) => sum + event.audience, 0).toLocaleString()}
                            </div>
                            <div className="text-sm text-gray-400">Total Audience</div>
                        </div>
                        <div className="w-px h-10 bg-slate-600" />
                        <div className="text-center">
                            <div className="text-2xl font-bold text-cyan-400">6</div>
                            <div className="text-sm text-gray-400">Countries</div>
                        </div>
                    </div>
                </motion.div>

                {/* CTA */}
                <motion.div
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.6, delay: 0.6 }}
                    className="text-center mt-12"
                >
                    <div className="bg-slate-800/30 backdrop-blur-sm border border-slate-700/50 rounded-xl p-8">
                        <h3 className="text-2xl font-bold text-white mb-4">
                            Looking for a Speaker?
                        </h3>
                        <p className="text-gray-300 mb-6 max-w-2xl mx-auto">
                            I'm available to speak at conferences, meetups, and corporate events about DevOps,
                            Kubernetes, Cloud technologies, and digital transformation.
                        </p>
                        <motion.a
                            href="#contact"
                            whileHover={{ scale: 1.05, y: -2 }}
                            whileTap={{ scale: 0.95 }}
                            className="inline-flex items-center px-8 py-3 bg-gradient-to-r from-cyan-500 to-blue-600 text-white rounded-lg hover:from-cyan-600 hover:to-blue-700 transition-all duration-200 font-medium shadow-lg hover:shadow-cyan-500/25"
                        >
                            <Mic className="w-5 h-5 mr-2" />
                            Invite Me to Speak
                        </motion.a>
                    </div>
                </motion.div>
            </div>
        </section>
    );
}
