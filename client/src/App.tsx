import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import About from "./pages/About";
import SignUp from "./pages/SignUp";
import NavBar from "./components/NavBar";
import Services from "./pages/Services";
import ContactUs from "./pages/ContactUs";
import Quiz from "./pages/Quiz";

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
          <Route path="/:subject" element={<Quiz />} />
        </Routes>
      </Router>
    </div>
  );
};

export default App;
