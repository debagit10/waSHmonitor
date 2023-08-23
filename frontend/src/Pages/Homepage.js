import React from "react";
import "./homepage.css";
import { useNavigate } from "react-router-dom";

const Homepage = () => {
  const navigate = useNavigate();
  return (
    <div>
      <div style={{ background: "#E385DA" }}>
        <div class="container">
          <div class="row align-items-center text-dark justify-content-between">
            <div class="col-md">
              <img src="" class="image-fluid" alt="" />
            </div>
            <div class="col-md p-5">
              <h2>Let's help you improve your hygiene</h2>
              <p>
                By providing us with vital information we need, we can help
                suggest the best way to go about your hygiene in your various
                environment. Click on the button below to fill in the form for
                us to help you.
              </p>
              <a
                onClick={() => navigate("/questionnaire")}
                class="btn btn-light mt-3"
              >
                <i class="bi bi-chevron-right"></i>Click to fill
              </a>
            </div>
          </div>
        </div>
      </div>

      <div style={{ background: "#CBF692" }}>
        <div class="container">
          <div class="row align-items-center justify-content-between">
            <div class="col-md p-5">
              <h6>
                Traditional African societies used to have community sanitory
                inspectors, they would go around enforcing sanitation and
                hyfiene health in the community.
                <br />
                <br />
                This practice has been abandoned by successive authorities,
                ending the promotion of healthy living among communities.
                <br />
                <br />
                Our solution draws inspiration from the old traditional method
                though it was human-driven, WahMonitor is technology-driven.
              </h6>
            </div>
            <div class="col-md">
              <img src="" class="image-fluid" alt="" />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Homepage;
