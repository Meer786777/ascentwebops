import React, { useEffect, useState } from 'react';
import '../css/about.css';

function About() {
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
        <div className='Whatwedo-section'>
            <h1 className='ab-h1'>About AscentWebOps</h1>
            <section className='section'>
                <h2 className='ab-h2'>Our Mission</h2>
                <p className='ab-p1'>At AscentWebOps, we are committed to elevating digital experiences through tailor-made web solutions that drive growth, enhance engagement, and streamline business processes. Our goal is to empower businesses with impactful websites and tools that make a difference in today’s competitive online environment. From building sleek, responsive sites to providing continuous support and optimization, AscentWebOps is your trusted partner in the digital ascent.</p>
            </section>
            <section className='section'>
                <h2 className='ab-h2'>Who We Are</h2>
                <p className='ab-p1'>AscentWebOps was founded by two passionate web developers dedicated to creating top-notch digital solutions for businesses of all sizes. Our journey began with a shared vision of transforming digital experiences by combining creativity, technical skills, and strategic insights. Together, we’ve established a company that not only meets clients' needs but also exceeds their expectations.</p>
            </section>
            <section className='section'>
                <h2 className='ab-h2'>Meet the Founders</h2>
                <h3 className='ab-h3'>Ibrahim Brohi – Founder & Lead Developer</h3>
                <p className='ab-p1'>With a strong background in frontend software development, I bring expertise in React.js, HTML, CSS, and JavaScript to AscentWebOps. As a certified full-stack developer from Aptech, I am passionate about crafting intuitive and engaging websites. My approach combines technical precision with a focus on user experience, ensuring that every project aligns with our clients' brand and goals. Currently, I am expanding my backend skills to provide even more comprehensive solutions. My journey in web development began with a deep interest in technology and a desire to create meaningful digital interactions. Since then, I’ve built a diverse portfolio and am excited to bring my skills to AscentWebOps.</p>
                <h4 className='ab-p1'> Visit: <a className='link' href="https://meer786777.github.io/Ibrahimbrohi.io/" target='blank'>Portfolio </a> </h4>
            <br />
            <h3 className='ab-h3'>Muzzamil Zehri – Co-Founder & Project Strategist</h3>
            <p className='ab-p1'>Muzzamil Zehri is a visionary leader who ensures that every AscentWebOps project aligns with client expectations and industry standards. With experience in both the technical and creative aspects of web development, he brings a unique blend of project management and development skills to the table. Muzzamil has successfully led multiple teams on complex projects, combining design and functionality to produce exceptional results. Known for his attention to detail and a deep understanding of customer needs, Muzzamil is instrumental in driving AscentWebOps’ mission forward, providing expertise and innovation to help clients reach new heights in their digital endeavors.</p>
            </section>
            <section className='section'>
                <h2 className='ab-h2'>Our Values</h2>
                <p className='ab-p1'> <b>Client-Centricity:</b> Your goals shape our approach, and we’re committed to delivering results that add value to your business.</p>
                <p className='ab-p1'> <b>Innovation:</b>We are constantly learning, experimenting, and implementing new technologies to stay ahead in the fast-evolving world of web development.</p>
                <p className='ab-p1'> <b>Innovation:</b> From concept to completion and beyond, we stand by our clients, offering dependable support and solutions.</p>
            </section>
            <section className='section'>
                <h2 className='ab-h2'>Why Choose AscentWebOps?</h2>
                <p className='ab-p1'>We understand that your website is the digital face of your business. That’s why we go beyond just building websites—we create experiences. Whether it’s a simple website or a complex web application, we aim for precision, quality, and timely delivery. We believe in transparent communication and a collaborative approach, so you’re always in the loop.</p>
            </section>

            <section className='section'>
                <p className='ab-p1'>We look forward to helping your business ascend to new digital heights with AscentWebOps. Let’s make something remarkable together!</p>
            </section>
            <div
                className={`custom-cursor ${isHovering ? 'hovering' : ''}`}
                style={{ left: `${cursorPosition.x}px`, top: `${cursorPosition.y}px` }}
            />
        </div>

    );
}

export default About;
