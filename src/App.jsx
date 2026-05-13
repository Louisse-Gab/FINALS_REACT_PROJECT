import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";

import LandingPage from "./LandingPage";
import Features from "./Features";
import SignUp from "./SignUp";
import Login from "./Login";
import Balance from "./Balance";
import Currency from "./Currency";
import GetStarted from "./GetStarted";
import AboutUs from "./AboutUs";

function App() {
  return (
    <BrowserRouter>
      <Routes>

        {/* LANDING PAGE */}
        <Route path="/" element={<LandingPage />} />

        {/* FEATURES PAGE */}
        <Route path="/features" element={<Features />} />
        <Route path="/about" element={<AboutUs />} />

        {/* SIGN UP PAGE */}
        <Route path="/signup" element={<SignUp />} />

        {/* LOGIN PAGE */}
        <Route path="/login" element={<Login />} />

        <Route path="/getstarted" element={<GetStarted />} /> 
        <Route path="/currency" element={<Currency />} />
        <Route path="/balance" element={<Balance />} />

      </Routes>
    </BrowserRouter>
  );
}

export default App;