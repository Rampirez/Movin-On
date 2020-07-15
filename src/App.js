import React from 'react';
import logo from './logo.svg';
import Contact from './components/Contact';
import Nav from './components/Nav';
import HomeSlider from './components/HomeSlider';
import HomeBody from './components/HomeBody';
import Footer from './components/Footer';


import './App.css';

function App() {
  return (
    <div className="App">
      <Contact />
      <Nav />
      <HomeSlider />
      <HomeBody />
      <Footer />
    </div>
  );
}

export default App;
