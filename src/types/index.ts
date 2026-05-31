export interface Service {
    id: string;
    title: string;
    description: string;
    image: string;
    startingPrice: string;
    category: string;
}

export interface PortfolioItem {
    id: string;
    title: string;
    category: string;
    image: string;
    description: string;
}

export interface Testimonial {
    id: string;
    name: string;
    role: string;
    location: string;
    rating: number;
    text: string;
    image: string;
}

export interface GalleryCategory {
    id: string;
    label: string;
    value: string;
}

export interface NavLink {
    label: string;
    href: string;
}