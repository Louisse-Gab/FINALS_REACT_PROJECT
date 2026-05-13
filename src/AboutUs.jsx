import React from "react";
import { Link } from "react-router-dom";
import "./AboutUs.css";

function AboutUs() {
  return (
   <div className="about-page">

      {/* NAVBAR */}
     <nav className="navbar">

  <div className="logo">
    <img src="/LOGO.png" alt="PennyWise Logo" className="logo-img" />
  </div>

        <ul className="nav-links">
          <li><Link to="/">Home</Link></li>
          <li><Link to="/getstarted">Get Started</Link></li>
          <li><Link to="/features">Features</Link></li>

          <li className="active">
            <Link to="/about">About Us</Link>
          </li>
        </ul>

        <div className="nav-buttons">
          <Link to="/login">
            <button className="login-btn">Log in</button>
          </Link>

          <Link to="/signup">
            <button className="signup-btn">Sign up</button>
          </Link>
        </div>
      </nav>

      {/* HERO */}
      <section className="about-hero">
        <h1>About Us</h1>

        <p>
          We’re glad you’re here! PennyWise was built to make
          budgeting simple and accessible for everyone.
          Whether you’re a student, a family, or a professional,
          you’ll find the tools you need to manage money
          with confidence.
        </p>
      </section>

      {/* MISSION */}
      <section className="mission-section">
        <h2>Our Mission</h2>

        <p>
          At PennyWise, we believe financial freedom starts
          with clarity. Our mission is to empower individuals
          and families to understand their money, make better
          decisions, and achieve their goals.
        </p>
      </section>

      {/* WHO WE ARE + VALUES */}
      <section className="info-section">

        <div className="info-box light-box">
          <h2>Who We Are</h2>

          <p>
            We’re a team of finance enthusiasts, tech innovators,
            and everyday savers who know the challenges of managing
            money. PennyWise was built to simplify budgeting for
            everyone—whether you’re a student, a parent, or a
            professional.
          </p>
        </div>

        <div className="info-box blue-box">
          <h2>What We Value</h2>

          <ul>
            <li>
              <strong>Transparency</strong> – Clear insights without jargon.
            </li>

            <li>
              <strong>Security</strong> – Bank-level protection for your data.
            </li>

            <li>
              <strong>Empowerment</strong> – Tools that put you in control.
            </li>

            <li>
              <strong>Simplicity</strong> – A clean, intuitive design that makes budgeting easy.
            </li>
          </ul>
        </div>

      </section>

      {/* VISION */}
      <section className="vision-section">
        <h2>Our Vision</h2>

        <p>
          We imagine a world where financial stress doesn’t
          hold people back. PennyWise is here to help you
          spend smarter, save better, and live wiser.
        </p>
      </section>

      {/* FOOTER */}
      <footer className="footer">
        <p>© 2026 PennyWise. All rights reserved.</p>

        <div className="footer-links">
          <span>Get Started</span>
          <span>Features</span>
          <span>About Us</span>
        </div>
      </footer>

    </div>
  );
}

export default AboutUs;