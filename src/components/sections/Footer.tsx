'use client';

import { motion } from 'framer-motion';
import { navigationLinks } from '@/data/content';
import { FaInstagram, FaFacebookF, FaPinterestP, FaYoutube, FaWhatsapp, FaHeart } from 'react-icons/fa';

export default function Footer() {
    const scrollTo = (href: string) => {
        const el = document.querySelector(href);
        if (el) el.scrollIntoView({ behavior: 'smooth' });
    };

    return (
        <footer className="relative bg-[#060606] border-t border-gold-500/5 overflow-hidden">
            {/* Decorative top line */}
            <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-gold-500/20 to-transparent" />

            <div className="relative z-10 max-w-7xl mx-auto px-6 lg:px-12 py-16 lg:py-20">
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10 lg:gap-12">
                    {/* Brand */}
                    <div className="lg:col-span-1">
                        <button onClick={() => scrollTo('#hero')} className="group flex items-center gap-3 mb-4">
                            <span className="font-heading text-2xl font-bold text-gradient-gold">Mehndi</span>
                            <span className="font-body text-[10px] tracking-[0.3em] text-gold-500/40 uppercase">Artist</span>
                        </button>
                        <p className="font-body text-sm text-white/30 leading-relaxed mb-6">
                            Luxury bridal mehendi artist creating timeless art for your most special moments.
                        </p>
                        <div className="flex gap-3">
                            {[
                                { icon: <FaInstagram />, href: '#' },
                                { icon: <FaFacebookF />, href: '#' },
                                { icon: <FaPinterestP />, href: '#' },
                                { icon: <FaYoutube />, href: '#' },
                            ].map((social, i) => (
                                <motion.a
                                    key={i}
                                    href={social.href}
                                    className="w-9 h-9 rounded-lg bg-white/[0.02] border border-white/5 flex items-center justify-center text-white/30 hover:text-gold-500 hover:border-gold-500/30 transition-all duration-300"
                                    whileHover={{ scale: 1.1, y: -2 }}
                                >
                                    {social.icon}
                                </motion.a>
                            ))}
                        </div>
                    </div>

                    {/* Quick Links */}
                    <div>
                        <h4 className="font-body text-xs text-gold-500/60 uppercase tracking-[0.2em] mb-6">Quick Links</h4>
                        <ul className="space-y-3">
                            {navigationLinks.filter(l => l.label !== 'Home').map((link) => (
                                <li key={link.href}>
                                    <button
                                        onClick={() => scrollTo(link.href)}
                                        className="font-body text-sm text-white/40 hover:text-gold-500 transition-colors duration-300"
                                    >
                                        {link.label}
                                    </button>
                                </li>
                            ))}
                        </ul>
                    </div>

                    {/* Services */}
                    <div>
                        <h4 className="font-body text-xs text-gold-500/60 uppercase tracking-[0.2em] mb-6">Services</h4>
                        <ul className="space-y-3">
                            {['Bridal Mehendi', 'Arabic Mehendi', 'Rajasthani Design', 'Festival Mehendi', 'Engagement Mehendi', 'Custom Designs'].map((service) => (
                                <li key={service}>
                                    <button
                                        onClick={() => scrollTo('#services')}
                                        className="font-body text-sm text-white/40 hover:text-gold-500 transition-colors duration-300"
                                    >
                                        {service}
                                    </button>
                                </li>
                            ))}
                        </ul>
                    </div>

                    {/* Contact */}
                    <div>
                        <h4 className="font-body text-xs text-gold-500/60 uppercase tracking-[0.2em] mb-6">Contact Us</h4>
                        <div className="space-y-3 font-body text-sm text-white/40">
                            <p>Rajasthan, India</p>
                            <p>+91 XXXXXXXXXX</p>
                            <p>hello@mehndiartist.com</p>
                            <p>Mon - Sun, 8 AM - 8 PM</p>
                        </div>
                        <motion.a
                            href="https://wa.me/91XXXXXXXXXX"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="btn-primary inline-flex items-center gap-2 mt-6 text-xs"
                            whileHover={{ scale: 1.05 }}
                        >
                            <FaWhatsapp />
                            Chat on WhatsApp
                        </motion.a>
                    </div>
                </div>

                {/* Bottom bar */}
                <div className="mt-14 pt-8 border-t border-white/[0.03] flex flex-col sm:flex-row items-center justify-between gap-4">
                    <p className="font-body text-xs text-white/20 flex items-center gap-1">
                        &copy; {new Date().getFullYear()} Mehendi Artist. Made with <FaHeart className="text-rose-500/60 text-[10px]" /> in India
                    </p>
                    <p className="font-body text-xs text-white/15">
                        Premium Bridal Mehendi • Rajasthan • India
                    </p>
                </div>
            </div>
        </footer>
    );
}