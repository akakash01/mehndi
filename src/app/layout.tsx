import type { Metadata } from 'next';
import './globals.css';

export const metadata: Metadata = {
    title: 'Luxury Bridal Mehendi Artist | Turning Hands Into Timeless Art',
    description:
        'Premium bridal mehendi artist specializing in Arabic, Rajasthani, and custom mehendi designs for weddings, festivals, and special events. Based in Rajasthan, India.',
    keywords: [
        'Bridal Mehendi Artist',
        'Mehendi Designer',
        'Wedding Mehendi Services',
        'Arabic Mehendi Artist',
        'Mehendi Artist in Rajasthan',
        'Luxury Mehendi',
        'Royal Rajasthani Mehendi',
        'Bridal Mehndi',
        'Wedding Mehndi',
        'Festival Mehendi',
    ],
    openGraph: {
        title: 'Luxury Bridal Mehendi Artist | Turning Hands Into Timeless Art',
        description:
            'Premium bridal mehendi artist specializing in Arabic, Rajasthani, and custom mehendi designs for weddings, festivals, and special events.',
        type: 'website',
        locale: 'en_IN',
    },
};

export default function RootLayout({
    children,
}: {
    children: React.ReactNode;
}) {
    return (
        <html lang="en">
            <body className="bg-black text-beige antialiased">
                {children}
            </body>
        </html>
    );
}