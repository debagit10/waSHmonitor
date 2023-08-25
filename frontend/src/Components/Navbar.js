import React from "react";
import "./navbar.css";
import { useNavigate } from "react-router-dom";

const Navbar = () => {
  const navigate = useNavigate();

  return (
    <div className="sticky-top">
      <nav class="navbar navbar-expand-lg bg-secondary-subtle">
        <div class="container">
          <a onClick={() => navigate("/")}>
            <h4>
              Wa
              <span className="logo-1">SH</span>
              <span className="logo-2">MONITOR</span>
            </h4>
            <h6>
              Water, Sanitation
              <br />
              and Hygiene Monitor
            </h6>
          </a>
          <button
            class="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarNav"
            aria-controls="navbarNav"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span class="navbar-toggler-icon "></span>
          </button>
          <div
            class="collapse navbar-collapse justify-content-end"
            id="navbarNav"
          >
            <ul class="navbar-nav">
              <li class="nav-item p-2">
                <a onClick={() => navigate("/")}>
                  <h6> Home</h6>
                </a>
              </li>

              <li class="nav-item  p-2">
                <a onClick={() => navigate("/about")}>
                  <h6> About</h6>
                </a>
              </li>
              <li class="nav-item  p-2">
                <a onClick={() => navigate("/faq")}>
                  <h6> FAQ</h6>
                </a>
              </li>
            </ul>
          </div>
        </div>
      </nav>
    </div>
  );
};

export default Navbar;
