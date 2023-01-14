import React from "react";
import UserLogin from "./UserLogin";
import UserSignup from "./UserSignup";
import Home from "./Home";
import Dash from "./Dash";

import About from "./About";
import AboutProblem from "./AboutProblem";
import AboutTech from "./AboutTech";


import NotFound from "./NotFound";
import "./components.css";
import { Routes, Route, Link, BrowserRouter } from "react-router-dom";


import "bootstrap/dist/css/bootstrap.min.css";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="signup" element={<UserSignup />} />
        <Route path="login" element={<UserLogin/>} />
        <Route path="dash" element={<Dash />} />
        <Route path="about" element={<About />} />
        <Route path="about-problem" element={<AboutProblem/>} />
        <Route path="about-tech" element={<AboutTech/>} />
        <Route path="*" element={<NotFound />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
