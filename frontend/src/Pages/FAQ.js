import React from "react";

const FAQ = () => {
  return (
    <div>
      <div class="p-3" id="questions">
        <div class="container">
          <h2 class="text-center mb-4">Frequently Asked Questions</h2>
          <div class="accordion" id="questions">
            <div class="accordion-item">
              <h2 class="accordion-header" id="headingOne">
                <button
                  class="accordion-button"
                  type="button"
                  data-bs-toggle="collapse"
                  data-bs-target="#question-one"
                >
                  <h5>What is WaSHMonitor's core objective?</h5>
                </button>
              </h2>
              <div
                id="question-one"
                class="accordion-collapse collapse show"
                aria-labelledby="headingOne"
                data-bs-parent="#questions"
              >
                <div class="accordion-body">
                  WaSHMonitor is committed to resolving sanitation health
                  challenges prevalent in unrepresented communities. Our mission
                  centers on improving the well-being of these underserved
                  populations by advocating for accurate and community-specific
                  data collection and interventions.
                </div>
              </div>
            </div>

            <div className="accordion-item">
              <h2 class="accordion-header" id="headingTwo">
                <button
                  class="accordion-button"
                  type="button"
                  data-bs-toggle="collapse"
                  data-bs-target="#question-two"
                >
                  <h5>
                    How does WaSHMonitor tackle sanitation health issues in
                    unrepresented communities?
                  </h5>
                </button>
              </h2>
              <div
                id="question-two"
                class="accordion-collapse collapse show"
                aria-labelledby="headingTwo"
                data-bs-parent="#questions"
              >
                <div class="accordion-body">
                  WaSHMonitor employs innovative technology, community
                  engagement, and data-driven strategies to confront sanitation
                  health issues in unrepresented communities. By facilitating
                  data collection and analysis that is specific to each
                  community, we empower these areas to address their unique
                  challenges effectively.
                </div>
              </div>
            </div>

            <div className="accordion-item">
              <h2 class="accordion-header" id="headingThree">
                <button
                  class="accordion-button"
                  type="button"
                  data-bs-toggle="collapse"
                  data-bs-target="#question-three"
                >
                  <h5>
                    How can I contribute to WaSHMonitor's efforts in
                    unrepresented communities?
                  </h5>
                </button>
              </h2>
              <div
                id="question-three"
                class="accordion-collapse collapse show"
                aria-labelledby="headingThree"
                data-bs-parent="#questions"
              >
                <div class="accordion-body">
                  You can actively contribute by using our mobile application to
                  report sanitation health challenges specific to your
                  community. Your participation helps bridge the gap between
                  aggregated data and accurate representation, promoting
                  informed decision-making.
                </div>
              </div>
            </div>

            <div className="accordion-item">
              <h2 class="accordion-header" id="headingFour">
                <button
                  class="accordion-button"
                  type="button"
                  data-bs-toggle="collapse"
                  data-bs-target="#question-four"
                >
                  <h5>
                    What incentives are offered to encourage involvement in
                    WaSHMonitor's initiatives?
                  </h5>
                </button>
              </h2>
              <div
                id="question-four"
                class="accordion-collapse collapse show"
                aria-labelledby="headingFour"
                data-bs-parent="#questions"
              >
                <div class="accordion-body">
                  Through our "Trash to Earn" system, participants can earn
                  tokens by responsibly managing waste, directly contributing to
                  improved sanitation health. These incentives drive positive
                  behaviors and directly impact the health and well-being of the
                  community.
                </div>
              </div>
            </div>

            <div className="accordion-item">
              <h2 class="accordion-header" id="headingFive">
                <button
                  class="accordion-button"
                  type="button"
                  data-bs-toggle="collapse"
                  data-bs-target="#question-five"
                >
                  <h5>
                    How does WaSHMonitor ensure the precision of sanitation
                    health data collection?
                  </h5>
                </button>
              </h2>
              <div
                id="question-five"
                class="accordion-collapse collapse show"
                aria-labelledby="headingFive"
                data-bs-parent="#questions"
              >
                <div class="accordion-body">
                  WaSHMonitor employs advanced tools such as geolocation
                  tracking and AI-powered analysis to ensure precise sanitation
                  health data collection. This technology guarantees that the
                  information gathered resonates with the unique needs of each
                  unrepresented community.
                </div>
              </div>
            </div>

            <div className="accordion-item">
              <h2 class="accordion-header" id="headingSix">
                <button
                  class="accordion-button"
                  type="button"
                  data-bs-toggle="collapse"
                  data-bs-target="#question-six"
                >
                  <h5>
                    How can organizations collaborate with WaSHMonitor to
                    strengthen sanitation health efforts?
                  </h5>
                </button>
              </h2>
              <div
                id="question-six"
                class="accordion-collapse collapse show"
                aria-labelledby="headingSix"
                data-bs-parent="#questions"
              >
                <div class="accordion-body">
                  Organizations interested in partnering with WaSHMonitor to
                  address sanitation health disparities in unrepresented
                  communities can contact us through the details provided on our
                  website. We welcome collaborations that align with our mission
                  to ensure equitable representation and intervention.
                </div>
              </div>
            </div>

            <div className="accordion-item">
              <h2 class="accordion-header" id="headingSeven">
                <button
                  class="accordion-button"
                  type="button"
                  data-bs-toggle="collapse"
                  data-bs-target="#question-seven"
                >
                  <h5>
                    How can I stay informed about WaSHMonitor's progress in
                    unrepresented communities?
                  </h5>
                </button>
              </h2>
              <div
                id="question-seven"
                class="accordion-collapse collapse show"
                aria-labelledby="headingSeven"
                data-bs-parent="#questions"
              >
                <div class="accordion-body">
                  Stay updated by regularly visiting our website, connecting
                  with us on social media platforms, and subscribing to our
                  newsletter. We share updates, news, and success stories about
                  our initiatives focused on improving sanitation health in
                  previously unrepresented communities.
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default FAQ;
