import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "../components/Home";
import Addressbooks from "../components/Addressbooks";
import Newaddressbook from "../components/Newaddressbook";

export default (
  <Router>
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/addressbooks" element={<Addressbooks />} />
      <Route path="/addressbook" element={<Newaddressbook />} />
    </Routes>
  </Router>
);