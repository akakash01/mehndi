'use client';

import { useState } from 'react';
import { motion } from 'framer-motion';
import SectionHeading from '@/components/shared/SectionHeading';
import { portfolioItems, galleryCategories } from '@/data/content';
import { HiX } from 'react-icons/hi';

export default function PortfolioSection() {
    const [activeCategory, setActiveCategory] = useState('all');
    const [lightbox, setLightbox] = useState<string | null>(null);

    const filteredItems =
        activeCategory === 'all'
            ? portfolioItems
            : portfolioItems.filter((item) => item.category === activeCategory);

    const lightboxItem = lightbox
        ? portfolioItems.find((p) => p.id === lightbox)
        : null;

    return (
        <section id="portfolio" className="relative py-20 lg:py-32 bg-[#0a0a0a] overflow-hidden">
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-gold-500/2 rounded-full blur-[150px]" />

            <div className="relative z-10 max-w-7xl mx-auto px-6 lg:px-12">
                <SectionHeading
                    subtitle="Portfolio"
                    title="Our Masterpieces"
                    description="Explore a curated gallery of intricate mehendi designs — each one a unique piece of wearable art."
                />

                {/* Category Filters */}
                <motion.div
                    className="flex flex-wrap justify-center gap-2 mb-12"
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.5 }}
                >
                    {galleryCategories.map((cat) => (
                        <button
                            key={cat.id}
                            onClick={() => setActiveCategory(cat.value)}
                            className={`font-body text-xs px-5 py-2 rounded-full transition-all duration-300 tracking-wider uppercase ${activeCategory === cat.value
                                ? 'bg-gold-500 text-black'
                                : 'text-white/40 border border-white/10 hover:border-gold-500/30 hover:text-white/70'
                                }`}
                        >
                            {cat.label}
                        </button>
                    ))}
                </motion.div>

                {/* Masonry Grid — static, no layout animations */}
                <div className="columns-1 sm:columns-2 lg:columns-3 gap-4 lg:gap-6">
                    {filteredItems.map((item) => (
                        <motion.div
                            key={item.id}
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true, margin: '-20px' }}
                            transition={{ duration: 0.4 }}
                            className="break-inside-avoid mb-4 lg:mb-6 group cursor-pointer"
                            onClick={() => setLightbox(item.id)}
                        >
                            <div className="relative rounded-2xl overflow-hidden glass-card">
                                {/* Image placeholder */}
                                <div className="aspect-[3/4] bg-gradient-to-br from-gold-500/5 via-transparent to-mehndi-500/5 flex items-center justify-center shimmer-bg">
                                    <div className="text-center p-4">
                                        <div className="w-16 h-16 mx-auto mb-3 rounded-full border border-gold-500/20 flex items-center justify-center">
                                            <span className="font-heading text-2xl text-gold-500/30">✦</span>
                                        </div>
                                        <p className="font-heading text-sm text-gold-500/30">{item.title}</p>
                                    </div>
                                </div>

                                {/* Hover overlay */}
                                <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent opacity-0 group-hover:opacity-100 transition-all duration-500 flex flex-col justify-end p-6">
                                    <h4 className="font-heading text-lg text-white/90 mb-1">{item.title}</h4>
                                    <p className="font-body text-xs text-white/50">{item.description}</p>
                                    <span className="font-body text-[10px] text-gold-500/60 uppercase mt-2 tracking-wider">{item.category}</span>
                                </div>
                            </div>
                        </motion.div>
                    ))}
                </div>

                {/* View All CTA */}
                <motion.div
                    className="text-center mt-12"
                    initial={{ opacity: 0 }}
                    whileInView={{ opacity: 1 }}
                    viewport={{ once: true }}
                >
                    <button className="btn-outline">View Full Gallery</button>
                </motion.div>
            </div>

            {/* Lightbox — simplified */}
            {lightboxItem && (
                <motion.div
                    className="fixed inset-0 z-[2000] bg-black/95 backdrop-blur-xl flex items-center justify-center p-8"
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    onClick={() => setLightbox(null)}
                >
                    <button
                        className="absolute top-8 right-8 text-white/60 hover:text-white text-2xl"
                        onClick={() => setLightbox(null)}
                    >
                        <HiX />
                    </button>

                    <motion.div
                        className="max-w-4xl w-full aspect-[3/4] max-h-[80vh] rounded-2xl overflow-hidden glass-card"
                        initial={{ scale: 0.9, opacity: 0 }}
                        animate={{ scale: 1, opacity: 1 }}
                        onClick={(e) => e.stopPropagation()}
                    >
                        <div className="w-full h-full bg-gradient-to-br from-gold-500/5 via-transparent to-mehndi-500/5 flex items-center justify-center">
                            <div className="text-center">
                                <p className="font-heading text-3xl text-gold-500/30">
                                    {lightboxItem.title}
                                </p>
                                <p className="font-body text-sm text-white/20 mt-2">Design Preview</p>
                            </div>
                        </div>
                    </motion.div>
                </motion.div>
            )}
        </section>
    );
}