import React from "react";
import { Link } from "react-router-dom";

function LandingPage() {
  return (
    <div className="min-h-screen bg-gray-50 text-gray-900">

      {/* NAVBAR */}
      <nav className="flex justify-between items-center h-[72px] px-6 md:px-12 border-b bg-gray-50">

        {/* LOGO */}
        <div className="flex items-center">
          <img
            src="/LOGO.png"
            alt="PennyWise Logo"
            className="h-12 object-contain"
          />
        </div>

        {/* LINKS */}
        <ul className="hidden md:flex gap-8 text-sm font-medium">
          <li className="text-blue-600 font-semibold">
            <Link to="/">Home</Link>
          </li>
          <li className="hover:text-blue-600">
            <Link to="/getstarted">Get Started</Link>
          </li>
          <li className="hover:text-blue-600">
            <Link to="/features">Features</Link>
          </li>
          <li className="hover:text-blue-600">
            <Link to="/about">About Us</Link>
          </li>
        </ul>

        {/* BUTTONS */}
        <div className="flex items-center gap-3">
          <Link
            to="/login"
            className="text-blue-600 font-semibold text-sm"
          >
            Log in
          </Link>

          <Link
            to="/signup"
            className="bg-blue-600 text-white px-4 py-2 rounded-lg text-sm font-semibold hover:bg-blue-700 transition"
          >
            Sign up
          </Link>
        </div>
      </nav>

      {/* HERO */}
      <section className="min-h-[calc(100vh-72px)] flex flex-col justify-center items-center text-center bg-gradient-to-r from-blue-600 to-indigo-200 px-6">

        <h1 className="text-6xl md:text-7xl font-bold font-[cursive]">
          Penny<span className="text-white">Wise</span>
        </h1>

        <p className="mt-4 text-xl md:text-2xl font-semibold">
          Smart tracking. Smarter spending.
        </p>

        <p className="mt-3 text-blue-900 italic max-w-xl">
          Take control of your finances with clarity and confidence.
        </p>

        {/* BUTTONS */}
        <div className="mt-8 flex gap-4 flex-col sm:flex-row">
          <Link
            to="/signup"
            className="bg-blue-600 text-white px-6 py-3 rounded-lg font-semibold hover:scale-105 transition"
          >
            Get Started for Free
          </Link>

          <Link
            to="/getstarted"
            className="bg-white text-blue-600 px-6 py-3 rounded-lg font-semibold hover:scale-105 transition"
          >
            Learn More
          </Link>
        </div>
      </section>

      {/* INTRO */}
      <section className="py-20 text-center px-6">
        <h2 className="text-4xl md:text-5xl font-bold">
          Take Control <span className="text-blue-600">of Your Money</span>
        </h2>

        <p className="mt-6 max-w-2xl mx-auto text-gray-700 leading-relaxed">
          PennyWise helps you track your spending, set savings goals,
          and manage your budget effortlessly—all in one place.
        </p>
      </section>

      {/* FEATURES */}
      <section className="bg-indigo-100 py-20 px-6 text-center">

        <h2 className="text-4xl md:text-5xl font-bold mb-12">
          Why Choose <span className="text-blue-600">PennyWise?</span>
        </h2>

        <div className="max-w-5xl mx-auto grid md:grid-cols-2 gap-6">

          {/* CARD */}
          {[
            {
              title: "Easy Tracking",
              desc: "Automatically categorize your expenses and see where your money goes.",
            },
            {
              title: "Goal-Oriented",
              desc: "Set savings targets and watch your progress grow.",
            },
            {
              title: "Secure & Private",
              desc: "Your financial data is protected with bank-level security.",
            },
            {
              title: "Multi-Currency",
              desc: "Convert and manage expenses across multiple currencies with ease.",
            },
          ].map((item, i) => (
            <div
              key={i}
              className="bg-white p-6 rounded-xl shadow-md flex gap-4 text-left"
            >
              <div className="w-12 h-12 bg-blue-600 rounded-full flex items-center justify-center text-white font-bold">
                ✓
              </div>

              <div>
                <h3 className="text-xl font-bold text-blue-600">
                  {item.title}
                </h3>
                <p className="text-gray-700 text-sm mt-1">{item.desc}</p>
              </div>
            </div>
          ))}

        </div>
      </section>

      {/* HOW IT WORKS */}
      <section className="py-20 text-center px-6">

        <h2 className="text-4xl md:text-5xl font-bold mb-12">
          How It Works
        </h2>

        <div className="max-w-3xl mx-auto space-y-8 text-left">

          {[
            {
              step: "1",
              text: "Input your expenses manually to keep full control.",
            },
            {
              step: "2",
              text: "Track your spending in real time.",
            },
            {
              step: "3",
              text: "Get insights to improve your savings.",
            },
          ].map((item, i) => (
            <div key={i} className="flex gap-4 items-start">
              <div className="w-10 h-10 bg-blue-600 text-white rounded-full flex items-center justify-center font-bold">
                {item.step}
              </div>

              <p className="text-gray-700">{item.text}</p>
            </div>
          ))}

        </div>
      </section>

      {/* AUDIENCE */}
      <section className="bg-gradient-to-b from-gray-50 to-blue-200 py-20 px-6 text-center">

        <h2 className="text-4xl md:text-5xl font-bold mb-12">
          Who is PennyWise For?
        </h2>

        <div className="max-w-5xl mx-auto grid md:grid-cols-4 gap-6">

          {[
            "Students",
            "Professionals",
            "Families",
            "Anyone",
          ].map((item, i) => (
            <div key={i} className="text-center">
              <div className="text-5xl mb-3">👤</div>
              <p className="font-bold">{item}</p>
              <p className="text-sm text-gray-600 mt-1">
                Managing money better
              </p>
            </div>
          ))}

        </div>
      </section>

      {/* FOOTER */}
      <footer className="border-t py-6 text-center text-sm bg-gray-50">
        © 2026 PennyWise. All rights reserved.
      </footer>

    </div>
  );
}

export default LandingPage;