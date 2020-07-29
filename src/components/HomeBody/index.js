import React from "react";
import "./style.css";

export function HomeBody() {
  return (
    <div>
      <div className="jumbotron">
        <h1>Need some help getting all your belongings moved?</h1>
        <p className="body-p">
          If so, then you've come to the right place. We are licensed and
          insured, and would consider it a privilege to being of service. Go
          ahead, give us a call at anytime. We are open 24 Hours a day/seven
          days a wee
        </p>
        <img
          src="https://www.pngkit.com/png/full/237-2374568_cargo-truck-png-picture-moving-trucks-png.png"
          class="rounded float-left"
          alt="truck pic left"
        ></img>
        <div className='service-area'>
        <h1>Service Area</h1>
        <ul>
          <li className="service-list-item">Kirby</li>
          <li className="service-list-item">Kelly USA</li>
          <li className="service-list-item">La Gloria</li>
          <li className="service-list-item">Lackland</li>
          <li className="service-list-item">Laughlin AFB</li>
          <li className="service-list-item">Leon Valley</li>
          <li className="service-list-item">
            Live Oak
          </li>
          <li className="service-list-item">Macdona</li>
          <li className="service-list-item">Olmos Park</li>
          <li className="service-list-item">St. Hedwig</li>
          <li className="service-list-item">San Antonio</li>
          <li className="service-list-item">Saspamco</li>
          <li className="service-list-item">Schertz</li>
          <li className="service-list-item">Selma</li>
          <li className="service-list-item">Shavano Park</li>
          <li className="service-list-item">Somerset</li>
          <li className="service-list-item">Terrell Hills</li>
          <li className="service-list-item">Universal City</li>
          <li className="service-list-item">Von Ormy</li>
        </ul>
        </div>
      </div>
    </div>
  );
}

export default HomeBody;
