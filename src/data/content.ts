import { Service, PortfolioItem, Testimonial, GalleryCategory } from '@/types';

export const navigationLinks = [
    { label: 'Home', href: '#hero' },
    { label: 'About', href: '#about' },
    { label: 'Services', href: '#services' },
    { label: 'Portfolio', href: '#portfolio' },
    { label: 'Testimonials', href: '#testimonials' },
    { label: 'Contact', href: '#contact' },
];

export const services: Service[] = [
    {
        id: 'bridal',
        title: 'Bridal Mehendi',
        description: 'Intricate, detailed designs for the modern bride. Full arm and leg coverage with personalized elements telling your love story.',
        image: '/images/services/bridal.jpg',
        startingPrice: '₹7,500',
        category: 'Bridal',
    },
    {
        id: 'arabic',
        title: 'Arabic Mehendi',
        description: 'Bold floral and paisley patterns with flowing lines. Less dense yet stunningly elegant designs perfect for any occasion.',
        image: '/images/services/arabic.jpg',
        startingPrice: '₹3,500',
        category: 'Arabic',
    },
    {
        id: 'rajasthani',
        title: 'Royal Rajasthani Design',
        description: 'Traditional Rajasthani motifs featuring peacocks, royal processions, and intricate jaali work in heritage style.',
        image: '/images/services/rajasthani.jpg',
        startingPrice: '₹5,000',
        category: 'Traditional',
    },
    {
        id: 'festival',
        title: 'Festival Mehendi',
        description: 'Celebrate festivals with beautiful, quick-drying designs. Perfect for Karva Chauth, Diwali, Eid, and Teej celebrations.',
        image: '/images/services/festival.jpg',
        startingPrice: '₹1,500',
        category: 'Festival',
    },
    {
        id: 'engagement',
        title: 'Engagement Mehendi',
        description: 'Romantic designs for your special ring ceremony. Elegant patterns that complement your engagement ring beautifully.',
        image: '/images/services/engagement.jpg',
        startingPrice: '₹4,000',
        category: 'Bridal',
    },
    {
        id: 'party',
        title: 'Party Mehendi',
        description: 'Contemporary and chic designs for sangeet, cocktail parties, and mehendi functions. Stand out with unique patterns.',
        image: '/images/services/party.jpg',
        startingPrice: '₹2,500',
        category: 'Modern',
    },
    {
        id: 'custom',
        title: 'Custom Designs',
        description: 'One-of-a-kind designs tailored to your vision. Bring your ideas and let us create something truly unique together.',
        image: '/images/services/custom.jpg',
        startingPrice: 'Contact for Price',
        category: 'Custom',
    },
];

export const galleryCategories: GalleryCategory[] = [
    { id: 'all', label: 'All', value: 'all' },
    { id: 'bridal', label: 'Bridal', value: 'Bridal' },
    { id: 'arabic', label: 'Arabic', value: 'Arabic' },
    { id: 'minimal', label: 'Minimal', value: 'Minimal' },
    { id: 'traditional', label: 'Traditional', value: 'Traditional' },
    { id: 'modern', label: 'Modern', value: 'Modern' },
    { id: 'feet', label: 'Feet Mehendi', value: 'Feet' },
];

