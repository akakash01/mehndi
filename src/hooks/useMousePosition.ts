'use client';

import { useState, useEffect, useCallback } from 'react';

interface MousePosition {
    x: number;
    y: number;
}

export function useMousePosition() {
    const [position, setPosition] = useState<MousePosition>({ x: 0, y: 0 });
    const [isMoving, setIsMoving] = useState(false);
    const [isHovering, setIsHovering] = useState(false);

    const handleMouseMove = useCallback((e: MouseEvent) => {
        setPosition({ x: e.clientX, y: e.clientY });
        setIsMoving(true);
        const timeout = setTimeout(() => setIsMoving(false), 100);
        return () => clearTimeout(timeout);
    }, []);

    useEffect(() => {
        window.addEventListener('mousemove', handleMouseMove);
        return () => window.removeEventListener('mousemove', handleMouseMove);
    }, [handleMouseMove]);

    return { position, isMoving, isHovering, setIsHovering };
}