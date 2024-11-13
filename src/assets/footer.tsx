function Footer() {
    return (
        <>
            <div className="Whatwedo-section">
                <h1 className="nav-logo">AscentWebOps</h1>
                <div className="flex justify-between items-start">
                    <div className="flex justify-start items-start flex-col gap-1">
                        <a className="footer-links" href="mailto:ascentwebops@gmail.com">ascentwebops@gmail.com</a>
                        <a className="footer-links" href="https://twitter.com/ascentwebops" target="_blank" rel="noopener noreferrer">@ascentwebops</a>
                        <a className="footer-links" href="tel:+923052101706">03052101706</a>
                    </div>
                    <div className="flex justify-start items-start flex-col gap-1">
                        <a className="footer-links" href="#">Services</a>
                        <a className="footer-links" href="#">About us</a>
                        <a className="footer-links" href="#">Contact</a>
                    </div>
                </div>
            </div>
            <div className="footer-rights footer-links">
                    <p>© {new Date().getFullYear()} AscentWebOps. All Rights Reserved.</p>
                </div>
        </>
    );
}

export default Footer;
