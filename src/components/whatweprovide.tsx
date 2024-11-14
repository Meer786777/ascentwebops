import '../css/sec1.css';
import * as React from 'react';
import Accordion from '../assets/Accordion';

function Whatweprovide() {
    return (
        <>
            <div className='Whatwedo-section'>
                <h1 className='Whatwedo-h1'>How We Can Help Your Business Grow</h1>
                <div className='w-full'>
                {/* <div className='p-4 mt-5 bg-gray-200 rounded-lg'> */}
                    <Accordion title='Custom Web Development' text='At AscentWebOps, we specialize in creating custom web solutions tailored to your business needs. Whether you need a simple informational site or a complex, feature-rich platform, our team of experienced developers will work with you to bring your vision to life. We use the latest technologies and development practices to ensure your website is scalable, secure, and built to grow with your business. Let us help you create a digital presence that stands out.' />
                    <Accordion title='Creative Design & Branding' text="Our creative design and branding services focus on crafting a unique and compelling identity for your business. We believe that great design goes beyond aesthetics—it tells a story and communicates your brand’s core values. From logo creation to full website design, we ensure every element reflects your brand’s personality and resonates with your target audience. Whether you're starting from scratch or looking to refresh your existing brand, we’ll help you create a lasting impression."  />
                    <Accordion title='Performance & SEO Optimization' text='In today’s fast-paced digital world, performance and visibility are key. Our performance optimization services ensure your website runs smoothly and efficiently, providing the best possible user experience. Additionally, we offer SEO optimization to help your website rank higher on search engines, making it easier for potential customers to find you. We utilize proven strategies to increase loading speed, enhance mobile responsiveness, and improve your SEO rankings, driving more traffic and improving conversion rates.' />
                </div>
                {/* </div> */}
            </div>
        </>
    );
}

export default Whatweprovide;
