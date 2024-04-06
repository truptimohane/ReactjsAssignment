import React from "react";

function Footer() {
  return (
    <div>
      {/* Remove the container if you want to extend the Footer to full width. */}
      <footer style={{ backgroundColor: "#ffede7" }}>
        <div className="container p-4">
          <div className="row">
            <div className="col-lg-3 col-md-6 mb-4">
              <h5
                className="mb-3"
                style={{ letterSpacing: 2, color: "#7f4722" }}
              >
                shopping online
              </h5>
              <ul className="list-unstyled mb-0">
                <li className="mb-1">
                  <a href="#!" style={{ color: "#4f4f4f" }}>
                    frequently asked questions
                  </a>
                </li>
                <li className="mb-1">
                  <a href="#!" style={{ color: "#4f4f4f" }}>
                    delivery
                  </a>
                </li>
                <li className="mb-1">
                  <a href="#!" style={{ color: "#4f4f4f" }}>
                    pricing
                  </a>
                </li>
                <li>
                  <a href="#!" style={{ color: "#4f4f4f" }}>
                    where we deliver?
                  </a>
                </li>
              </ul>
            </div>
            <div className="col-lg-3 col-md-6 mb-4">
              <h5
                className="mb-3"
                style={{ letterSpacing: 2, color: "#7f4722" }}
              >
                git cards
              </h5>
              <ul className="list-unstyled mb-0">
                <li className="mb-1">
                  <a href="#!" style={{ color: "#4f4f4f" }}>
                    frequently asked questions
                  </a>
                </li>
                <li className="mb-1">
                  <a href="#!" style={{ color: "#4f4f4f" }}>
                    delivery and payment
                  </a>
                </li>
                <li className="mb-1">
                  <a href="#!" style={{ color: "#4f4f4f" }}>
                    activate the card
                  </a>
                </li>
                <li>
                  <a href="#!" style={{ color: "#4f4f4f" }}>
                    rules
                  </a>
                </li>
              </ul>
            </div>
            <div className="col-lg-3 col-md-6 mb-4">
              <h5
                className="mb-3"
                style={{ letterSpacing: 2, color: "#7f4722" }}
              >
                company
              </h5>
              <ul className="list-unstyled mb-0">
                <li className="mb-1">
                  <a href="#!" style={{ color: "#4f4f4f" }}>
                    buy a gift card
                  </a>
                </li>
                <li className="mb-1">
                  <a href="#!" style={{ color: "#4f4f4f" }}>
                    history
                  </a>
                </li>
                <li className="mb-1">
                  <a href="#!" style={{ color: "#4f4f4f" }}>
                    return
                  </a>
                </li>
                <li>
                  <a href="#!" style={{ color: "#4f4f4f" }}>
                    contact
                  </a>
                </li>
              </ul>
            </div>
            <div className="col-lg-3 col-md-6 mb-4">
              <h5
                className="mb-3"
                style={{ letterSpacing: 2, color: "#7f4722" }}
              >
                diamond club
              </h5>
              <ul className="list-unstyled mb-0">
                <li className="mb-1">
                  <a href="#!" style={{ color: "#4f4f4f" }}>
                    registration
                  </a>
                </li>
                <li className="mb-1">
                  <a href="#!" style={{ color: "#4f4f4f" }}>
                    application
                  </a>
                </li>
                <li className="mb-1">
                  <a href="#!" style={{ color: "#4f4f4f" }}>
                    about program
                  </a>
                </li>
                <li>
                  <a href="#!" style={{ color: "#4f4f4f" }}>
                    rules
                  </a>
                </li>
              </ul>
            </div>
          </div>
        </div>
        <div
          className="text-center p-3"
          style={{ backgroundColor: "rgba(0, 0, 0, 0.2)" }}
        >
          © 2020 Copyright:
          <a className="text-dark" href="#/">
            website.com
          </a>
        </div>
        {/* Copyright */}
      </footer>
      {/* End of .container */}
    </div>
  );
}

export default Footer;
