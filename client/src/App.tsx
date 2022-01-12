import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./state/pages/Home";
import About from "./state/pages/About";
import SignUp from "./state/pages/SignUp";
import NavBar from "./state/components/NavBar";
import Services from "./state/pages/Services";
import ContactUs from "./state/pages/ContactUs";

const App = function () {
  return (
    <div className="App">
      <Router>
        <NavBar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/services" element={<Services />} />
          <Route path="/contact-us" element={<ContactUs />} />
          <Route path="/sign-up" element={<SignUp />} />
        </Routes>
      </Router>
    </div>
  );
};

export default App;
