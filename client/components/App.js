
import React from "react";
import Home from "./Home";
import Dash from "./Dash";
import NotFound from "./NotFound";
import "./components.css";
import { Routes, Route, Link, BrowserRouter } from "react-router-dom";


import "bootstrap/dist/css/bootstrap.min.css";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="dash" element={<Dash />} />
        <Route path="*" element={<NotFound />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
