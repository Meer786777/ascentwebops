import React from 'react';
import logo from './logo.svg';
import './App.css';
import Navbar from './assets/navbar';
import HeroSection from './components/HeroSection';
import Whatwedo from './components/whatwedo';
import Whatweprovide from './components/whatweprovide';
import WhyUS from './components/whyUs';
import Review from './components/review';
function App() {
  return (
    <>
        <Navbar/>
    <div className='App'>
    <HeroSection/>
    <Whatwedo/>
    <Whatweprovide/>
    <WhyUS/>
    <Review/>
    </div>
    </>
  );
}

export default App;
