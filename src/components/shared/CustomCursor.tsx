'use client';

import { useEffect, useRef } from 'react';
import { useMousePosition } from '@/hooks/useMousePosition';

export default function CustomCursor() {
    const { position, isMoving, isHovering } = useMousePosition();
    const cursorRef = useRef<HTMLDivElement>(null);
    const followerRef = useRef<HTMLDivElement>(null);

    useEffect(() => {
        if (cursorRef.current && followerRef.current) {
            cursorRef.current.style.left = `${position.x}px`;
            cursorRef.current.style.top = `${position.y}px`;

            // Smooth follower with delay
            setTimeout(() => {
                if (followerRef.current) {
                    followerRef.current.style.left = `${position.x}px`;
                    followerRef.current.style.top = `${position.y}px`;
                }
            }, 60);
        }
    }, [position]);

    return (
        <>
            {/* Main cursor dot */}
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

            {/* Follower ring */}
            <div
                ref={followerRef}
                className="custom-cursor fixed pointer-events-none z-[9997]"
                style={{
                    width: isHovering ? '60px' : '40px',
                    height: isHovering ? '60px' : '40px',
                    borderRadius: '50%',
                    border: '1px solid rgba(212, 160, 23, 0.4)',
                    transform: 'translate(-50%, -50%)',
                    transition: 'width 0.4s ease, height 0.4s ease, border-color 0.4s ease',
                    opacity: isMoving ? 1 : 0.5,
                }}
            />
        </>
    );
}