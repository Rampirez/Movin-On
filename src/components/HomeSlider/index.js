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
              className="d-block w-100"
              src="https://via.placeholder.com/150"
              alt="First slide"
            />
              <div className="carousel-caption d-none d-md-block bg-dark mb-4">
                <h5>bdhsuabfsa</h5>
                <p>fdshauifgdsgayig</p>
              </div>
          </div>
          <div className="carousel-item">
            <img className="d-block w-100" src="" alt="Second slide" />
          </div>
          <div className="carousel-item">
            <img classname="d-block w-100" src="" alt="Third slide" />
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
