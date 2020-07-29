import React, { Component } from 'react';
import Contact from '../components/Contact'
import Nav from '../components/Nav';
import HomeSlider from '../components/HomeSlider';
import HomeBody from '../components/HomeBody';
import Footer from '../components/Footer';
import ServiceBody from '../components/ServicesBody';


class Home extends Component {
  render() {
    return (
        <div className="App">
          <Contact />
          <Nav />
          <div id="home-section">
          <HomeSlider />
          </div>
          <div id="about-us-section">
          <HomeBody />
          </div>
          <div id="service-section">
          <ServiceBody />
          </div>
          <Footer />
        </div>
      );
  }
}

export default Home;
