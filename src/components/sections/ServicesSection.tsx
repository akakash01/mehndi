'use client';

import { useState, useRef } from 'react';
import { motion, useMotionValue, useSpring, useTransform } from 'framer-motion';
import SectionHeading from '@/components/shared/SectionHeading';
import { services } from '@/data/content';
import { HiArrowRight } from 'react-icons/hi';

function ServiceCard({ service, index }: { service: typeof services[0]; index: number }) {
    const cardRef = useRef<HTMLDivElement>(null);
    const [isHovered, setIsHovered] = useState(false);

    const mouseX = useMotionValue(0);
    const mouseY = useMotionValue(0);

    const rotateX = useSpring(useTransform(mouseY, [-0.5, 0.5], ['7deg', '-7deg']), { stiffness: 300, damping: 30 });
    const rotateY = useSpring(useTransform(mouseX, [-0.5, 0.5], ['-7deg', '7deg']), { stiffness: 300, damping: 30 });

    const handleMouseMove = (e: React.MouseEvent) => {
        if (!cardRef.current) return;
        const rect = cardRef.current.getBoundingClientRect();
        const x = (e.clientX - rect.left) / rect.width - 0.5;
        const y = (e.clientY - rect.top) / rect.height - 0.5;
        mouseX.set(x);
        mouseY.set(y);
    };

    const handleMouseLeave = () => {
        mouseX.set(0);
        mouseY.set(0);
        setIsHovered(false);
    };

    return (
        <motion.div
            ref={cardRef}
            className="perspective-1000"
            initial={{ opacity: 0, y: 60 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: '-50px' }}
            transition={{ duration: 0.7, delay: index * 0.1 }}
            onMouseMove={handleMouseMove}
            onMouseEnter={() => setIsHovered(true)}
            onMouseLeave={handleMouseLeave}
        >
            <motion.div
                className="glass-card p-6 lg:p-8 h-full cursor-pointer group relative overflow-hidden"
                style={{ rotateX, rotateY, transformStyle: 'preserve-3d' }}
                whileHover={{ z: 50 }}
            >
                {/* Animated border */}
                <div
                    className={`absolute inset-0 rounded-[16px] transition-opacity duration-500 ${isHovered ? 'opacity-100' : 'opacity-0'
                        }`}
                    style={{
                        background: 'linear-gradient(135deg, rgba(212,160,23,0.3), transparent, rgba(212,160,23,0.1))',
                        padding: '1px',
                        WebkitMask: 'linear-gradient(#fff 0 0) content-box, linear-gradient(#fff 0 0)',
                        WebkitMaskComposite: 'xor',
                        maskComposite: 'exclude',
                    }}
                />

                {/* Hover glow */}
                <div
                    className={`absolute -inset-1 bg-gold-500/5 blur-xl rounded-2xl transition-opacity duration-500 ${isHovered ? 'opacity-100' : 'opacity-0'
                        }`}
                />

                {/* Content */}
                <div className="relative z-10">
                    {/* Icon / Decorative element */}
                    <div className="w-14 h-14 rounded-2xl bg-gold-500/5 border border-gold-500/10 flex items-center justify-center mb-6 group-hover:bg-gold-500/10 transition-colors duration-500">
                        <div className="w-6 h-6 rounded-full border-2 border-gold-500/40 group-hover:border-gold-500/80 transition-colors duration-500" />
                    </div>

                    {/* Title */}
                    <h3 className="font-heading text-xl lg:text-2xl font-semibold text-white/90 mb-3 group-hover:text-gold-500 transition-colors duration-300">
                        {service.title}
                    </h3>

                    {/* Description */}
                    <p className="font-body text-sm text-white/40 leading-relaxed mb-6">
                        {service.description}
                    </p>

                    {/* Price & CTA */}
                    <div className="flex items-center justify-between pt-4 border-t border-white/5">
                        <div>
                            <p className="font-body text-[10px] text-white/30 uppercase tracking-wider mb-0.5">Starting at</p>
                            <p className="font-heading text-lg font-semibold text-gold-500">{service.startingPrice}</p>
                        </div>
                        <motion.button
                            className="w-10 h-10 rounded-full border border-gold-500/20 flex items-center justify-center text-gold-500 group-hover:bg-gold-500 group-hover:text-black transition-all duration-300"
                            whileHover={{ scale: 1.1 }}
                            whileTap={{ scale: 0.9 }}
                            onClick={() => {
                                document.querySelector('#contact')?.scrollIntoView({ behavior: 'smooth' });
                            }}
                        >
                            <HiArrowRight className="text-sm" />
                        </motion.button>
                    </div>
                </div>
            </motion.div>
        </motion.div>
    );
}

export default function ServicesSection() {
    return (
        <section id="services" className="relative py-20 lg:py-32 bg-[#0c0c0c] overflow-hidden">
            {/* Background */}
            <div className="absolute inset-0 bg-luxury-gradient opacity-50" />

            <div className="relative z-10 max-w-7xl mx-auto px-6 lg:px-12">
                <SectionHeading
                    subtitle="Our Services"
                    title="Exquisite Mehendi Artistry"
                    description="From grand bridal designs to elegant festival patterns — every service is crafted with precision, passion, and premium organic mehendi."
                />

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8">
                    {services.map((service, index) => (
                        <ServiceCard key={service.id} service={service} index={index} />
                    ))}
                </div>
            </div>
        </section>
    );
}