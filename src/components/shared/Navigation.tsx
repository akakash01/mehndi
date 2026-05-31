'use client';

import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { navigationLinks } from '@/data/content';
import { HiMenuAlt3, HiX } from 'react-icons/hi';

export default function Navigation() {
    const [isScrolled, setIsScrolled] = useState(false);
    const [isMobileOpen, setIsMobileOpen] = useState(false);

    useEffect(() => {
        const handleScroll = () => {
            setIsScrolled(window.scrollY > 50);
        };
        window.addEventListener('scroll', handleScroll, { passive: true });
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    const scrollTo = (href: string) => {
        setIsMobileOpen(false);
        const el = document.querySelector(href);
        if (el) {
            el.scrollIntoView({ behavior: 'smooth' });
        }
    };

    return (
        <>
            <motion.nav
                className={`fixed top-0 left-0 right-0 z-[1000] transition-all duration-500 ${isScrolled
                    ? 'bg-black/80 backdrop-blur-xl border-b border-gold-500/10'
                    : 'bg-transparent'
                    }`}
                initial={{ y: -100 }}
                animate={{ y: 0 }}
                transition={{ duration: 0.8, ease: [0.4, 0, 0.2, 1] }}
            >
                <div className="max-w-7xl mx-auto px-6 lg:px-12">
                    <div className="flex items-center justify-between h-20">
                        {/* Logo */}
                        <button
                            onClick={() => scrollTo('#hero')}
                            className="group flex items-center gap-3"
                        >
                            <span className="font-heading text-2xl lg:text-3xl font-bold text-gradient-gold">
                                KAVYA Mehndi
                            </span>
                            <span className="hidden sm:block font-body text-xs tracking-[0.3em] text-gold-500/60 uppercase">
                                Artist
                            </span>
                        </button>

                        {/* Desktop Navigation */}
                        <div className="hidden lg:flex items-center gap-8">
                            {navigationLinks.slice(1).map((link) => (
                                <button
                                    key={link.href}
                                    onClick={() => scrollTo(link.href)}
                                    className="relative font-body text-sm text-white/60 hover:text-gold-500 transition-colors duration-300 tracking-wider uppercase group"
                                >
                                    {link.label}
                                    <span className="absolute -bottom-1 left-0 w-0 h-[1px] bg-gold-500 transition-all duration-300 group-hover:w-full" />
                                </button>
                            ))}
                            <button
                                onClick={() => scrollTo('#contact')}
                                className="btn-primary text-xs"
                            >
                                Book Now
                            </button>
                        </div>

                        {/* Mobile Menu Toggle */}
                        <button
                            onClick={() => setIsMobileOpen(!isMobileOpen)}
                            className="lg:hidden text-gold-500 text-2xl"
                        >
                            {isMobileOpen ? <HiX /> : <HiMenuAlt3 />}
                        </button>
                    </div>
                </div>
            </motion.nav>

            {/* Mobile Menu */}
            <AnimatePresence>
                {isMobileOpen && (
                    <motion.div
                        className="fixed inset-0 z-[999] bg-black/95 backdrop-blur-xl flex flex-col items-center justify-center gap-8 lg:hidden"
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        exit={{ opacity: 0 }}
                        transition={{ duration: 0.3 }}
                    >
                        {navigationLinks.map((link, i) => (
                            <motion.button
                                key={link.href}
                                onClick={() => scrollTo(link.href)}
                                className="font-heading text-2xl text-white/80 hover:text-gold-500 transition-colors duration-300 tracking-wider"
                                initial={{ opacity: 0, y: 20 }}
                                animate={{ opacity: 1, y: 0 }}
                                exit={{ opacity: 0, y: 20 }}
                                transition={{ delay: i * 0.1 }}
                            >
                                {link.label}
                            </motion.button>
                        ))}
                        <motion.button
                            onClick={() => scrollTo('#contact')}
                            className="btn-primary mt-4"
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            exit={{ opacity: 0, y: 20 }}
                            transition={{ delay: navigationLinks.length * 0.1 }}
                        >
                            Book Appointment
                        </motion.button>
                    </motion.div>
                )}
            </AnimatePresence>
        </>
    );
}