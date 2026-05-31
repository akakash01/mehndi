'use client';

import { useState } from 'react';
import { motion } from 'framer-motion';
import SectionHeading from '@/components/shared/SectionHeading';
import { HiPhone, HiMail, HiLocationMarker, HiCalendar } from 'react-icons/hi';
import { FaWhatsapp } from 'react-icons/fa';

export default function BookingSection() {
    const [formData, setFormData] = useState({
        name: '',
        phone: '',
        email: '',
        eventDate: '',
        location: '',
        serviceType: '',
        message: '',
    });

    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault();
        // In production: send to API / email service
        const message = encodeURIComponent(
            `Hello! I'm ${formData.name}.\n\nI'm interested in ${formData.serviceType} mehendi services.\nEvent Date: ${formData.eventDate}\nLocation: ${formData.location}\n\n${formData.message}`
        );
        window.open(`https://wa.me/91XXXXXXXXXX?text=${message}`, '_blank');
    };

    const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
        setFormData({ ...formData, [e.target.name]: e.target.value });
    };

    return (
        <section id="contact" className="relative py-20 lg:py-32 bg-[#0a0a0a] overflow-hidden">
            {/* Ambient background */}
            <div className="absolute inset-0 bg-luxury-gradient opacity-60" />
            <div className="absolute top-0 left-1/4 w-[500px] h-[500px] bg-gold-500/2 rounded-full blur-[150px]" />
            <div className="absolute bottom-0 right-1/4 w-[400px] h-[400px] bg-mehndi-500/2 rounded-full blur-[120px]" />

            <div className="relative z-10 max-w-7xl mx-auto px-6 lg:px-12">
                <SectionHeading
                    subtitle="Get in Touch"
                    title="Book Your Appointment"
                    description="Ready to create something beautiful? Fill out the form below and we'll get back to you within 24 hours."
                />

                <div className="flex flex-col lg:flex-row gap-12 lg:gap-20">
                    {/* Form */}
                    <motion.div
                        className="w-full lg:w-3/5"
                        initial={{ opacity: 0, x: -60 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true, margin: '-50px' }}
                        transition={{ duration: 0.8, ease: [0.4, 0, 0.2, 1] }}
                    >
                        <form onSubmit={handleSubmit} className="glass-form p-8 lg:p-10 space-y-6">
                            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                                {/* Name */}
                                <div>
                                    <label className="block font-body text-xs text-white/40 uppercase tracking-wider mb-2">
                                        Full Name *
                                    </label>
                                    <input
                                        type="text"
                                        name="name"
                                        required
                                        value={formData.name}
                                        onChange={handleChange}
                                        placeholder="Your full name"
                                        className="w-full bg-white/[0.02] border border-white/10 rounded-xl px-4 py-3 font-body text-sm text-white/80 placeholder:text-white/20 focus:outline-none focus:border-gold-500/40 transition-colors duration-300"
                                    />
                                </div>

                                {/* Phone */}
                                <div>
                                    <label className="block font-body text-xs text-white/40 uppercase tracking-wider mb-2">
                                        Phone Number *
                                    </label>
                                    <input
                                        type="tel"
                                        name="phone"
                                        required
                                        value={formData.phone}
                                        onChange={handleChange}
                                        placeholder="+91 XXXXX XXXXX"
                                        className="w-full bg-white/[0.02] border border-white/10 rounded-xl px-4 py-3 font-body text-sm text-white/80 placeholder:text-white/20 focus:outline-none focus:border-gold-500/40 transition-colors duration-300"
                                    />
                                </div>

                                {/* Email */}
                                <div>
                                    <label className="block font-body text-xs text-white/40 uppercase tracking-wider mb-2">
                                        Email
                                    </label>
                                    <input
                                        type="email"
                                        name="email"
                                        value={formData.email}
                                        onChange={handleChange}
                                        placeholder="your@email.com"
                                        className="w-full bg-white/[0.02] border border-white/10 rounded-xl px-4 py-3 font-body text-sm text-white/80 placeholder:text-white/20 focus:outline-none focus:border-gold-500/40 transition-colors duration-300"
                                    />
                                </div>

                                {/* Event Date */}
                                <div>
                                    <label className="block font-body text-xs text-white/40 uppercase tracking-wider mb-2">
                                        Event Date *
                                    </label>
                                    <input
                                        type="date"
                                        name="eventDate"
                                        required
                                        value={formData.eventDate}
                                        onChange={handleChange}
                                        className="w-full bg-white/[0.02] border border-white/10 rounded-xl px-4 py-3 font-body text-sm text-white/80 focus:outline-none focus:border-gold-500/40 transition-colors duration-300 [color-scheme:dark]"
                                    />
                                </div>

                                {/* Location */}
                                <div>
                                    <label className="block font-body text-xs text-white/40 uppercase tracking-wider mb-2">
                                        Location *
                                    </label>
                                    <input
                                        type="text"
                                        name="location"
                                        required
                                        value={formData.location}
                                        onChange={handleChange}
                                        placeholder="City, State"
                                        className="w-full bg-white/[0.02] border border-white/10 rounded-xl px-4 py-3 font-body text-sm text-white/80 placeholder:text-white/20 focus:outline-none focus:border-gold-500/40 transition-colors duration-300"
                                    />
                                </div>

                                {/* Service Type */}
                                <div>
                                    <label className="block font-body text-xs text-white/40 uppercase tracking-wider mb-2">
                                        Service Type *
                                    </label>
                                    <select
                                        name="serviceType"
                                        required
                                        value={formData.serviceType}
                                        onChange={handleChange}
                                        className="w-full bg-white/[0.02] border border-white/10 rounded-xl px-4 py-3 font-body text-sm text-white/80 focus:outline-none focus:border-gold-500/40 transition-colors duration-300 appearance-none"
                                    >
                                        <option value="" disabled className="bg-[#1a1a1a]">Select a service</option>
                                        <option value="Bridal Mehendi" className="bg-[#1a1a1a]">Bridal Mehendi</option>
                                        <option value="Arabic Mehendi" className="bg-[#1a1a1a]">Arabic Mehendi</option>
                                        <option value="Rajasthani Design" className="bg-[#1a1a1a]">Royal Rajasthani Design</option>
                                        <option value="Festival Mehendi" className="bg-[#1a1a1a]">Festival Mehendi</option>
                                        <option value="Engagement Mehendi" className="bg-[#1a1a1a]">Engagement Mehendi</option>
                                        <option value="Party Mehendi" className="bg-[#1a1a1a]">Party Mehendi</option>
                                        <option value="Custom Design" className="bg-[#1a1a1a]">Custom Design</option>
                                    </select>
                                </div>
                            </div>

                            {/* Message */}
                            <div>
                                <label className="block font-body text-xs text-white/40 uppercase tracking-wider mb-2">
                                    Message
                                </label>
                                <textarea
                                    name="message"
                                    rows={4}
                                    value={formData.message}
                                    onChange={handleChange}
                                    placeholder="Tell us about your event, design preferences, or any special requests..."
                                    className="w-full bg-white/[0.02] border border-white/10 rounded-xl px-4 py-3 font-body text-sm text-white/80 placeholder:text-white/20 focus:outline-none focus:border-gold-500/40 transition-colors duration-300 resize-none"
                                />
                            </div>

                            {/* Submit */}
                            <motion.button
                                type="submit"
                                className="btn-primary w-full sm:w-auto"
                                whileHover={{ scale: 1.02 }}
                                whileTap={{ scale: 0.98 }}
                            >
                                <span className="flex items-center justify-center gap-2">
                                    <FaWhatsapp className="text-lg" />
                                    Book via WhatsApp
                                </span>
                            </motion.button>
                        </form>
                    </motion.div>

                    {/* Contact Info */}
                    <motion.div
                        className="w-full lg:w-2/5 flex flex-col justify-center"
                        initial={{ opacity: 0, x: 60 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true, margin: '-50px' }}
                        transition={{ duration: 0.8, ease: [0.4, 0, 0.2, 1], delay: 0.2 }}
                    >
                        <div className="space-y-8">
                            <h3 className="font-heading text-2xl lg:text-3xl text-white/80">
                                Let's Create
                                <br />
                                <span className="text-gradient-gold">Something Beautiful</span>
                            </h3>

                            <p className="font-body text-sm text-white/40 leading-relaxed">
                                Every bride deserves to feel extraordinary. Contact us to discuss your vision, and let's bring it to life with the finest mehendi artistry.
                            </p>

                            {/* Contact items */}
                            <div className="space-y-5 pt-4">
                                {[
                                    { icon: <HiPhone />, label: 'Phone', value: '+91 XXXXXXXXXX', href: 'tel:+91XXXXXXXXXX' },
                                    { icon: <HiMail />, label: 'Email', value: 'hello@mehndiartist.com', href: 'mailto:hello@mehndiartist.com' },
                                    { icon: <HiLocationMarker />, label: 'Location', value: 'Rajasthan, India', href: '#' },
                                    { icon: <HiCalendar />, label: 'Availability', value: 'Mon - Sun, 8 AM - 8 PM', href: '#' },
                                ].map((item) => (
                                    <a
                                        key={item.label}
                                        href={item.href}
                                        className="flex items-center gap-4 group"
                                    >
                                        <div className="w-10 h-10 rounded-xl bg-gold-500/5 border border-gold-500/10 flex items-center justify-center text-gold-500/60 group-hover:text-gold-500 group-hover:border-gold-500/30 transition-all duration-300">
                                            {item.icon}
                                        </div>
                                        <div>
                                            <p className="font-body text-[10px] text-white/30 uppercase tracking-wider">{item.label}</p>
                                            <p className="font-body text-sm text-white/60">{item.value}</p>
                                        </div>
                                    </a>
                                ))}
                            </div>
                        </div>
                    </motion.div>
                </div>
            </div>
        </section>
    );
}