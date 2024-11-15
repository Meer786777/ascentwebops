import React from 'react';
import { Link } from 'react-router-dom';  // Import Link from react-router-dom

function Footer() {
    return (
        <>
            <div className="Whatwedo-section">
                <h1 className="nav-logo">AscentWebOps</h1>
                <div className="flex justify-between items-start">
                    <div className="flex justify-start items-start flex-col gap-1">
                        <a className="footer-links" href="mailto:ascentwebops@gmail.com">ascentwebops@gmail.com</a>
                        <a className="footer-links" href="https://www.instagram.com/ascentwebops/" target="_blank" rel="noopener noreferrer">@ascentwebops</a>
                        <a className="footer-links" href="tel:+92 320 0336650">+92 320 0336650</a>
                    </div>
                    <div className="flex justify-start items-start flex-col gap-1">
                        {/* Replace static anchor tags with Link components */}
                        <Link className="footer-links" to="ascentwebops/services">Services</Link>
                        <Link className="footer-links" to="ascentwebops/about">About Us</Link>
                        <Link className="footer-links" to="ascentwebops/contact">Contact</Link>
                    </div>
                </div>
            </div>
            <div className="footer-rights footer-links width-full">
                <p>© {new Date().getFullYear()} AscentWebOps. All Rights Reserved.</p>
            </div>
        </>
    );
}

export default Footer;
