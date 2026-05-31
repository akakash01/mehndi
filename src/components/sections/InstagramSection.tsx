'use client';

import { motion } from 'framer-motion';
import SectionHeading from '@/components/shared/SectionHeading';
import { FaInstagram, FaHeart, FaPlay } from 'react-icons/fa';

const instagramPosts = Array.from({ length: 8 }, (_, i) => ({
    id: `ig-${i}`,
    type: i % 3 === 0 ? 'reel' : 'post',
    likes: Math.floor(Math.random() * 500) + 100,
}));

export default function InstagramSection() {
    return (
        <section id="instagram" className="relative py-20 lg:py-32 bg-[#0c0c0c] overflow-hidden">
            <div className="absolute inset-0 bg-luxury-gradient opacity-40" />

            <div className="relative z-10 max-w-7xl mx-auto px-6 lg:px-12">
                <SectionHeading
                    subtitle="Follow Us"
                    title="Instagram Highlights"
                    description="Follow our journey on Instagram for daily inspiration, behind-the-scenes moments, and the latest mehendi designs."
                />

                {/* Instagram Grid */}
                <motion.div
                    className="grid grid-cols-2 md:grid-cols-4 gap-3 lg:gap-4 mb-12"
                    initial={{ opacity: 0 }}
                    whileInView={{ opacity: 1 }}
                    viewport={{ once: true, margin: '-50px' }}
                    transition={{ duration: 0.8 }}
                >
                    {instagramPosts.map((post, i) => (
                        <motion.a
                            key={post.id}
                            href="https://instagram.com"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="group relative aspect-square rounded-2xl overflow-hidden glass-card cursor-pointer"
                            initial={{ opacity: 0, scale: 0.8 }}
                            whileInView={{ opacity: 1, scale: 1 }}
                            viewport={{ once: true }}
                            transition={{ delay: i * 0.08, duration: 0.5 }}
                            whileHover={{ scale: 1.03 }}
                        >
                            {/* Placeholder gradient */}
                            <div className="w-full h-full bg-gradient-to-br from-gold-500/5 via-rose-500/5 to-mehndi-500/5 flex items-center justify-center shimmer-bg">
                                {post.type === 'reel' ? (
                                    <FaPlay className="text-gold-500/30 text-2xl" />
                                ) : (
                                    <FaInstagram className="text-gold-500/20 text-3xl" />
                                )}
                            </div>

                            {/* Hover overlay */}
                            <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-all duration-500 flex flex-col justify-end p-4">
                                <div className="flex items-center gap-2">
                                    <FaHeart className="text-rose-400 text-sm" />
                                    <span className="font-body text-xs text-white/70">{post.likes}</span>
                                </div>
                            </div>

                            {/* Reel badge */}
                            {post.type === 'reel' && (
                                <div className="absolute top-3 left-3 bg-black/60 backdrop-blur-sm rounded-full px-2.5 py-1 flex items-center gap-1">
                                    <FaPlay className="text-white text-[8px]" />
                                    <span className="font-body text-[9px] text-white/80">Reel</span>
                                </div>
                            )}
                        </motion.a>
                    ))}
                </motion.div>

                {/* Follow CTA */}
                <motion.div
                    className="text-center"
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: 0.6 }}
                >
                    <a
                        href="https://instagram.com"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="btn-outline inline-flex items-center gap-2"
                    >
                        <FaInstagram className="text-lg" />
                        Follow on Instagram
                    </a>
                </motion.div>
            </div>
        </section>
    );
}