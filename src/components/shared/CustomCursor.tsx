'use client';

import { useEffect, useRef } from 'react';
import { useMousePosition } from '@/hooks/useMousePosition';

export default function CustomCursor() {
    const { position, isHovering } = useMousePosition();
    const cursorRef = useRef<HTMLDivElement>(null);

    useEffect(() => {
        if (cursorRef.current) {
            cursorRef.current.style.left = `${position.x}px`;
            cursorRef.current.style.top = `${position.y}px`;
        }
    }, [position]);

    return (
        <div
            ref={cursorRef}
            className="custom-cursor fixed pointer-events-none z-[9998]"
            style={{
                width: isHovering ? '0px' : '8px',
                height: isHovering ? '0px' : '8px',
                borderRadius: '50%',
                background: '#D4A017',
                transform: 'translate(-50%, -50%)',
                transition: 'width 0.3s ease, height 0.3s ease',
                boxShadow: '0 0 20px rgba(212, 160, 23, 0.5)',
            }}
        />
    );
}