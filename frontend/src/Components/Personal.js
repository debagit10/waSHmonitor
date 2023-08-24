import React, { useState } from "react";

const Personal = () => {
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
        <h4 className="text-center">Personal Information</h4>
        <div class="mb-3">
          <label for="community" class="form-label">
            <h6>What is the name of your community?</h6>
          </label>
          <input
            type="text"
            class="form-control"
            id="community"
            onChange={handleChange}
            required
          />
        </div>
        <div class="mb-3">
          <label for="occupation" class="form-label">
            <h6>Occupation</h6>
          </label>
          <input
            type="text"
            class="form-control"
            id="occupation"
            onChange={handleChange}
          />
        </div>
        <div class="mb-3">
          <label for="size" class="form-label">
            <h6>Household size</h6>
          </label>
          <input
            type="text"
            class="form-control"
            id="size"
            onChange={handleChange}
          />
        </div>
        <div className="mb-3">
          <h6>Gender</h6>
          <div class="form-check">
            <input
              class="form-check-input"
              type="radio"
              name="gender"
              id="gender"
              value="male"
              onChange={handleChange}
            />
            <label class="form-check-label" for="gender">
              Male
            </label>
          </div>
          <div class="form-check">
            <input
              class="form-check-input"
              type="radio"
              name="gender"
              id="gender"
              value="female"
              onChange={handleChange}
            />
            <label class="form-check-label" for="gender">
              Female
            </label>
          </div>
        </div>
        <div className="mb-3">
          <h6>Age range</h6>
          <div class="form-check">
            <input
              class="form-check-input"
              type="radio"
              name="age"
              id="age"
              value="yes"
            />
            <label class="form-check-label" for="age">
              Yes
            </label>
          </div>
          <div class="form-check">
            <input
              class="form-check-input"
              type="radio"
              name=""
              id=""
              value="no"
            />
            <label class="form-check-label" for="">
              No
            </label>
          </div>
        </div>
        <div class="mb-3">
          <label for="source" class="form-label">
            <h6> What is your primary source of drinking water?</h6>
          </label>
          <input
            type="text"
            class="form-control"
            id="source"
            onChange={handleChange}
          />
        </div>
        <div className="mb-3">
          <h6>Do you treat your drinking water?</h6>
          <div class="form-check">
            <input
              class="form-check-input"
              type="radio"
              name="treat"
              id="treat"
              value="yes"
              onChange={handleChange}
            />
            <label class="form-check-label" for="treat">
              Yes
            </label>
          </div>
          <div class="form-check">
            <input
              class="form-check-input"
              type="radio"
              name="treat"
              id="treat"
              value="no"
              onChange={handleChange}
            />
            <label class="form-check-label" for="treat">
              No
            </label>
          </div>
        </div>
        <div className="mb-3">
          <h6>Do you pratice hand washing with soap and water?</h6>
          <div class="form-check">
            <input
              class="form-check-input"
              type="radio"
              name="practice"
              id="practice"
              value="yes"
              onChange={handleChange}
            />
            <label class="form-check-label" for="practice">
              Yes
            </label>
          </div>
          <div class="form-check">
            <input
              class="form-check-input"
              type="radio"
              name="practice"
              id="practice"
              value="no"
              onChange={handleChange}
            />
            <label class="form-check-label" for="practice">
              No
            </label>
          </div>
        </div>

        <button type="submit" class="btn btn-primary" onClick={handleSubmit}>
          Submit
        </button>
      </form>
    </div>
  );
};

export default Personal;
