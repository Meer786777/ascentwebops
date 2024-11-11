import React from 'react';
import logo from './logo.svg';
import './App.css';
import HeroSection from './components/HeroSection';
import Whatwedo from './components/whatwedo';
import Whatweprovide from './components/whatweprovide';
function App() {
  return (
    <>
    <div className='App'>
    <HeroSection/>
    <Whatwedo/>
    <Whatweprovide/>
    </div>
    </>
  );
}

export default App;
