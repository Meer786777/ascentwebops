import { Link } from 'react-router-dom';
import '../css/herosection.css';

function Navbar() {
    return (
        <div className="navbar-parent pl-4 pr-2 flex justify-between items-center">
            <div className='left'>
                <Link className='nav-logo' to="/">AscentWebOps</Link>
            </div>

            <div className='right flex justify-between items-center gap-2'>
                <Link className='nav-link' to="/services">Services</Link>
                <Link className='nav-link' to="/about">About</Link>
                <div className='bg-black contact-btn flex justify-center items-center'>
                    <Link className='nav-link-con' to="/contact">Contact</Link>
                </div>
            </div>
        </div>
    );
}

export default Navbar;
