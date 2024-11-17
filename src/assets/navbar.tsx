import React from 'react';
import { Link } from 'react-router-dom';
import Button from '@mui/material/Button';
import Menu from '@mui/material/Menu';
import MenuItem from '@mui/material/MenuItem';
import Fade from '@mui/material/Fade';
import '../css/herosection.css';
import icon from './../css/images/menu.svg';

export default function Navbar() {
    // Menu State
    const [anchorEl, setAnchorEl] = React.useState<null | HTMLElement>(null);
    const open = Boolean(anchorEl);

    // Handle Menu
    const handleClick = (event: React.MouseEvent<HTMLElement>) => {
        setAnchorEl(event.currentTarget);
    };

    const handleClose = () => {
        setAnchorEl(null);
    };

    return (
        <div className="navbar-parent pl-4 pr-2 flex justify-between items-center">
            {/* Left Section */}
            <div className="left">
                <Link className="nav-logo" to="/ascentwebops/">AscentWebOps</Link>
            </div>

            {/* Right Section */}
            <div className="right flex justify-between items-center gap-2">

                {/* Mobile Menu Button */}
                <Button
                    id="fade-button"
                    className="block md:none"  // This should hide on medium and larger screens
                    aria-controls={open ? 'fade-menu' : undefined}
                    aria-haspopup="true"
                    aria-expanded={open ? 'true' : undefined}
                    onClick={handleClick}
                >
                    <img src={icon} alt="Menu Icon" className="w-6 h-6 none" />
                </Button>


                <Link className="nav-link" to="/ascentwebops/services">Services</Link>
                <Link className="nav-link" to="/ascentwebops/about">About</Link>
                <div className="bg-black contact-btn flex justify-center items-center">
                    <Link className="nav-link-con" to="/ascentwebops/contact">Contact</Link>
                </div>

                {/* Menu j */}
                <Menu
                    id="fade-menu"
                    MenuListProps={{
                        'aria-labelledby': 'fade-button',
                    }}
                    anchorEl={anchorEl}
                    open={open}
                    onClose={handleClose}
                    TransitionComponent={Fade}
                >
                    <MenuItem onClick={handleClose}><Link className="nav-link-2" to="/ascentwebops/services">Services</Link></MenuItem>
                    <MenuItem onClick={handleClose}><Link className="nav-link-2" to="/ascentwebops/about">About</Link></MenuItem>
                    <MenuItem onClick={handleClose}><Link className="nav-link-con-2" to="/ascentwebops/contact">Contact</Link></MenuItem>
                </Menu>
            </div>
        </div>
    );
}
