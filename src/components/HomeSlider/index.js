import React from "react";
import "./style.css";

export function HomeSlider() {
  return (
    <div>
      <div
        id="homeSlideshow"
        class="carousel slide"
        data-ride="carousel"
      >
        <ol class="carousel-indicators">
    <li data-target="#homeSlideshow" data-slide-to="0" class="active"></li>
    <li data-target="#homeSlideshow" data-slide-to="1"></li>
    <li data-target="#homeSlideshow" data-slide-to="2"></li>
  </ol>
  <div class="carousel-inner">
    <div class="carousel-item active">
      <img class="d-block w-100" src="" alt="First slide"/>
      <div class="carousel-caption">
    <h5>bdhsuabfsa</h5>
    <p>fdshauifgdsgayig</p>
  </div>
    </div>
    <div class="carousel-item">
      <img class="d-block w-100" src="" alt="Second slide"/>
    </div>
    <div class="carousel-item">
      <img class="d-block w-100" src="" alt="Third slide"/>
    </div>
  </div>
  <a class="carousel-control-prev" href="#homeSlideshow" role="button" data-slide="prev">
    <span class="carousel-control-prev-icon" aria-hidden="true"></span>
    <span class="sr-only">Previous</span>
  </a>
  <a class="carousel-control-next" href="#homeSlideshow" role="button" data-slide="next">
    <span class="carousel-control-next-icon" aria-hidden="true"></span>
    <span class="sr-only">Next</span>
  </a>
      </div>
    </div>
  );
}

export default HomeSlider;
