'use client';

import { useEffect, useRef } from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

if (typeof window !== 'undefined') {
    gsap.registerPlugin(ScrollTrigger);
}

export default function HeroSection() {
    const sectionRef = useRef<HTMLDivElement>(null);
    const handRef = useRef<HTMLDivElement>(null);
    const coneRef = useRef<HTMLDivElement>(null);
    const designRef = useRef<HTMLDivElement>(null);
    const titleRef = useRef<HTMLDivElement>(null);

    const { scrollYProgress } = useScroll({
        target: sectionRef,
        offset: ['start start', 'end start'],
    });

    const opacity = useTransform(scrollYProgress, [0, 0.8], [1, 0]);
    const scale = useTransform(scrollYProgress, [0, 0.8], [1, 0.95]);
    const y = useTransform(scrollYProgress, [0, 1], [0, 200]);

    useEffect(() => {
        const ctx = gsap.context(() => {
            // Hand enters from left
            gsap.fromTo(
                '.hero-hand',
                { x: -300, opacity: 0, rotate: -15 },
                {
                    x: 0,
                    opacity: 1,
                    rotate: 0,
                    duration: 1.5,
                    ease: 'power3.out',
                    scrollTrigger: {
                        trigger: sectionRef.current,
                        start: 'top top',
                        end: 'bottom top',
                        scrub: 0.8,
                    },
                }
            );

            // Cone enters from right
            gsap.fromTo(
                '.hero-cone',
                { x: 300, opacity: 0, rotate: 15 },
                {
                    x: 0,
                    opacity: 1,
                    rotate: 0,
                    duration: 1.5,
                    ease: 'power3.out',
                    scrollTrigger: {
                        trigger: sectionRef.current,
                        start: 'top top',
                        end: 'bottom top',
                        scrub: 0.8,
                    },
                }
            );

            // Mehendi design reveals as user scrolls
            gsap.fromTo(
                '.hero-design',
                { opacity: 0, scale: 0.5, y: 40 },
                {
                    opacity: 1,
                    scale: 1,
                    y: 0,
                    duration: 3,
                    ease: 'power3.out',
                    scrollTrigger: {
                        trigger: sectionRef.current,
                        start: 'top top',
                        end: 'bottom center',
                        scrub: 1,
                    },
                }
            );

            // Floating particles
            gsap.fromTo(
                '.hero-particle',
                { opacity: 0, scale: 0 },
                {
                    opacity: 0.6,
                    scale: 1,
                    duration: 2,
                    stagger: 0.3,
                    ease: 'power2.out',
                    scrollTrigger: {
                        trigger: sectionRef.current,
                        start: 'top center',
                    },
                }
            );
        });

        return () => ctx.revert();
    }, []);

    return (
        <section
            ref={sectionRef}
            id="hero"
            className="relative min-h-screen w-full overflow-hidden bg-[#0a0a0a] flex items-center justify-center"
        >
            {/* Luxury ambient background */}
            <div className="absolute inset-0 bg-luxury-gradient" />

            {/* Radial glow */}
            <div
                className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] rounded-full"
                style={{
                    background: 'radial-gradient(circle, rgba(212,160,23,0.08) 0%, rgba(212,160,23,0.02) 40%, transparent 70%)',
                }}
            />

            {/* Floating particles */}
            {Array.from({ length: 12 }).map((_, i) => (
                <motion.div
                    key={i}
                    className="hero-particle absolute rounded-full"
                    style={{
                        width: `${Math.random() * 6 + 2}px`,
                        height: `${Math.random() * 6 + 2}px`,
                        left: `${Math.random() * 100}%`,
                        top: `${Math.random() * 100}%`,
                        background: 'radial-gradient(circle, rgba(212,160,23,0.8), transparent)',
                    }}
                    animate={{
                        y: [0, -30, 0],
                        opacity: [0, 0.8, 0],
                        scale: [0, 1, 0],
                    }}
                    transition={{
                        duration: Math.random() * 3 + 3,
                        repeat: Infinity,
                        delay: Math.random() * 2,
                        ease: 'easeInOut',
                    }}
                />
            ))}

            {/* Main hero content */}
            <motion.div
                className="relative z-10 w-full max-w-7xl mx-auto px-6 lg:px-12 flex flex-col lg:flex-row items-center justify-between gap-12 py-20"
                style={{ opacity, scale, y }}
            >
                {/* Left: Hand visual area */}
                <div ref={handRef} className="relative w-full lg:w-1/2 flex items-center justify-center">
                    <div className="hero-hand relative w-72 h-96 lg:w-96 lg:h-[500px]">
                        {/* Decorative hand outline */}
                        <div className="absolute inset-0 flex items-center justify-center">
                            <div className="relative w-64 h-64 lg:w-80 lg:h-80 rounded-full border border-gold-500/10 animate-spin-slow">
                                <div className="absolute inset-4 rounded-full border border-gold-500/5" />
                            </div>
                        </div>

                        {/* Hand placeholder with decoration */}
                        <div className="absolute inset-0 flex items-center justify-center">
                            <motion.div
                                className="hero-design relative"
                                initial={{ opacity: 0 }}
                                animate={{ opacity: 1 }}
                                transition={{ duration: 2 }}
                            >
                                {/* Stylized mehendi hand SVG */}
                                <svg
                                    viewBox="0 0 200 300"
                                    className="w-48 h-72 lg:w-64 lg:h-96"
                                    fill="none"
                                    xmlns="http://www.w3.org/2000/svg"
                                >
                                    {/* Palm outline */}
                                    <motion.path
                                        d="M70 80 C60 120, 55 160, 60 200 C65 240, 80 260, 100 270 C120 280, 140 280, 150 260 C160 240, 165 200, 155 150"
                                        stroke="rgba(212,160,23,0.6)"
                                        strokeWidth="1.5"
                                        fill="none"
                                        initial={{ pathLength: 0 }}
                                        animate={{ pathLength: 1 }}
                                        transition={{ duration: 3, ease: 'easeInOut' }}
                                    />
                                    {/* Fingers */}
                                    <motion.path
                                        d="M70 80 C65 55, 68 40, 75 35 C82 30, 88 35, 85 50 C82 65, 78 75, 80 85"
                                        stroke="rgba(212,160,23,0.5)"
                                        strokeWidth="1"
                                        fill="none"
                                        initial={{ pathLength: 0 }}
                                        animate={{ pathLength: 1 }}
                                        transition={{ duration: 2, delay: 0.5, ease: 'easeInOut' }}
                                    />
                                    <motion.path
                                        d="M80 85 C78 50, 82 30, 90 25 C98 20, 105 28, 100 50 C95 70, 90 80, 92 90"
                                        stroke="rgba(212,160,23,0.5)"
                                        strokeWidth="1"
                                        fill="none"
                                        initial={{ pathLength: 0 }}
                                        animate={{ pathLength: 1 }}
                                        transition={{ duration: 2, delay: 0.7, ease: 'easeInOut' }}
                                    />
                                    <motion.path
                                        d="M92 90 C90 50, 95 25, 105 22 C115 19, 120 28, 115 50 C110 70, 105 85, 107 92"
                                        stroke="rgba(212,160,23,0.5)"
                                        strokeWidth="1"
                                        fill="none"
                                        initial={{ pathLength: 0 }}
                                        animate={{ pathLength: 1 }}
                                        transition={{ duration: 2, delay: 0.9, ease: 'easeInOut' }}
                                    />
                                    <motion.path
                                        d="M107 95 C110 60, 115 35, 122 32 C129 29, 135 38, 130 60 C125 80, 118 90, 120 98"
                                        stroke="rgba(212,160,23,0.5)"
                                        strokeWidth="1"
                                        fill="none"
                                        initial={{ pathLength: 0 }}
                                        animate={{ pathLength: 1 }}
                                        transition={{ duration: 2, delay: 1.1, ease: 'easeInOut' }}
                                    />
                                    {/* Mehendi patterns - paisleys and dots */}
                                    <motion.circle cx="100" cy="100" r="3" fill="rgba(212,160,23,0.4)" initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 2 }} />
                                    <motion.circle cx="110" cy="130" r="2" fill="rgba(212,160,23,0.4)" initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 2.2 }} />
                                    <motion.circle cx="90" cy="140" r="2.5" fill="rgba(212,160,23,0.4)" initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 2.4 }} />
                                    <motion.circle cx="105" cy="170" r="2" fill="rgba(212,160,23,0.4)" initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 2.6 }} />
                                    <motion.circle cx="95" cy="200" r="3" fill="rgba(212,160,23,0.4)" initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 2.8 }} />
                                    {/* Decorative arcs */}
                                    <motion.path
                                        d="M80 120 Q100 100, 120 120"
                                        stroke="rgba(212,160,23,0.3)"
                                        strokeWidth="0.8"
                                        fill="none"
                                        initial={{ opacity: 0 }}
                                        animate={{ opacity: 1 }}
                                        transition={{ delay: 3 }}
                                    />
                                    <motion.path
                                        d="M85 150 Q100 130, 115 150"
                                        stroke="rgba(212,160,23,0.3)"
                                        strokeWidth="0.8"
                                        fill="none"
                                        initial={{ opacity: 0 }}
                                        animate={{ opacity: 1 }}
                                        transition={{ delay: 3.2 }}
                                    />
                                </svg>

                                {/* Glow behind hand */}
                                <div className="absolute inset-0 bg-gradient-radial from-gold-500/5 to-transparent rounded-full blur-3xl" />
                            </motion.div>
                        </div>
                    </div>
                </div>

                {/* Right: Cone visual and text */}
                <div ref={coneRef} className="hero-cone relative w-full lg:w-1/2 flex flex-col items-center lg:items-start text-center lg:text-left">
                    {/* Content */}
                    <motion.div
                        ref={titleRef}
                        initial={{ opacity: 0, y: 60 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 1.2, ease: [0.4, 0, 0.2, 1], delay: 0.5 }}
                    >
                        {/* Subtitle badge */}
                        <motion.span
                            className="inline-block font-body text-xs tracking-[0.3em] text-gold-500/80 uppercase mb-6 border border-gold-500/20 rounded-full px-4 py-2"
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ delay: 0.8, duration: 0.8 }}
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
                                whileHover={{ scale: 1.05 }}
                                whileTap={{ scale: 0.95 }}
                            >
                                Book Appointment
                            </motion.button>
                            <motion.button
                                className="btn-outline"
                                onClick={() => {
                                    document.querySelector('#portfolio')?.scrollIntoView({ behavior: 'smooth' });
                                }}
                                whileHover={{ scale: 1.05 }}
                                whileTap={{ scale: 0.95 }}
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
                                    initial={{ opacity: 0, y: 20 }}
                                    animate={{ opacity: 1, y: 0 }}
                                    transition={{ delay: 1.2 + i * 0.2 }}
                                >
                                    <p className="font-heading text-2xl md:text-3xl font-bold text-gold-500">{stat.value}</p>
                                    <p className="font-body text-xs text-white/30 uppercase tracking-wider">{stat.label}</p>
                                </motion.div>
                            ))}
                        </div>
                    </motion.div>
                </div>
            </motion.div>

            {/* Scroll indicator */}
            <motion.div
                className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 2 }}
            >
                <span className="font-body text-[10px] tracking-[0.3em] text-white/30 uppercase">Scroll</span>
                <motion.div
                    className="w-5 h-8 rounded-full border border-gold-500/20 flex justify-center"
                    animate={{ opacity: [0.3, 1, 0.3] }}
                    transition={{ duration: 2, repeat: Infinity }}
                >
                    <motion.div
                        className="w-1 h-2 bg-gold-500/60 rounded-full mt-1.5"
                        animate={{ y: [0, 8, 0] }}
                        transition={{ duration: 1.5, repeat: Infinity, ease: 'easeInOut' }}
                    />
                </motion.div>
            </motion.div>

            {/* Bottom gradient fade */}
            <div className="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-t from-black via-black/80 to-transparent" />
        </section>
    );
}