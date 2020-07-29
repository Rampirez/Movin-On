import React from "react";
import "./style.css";

export function Nav() {
  return (
    <ul class="nav justify-content-center">
      <li class="nav-item">
        <a class="nav-link" href="#about-us-section">
          About Us
        </a>
      </li>
      <li class="nav-item">
        <a class="nav-link" href="#service-section">
          Services
        </a>
      </li>
    </ul>
  );
}

export default Nav;
