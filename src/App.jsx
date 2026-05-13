import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";

import LandingPage from "./LandingPage";
import Features from "./Features";
import SignUp from "./SignUp";
import Login from "./Login";
import Balance from "./Balance";
import Currency from "./Currency";
import Success from "./Success";
import Dashboard from "./Dashboard";
import Transaction from "./Transaction";
import Budget from "./Budget";
import Goals from "./Goals";
import Analytics from "./Analytics";
import Profile from "./Profile";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<LandingPage />} />
        <Route path="/features" element={<Features />} />
        <Route path="/signup" element={<SignUp />} />
        <Route path="/login" element={<Login />} />

        <Route path="/currency" element={<Currency />} />
        <Route path="/balance" element={<Balance />} />
        <Route path="/success" element={<Success />} />
        <Route path="/dashboard" element={<Dashboard />} />

        <Route path="/transactions" element={<Transaction />} />
        <Route path="/budget" element={<Budget />} />
        <Route path="/goals" element={<Goals />} />
        <Route path="/analytics" element={<Analytics />} />
        <Route path="/profile" element={<Profile />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;