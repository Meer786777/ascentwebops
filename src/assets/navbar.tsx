import'../components/css/herosection.css'

function Navbar(){
    return(
        <div className="navbar-parent pl-4 pr-2 flex justify-between items-center">
            <div className='left'>
        <h3 className='nav-logo'>AscentWebOps</h3>
            </div>

            <div className='right flex justify-between items-center gap-4'>
                <a className='nav-link' href="#">Services</a>
                <a className='nav-link' href="#">About</a>
                <div className='bg-black contact-btn flex justify-center items-center ' >
                    <a className='nav-link-con' href="#">Contact</a>
                </div>
            </div>
       </div>
    )
}

export default Navbar