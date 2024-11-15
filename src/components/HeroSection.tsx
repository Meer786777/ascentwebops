import React, { useEffect, useState } from 'react';
import '../css/herosection.css';

function HeroSection() {
    const [cursorPosition, setCursorPosition] = useState({ x: 0, y: 0 });
    const [isHovering, setIsHovering] = useState(false);
    const [isDesktop, setIsDesktop] = useState(true);

    // Check if the device is larger than 768px
    const checkDeviceWidth = () => {
        setIsDesktop(window.innerWidth >= 768);
    };

    useEffect(() => {
        // Check on initial load
        checkDeviceWidth();

        // Add resize event listener to detect when screen size changes
        window.addEventListener('resize', checkDeviceWidth);

        const button = document.querySelector('.herosection-btn') as HTMLElement | null;

        if (!isDesktop) return;

        const handleMouseMove = (e: MouseEvent) => {
            setCursorPosition({ x: e.clientX, y: e.clientY });

            if (button) {
                const rect = button.getBoundingClientRect();
                const x = e.clientX - rect.left - rect.width / 2;
                const y = e.clientY - rect.top - rect.height / 2;
                button.style.transform = `translate(${x * 0.1}px, ${y * 0.1}px)`;
            }
        };

        const handleMouseLeave = () => {
            if (button) {
                button.style.transform = 'translate(0, 0)';
            }
        };

        window.addEventListener('mousemove', handleMouseMove);
        if (button) {
            button.addEventListener('mouseenter', () => setIsHovering(true));
            button.addEventListener('mouseleave', () => setIsHovering(false));
            button.addEventListener('mouseleave', handleMouseLeave);
        }

        // Clean up event listeners on component unmount
        return () => {
            window.removeEventListener('mousemove', handleMouseMove);
            window.removeEventListener('resize', checkDeviceWidth);
            if (button) {
                button.removeEventListener('mouseenter', () => setIsHovering(true));
                button.removeEventListener('mouseleave', () => setIsHovering(false));
                button.removeEventListener('mouseleave', handleMouseLeave);
            }
        };
    }, [isDesktop]); // Re-run effect when screen size changes


    return (
        <div className="HeroSection-texture">
            <h1 className='herosection-h1'>Empowering Digital Ascent with AscentWebOps</h1>
            <p className='herosection-p1'>
                At AscentWebOps, we turn ideas into powerful digital solutions. Our team specializes in custom web development, seamless integrations, and optimized performance to elevate your brand’s online presence.
            </p>
            <div className='herosection-btn'>
                <p className='herosection-p2'>Transform Your Brand – Get Started Now</p>
            </div>

            {/* Custom cursor element */}
            <div
                className={`custom-cursor ${isHovering ? 'hovering' : ''}`}
                style={{ left: `${cursorPosition.x}px`, top: `${cursorPosition.y}px` }}
            />
        </div>
    );
}

export default HeroSection;
