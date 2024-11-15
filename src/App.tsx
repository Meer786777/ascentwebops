import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';

import './App.css';
import Navbar from './assets/navbar';
import Home from './pages/Home';
import About from './pages/About';
import Services from './pages/services';
import Contact from './pages/Contact';
import Footer from './assets/footer';

function App() {
  return (
    <Router>
      <Navbar />
      <div className='App'>
        <Routes>
          <Route path='/' element={<Home />} />
          <Route path='/about' element={<About />} />
          <Route path='/services' element={<Services />} />
          <Route path='/Contact' element={<Contact />} />
        </Routes>
      </div>
      <div className='App'>
        <Footer />
      </div>
    </Router>
  );
}

// heie rg v 

export default App;
