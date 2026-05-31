'use client';

import { motion } from 'framer-motion';
import SectionHeading from '@/components/shared/SectionHeading';
import { testimonials } from '@/data/content';
import { HiStar } from 'react-icons/hi';

function StarRating({ rating }: { rating: number }) {
    return (
        <div className="flex gap-0.5">
            {Array.from({ length: 5 }).map((_, i) => (
                <HiStar
                    key={i}
                    className={`text-xs ${i < rating ? 'text-gold-500' : 'text-white/10'}`}
                />
            ))}
        </div>
    );
}

export default function TestimonialsSection() {
    return (
        <section id="testimonials" className="relative py-20 lg:py-32 bg-[#0c0c0c] overflow-hidden">
            <div className="absolute bottom-0 right-0 w-96 h-96 bg-gold-500/3 rounded-full blur-[120px]" />

            <div className="relative z-10">
                <div className="max-w-7xl mx-auto px-6 lg:px-12 mb-8">
                    <SectionHeading
                        subtitle="Testimonials"
                        title="Loved by Brides"
                        description="Hear from the beautiful brides and clients who trusted us with their most special moments."
                    />
                </div>

                {/* Grid on all screen sizes */}
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-7xl mx-auto px-6 lg:px-12">
                    {testimonials.slice(0, 3).map((testimonial, i) => (
                        <motion.div
                            key={testimonial.id}
                            className="glass-card p-8 flex flex-col"
                            initial={{ opacity: 0, y: 30 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true, margin: '-30px' }}
                            transition={{ duration: 0.5, delay: i * 0.1 }}
                        >
                            {/* Quote icon */}
                            <div className="text-gold-500/20 text-5xl font-heading leading-none mb-4">&ldquo;</div>

                            <p className="font-body text-sm text-white/50 leading-relaxed flex-1 mb-6">
                                {testimonial.text}
                            </p>

                            <StarRating rating={testimonial.rating} />

                            <div className="flex items-center gap-3 mt-4 pt-4 border-t border-white/5">
                                <div className="w-10 h-10 rounded-full bg-gold-500/10 border border-gold-500/20 flex items-center justify-center">
                                    <span className="font-heading text-sm text-gold-500">
                                        {testimonial.name.charAt(0)}
                                    </span>
                                </div>
                                <div>
                                    <p className="font-body text-sm text-white/70">{testimonial.name}</p>
                                    <p className="font-body text-xs text-white/30">
                                        {testimonial.role} &bull; {testimonial.location}
                                    </p>
                                </div>
                            </div>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
}