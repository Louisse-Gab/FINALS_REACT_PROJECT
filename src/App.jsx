import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";

import LandingPage from "./LandingPage";
import Features from "./Features";
import SignUp from "./SignUp";
import Login from "./Login";
import Balance from "./Balance";
import Currency from "./Currency";
<<<<<<< HEAD
import GetStarted from "./GetStarted";
import AboutUs from "./AboutUs";
=======
import Success from "./Success";
import Dashboard from "./Dashboard";
import Transaction from "./Transaction";
>>>>>>> cb7dc47e732233c9eb868229aa5c9781eee11031

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<LandingPage />} />
        <Route path="/features" element={<Features />} />
<<<<<<< HEAD
        <Route path="/about" element={<AboutUs />} />

        {/* SIGN UP PAGE */}
=======
>>>>>>> cb7dc47e732233c9eb868229aa5c9781eee11031
        <Route path="/signup" element={<SignUp />} />
        <Route path="/login" element={<Login />} />

        <Route path="/getstarted" element={<GetStarted />} /> 
        <Route path="/currency" element={<Currency />} />
        <Route path="/balance" element={<Balance />} />
        <Route path="/success" element={<Success />} />
        <Route path="/dashboard" element={<Dashboard />} />

        <Route path="/transactions" element={<Transaction />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;