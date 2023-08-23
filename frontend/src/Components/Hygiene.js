import React from "react";

const Hygiene = () => {
  return (
    <div>
      <form>
        <h4 className="text-center">Personal Hygiene</h4>
        <div class="mb-3">
          <label for="community" class="form-label">
            <h6>How does your household dispose garbage?</h6>
          </label>
          <input type="text" class="form-control" id="community" />
        </div>
        <div class="mb-3">
          <label for="occupation" class="form-label">
            <h6>How often do you fall sick?</h6>
          </label>
          <input type="text" class="form-control" id="occupation" />
        </div>
        <div class="mb-3">
          <label for="size" class="form-label">
            <h6>In the last one year, did you experience any disease?</h6>
          </label>
          <input type="text" class="form-control" id="size" />
        </div>
        <div class="mb-3">
          <label for="size" class="form-label">
            <h6>Where did you get the sickness from?</h6>
          </label>
          <input type="text" class="form-control" id="size" />
        </div>
        <div className="mb-3">
          <h6>What type of toilet facility do your household use?</h6>
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
        <div class="mb-3">
          <label for="occupation" class="form-label">
            <h6>If other please specify</h6>
          </label>
          <input type="text" class="form-control" id="occupation" />
        </div>
        <div class="mb-3">
          <label for="occupation" class="form-label">
            <h6>How often do you clean your toilet facility?</h6>
          </label>
          <input type="text" class="form-control" id="occupation" />
        </div>
        <div class="mb-3">
          <label for="occupation" class="form-label">
            <h6>Where do you excrete if you don't have a toilet facility?</h6>
          </label>
          <input type="text" class="form-control" id="occupation" />
        </div>
        <div className="mb-3">
          <h6>Have you or your household contacted any toilet infection?</h6>
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
          <h6>Is there any public toilet in your community?</h6>
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
          <label for="formFile" class="form-label">
            <h6>Upload image of the toilet</h6>
          </label>
          <input class="form-control" type="file" id="formFile" />
        </div>
        <button type="submit" class="btn btn-primary">
          Submit
        </button>
      </form>
    </div>
  );
};

export default Hygiene;
