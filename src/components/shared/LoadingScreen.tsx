'use client';

import { useEffect, useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

export default function LoadingScreen() {
    const [isLoading, setIsLoading] = useState(true);

    useEffect(() => {
        const timer = setTimeout(() => {
            setIsLoading(false);
        }, 2500);
        return () => clearTimeout(timer);
    }, []);

    return (
        <AnimatePresence>
            {isLoading && (
                <motion.div
                    className="loading-screen"
                    initial={{ opacity: 1 }}
                    exit={{ opacity: 0 }}
                    transition={{ duration: 0.8, ease: [0.4, 0, 0.2, 1] }}
                >
                    <div className="relative flex flex-col items-center justify-center">
                        {/* Outer rotating circle */}
                        <motion.div
                            className="absolute w-32 h-32 rounded-full border border-gold-500/20"
                            animate={{ rotate: 360, scale: [1, 1.1, 1] }}
                            transition={{ rotate: { duration: 3, repeat: Infinity, ease: 'linear' }, scale: { duration: 2, repeat: Infinity } }}
                        />

                        {/* Inner decorative circle */}
                        <motion.div
                            className="absolute w-24 h-24 rounded-full border border-gold-500/30"
                            animate={{ rotate: -360 }}
                            transition={{ duration: 2, repeat: Infinity, ease: 'linear' }}
                        />

                        {/* Center logo / text */}
                        <motion.div
                            className="relative z-10"
                            initial={{ opacity: 0, scale: 0.5 }}
                            animate={{ opacity: 1, scale: 1 }}
                            transition={{ duration: 1, ease: [0.4, 0, 0.2, 1] }}
                        >
                            <svg
                                width="60"
                                height="60"
                                viewBox="0 0 60 60"
                                fill="none"
                                xmlns="http://www.w3.org/2000/svg"
                                className="text-gold-500"
                            >
                                <motion.path
                                    d="M15 30 C15 20, 25 10, 30 10 C35 10, 45 20, 45 30"
                                    stroke="currentColor"
                                    strokeWidth="1.5"
                                    fill="none"
                                    initial={{ pathLength: 0 }}
                                    animate={{ pathLength: 1 }}
                                    transition={{ duration: 1.5, ease: 'easeInOut' }}
                                />
                                <motion.circle
                                    cx="30"
                                    cy="28"
                                    r="4"
                                    fill="currentColor"
                                    initial={{ opacity: 0 }}
                                    animate={{ opacity: 1 }}
                                    transition={{ delay: 0.8, duration: 0.5 }}
                                />
                            </svg>
                        </motion.div>

                        {/* Loading text */}
                        <motion.p
                            className="mt-8 font-heading text-lg tracking-[0.3em] text-gold-500 uppercase"
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ delay: 0.5, duration: 0.8 }}
                        >
                            Artistry in Motion
                        </motion.p>

                        {/* Progress bar */}
                        <motion.div className="mt-6 w-48 h-[1px] bg-white/10 rounded-full overflow-hidden">
                            <motion.div
                                className="h-full bg-gradient-to-r from-gold-500/50 via-gold-500 to-gold-500/50"
                                initial={{ width: '0%' }}
                                animate={{ width: '100%' }}
                                transition={{ duration: 2.2, ease: 'easeInOut' }}
                            />
                        </motion.div>
                    </div>
                </motion.div>
            )}
        </AnimatePresence>
    );
}