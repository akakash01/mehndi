'use client';

import { useScrollProgress } from '@/hooks/useScrollProgress';

export default function ScrollProgressBar() {
    const progress = useScrollProgress();

    return (
        <div className="fixed top-0 left-0 right-0 h-[2px] z-[1001] bg-transparent">
            <div
                className="h-full bg-gradient-to-r from-gold-500 via-gold-400 to-gold-300 transition-all duration-100 ease-out"
                style={{ width: `${progress}%` }}
            />
        </div>
    );
}