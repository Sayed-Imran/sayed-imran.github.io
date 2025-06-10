'use client';

import { motion } from 'framer-motion';
import { FileText, ExternalLink, Calendar, Clock, Heart } from 'lucide-react';

interface Article {
    id: number;
    title: string;
    description: string;
    url: string;
    publishedDate: string;
    readTime: string;
    tags: string[];
    claps: number;
}

interface ArticlesSectionProps {
    articles: Article[];
}

export default function ArticlesSection({ articles }: ArticlesSectionProps) {
    return (
        <section id="articles" className="py-20 relative">
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
                        <FileText className="w-8 h-8 text-cyan-400 mr-3" />
                        <h2 className="text-4xl md:text-5xl font-bold text-white">
                            Medium Articles
                        </h2>
                    </div>
                    <p className="text-xl text-gray-300 max-w-3xl mx-auto">
                        Sharing knowledge and insights about DevOps, Cloud, and Kubernetes through technical writing
                    </p>
                </motion.div>

                {/* Articles Grid */}
                <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                    {articles.map((article, index) => (
                        <motion.article
                            key={article.id}
                            initial={{ opacity: 0, y: 30 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.6, delay: index * 0.1 }}
                            whileHover={{ y: -5 }}
                            className="group"
                        >
                            <div className="bg-slate-800/50 backdrop-blur-sm border border-slate-700/50 rounded-xl p-6 hover:border-cyan-500/50 transition-all duration-300 hover:shadow-lg hover:shadow-cyan-500/10 h-full flex flex-col">
                                {/* Article Header */}
                                <div className="mb-4">
                                    <h3 className="text-xl font-semibold text-white mb-3 group-hover:text-cyan-400 transition-colors line-clamp-2">
                                        {article.title}
                                    </h3>
                                    <p className="text-gray-300 text-sm leading-relaxed line-clamp-3">
                                        {article.description}
                                    </p>
                                </div>

                                {/* Article Meta */}
                                <div className="space-y-3 mb-4">
                                    <div className="flex items-center justify-between text-sm text-gray-400">
                                        <div className="flex items-center">
                                            <Calendar className="w-4 h-4 mr-1" />
                                            <span>{new Date(article.publishedDate).toLocaleDateString('en-US', {
                                                year: 'numeric',
                                                month: 'short',
                                                day: 'numeric'
                                            })}</span>
                                        </div>
                                        <div className="flex items-center">
                                            <Clock className="w-4 h-4 mr-1" />
                                            <span>{article.readTime}</span>
                                        </div>
                                    </div>

                                    {/* Tags */}
                                    <div className="flex flex-wrap gap-2">
                                        {article.tags.slice(0, 3).map((tag, idx) => (
                                            <span
                                                key={idx}
                                                className="px-2 py-1 text-xs bg-slate-700/50 border border-slate-600/50 rounded-md text-gray-300"
                                            >
                                                {tag}
                                            </span>
                                        ))}
                                        {article.tags.length > 3 && (
                                            <span className="px-2 py-1 text-xs text-gray-400">
                                                +{article.tags.length - 3} more
                                            </span>
                                        )}
                                    </div>
                                </div>

                                {/* Article Stats */}
                                <div className="flex items-center justify-between pt-4 border-t border-slate-700/50 mt-auto">
                                    <div className="flex items-center text-gray-400 text-sm">
                                        <Heart className="w-4 h-4 mr-1 text-red-400" />
                                        <span>{article.claps.toLocaleString()} claps</span>
                                    </div>

                                    <motion.a
                                        href={article.url}
                                        target="_blank"
                                        rel="noopener noreferrer"
                                        whileHover={{ scale: 1.05 }}
                                        whileTap={{ scale: 0.95 }}
                                        className="inline-flex items-center px-4 py-2 text-sm font-medium text-cyan-400 hover:text-cyan-300 transition-colors"
                                    >
                                        Read Article
                                        <ExternalLink className="w-4 h-4 ml-1" />
                                    </motion.a>
                                </div>

                                {/* Hover Effect Border */}
                                <div className="absolute inset-0 bg-gradient-to-r from-cyan-500/0 via-cyan-500/5 to-blue-600/0 rounded-xl opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none" />
                            </div>
                        </motion.article>
                    ))}
                </div>

                {/* CTA to Medium */}
                <motion.div
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.6, delay: 0.4 }}
                    className="text-center mt-12"
                >
                    <motion.a
                        href="https://medium.com/@sayed-imran"
                        target="_blank"
                        rel="noopener noreferrer"
                        whileHover={{ scale: 1.05, y: -2 }}
                        whileTap={{ scale: 0.95 }}
                        className="inline-flex items-center px-8 py-3 bg-gradient-to-r from-cyan-500/10 to-blue-600/10 border border-cyan-500/30 text-cyan-400 rounded-lg hover:from-cyan-500/20 hover:to-blue-600/20 transition-all duration-200 font-medium"
                    >
                        <FileText className="w-5 h-5 mr-2" />
                        View All Articles on Medium
                        <ExternalLink className="w-4 h-4 ml-2" />
                    </motion.a>
                </motion.div>

                {/* Writing Stats */}
                <motion.div
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.6, delay: 0.6 }}
                    className="mt-16 text-center"
                >
                    <div className="inline-flex items-center space-x-8 bg-slate-800/30 backdrop-blur-sm border border-slate-700/50 rounded-xl px-8 py-4">
                        <div className="text-center">
                            <div className="text-2xl font-bold text-cyan-400">26</div>
                            <div className="text-sm text-gray-400">Published Articles</div>
                        </div>
                        <div className="w-px h-10 bg-slate-600" />
                        <div className="text-center">
                            <div className="text-2xl font-bold text-cyan-400">
                                1K+
                            </div>
                            <div className="text-sm text-gray-400">Total Claps</div>
                        </div>
                        <div className="w-px h-10 bg-slate-600" />
                        <div className="text-center">
                            <div className="text-2xl font-bold text-cyan-400">50K+</div>
                            <div className="text-sm text-gray-400">Total Views</div>
                        </div>
                    </div>
                </motion.div>
            </div>
        </section>
    );
}
