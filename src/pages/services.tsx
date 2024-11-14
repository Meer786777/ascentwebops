import React, { useEffect, useState } from 'react';
import '../css/about.css';

function Services() {
    const [cursorPosition, setCursorPosition] = useState({ x: 0, y: 0 });
    const [isHovering, setIsHovering] = useState(false);

    useEffect(() => {
        const button = document.querySelector('.herosection-btn') as HTMLElement | null;

        const handleMouseMove = (e: MouseEvent) => {
            // Update the custom cursor position
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
            button.addEventListener('mouseleave', handleMouseLeave);
            button.addEventListener('mouseenter', () => setIsHovering(true));
            button.addEventListener('mouseleave', () => setIsHovering(false));
        }

        // Clean up event listeners on component unmount
        return () => {
            window.removeEventListener('mousemove', handleMouseMove);
            if (button) {
                button.removeEventListener('mouseleave', handleMouseLeave);
                button.removeEventListener('mouseenter', () => setIsHovering(true));
                button.removeEventListener('mouseleave', () => setIsHovering(false));
            }
        };
    }, []);
    return (
        <div className='Whatwedo-section'>
            <h1 className='ab-h1'>Our Services</h1>
            <section className='section'>
    <h2 className='ab-h2'>Web Development</h2>
    <p className='ab-p1'>At AscentWebOps, we specialize in building custom websites tailored to meet the unique needs of your business. Our expertise in modern web technologies like React, Node.js, and PHP allows us to develop responsive and user-friendly sites that work seamlessly across devices. We prioritize both design and functionality to ensure that your website not only looks great but also provides a smooth experience for your users.</p>
</section>

<section className='section'>
    <h2 className='ab-h2'>SEO Optimization</h2>
    <p className='ab-p1'>Our SEO services are designed to boost your website’s visibility, drive more traffic, and help your business rank higher in search engine results. We focus on both on-page and off-page SEO strategies to enhance your website's overall searchability and ensure that potential customers can easily find you online. By keeping up with the latest SEO trends, we help you stay ahead of the competition.</p>
</section>

<section className='section'>
    <h2 className='ab-h2'>E-commerce Solutions</h2>
    <p className='ab-p1'>Whether you’re setting up a new online store or looking to improve an existing one, we offer comprehensive e-commerce solutions to meet your needs. From Shopify setup and WooCommerce integration to custom online store development, our team covers every detail, including product cataloging, secure payment processing, and an intuitive user experience. Let us help you turn your website into a powerful sales platform.</p>
</section>

<section className='section'>
    <h2 className='ab-h2'>Page Optimization</h2>
    <p className='ab-p1'>Page load speed is critical for both user experience and SEO. We provide advanced page optimization services to minimize load times, improve responsiveness, and ensure that your website operates efficiently. Our optimization techniques include image compression, code minification, caching solutions, and more to keep your site performing at its best.</p>
</section>

<section className='section'>
    <h2 className='ab-h2'>Maintenance & Support</h2>
    <p className='ab-p1'>Keeping your website updated and secure is essential for long-term success. Our maintenance and support services include regular content updates, security checks, and technical support to keep your site running smoothly. We handle the details so that you can focus on what you do best—growing your business.</p>
</section>

            
            <section className='section'>
                <p className='ab-p1'>We look forward to helping your business ascend to new digital heights with AscentWebOps.<span className='see-more'>Let’s make something remarkable together!</span> </p>
            </section>
            <div
                className={`custom-cursor ${isHovering ? 'hovering' : ''}`}
                style={{ left: `${cursorPosition.x}px`, top: `${cursorPosition.y}px` }}
            />
        </div>

    );
}

export default Services;
