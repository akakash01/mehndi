'use client';

import { motion } from 'framer-motion';

interface SectionHeadingProps {
    subtitle: string;
    title: string;
    description?: string;
    light?: boolean;
}

export default function SectionHeading({ subtitle, title, description, light = false }: SectionHeadingProps) {
    return (
        <div className="text-center max-w-3xl mx-auto mb-16">
            <motion.span
                className={`inline-block font-body text-xs tracking-[0.3em] uppercase mb-4 ${light ? 'text-gold-500/70' : 'text-gold-500/60'
                    }`}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: '-50px' }}
                transition={{ duration: 0.6 }}
            >
                {subtitle}
            </motion.span>

            <motion.h2
                className={`font-heading text-4xl md:text-5xl lg:text-6xl font-bold mb-6 ${light ? 'text-white' : 'text-white/90'
                    }`}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: '-50px' }}
                transition={{ duration: 0.6, delay: 0.1 }}
            >
                <span className="text-gradient-gold">{title.split(' ')[0]}</span>
                {title.includes(' ') && ' ' + title.split(' ').slice(1).join(' ')}
            </motion.h2>

            {description && (
                <motion.p
                    className={`font-body text-base md:text-lg leading-relaxed ${light ? 'text-white/50' : 'text-white/40'
                        }`}
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true, margin: '-50px' }}
                    transition={{ duration: 0.6, delay: 0.2 }}
                >
                    {description}
                </motion.p>
            )}
        </div>
    );
}