import React from "react";
import "./style.css";

export function HomeSlider() {
  return (
    <div>
      <div id="homeSlideshow" className="carousel slide" data-ride="carousel">
        <ol className="carousel-indicators">
          <li
            data-target="#homeSlideshow"
            data-slide-to="0"
            className="active"
          ></li>
          <li data-target="#homeSlideshow" data-slide-to="1"></li>
          <li data-target="#homeSlideshow" data-slide-to="2"></li>
        </ol>
        <div className="carousel-inner">
          <div className="carousel-item active">
            <img
              className="d-block w-100 slideimage"
              src="https://i.imgur.com/hBA3Mic.jpg"
              alt="First slide"
            />
            <div className="black-overlay">
              <h1 className="slide-text">Need some help getting all your belongings moved?</h1>
              <p className='slide-caption'>If so, then you've come to the right place. We are licensed and insured, and would consider it a privilege to being of service. Go ahead, give us a call at anytime. We are open 24 Hours a day/seven days a week</p>
            </div>
          </div>
          <div className="carousel-item">
            <img
              className="d-block w-100 slideimage"
              src="https://i.imgur.com/JTnJtvW.jpg"
              alt="Second slide"
            />
            <div className="black-overlay">
            <h1 className="slide-text">We are in your Texas area</h1>
            <p className='slide-caption'>We cover just about any area in Texas. Check our service areas to see where exactly we can help!</p>
            </div>
          </div>
          <div className="carousel-item">
            <img
              classname="d-block w-100 slideimage"
              src="https://i.imgur.com/KYpzO3n.jpg"
              alt="Third slide"
            />
            <div className="black-overlay">
            <h1 className="slide-text">We do:</h1>
            <p className='slide-caption'><ul>
              <li>Apartments</li>
              <li>Homes</li>
              <li>Businesses</li>
              <li>Local & Statewide Relocation</li>
              <li>Last Minute Calls</li>
              </ul></p>
            </div>
          </div>
        </div>
        <a
          className="carousel-control-prev"
          href="#homeSlideshow"
          role="button"
          data-slide="prev"
        >
          <span
            className="carousel-control-prev-icon"
            aria-hidden="true"
          ></span>
          <span className="sr-only">Previous</span>
        </a>
        <a
          className="carousel-control-next"
          href="#homeSlideshow"
          role="button"
          data-slide="next"
        >
          <span
            className="carousel-control-next-icon"
            aria-hidden="true"
          ></span>
          <span className="sr-only">Next</span>
        </a>
      </div>
    </div>
  );
}

export default HomeSlider;
