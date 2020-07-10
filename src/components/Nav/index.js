import React from "react";
import "./style.css";

export function Nav() {
  return (
    <ul class="nav justify-content-center">
      <li class="nav-item">
        <a class="nav-link active" href="#">
          Home
        </a>
      </li>
      <li class="nav-item">
        <a class="nav-link" href="#">
          About Us
        </a>
      </li>
      <li class="nav-item">
        <a class="nav-link" href="#">
          Services
        </a>
      </li>
      <li class="nav-item">
        <a class="nav-link" href="#">
          Contact Us
        </a>
      </li>
    </ul>
  );
}

export default Nav;
