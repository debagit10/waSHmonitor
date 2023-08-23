import React from "react";

const Personal = () => {
  return (
    <div>
      <form>
        <h4 className="text-center">Personal Information</h4>
        <div class="mb-3">
          <label for="community" class="form-label">
            <h6>What is the name of your community?</h6>
          </label>
          <input type="text" class="form-control" id="community" />
        </div>
        <div class="mb-3">
          <label for="occupation" class="form-label">
            <h6>Occupation</h6>
          </label>
          <input type="text" class="form-control" id="occupation" />
        </div>
        <div class="mb-3">
          <label for="size" class="form-label">
            <h6>Household size</h6>
          </label>
          <input type="text" class="form-control" id="size" />
        </div>
        <div className="mb-3">
          <h6>Gender</h6>
          <div class="form-check">
            <input
              class="form-check-input"
              type="radio"
              name=""
              id=""
              value="yes"
            />
            <label class="form-check-label" for="">
              Male
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
              name=""
              id=""
              value="yes"
            />
            <label class="form-check-label" for="">
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
          <input type="text" class="form-control" id="source" />
        </div>
        <div className="mb-3">
          <h6>Do you treat your drinking water?</h6>
          <div class="form-check">
            <input
              class="form-check-input"
              type="radio"
              name=""
              id=""
              value="yes"
            />
            <label class="form-check-label" for="">
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
        <div className="mb-3">
          <h6>Do you pratice hand washing with soap and water?</h6>
          <div class="form-check">
            <input
              class="form-check-input"
              type="radio"
              name=""
              id=""
              value="yes"
            />
            <label class="form-check-label" for="">
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

        <button type="submit" class="btn btn-primary">
          Submit
        </button>
      </form>
    </div>
  );
};

export default Personal;
