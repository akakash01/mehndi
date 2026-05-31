'use client';

import { useRef, useEffect } from 'react';
import { motion } from 'framer-motion';
import SectionHeading from '@/components/shared/SectionHeading';
import { testimonials } from '@/data/content';
import { HiStar } from 'react-icons/hi';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

if (typeof window !== 'undefined') {
    gsap.registerPlugin(ScrollTrigger);
}

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
    const sliderRef = useRef<HTMLDivElement>(null);

    useEffect(() => {
        const ctx = gsap.context(() => {
            const cards = gsap.utils.toArray('.testimonial-card');
            gsap.to(cards, {
                xPercent: -100 * (cards.length - 1),
                ease: 'none',
                scrollTrigger: {
                    trigger: sliderRef.current,
                    pin: false,
                    scrub: 1,
                    start: 'top top',
                    end: () => `+=${sliderRef.current?.scrollWidth || 0}`,
                    invalidateOnRefresh: true,
                },
            });
        });

        return () => ctx.revert();
    }, []);

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

                {/* Testimonial cards - horizontal scroll on mobile, grid on desktop */}
                <div className="hidden lg:grid lg:grid-cols-3 gap-6 max-w-7xl mx-auto px-6 lg:px-12">
                    {testimonials.slice(0, 3).map((testimonial, i) => (
                        <motion.div
                            key={testimonial.id}
                            className="testimonial-card glass-card p-8 flex flex-col"
                            initial={{ opacity: 0, y: 40 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true, margin: '-50px' }}
                            transition={{ duration: 0.6, delay: i * 0.15 }}
                        >
                            {/* Quote icon */}
                            <div className="text-gold-500/20 text-5xl font-heading leading-none mb-4">"</div>

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
                                        {testimonial.role} • {testimonial.location}
                                    </p>
                                </div>
                            </div>
                        </motion.div>
                    ))}
                </div>

                {/* Mobile: Auto-scroll row */}
                <div ref={sliderRef} className="lg:hidden overflow-hidden">
                    <div className="flex gap-4 px-6" style={{ width: `${testimonials.length * 320}px` }}>
                        {[...testimonials, ...testimonials].map((testimonial, i) => (
                            <div
                                key={`${testimonial.id}-${i}`}
                                className="testimonial-card glass-card p-6 flex-shrink-0 w-[300px] flex flex-col"
                            >
                                <div className="text-gold-500/20 text-4xl font-heading leading-none mb-3">"</div>
                                <p className="font-body text-xs text-white/50 leading-relaxed flex-1 mb-4 line-clamp-5">
                                    {testimonial.text}
                                </p>
                                <StarRating rating={testimonial.rating} />
                                <div className="flex items-center gap-3 mt-3 pt-3 border-t border-white/5">
                                    <div className="w-8 h-8 rounded-full bg-gold-500/10 border border-gold-500/20 flex items-center justify-center">
                                        <span className="font-heading text-xs text-gold-500">
                                            {testimonial.name.charAt(0)}
                                        </span>
                                    </div>
                                    <div>
                                        <p className="font-body text-xs text-white/70">{testimonial.name}</p>
                                        <p className="font-body text-[10px] text-white/30">{testimonial.location}</p>
                                    </div>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        </section>
    );
}