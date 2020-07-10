import React from "react";
import "./style.css";

export function Contact() {
  return (
    <div>
      <nav className="navbar">
        <div>
          <a href="#">
            <img
              src="http://beta.movinon.info.php72-24.phx1-2.websitetestlink.com/wp-content/uploads/2020/06/cropped-movinonnewlogogoldoragangetanbackround.jpg"
              alt="Movin On Logo"
              href=""
            />
          </a>
          <h1>Movin On Movers</h1>
          <p>We Care About Your Cargo!</p>
        </div>

        <h1></h1>

        <div className="contact-info">
          <h2>
            <i className="fa fa-phone"></i> | (210)650-0505{" "}
          </h2>
          <a className="email-link" href="Ron@MovinOn.info">
            Ron@MovinOn.info
          </a>
        </div>
        <div>
          <h2>
            <i className="fa fa-map"></i> | 15206 Forest Dew St.{" "}
          </h2>
          <p>San Antonio, TX 78232</p>
        </div>
      </nav>
    </div>
  );
}

export default Contact;
