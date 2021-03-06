import React from "react";
import "./style.css";

export function Footer() {
  return (
    <div>
      <footer class="page-footer font-small pt-4">
        <div class="container-fluid text-center text-md-left">
          <div class="row">
            <div class="col-md-6 mt-md-0 mt-3">
              <h5 class="text-uppercase">Contact Info</h5>
              <p>
                (210)650-0505
                <br></br>
              <a href='Ron@MovinOn.info'>Ron@MovinOn.info</a>
              </p>
            </div>

            <hr class="clearfix w-100 d-md-none pb-3" />

            <div class="col-md-3 mb-md-0 mb-3">
              <h5 class="text-uppercase">Our Business Partners</h5>

              <ul class="list-unstyled">
                <li>
                  <a href="http://www.sanantonio.bbb.org/">San Antonio Better Business Bureau</a>
                </li>
                <li>
                  <a href="https://www.transportation.gov/">TX Dept of Transportation</a>
                </li>
                <li>
                  <a href="http://www.dot.state.tx.us/apps/mccs/mccs_search.asp?message=name">US Dept of Transportation</a>
                </li>
                <li>
                  <a href="http://www.1800gotjunk.com/">1-800-GOT-JUNK?</a>
                </li>
              </ul>
            </div>

            <div class="col-md-3 mb-md-0 mb-3">

              <ul class="list-unstyled">
                <li>
                Licensed by:
                </li>
                <li>
                TXDMV #00581976B
                </li>
                <li>
                USDOT #2043392
                </li>
                <li>
                888.368.4689
                </li>
                <li>
                  <a href="https://www.bbb.org/us/tx/san-antonio/profile/moving-companies/movin-on-llc-0825-34679/customer-reviews">
                    <img src='http://seal-austin.bbb.org/customer-reviews/badge-10-bbb-34679.png'></img>
                  </a>
                </li>
                
              </ul>
            </div>
          </div>
        </div>

        <div class="footer-copyright text-center py-3">
          © 2020 Copyright:
          <a href="https://cdrbiz.com/"> CDRBiz.com</a>
        </div>
      </footer>
    </div>
  );
}

export default Footer;
