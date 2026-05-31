'use client';

import { useEffect, useState } from 'react';
import LoadingScreen from '@/components/shared/LoadingScreen';
import CustomCursor from '@/components/shared/CustomCursor';
import Navigation from '@/components/shared/Navigation';
import ScrollProgressBar from '@/components/shared/ScrollProgressBar';
import HeroSection from '@/components/sections/HeroSection';
import AboutSection from '@/components/sections/AboutSection';
import ServicesSection from '@/components/sections/ServicesSection';
import PortfolioSection from '@/components/sections/PortfolioSection';
import TestimonialsSection from '@/components/sections/TestimonialsSection';
import BookingSection from '@/components/sections/BookingSection';
import InstagramSection from '@/components/sections/InstagramSection';
import Footer from '@/components/sections/Footer';
import { useLenis } from '@/hooks/useLenis';

// Floating contact buttons
function FloatingButtons() {
    return (
        <div className="fixed bottom-6 right-6 z-[900] flex flex-col gap-3">
            <a
                href="https://wa.me/91XXXXXXXXXX"
                target="_blank"
                rel="noopener noreferrer"
                className="w-12 h-12 rounded-full bg-green-500/90 backdrop-blur-sm border border-green-400/30 flex items-center justify-center text-white shadow-lg shadow-green-500/20 hover:scale-110 transition-transform duration-300"
                title="Chat on WhatsApp"
            >
                <svg viewBox="0 0 24 24" className="w-5 h-5" fill="currentColor">
                    <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z" />
                </svg>
            </a>
            <a
                href="tel:+91XXXXXXXXXX"
                className="w-12 h-12 rounded-full bg-gold-500/90 backdrop-blur-sm border border-gold-400/30 flex items-center justify-center text-black shadow-lg shadow-gold-500/20 hover:scale-110 transition-transform duration-300"
                title="Call Now"
            >
                <svg viewBox="0 0 24 24" className="w-5 h-5" fill="currentColor">
                    <path d="M6.62 10.79a15.053 15.053 0 006.59 6.59l2.2-2.2a.99.99 0 011.01-.24c1.12.37 2.33.57 3.57.57.55 0 1 .45 1 1V20c0 .55-.45 1-1 1-9.39 0-17-7.61-17-17 0-.55.45-1 1-1h3.5c.55 0 1 .45 1 1 0 1.25.2 2.45.57 3.57.1.31.03.67-.24 1.02l-2.2 2.2z" />
                </svg>
            </a>
        </div>
    );
}

export default function HomePage() {
    const [isLoaded, setIsLoaded] = useState(false);

    // Initialize smooth scroll
    useLenis();

    useEffect(() => {
        // Simulate resources loading
        const timer = setTimeout(() => setIsLoaded(true), 2600);
        return () => clearTimeout(timer);
    }, []);

    return (
        <>
            {/* Loading screen */}
            <LoadingScreen />

            {/* Custom cursor (hidden on mobile via CSS) */}
            <CustomCursor />

            {/* Scroll progress indicator */}
            <ScrollProgressBar />

            {/* Navigation */}
            <Navigation />

            {/* Main content */}
            <main className="relative">
                <HeroSection />
                <AboutSection />
                <ServicesSection />
                <PortfolioSection />
                <TestimonialsSection />
                <BookingSection />
                <InstagramSection />
            </main>

            {/* Footer */}
            <Footer />

            {/* Floating contact buttons */}
            <FloatingButtons />
        </>
    );
}