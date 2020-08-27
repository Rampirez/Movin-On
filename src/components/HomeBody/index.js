import React from "react";
import "./style.css";

export function HomeBody() {
  return (
    <div>
      <div className="jumbotron">
      <div className="m-5 p-2 border border-dark rounded service-block">
        <h1>Welcome!</h1>
        <p className="body-p">
          <b>Other services requested and at NO ADDITIONAL CHARGE include:</b>
          <br></br>
          <hr></hr>
          <ul>
            <li>
              Taking down and reset up of your bed, washers and dryers and
              refrigerator.
            </li>
            <li>
              Quilting each piece of your furniture with high quality quilts on
              each truck
            </li>
            <li>
              Utilizing commercial size rubber bands to each drawer or cabinet
              door avoids damages to furniture and the interior of your new
              home.
            </li>
          </ul>
        </p>
        </div>
        <img
          src="https://www.pngkit.com/png/full/237-2374568_cargo-truck-png-picture-moving-trucks-png.png"
          class="rounded float-left truckpic"
          alt="truck pic left"
        ></img>
        <div className="service-area">
          <h1>Service Area</h1>
          <ul>
            <li className="service-list-item">Kirby</li>
            <li className="service-list-item">Kelly USA</li>
            <li className="service-list-item">La Gloria</li>
            <li className="service-list-item">Lackland</li>
            <li className="service-list-item">Laughlin AFB</li>
            <li className="service-list-item">Leon Valley</li>
            <li className="service-list-item">Live Oak</li>
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
