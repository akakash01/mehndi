'use client';

import { useState, useEffect, useMemo } from 'react';
import { motion } from 'framer-motion';

interface ParticleData {
    width: string;
    height: string;
    left: string;
    top: string;
    animDuration: number;
    animDelay: number;
}

function generateParticles(count: number): ParticleData[] {
    return Array.from({ length: count }, () => ({
        width: `${Math.random() * 4 + 2}px`,
        height: `${Math.random() * 4 + 2}px`,
        left: `${Math.random() * 100}%`,
        top: `${Math.random() * 100}%`,
        animDuration: Math.random() * 4 + 4,
        animDelay: Math.random() * 3,
    }));
}

export default function HeroSection() {
    const [mounted, setMounted] = useState(false);

    useEffect(() => {
        setMounted(true);
    }, []);

    const particles = useMemo(() => generateParticles(6), []);

    return (
        <section
            id="hero"
            className="relative min-h-screen w-full overflow-hidden bg-[#0a0a0a] flex items-center justify-center"
        >
            {/* Luxury ambient background */}
            <div className="absolute inset-0 bg-luxury-gradient" />

            {/* Radial glow */}
            <div
                className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] rounded-full"
                style={{
                    background: 'radial-gradient(circle, rgba(212,160,23,0.06) 0%, rgba(212,160,23,0.02) 40%, transparent 70%)',
                }}
            />

            {/* Floating particles — reduced count, simpler animation */}
            {mounted && particles.map((p, i) => (
                <motion.div
                    key={i}
                    className="absolute rounded-full"
                    style={{
                        width: p.width,
                        height: p.height,
                        left: p.left,
                        top: p.top,
                        background: 'radial-gradient(circle, rgba(212,160,23,0.5), transparent)',
                    }}
                    animate={{
                        y: [0, -20, 0],
                        opacity: [0, 0.6, 0],
                    }}
                    transition={{
                        duration: p.animDuration,
                        repeat: Infinity,
                        delay: p.animDelay,
                        ease: 'easeInOut',
                    }}
                />
            ))}

            {/* Main hero content */}
            <motion.div
                className="relative z-10 w-full max-w-7xl mx-auto px-6 lg:px-12 flex flex-col lg:flex-row items-center justify-between gap-12 py-20"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ duration: 0.8, ease: [0.4, 0, 0.2, 1] }}
            >
                {/* Left: Hand visual area */}
                <motion.div
                    className="relative w-full lg:w-1/2 flex items-center justify-center"
                    initial={{ opacity: 0, x: -40 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ duration: 1, ease: [0.4, 0, 0.2, 1], delay: 0.3 }}
                >
                    <div className="relative w-72 h-96 lg:w-96 lg:h-[500px]">
                        {/* Decorative spinning circle */}
                        <div className="absolute inset-0 flex items-center justify-center">
                            <div className="relative w-64 h-64 lg:w-80 lg:h-80 rounded-full border border-gold-500/10">
                                <div className="absolute inset-4 rounded-full border border-gold-500/5" />
                            </div>
                        </div>

                        {/* Palm outline SVG */}
                        <div className="absolute inset-0 flex items-center justify-center">
                            <motion.div
                                className="relative"
                                initial={{ opacity: 0, scale: 0.8 }}
                                animate={{ opacity: 1, scale: 1 }}
                                transition={{ duration: 1.5, delay: 0.6, ease: 'easeOut' }}
                            >
                                <svg
                                    viewBox="0 0 200 300"
                                    className="w-48 h-72 lg:w-64 lg:h-96"
                                    fill="none"
                                    xmlns="http://www.w3.org/2000/svg"
                                >
                                    <motion.path
                                        d="M70 80 C60 120, 55 160, 60 200 C65 240, 80 260, 100 270 C120 280, 140 280, 150 260 C160 240, 165 200, 155 150"
                                        stroke="rgba(212,160,23,0.5)"
                                        strokeWidth="1.5"
                                        fill="none"
                                        initial={{ pathLength: 0 }}
                                        animate={{ pathLength: 1 }}
                                        transition={{ duration: 2.5, ease: 'easeInOut', delay: 0.8 }}
                                    />
                                    <motion.circle cx="100" cy="160" r="2" fill="rgba(212,160,23,0.4)" initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 2.5 }} />
                                    <motion.circle cx="115" cy="200" r="2.5" fill="rgba(212,160,23,0.4)" initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 2.8 }} />
                                </svg>

                                <div className="absolute inset-0 bg-gradient-radial from-gold-500/5 to-transparent rounded-full blur-3xl" />
                            </motion.div>
                        </div>
                    </div>
                </motion.div>

                {/* Right: Text content */}
                <motion.div
                    className="relative w-full lg:w-1/2 flex flex-col items-center lg:items-start text-center lg:text-left"
                    initial={{ opacity: 0, x: 40 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ duration: 1, ease: [0.4, 0, 0.2, 1], delay: 0.3 }}
                >
                    <motion.div
                        initial={{ opacity: 0, y: 40 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 1, ease: [0.4, 0, 0.2, 1], delay: 0.5 }}
                    >
                        {/* Subtitle badge */}
                        <motion.span
                            className="inline-block font-body text-xs tracking-[0.3em] text-gold-500/80 uppercase mb-6 border border-gold-500/20 rounded-full px-4 py-2"
                            initial={{ opacity: 0, y: 15 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ delay: 0.7, duration: 0.6 }}
                        >
                            Luxury Bridal Mehendi Artist
                        </motion.span>

                        {/* Headline */}
                        <h1 className="font-heading text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold leading-tight mb-6">
                            <span className="text-white/90">Turning Hands</span>
                            <br />
                            <span className="text-gradient-gold">Into Timeless Art</span>
                        </h1>

                        {/* Subheadline */}
                        <p className="font-body text-sm md:text-base text-white/40 leading-relaxed mb-10 max-w-lg">
                            Luxury Bridal Mehendi Artist for Weddings, Festivals & Special Events.
                            Creating intricate, personalized designs that tell your unique story.
                        </p>

                        {/* CTA Buttons */}
                        <div className="flex flex-col sm:flex-row gap-4">
                            <motion.button
                                className="btn-primary"
                                onClick={() => {
                                    document.querySelector('#contact')?.scrollIntoView({ behavior: 'smooth' });
                                }}
                                whileHover={{ scale: 1.03 }}
                                whileTap={{ scale: 0.97 }}
                            >
                                Book Appointment
                            </motion.button>
                            <motion.button
                                className="btn-outline"
                                onClick={() => {
                                    document.querySelector('#portfolio')?.scrollIntoView({ behavior: 'smooth' });
                                }}
                                whileHover={{ scale: 1.03 }}
                                whileTap={{ scale: 0.97 }}
                            >
                                View Portfolio
                            </motion.button>
                        </div>

                        {/* Stats row */}
                        <div className="flex gap-8 mt-12 pt-8 border-t border-gold-500/10">
                            {[
                                { value: '5000+', label: 'Happy Brides' },
                                { value: '10+', label: 'Years Exp.' },
                                { value: '15+', label: 'Awards' },
                            ].map((stat, i) => (
                                <motion.div
                                    key={stat.label}
                                    initial={{ opacity: 0, y: 15 }}
                                    animate={{ opacity: 1, y: 0 }}
                                    transition={{ delay: 1 + i * 0.15 }}
                                >
                                    <p className="font-heading text-2xl md:text-3xl font-bold text-gold-500">{stat.value}</p>
                                    <p className="font-body text-xs text-white/30 uppercase tracking-wider">{stat.label}</p>
                                </motion.div>
                            ))}
                        </div>
                    </motion.div>
                </motion.div>
            </motion.div>

            {/* Scroll indicator */}
            <motion.div
                className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 2 }}
            >
                <span className="font-body text-[10px] tracking-[0.3em] text-white/30 uppercase">Scroll</span>
                <div className="w-5 h-8 rounded-full border border-gold-500/20 flex justify-center">
                    <motion.div
                        className="w-1 h-2 bg-gold-500/60 rounded-full mt-1.5"
                        animate={{ y: [0, 8, 0] }}
                        transition={{ duration: 1.5, repeat: Infinity, ease: 'easeInOut' }}
                    />
                </div>
            </motion.div>

            {/* Bottom gradient fade */}
            <div className="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-t from-black via-black/80 to-transparent" />
        </section>
    );
}