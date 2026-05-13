import React from "react";
import { Link } from "react-router-dom";

function AboutUs() {
  return (
    <div className="min-h-screen bg-slate-50 text-black">

      {/* NAVBAR */}
      <nav className="h-[70px] flex items-center justify-between px-10 border-b border-slate-200 bg-slate-50">

        <div className="flex items-center">
          <img src="/LOGO.png" alt="Logo" className="h-10" />
        </div>

        <ul className="hidden md:flex gap-8 text-sm font-medium">
          <li><Link to="/">Home</Link></li>
          <li><Link to="/getstarted">Get Started</Link></li>
          <li><Link to="/features">Features</Link></li>
          <li className="text-blue-600 font-semibold">
            <Link to="/about">About Us</Link>
          </li>
        </ul>

        <div className="flex gap-3">
          <Link to="/login">
            <button className="text-blue-600 font-semibold">
              Log in
            </button>
          </Link>

          <Link to="/signup">
            <button className="bg-blue-600 text-white px-4 py-2 rounded-md font-semibold">
              Sign up
            </button>
          </Link>
        </div>

      </nav>

      {/* HERO */}
      <section className="text-center py-24 px-6 bg-gradient-to-b from-blue-600 to-indigo-200 text-white">
        <h1 className="text-6xl font-bold mb-6">About Us</h1>
        <p className="max-w-2xl mx-auto text-lg leading-relaxed">
          We’re glad you’re here! PennyWise was built to make budgeting simple and accessible for everyone.
          Whether you’re a student, a family, or a professional, you’ll find the tools you need.
        </p>
      </section>

      {/* MISSION */}
      <section className="text-center py-20 px-6">
        <h2 className="text-4xl font-bold mb-6">Our Mission</h2>
        <p className="max-w-2xl mx-auto text-lg leading-relaxed">
          At PennyWise, we believe financial freedom starts with clarity.
          Our mission is to empower people to understand money and make better decisions.
        </p>
      </section>

      {/* INFO SECTION */}
      <section className="grid md:grid-cols-2">

        <div className="bg-indigo-100 text-center p-16">
          <h2 className="text-4xl font-bold text-blue-700 mb-6">Who We Are</h2>
          <p className="max-w-md mx-auto text-lg leading-relaxed">
            We’re a team of finance enthusiasts and tech innovators building simple tools for everyone.
          </p>
        </div>

        <div className="bg-blue-600 text-white p-16">
          <h2 className="text-4xl font-bold mb-6">What We Value</h2>
          <ul className="space-y-3 text-lg list-disc pl-6">
            <li><strong>Transparency</strong> – Clear insights without jargon</li>
            <li><strong>Security</strong> – Bank-level protection</li>
            <li><strong>Empowerment</strong> – You stay in control</li>
            <li><strong>Simplicity</strong> – Clean and easy design</li>
          </ul>
        </div>

      </section>

      {/* VISION */}
      <section className="text-center py-24 px-6">
        <h2 className="text-4xl font-bold mb-6">Our Vision</h2>
        <p className="max-w-3xl mx-auto text-lg leading-relaxed">
          We imagine a world where financial stress doesn’t hold people back.
          PennyWise helps you spend smarter and live wiser.
        </p>
      </section>

      {/* FOOTER */}
      <footer className="border-t border-slate-200 py-5 px-10 flex flex-col md:flex-row justify-between items-center text-sm">
        <p>© 2026 PennyWise. All rights reserved.</p>

        <div className="flex gap-6 mt-2 md:mt-0">
          <span className="hover:text-blue-600 cursor-pointer">Get Started</span>
          <span className="hover:text-blue-600 cursor-pointer">Features</span>
          <span className="hover:text-blue-600 cursor-pointer">About Us</span>
        </div>
      </footer>

    </div>
  );
}

export default AboutUs;