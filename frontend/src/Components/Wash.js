import React from "react";
import hygiene from "../Tips/hygiene.jpg";
import burning from "../Tips/burning.jpg";
import defecation from "../Tips/defecation.jpg";

const Wash = () => {
  return (
    <div>
      <h3 className="text-center" style={{ textDecoration: "underline" }}>
        Water, Sanitation and Hygiene (WASH) tips.
      </h3>

      <div className="row align-items-center justify-content-between">
        <div className="col-md">
          <img
            src={hygiene}
            alt="Image practicing hand washing"
            className="rounded img-fluid"
          />
        </div>

        <div className="col-md">
          <p>
            Good personal hygiene is one of the best ways to protect yourself
            from getting gastro or infectious diseases such as COVID-19, colds
            and flu.
          </p>
          <button
            type="button"
            class="btn"
            data-bs-toggle="modal"
            data-bs-target="#hygiene"
            style={{ backgroundColor: "#e385da", color: "white" }}
          >
            More
          </button>
        </div>

        <div
          class="modal fade"
          id="hygiene"
          data-bs-keyboard="false"
          tabindex="-1"
          aria-labelledby="staticBackdropLabel"
          aria-hidden="true"
        >
          <div class="modal-dialog modal-dialog-centered modal-dialog-scrollable">
            <div class="modal-content">
              <div class="modal-body">
                <b>
                  Washing your hands with soap removes germs that can make you
                  ill. Maintaining good personal hygiene will also help prevent
                  you from spreading diseases to other people.
                </b>
                <img
                  src={hygiene}
                  alt="Image practicing hand washing"
                  className="rounded img-fluid  align-items-center"
                />
                <br />
                <br />
                <ul>
                  <h6>
                    To avoid getting sick, wash your hands properly for at least
                    20 seconds.
                  </h6>
                  <li>Wet your hands with water.</li>
                  <li>
                    Apply enough soap to cover all surfaces of your hands.
                  </li>
                  <li>Rub your palms together.</li>
                  <li>Clean between the fingers and the back of your hands.</li>
                  <li>
                    Clean dirty nails with a scrubbing brush, if one is
                    available.
                  </li>
                  <li>
                    Rinse both sides of your hands, preferably under clean
                    running water.
                  </li>
                  <li>Dry off your hands with a clean towel.</li>
                  <li>Use the towel to turn off the tap</li>
                </ul>
              </div>
              <div class="modal-footer">
                <button
                  type="button"
                  class="btn btn-secondary"
                  data-bs-dismiss="modal"
                >
                  Close
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>

      <hr />
      <div className="row align-items-center justify-content-between">
        <div className="col-md">
          <img
            src={burning}
            alt="Image: illegal burning of refuse"
            className="rounded img-fluid"
          />
        </div>

        <div className="col-md">
          <p>
            Smoke from any fire can affect your health, your family's health and
            your neighbor's health. The smoke from backyard burning is released
            close to the ground where people can easily breathe it. The smoke
            from the fire can deposit chemicals on garden vegetables and garden
            soil.
          </p>
          <button
            type="button"
            class="btn "
            data-bs-toggle="modal"
            data-bs-target="#burning"
            style={{ backgroundColor: "#e385da", color: "white" }}
          >
            More
          </button>
        </div>

        <div
          class="modal fade"
          id="burning"
          data-bs-keyboard="false"
          tabindex="-1"
          aria-labelledby="staticBackdropLabel"
          aria-hidden="true"
        >
          <div class="modal-dialog modal-dialog-centered modal-dialog-scrollable">
            <div class="modal-content">
              <div class="modal-body">
                <img
                  src={burning}
                  alt="Image practicing hand washing"
                  className="rounded img-fluid  align-items-center"
                />
                <br />
                <br />
                <p>
                  People can be exposed to those chemicals by eating fruits and
                  vegetables grown near the trash-fire or in garden soil tilled
                  with the ashes.
                  <br />
                  <br /> Young children may be at greater risk than adults
                  because of their playing behaviors, their small size and their
                  developing bodies. The chances of developing health effects
                  from contact (exposure) with smoke from burn barrel fires
                  depends on how much smoke a person contacts, how a person is
                  exposed (e.g., breathing the smoke or eating vegetables
                  affected by the smoke) and how long and often the person is
                  exposed. Some people may be more or less sensitive than others
                  to chemicals in smoke. <br />
                  <br />
                  People exposed to smoke could experience burning eyes and
                  nose, coughing, nausea, headaches, or dizziness. Some people
                  find the odors produced by burn barrels disagreeable, and they
                  may experience discomfort, headaches, and nausea. Smoke can
                  trigger asthma attacks.
                  <br />
                  <br />
                  People with heart and lung conditions are at greater risk for
                  health effects.
                </p>
              </div>
              <div class="modal-footer">
                <button
                  type="button"
                  class="btn btn-secondary"
                  data-bs-dismiss="modal"
                >
                  Close
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>

      <hr />
      <div className="row align-items-center justify-content-between ">
        <div className="col-md">
          <img
            src={defecation}
            alt="Image: open defecation"
            className="rounded img-fluid"
          />
        </div>

        <div className="col-md">
          <p>
            Open defecation refers to the practice of people relieving
            themselves in open, public spaces rather than using proper
            sanitation facilities such as toilets. This practice poses
            significant health, environmental, and social challenges.
          </p>
          <button
            type="button"
            class="btn"
            data-bs-toggle="modal"
            data-bs-target="#defecation"
            style={{ backgroundColor: "#e385da", color: "white" }}
          >
            More
          </button>
        </div>

        <div
          class="modal fade"
          id="defecation"
          data-bs-keyboard="false"
          tabindex="-1"
          aria-labelledby="staticBackdropLabel"
          aria-hidden="true"
        >
          <div class="modal-dialog modal-dialog-centered modal-dialog-scrollable">
            <div class="modal-content">
              <div class="modal-body">
                <img
                  src={defecation}
                  alt="Image practicing hand washing"
                  className="rounded img-fluid  align-items-center"
                />
                <br />
                <br />
                <p>
                  Health Risks: Open defecation increases the risk of diseases
                  spreading through the contamination of water sources and soil
                  with fecal matter. Waterborne diseases like diarrhea, cholera,
                  and typhoid are more likely to spread, particularly in areas
                  with poor hygiene and limited access to clean water.
                  <br />
                  <br />
                  Environmental Impact: Open defecation contributes to
                  environmental pollution by contaminating water bodies, soil,
                  and the surrounding environment. This contamination can lead
                  to the degradation of ecosystems, loss of biodiversity, and
                  negative impacts on agriculture and food security.
                  <br />
                  <br /> Social Implications: Open defecation can lead to the
                  lack of privacy and dignity, especially for women and girls.
                  It can also perpetuate a cycle of poverty by contributing to
                  poor health and limiting opportunities for education and
                  economic advancement. <br />
                  <br />
                  Efforts to Combat Open Defecation: Many governments,
                  organizations, and communities are working to eliminate open
                  defecation by promoting the construction and use of proper
                  sanitation facilities, such as toilets and latrines. These
                  efforts often involve behavior change campaigns,
                  infrastructural development, and raising awareness about the
                  importance of hygienic practices.
                  <br />
                  <br /> The United Nations' Sustainable Development Goals
                  (SDGs) include a target to achieve access to adequate and
                  equitable sanitation for all and to end open defecation by
                  2030 (SDG 6.2). Eradicating open defecation is crucial for
                  improving public health, protecting the environment, and
                  promoting human dignity and well-being.
                </p>
              </div>
              <div class="modal-footer">
                <button
                  type="button"
                  class="btn btn-secondary"
                  data-bs-dismiss="modal"
                >
                  Close
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Wash;
