import React from "react";
import "./style.css";

export function Contact() {
  return (
    <div>
      <nav className="navbar">


        <div>
          <img
            src="http://beta.movinon.info.php72-24.phx1-2.websitetestlink.com/wp-content/uploads/2020/06/cropped-movinonnewlogogoldoragangetanbackround.jpg"
            alt="Movin On Logo"
          />
          <br></br>
          <h1>Movin' On!</h1>
          <p>We Care About Your Cargo!</p>
        </div>


        <span className="navbar-text">
          <h2>
            <i className="fa fa-phone"></i> | (210)650-0505<br></br>{" "}
            <i className="fa fa-map"></i> | 15206 Forest Dew St.
          </h2>
        </span>
      </nav>
    </div>
  );
}

export default Contact;
