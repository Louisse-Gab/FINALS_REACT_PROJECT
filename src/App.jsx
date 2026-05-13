import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";

import AboutUs from "./pages/AboutUs";
import Analytics from "./pages/Analytics";
import LandingPage from "./pages/LandingPage";
// import GetStarted from "./pages/GetStarted";
// import Features from "./pages/Features";
// import SignUp from "./pages/SignUp";
// import Login from "./pages/Login";
// import Balance from "./pages/Balance";
// import Currency from "./pages/Currency";
// import Success from "./pages/Success";
// import Dashboard from "./pages/Dashboard";
// import Transaction from "./pages/Transaction";
// import Budget from "./pages/Budget";
// import Goals from "./pages/Goals";
// import Profile from "./pages/Profile";

function App() {
  return (
    <BrowserRouter>
      <Routes>
<Route path="/" element={<LandingPage />} />

        <Route path="/" element={<AboutUs />} />
        <Route path="/about" element={<AboutUs />} />

        <Route path="/analytics" element={<Analytics />} />

        {/* OLD ROUTES (TEMP DISABLED)
        <Route path="/features" element={<Features />} />
        <Route path="/signup" element={<SignUp />} />
        <Route path="/login" element={<Login />} />
        <Route path="/getstarted" element={<GetStarted />} />
        <Route path="/currency" element={<Currency />} />
        <Route path="/balance" element={<Balance />} />
        <Route path="/success" element={<Success />} />
        <Route path="/dashboard" element={<Dashboard />} />
        <Route path="/transactions" element={<Transaction />} />
        <Route path="/budget" element={<Budget />} />
        <Route path="/goals" element={<Goals />} />
        <Route path="/profile" element={<Profile />} />
        */}

      </Routes>
    </BrowserRouter>
  );
}

export default App;