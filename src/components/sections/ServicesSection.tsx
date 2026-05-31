'use client';

import { motion } from 'framer-motion';
import SectionHeading from '@/components/shared/SectionHeading';
import { services } from '@/data/content';
import { HiArrowRight } from 'react-icons/hi';

function ServiceCard({ service, index }: { service: typeof services[0]; index: number }) {
    return (
        <motion.div
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: '-30px' }}
            transition={{ duration: 0.5, delay: index * 0.1 }}
        >
            <div className="glass-card p-6 lg:p-8 h-full cursor-pointer group relative overflow-hidden transition-all duration-300 hover:border-gold-500/20">
                {/* Subtle hover glow */}
                <div className="absolute -inset-1 bg-gold-500/5 blur-xl rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-500" />

                {/* Content */}
                <div className="relative z-10">
                    {/* Icon */}
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
            </div>
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