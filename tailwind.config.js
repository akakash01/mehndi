/** @type {import('tailwindcss').Config} */
module.exports = {
    content: [
        './src/**/*.{js,ts,jsx,tsx,mdx}',
    ],
    theme: {
        extend: {
            colors: {
                gold: {
                    50: '#fdf8e8',
                    100: '#f9edc6',
                    200: '#f3d985',
                    300: '#ecc54a',
                    400: '#e4b01e',
                    500: '#D4A017',
                    600: '#b88915',
                    700: '#926b13',
                    800: '#7a5814',
                    900: '#684a17',
                },
                mehndi: {
                    50: '#f2f7f1',
                    100: '#ddecd9',
                    200: '#bcd8b5',
                    300: '#92bd88',
                    400: '#6b9e60',
                    500: '#4a7a3e',
                    600: '#3a6131',
                    700: '#2f4e28',
                    800: '#274022',
                    900: '#21351e',
                },
                ivory: '#FFFFF0',
                beige: '#F5F0E8',
                cream: '#FFFDD0',
                'soft-brown': '#8B7355',
                'warm-gold': '#C9A84C',
            },
            fontFamily: {
                heading: ['"Playfair Display"', '"Cormorant Garamond"', 'serif'],
                body: ['"Poppins"', '"Nunito"', 'sans-serif'],
                script: ['"Cormorant Garamond"', 'serif'],
            },
            animation: {
                'float': 'float 6s ease-in-out infinite',
                'float-slow': 'float 8s ease-in-out infinite',
                'glow': 'glow 2s ease-in-out infinite alternate',
                'shimmer': 'shimmer 2s linear infinite',
                'fade-up': 'fadeUp 0.8s ease-out forwards',
                'scale-in': 'scaleIn 0.6s ease-out forwards',
                'slide-right': 'slideRight 0.8s ease-out forwards',
                'slide-left': 'slideLeft 0.8s ease-out forwards',
                'spin-slow': 'spin 20s linear infinite',
            },
            keyframes: {
                float: {
                    '0%, 100%': { transform: 'translateY(0px)' },
                    '50%': { transform: 'translateY(-20px)' },
                },
                glow: {
                    '0%': { boxShadow: '0 0 20px rgba(212, 160, 23, 0.3)' },
                    '100%': { boxShadow: '0 0 40px rgba(212, 160, 23, 0.6)' },
                },
                shimmer: {
                    '0%': { backgroundPosition: '-200% 0' },
                    '100%': { backgroundPosition: '200% 0' },
                },
                fadeUp: {
                    '0%': { opacity: '0', transform: 'translateY(40px)' },
                    '100%': { opacity: '1', transform: 'translateY(0)' },
                },
                scaleIn: {
                    '0%': { opacity: '0', transform: 'scale(0.8)' },
                    '100%': { opacity: '1', transform: 'scale(1)' },
                },
                slideRight: {
                    '0%': { opacity: '0', transform: 'translateX(-100px)' },
                    '100%': { opacity: '1', transform: 'translateX(0)' },
                },
                slideLeft: {
                    '0%': { opacity: '0', transform: 'translateX(100px)' },
                    '100%': { opacity: '1', transform: 'translateX(0)' },
                },
            },
            backgroundImage: {
                'gradient-radial': 'radial-gradient(var(--tw-gradient-stops))',
                'luxury-gradient': 'linear-gradient(135deg, #0a0a0a 0%, #1a1a1a 50%, #0d0d0d 100%)',
                'gold-gradient': 'linear-gradient(135deg, #D4A017 0%, #C9A84C 50%, #E8C547 100%)',
                'mehndi-gradient': 'linear-gradient(135deg, #3a6131 0%, #4a7a3e 50%, #2f4e28 100%)',
            },
        },
    },
    plugins: [],
};