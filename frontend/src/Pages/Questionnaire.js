import React from "react";
import Hygiene from "../Components/Hygiene";
import Personal from "../Components/Personal";

const Questionnaire = () => {
  return (
    <div className="container">
      <h5 className="text-center mt-2">
        This survey helps us to improve your hygiene
      </h5>
      <div className="row g-4 m-3">
        <div className="col-md">
          <Personal />
        </div>
        <div className="col-md">
          <Hygiene />
        </div>
      </div>
    </div>
  );
};

export default Questionnaire;
