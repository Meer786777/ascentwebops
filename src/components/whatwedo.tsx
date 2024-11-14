import '../css/sec1.css'
import img from '../assets/images/image1agency.jpg'
function Whatwedo() {
    return (
        <>
            <div className='Whatwedo-section'>
                <h1 className='Whatwedo-h1'>What we do</h1>
                <p className='whatwedo-p1'>Explore the wide range of services we offer. Hover over each image to discover how we can help your business with tailored solutions for web development, design, performance, and SEO optimization.</p>
                <div className='whatwedo-content '>

                    <div className='conten-div'>
                        <img className='conten-image' src={img} alt="" />
                        <h1 className='conten-h1'>Custom Web Development</h1>
                        <p className='conten-p1'>We build responsive, high-performance websites tailored to your brand's unique needs. Our development team ensures your site is fast, secure, and scalable to support your growth."</p>
                    </div>
                           <div className='conten-div'>
                        <img className='conten-image' src={img} alt="" />
                        <h1 className='conten-h1'>Creative Design & Branding</h1>
                        <p className='conten-p1'>Your brand deserves a unique identity. We create visually stunning, user-friendly designs that capture your brand’s essence and engage your audience.</p>
                    </div>
                    <div className='conten-div'>
                        <img className='conten-image' src={img} alt="" />
                        <h1 className='conten-h1'>Performance & SEO Optimization</h1>
                        <p className='conten-p1'>We optimize your website for speed, search engines, and user experience, ensuring your site ranks well and offers a seamless experience for visitors</p>
                    </div>
                </div>
            </div>
        </>
    );
}

export default Whatwedo;