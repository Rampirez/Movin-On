import React from 'react';
import logo from './logo.svg';
import Contact from './components/Contact';
import Nav from './components/Nav';
import HomeSlider from './components/HomeSlider'


import './App.css';

function App() {
  return (
    <div className="App">
      <Contact />
      <Nav />
      <HomeSlider />
    </div>
  );
}

export default App;
