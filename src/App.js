import React from 'react';
import logo from './logo.svg';
import Contact from './components/Contact';
import Nav from './components/Nav';
import HomeSlider from './components/HomeSlider';
import HomeBody from './components/HomeBody';
import Footer from './components/Footer';
import ScrollToTop from './components/ScrollToTop';


import './App.css';

function App() {
  return (
    <div className="App">
      <ScrollToTop />
      <Contact />
      <Nav />
      <div id="home-section">
      <HomeSlider />
      </div>
      <div id="about-us-section">
      <HomeBody />
      </div>
      <Footer />
    </div>
  );
}

export default App;
