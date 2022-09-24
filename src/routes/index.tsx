import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import HomeScreen from "../pages/HomeScreen";
import SecondScreen from "../pages/SecondScreen";
const AppRoutes = () => {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<HomeScreen />} />
        <Route path="/secondScreen" element={<SecondScreen />} />
      </Routes>
    </Router>
  );
};

export default AppRoutes;
