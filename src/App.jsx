import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";

import LandingPage from "./LandingPage";
import Features from "./Features";
import SignUp from "./SignUp";
import Login from "./Login";

function App() {
  return (
    <BrowserRouter>
      <Routes>

        {/* LANDING PAGE */}
        <Route path="/" element={<LandingPage />} />

        {/* FEATURES PAGE */}
        <Route path="/features" element={<Features />} />

        {/* SIGN UP PAGE */}
        <Route path="/signup" element={<SignUp />} />

        {/* LOGIN PAGE */}
        <Route path="/login" element={<Login />} />

      </Routes>
    </BrowserRouter>
  );
}

export default App;