import React from "react";
import Footer from "./Components/Footer";
import Navbar from "./Components/Navbar";
import Homepage from "./Pages/Homepage";
import { Route, Routes } from "react-router-dom";
import { BrowserRouter } from "react-router-dom";

import FAQ from "./Pages/FAQ";
import About from "./Pages/About";
import Questionnaire from "./Pages/Questionnaire";

const App = () => {
  return (
    <div>
      <BrowserRouter>
        <div className="sticky-top">
          <Navbar />
        </div>
        <Routes>
          <Route path="/" Component={Homepage} />
          <Route path="/about" Component={About} />
          <Route path="/questionnaire" Component={Questionnaire} />
          <Route path="/faq" Component={FAQ} />
        </Routes>
        <Footer />
      </BrowserRouter>
    </div>
  );
};

export default App;
