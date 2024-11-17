import React, { useEffect, useState } from 'react';
function Contact() {
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
        <>
            <div className='Whatwedo-section'>
                <section className='section'>
                    <h2 className='ab-h2'>Get in Touch</h2>
                    <p className='ab-p1'>We would love to hear from you! Whether you have a question, want to start a project, or simply want to discuss your website needs, our team is here to assist you. Reach out to us via the contact form or through any of the methods listed below, and we will get back to you as soon as possible.</p>
                </section>

                <section className='section'>
                    <h2 className='ab-h2'>Contact Form</h2>
                    <p className='ab-p1'>Please fill out the form below, and our team will get in touch with you shortly. Let us know how we can assist you!</p>
                    <form className='contact-form'>

                        <div className='form-group flex flex-col'>
                            <label htmlFor='name' className='ab-p1'>Full Name</label>
                            <input type='text' id='name' name='name' className='input' placeholder='Enter your name' required />
                        </div>
                        <div className='form-group  flex flex-col'>
                            <label htmlFor='email' className='ab-p1'>Email Address</label>
                            <input type='email' id='email' name='email' className='input' placeholder='Enter your email' required />
                        </div>
                        <div className='form-group  flex flex-col'>
                            <label htmlFor='message' className='ab-p1'>Message</label>
                            <textarea id='message' name='message' className='input' placeholder='Your message' required></textarea>
                        </div>
                        <button type='submit' className='contact-btn-2'>Send Message</button>

                    </form>
                </section>

                <section className='section'>
                    <h2 className='ab-h2'>Our Contact Details</h2>
                    <p className='ab-p1'>You can also reach us through the following channels:</p>
                    <ul className='contact-list'>
                        <li className='ab-p1'>Email: <a href="mailto:ascentwebops@gmail.com">ascentwebops@gmail.com</a></li>
                        <li className='ab-p1'>Phone: <a href="tel:+923200336650">+92 320 0336650</a></li>
                    </ul>
                </section>

                {/* <section className='section'>
                    <h2 className='ab-h2'>Follow Us</h2>
                    <p className='ab-p1'>Stay connected and keep up with our latest updates and news. Follow us on our social media channels:</p>
                    <ul className='social-media'>
                        <li><a href='https://facebook.com/AscentWebOps' target='_blank' rel='noopener noreferrer'>Facebook</a></li>
                        <li><a href='https://twitter.com/AscentWebOps' target='_blank' rel='noopener noreferrer'>Twitter</a></li>
                        <li><a href='https://linkedin.com/company/AscentWebOps' target='_blank' rel='noopener noreferrer'>LinkedIn</a></li>
                    </ul>
                </section> */}
                <div
                    className={`custom-cursor ${isHovering ? 'hovering' : ''}`}
                    style={{ left: `${cursorPosition.x}px`, top: `${cursorPosition.y}px` }}
                />
            </div>
        </>
    )
}
export default Contact