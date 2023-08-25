import React, { useState } from "react";

const Hygiene = () => {
  const [formData, setFormData] = useState({});

  const handleChange = (event) => {
    const { id, value, type, checked } = event.target;
    setFormData((prevFormData) => {
      return {
        ...prevFormData,
        [id]: type === "checkbox" ? checked : value,
      };
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(formData);
  };

  return (
    <div>
      <form>
        <h4 className="text-center">Personal Hygiene</h4>
        <div class="mb-3">
          <label for="dispose" class="form-label">
            <h6>How does your household dispose garbage?</h6>
          </label>
          <input
            type="text"
            class="form-control"
            id="dispose"
            onChange={handleChange}
          />
        </div>
        <div class="mb-3">
          <label for="sick" class="form-label">
            <h6>How often do you fall sick?</h6>
          </label>
          <input
            type="text"
            class="form-control"
            id="sick"
            onChange={handleChange}
            placeholder="i think there should be options here"
          />
        </div>
        <div className="mb-3">
          <h6>In the last year, have you experienced any sickness?</h6>
          <div class="form-check">
            <input
              class="form-check-input"
              type="radio"
              name="sickness"
              id="sickness"
              value="yes"
              onChange={handleChange}
            />
            <label class="form-check-label" for="sickness">
              Yes
            </label>
          </div>
          <div class="form-check">
            <input
              class="form-check-input"
              type="radio"
              name="sickness"
              id="sickness"
              value="no"
              onChange={handleChange}
            />
            <label class="form-check-label" for="sickness">
              No
            </label>
          </div>
        </div>
        <div class="mb-3">
          <label for="from?" class="form-label">
            <h6>If yes, where did you get the sickness from?</h6>
          </label>
          <input
            type="text"
            class="form-control"
            id="from?"
            onChange={handleChange}
          />
        </div>
        <div className="mb-3">
          <h6>What type of toilet facility do your household use?</h6>
          <div class="form-check">
            <input
              class="form-check-input"
              type="radio"
              name="toilet"
              id="toilet"
              value="WC"
              onChange={handleChange}
            />
            <label class="form-check-label" for="toilet">
              WaterCloset(WC)
            </label>
          </div>
          <div class="form-check">
            <input
              class="form-check-input"
              type="radio"
              name="toilet"
              id="toilet"
              value="Pit Latrin"
              onChange={handleChange}
            />
            <label class="form-check-label" for="toilet">
              Pit Latrin
            </label>
          </div>
          <div class="form-check">
            <input
              class="form-check-input"
              type="radio"
              name="toilet"
              id="toilet"
              value="Composite toilet"
              onChange={handleChange}
            />
            <label class="form-check-label" for="toilet">
              Composite toilet
            </label>
          </div>
          <div class="form-check">
            <input
              class="form-check-input"
              type="radio"
              name="toilet"
              id="toilet"
              value="Bucket Toilet"
              onChange={handleChange}
            />
            <label class="form-check-label" for="toilet">
              Bucket Toilet
            </label>
          </div>
        </div>
        <div class="mb-3">
          <label for="others" class="form-label">
            <h6>If other please specify</h6>
          </label>
          <input
            type="text"
            class="form-control"
            id="others"
            onChange={handleChange}
          />
        </div>
        <div className="mb-3">
          <h6>How often do you clean your toilet?</h6>
          <div class="form-check">
            <input
              class="form-check-input"
              type="radio"
              name="clean"
              id="clean"
              value="Once a week"
              onChange={handleChange}
            />
            <label class="form-check-label" for="clean">
              Once a week
            </label>
          </div>
          <div class="form-check">
            <input
              class="form-check-input"
              type="radio"
              name="clean"
              id="clean"
              value="Once a month"
              onChange={handleChange}
            />
            <label class="form-check-label" for="clean">
              Once a month
            </label>
          </div>
          <div class="form-check">
            <input
              class="form-check-input"
              type="radio"
              name="clean"
              id="clean"
              value=" Every weekend"
              onChange={handleChange}
            />
            <label class="form-check-label" for="clean">
              Every weekend
            </label>
          </div>
          <div class="form-check">
            <input
              class="form-check-input"
              type="radio"
              name="clean"
              id="clean"
              value="Twice a month"
              onChange={handleChange}
            />
            <label class="form-check-label" for="clean">
              Twice a month
            </label>
          </div>
          <div class="form-check">
            <input
              class="form-check-input"
              type="radio"
              name="clean"
              id="clean"
              value="I don't clean"
              onChange={handleChange}
            />
            <label class="form-check-label" for="clean">
              I don't clean
            </label>
          </div>
        </div>
        <div class="mb-3">
          <label for="excrete" class="form-label">
            <h6>Where do you excrete if you don't have a toilet facility?</h6>
          </label>
          <input
            type="text"
            class="form-control"
            id="excrete"
            onChange={handleChange}
          />
        </div>
        <div className="mb-3">
          <h6>Have you or your household contacted any toilet infection?</h6>
          <div class="form-check">
            <input
              class="form-check-input"
              type="radio"
              name="infection"
              id="infection"
              value="yes"
              onChange={handleChange}
            />
            <label class="form-check-label" for="infection">
              Yes
            </label>
          </div>
          <div class="form-check">
            <input
              class="form-check-input"
              type="radio"
              name="infection"
              id="infection"
              value="no"
              onChange={handleChange}
            />
            <label class="form-check-label" for="infection">
              No
            </label>
          </div>
        </div>

        <div className="mb-3">
          <h6>Is there any public toilet in your community?</h6>
          <div class="form-check">
            <input
              class="form-check-input"
              type="radio"
              name="public"
              id="public"
              value="yes"
              onChange={handleChange}
            />
            <label class="form-check-label" for="public">
              Yes
            </label>
          </div>
          <div class="form-check">
            <input
              class="form-check-input"
              type="radio"
              name="public"
              id="public"
              value="no"
              onChange={handleChange}
            />
            <label class="form-check-label" for="public">
              No
            </label>
          </div>
        </div>

        <div class="mb-3">
          <label for="formFile" class="form-label">
            <h6>Upload image of the toilet</h6>
          </label>
          <input
            class="form-control"
            type="file"
            id="formFile"
            onChange={handleChange}
          />
        </div>
        <button type="submit" class="btn btn-primary" onClick={handleSubmit}>
          Submit
        </button>
      </form>
    </div>
  );
};

export default Hygiene;
