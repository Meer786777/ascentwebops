import React from 'react';
import '../App.css';
import HeroSection from '../components/HeroSection';
import Whatwedo from '../components/whatwedo';
import Whatweprovide from '../components/whatweprovide';
import WhyUS from '../components/whyUs';
import Review from '../components/review';
function Home() {
    return (
        <>
            <div className='App'>
                <HeroSection />
                <Whatwedo />
                <Whatweprovide />
                <WhyUS />
                <Review />
            </div>

        </>
    );
}

export default Home;