export const portfolioItems: PortfolioItem[] = [
    {
        id: 'p1',
        title: 'Royal Bridal Design',
        category: 'Bridal',
        image: '/images/portfolio/bridal-1.jpg',
        description: 'Full bridal mehendi with personalized motifs',
    },
    {
        id: 'p2',
        title: 'Arabic Floral Pattern',
        category: 'Arabic',
        image: '/images/portfolio/arabic-1.jpg',
        description: 'Bold Arabic design with floral elements',
    },
    {
        id: 'p3',
        title: 'Minimal Hand Design',
        category: 'Minimal',
        image: '/images/portfolio/minimal-1.jpg',
        description: 'Elegant minimal patterns for modern brides',
    },
    {
        id: 'p4',
        title: 'Traditional Rajasthani',
        category: 'Traditional',
        image: '/images/portfolio/traditional-1.jpg',
        description: 'Heritage Rajasthani mehendi artwork',
    },
    {
        id: 'p5',
        title: 'Modern Sangeet Design',
        category: 'Modern',
        image: '/images/portfolio/modern-1.jpg',
        description: 'Contemporary chic for pre-wedding events',
    },
    {
        id: 'p6',
        title: 'Intricate Feet Mehendi',
        category: 'Feet',
        image: '/images/portfolio/feet-1.jpg',
        description: 'Detailed feet mehendi for brides',
    },
    {
        id: 'p7',
        title: 'Grand Bridal Full Set',
        category: 'Bridal',
        image: '/images/portfolio/bridal-2.jpg',
        description: 'Complete bridal package with arms and legs',
    },
    {
        id: 'p8',
        title: 'Arabic Backhand Art',
        category: 'Arabic',
        image: '/images/portfolio/arabic-2.jpg',
        description: 'Stunning Arabic backhand masterpiece',
    },
    {
        id: 'p9',
        title: 'Minimalist Elegance',
        category: 'Minimal',
        image: '/images/portfolio/minimal-2.jpg',
        description: 'Clean lines and subtle patterns',
    },
    {
        id: 'p10',
        title: 'Peacock Motif Design',
        category: 'Traditional',
        image: '/images/portfolio/traditional-2.jpg',
        description: 'Traditional peacock inspired mehendi',
    },
    {
        id: 'p11',
        title: 'Festival Glam Mehendi',
        category: 'Modern',
        image: '/images/portfolio/modern-2.jpg',
        description: 'Glamorous design for festival celebrations',
    },
    {
        id: 'p12',
        title: 'Bridal Feet Artistry',
        category: 'Feet',
        image: '/images/portfolio/feet-2.jpg',
        description: 'Bridal feet mehendi with intricate details',
    },
];

export const testimonials: Testimonial[] = [
    {
        id: 't1',
        name: 'Priya Sharma',
        role: 'Bride',
        location: 'Jaipur',
        rating: 5,
        text: 'Absolute perfection! Every guest at my wedding couldn\'t stop admiring my mehendi. The intricate details and the way she incorporated our love story into the design was magical. Truly a premium experience.',
        image: '/images/testimonials/client-1.jpg',
    },
    {
        id: 't2',
        name: 'Ananya Patel',
        role: 'Bride',
        location: 'Udaipur',
        rating: 5,
        text: 'The best mehendi artist I have ever worked with. The design stayed dark and beautiful for weeks. She is professional, punctual, and incredibly talented. Worth every rupee for the luxury experience.',
        image: '/images/testimonials/client-2.jpg',
    },
    {
        id: 't3',
        name: 'Ritu Agarwal',
        role: 'Event Planner',
        location: 'Mumbai',
        rating: 5,
        text: 'As a wedding planner, I\'ve worked with dozens of mehendi artists, but none match this level of artistry and professionalism. My clients are always thrilled. Highly recommended for luxury weddings.',
        image: '/images/testimonials/client-3.jpg',
    },
    {
        id: 't4',
        name: 'Neha Gupta',
        role: 'Bride',
        location: 'Delhi',
        rating: 5,
        text: 'From the moment I saw her portfolio, I knew she was the one. The Arabic design she created for my wedding was breathtaking. She made me feel so comfortable throughout the long process.',
        image: '/images/testimonials/client-4.jpg',
    },
    {
        id: 't5',
        name: 'Kavita Singh',
        role: 'Fashion Designer',
        location: 'Bangalore',
        rating: 5,
        text: 'Collaborated for a fashion shoot and the mehendi designs were showstoppers. Every frame was stunning. Her work photographs beautifully and the models loved the experience.',
        image: '/images/testimonials/client-5.jpg',
    },
];

export const aboutContent = {
    name: 'Mehendi Artist Name',
    title: 'Luxury Bridal Mehendi Artist',
    experience: '10+ Years',
    bridesServed: '5000+',
    awards: '15+',
    description: `With over a decade of experience in the art of mehendi, I have dedicated my life to transforming hands into canvases of timeless beauty. My journey began in the heritage lanes of Rajasthan, where I learned the traditional art forms passed down through generations.

Today, I blend classic Rajasthani motifs with contemporary Arabic and modern styles to create designs that are both culturally rich and uniquely personal. Every bride deserves to feel extraordinary, and I pour my heart into every intricate pattern, ensuring each design tells its own beautiful story.

My work has graced destination weddings across India, from the palaces of Udaipur to the beaches of Goa. I use only premium, organic mehendi that ensures the richest, darkest stain — because luxury is in every detail.`,
    specialties: [
        'Bridal Mehendi',
        'Arabic Designs',
        'Rajasthani Traditional Art',
        'Custom Motif Creation',
        'Fashion & Editorial Mehendi',
    ],
};