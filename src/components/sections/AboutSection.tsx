'use client';

import { motion } from 'framer-motion';
import SectionHeading from '@/components/shared/SectionHeading';
import { aboutContent } from '@/data/content';

export default function AboutSection() {
    return (
        <section id="about" className="relative py-20 lg:py-32 bg-[#0a0a0a] overflow-hidden">
            {/* Background decorative elements */}
            <div className="absolute top-0 right-0 w-96 h-96 bg-gold-500/3 rounded-full blur-[120px]" />
            <div className="absolute bottom-0 left-0 w-80 h-80 bg-mehndi-500/3 rounded-full blur-[100px]" />

            <div className="relative z-10 max-w-7xl mx-auto px-6 lg:px-12">
                <SectionHeading
                    subtitle="About the Artist"
                    title="Crafting Stories Through Mehendi"
                    description="A decade of passion, precision, and artistry — transforming hands into masterpieces of cultural elegance."
                />

                <div className="flex flex-col lg:flex-row items-center gap-16 lg:gap-24">
                    {/* Left: Image */}
                    <motion.div
                        className="w-full lg:w-1/2"
                        initial={{ opacity: 0, x: -100 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true, margin: '-100px' }}
                        transition={{ duration: 1, ease: [0.4, 0, 0.2, 1] }}
                    >
                        <div className="relative">
                            {/* Decorative frame */}
                            <div className="absolute -inset-4 border border-gold-500/10 rounded-3xl" />
                            <div className="absolute -inset-8 border border-gold-500/5 rounded-3xl" />

                            {/* Image container */}
                            <div className="relative aspect-[3/4] rounded-2xl overflow-hidden glass-card">
                                <div className="w-full h-full bg-gradient-to-br from-gold-500/5 via-transparent to-mehndi-500/5 flex items-center justify-center">
                                    {/* Placeholder with artistic decoration */}
                                    <div className="text-center">
                                        <motion.svg
                                            viewBox="0 0 100 100"
                                            className="w-32 h-32 mx-auto mb-4"
                                            animate={{ rotate: 360 }}
                                            transition={{ duration: 30, repeat: Infinity, ease: 'linear' }}
                                        >
                                            <circle cx="50" cy="50" r="45" stroke="rgba(212,160,23,0.2)" strokeWidth="0.5" fill="none" />
                                            <circle cx="50" cy="50" r="35" stroke="rgba(212,160,23,0.15)" strokeWidth="0.5" fill="none" />
                                            <circle cx="50" cy="50" r="25" stroke="rgba(212,160,23,0.1)" strokeWidth="0.5" fill="none" />
                                        </motion.svg>
                                        <p className="font-heading text-gold-500/40 text-lg">Artist Portrait</p>
                                    </div>
                                </div>

                                {/* Glow overlay */}
                                <div className="absolute inset-0 bg-gradient-to-t from-black/30 to-transparent" />
                            </div>

                            {/* Stats badge */}
                            <motion.div
                                className="absolute -bottom-6 -right-6 glass-card px-6 py-4"
                                initial={{ opacity: 0, scale: 0 }}
                                whileInView={{ opacity: 1, scale: 1 }}
                                viewport={{ once: true }}
                                transition={{ delay: 0.5, duration: 0.6 }}
                            >
                                <div className="flex gap-6">
                                    <div className="text-center">
                                        <p className="font-heading text-2xl font-bold text-gold-500">{aboutContent.experience}</p>
                                        <p className="font-body text-[10px] text-white/40 uppercase tracking-wider">Experience</p>
                                    </div>
                                    <div className="w-px bg-gold-500/20" />
                                    <div className="text-center">
                                        <p className="font-heading text-2xl font-bold text-gold-500">{aboutContent.bridesServed}</p>
                                        <p className="font-body text-[10px] text-white/40 uppercase tracking-wider">Brides</p>
                                    </div>
                                </div>
                            </motion.div>
                        </div>
                    </motion.div>

                    {/* Right: Content */}
                    <motion.div
                        className="w-full lg:w-1/2"
                        initial={{ opacity: 0, x: 100 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true, margin: '-100px' }}
                        transition={{ duration: 1, ease: [0.4, 0, 0.2, 1] }}
                    >
                        <h3 className="font-heading text-3xl lg:text-4xl font-semibold text-white/90 mb-2">
                            {aboutContent.name}
                        </h3>
                        <p className="font-body text-sm text-gold-500/80 tracking-wider uppercase mb-8">
                            {aboutContent.title}
                        </p>

                        <div className="space-y-4 text-white/50 font-body text-sm md:text-base leading-relaxed">
                            {aboutContent.description.split('\n\n').map((paragraph, i) => (
                                <motion.p
                                    key={i}
                                    initial={{ opacity: 0, y: 20 }}
                                    whileInView={{ opacity: 1, y: 0 }}
                                    viewport={{ once: true }}
                                    transition={{ delay: 0.3 + i * 0.15 }}
                                >
                                    {paragraph}
                                </motion.p>
                            ))}
                        </div>

                        {/* Specialties */}
                        <motion.div
                            className="mt-8"
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ delay: 0.8 }}
                        >
                            <p className="font-body text-xs text-gold-500/60 uppercase tracking-[0.2em] mb-4">Specialties</p>
                            <div className="flex flex-wrap gap-2">
                                {aboutContent.specialties.map((specialty) => (
                                    <span
                                        key={specialty}
                                        className="font-body text-xs px-3 py-1.5 rounded-full border border-gold-500/10 text-white/40 bg-white/[0.02]"
                                    >
                                        {specialty}
                                    </span>
                                ))}
                            </div>
                        </motion.div>

                        {/* CTA */}
                        <motion.button
                            className="btn-primary mt-8"
                            onClick={() => {
                                document.querySelector('#contact')?.scrollIntoView({ behavior: 'smooth' });
                            }}
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ delay: 1 }}
                        >
                            Get to Know Me
                        </motion.button>
                    </motion.div>
                </div>
            </div>
        </section>
    );
}