// Features.jsx

import React from "react";
import { Link } from "react-router-dom";
import "./Features.css";

function Features() {
  return (
    <div className="features-page">

      {/* NAVBAR */}
      <nav className="navbar">

        <div className="logo">
          <span className="material-symbols-outlined logo-icon">
            savings
          </span>

          PennyWise
        </div>

      <ul className="nav-links">
  <li>
    <Link to="/">Home</Link>
  </li>
  <li>Get Started</li>
  <li className="active">
    <Link to="/features">Features</Link>
  </li>
  <li>About Us</li>
</ul>

        <div className="nav-buttons">
          <button className="login-btn">Log in</button>
          <button className="signup-btn">Sign up</button>
        </div>

      </nav>

      {/* HERO */}
      <section className="features-hero">

        <h1>Everything You Need!</h1>

        <p>
          PennyWise is packed with tools that make money management
          simple and stress-free. From tracking expenses and setting goals
          to managing balances and converting currencies, you'll have
          everything you need to stay in control.
        </p>

      </section>

      {/* FEATURE LIST */}
      <section className="features-list">

        {/* FEATURE 1 */}
        <div className="feature-item">

          <div className="feature-title">

            <span className="material-symbols-outlined feature-icon">
              receipt_long
            </span>

            <h2>Expense Tracking</h2>

          </div>

          <p className="feature-desc">
            Gain clarity into your spending habits with easy input and
            smart organization.
          </p>

          <div className="feature-box">
            <p>✔ Manual expense entry</p>
            <p>✔ Spending trends</p>
            <p>✔ Custom categories</p>
          </div>

        </div>

        {/* FEATURE 2 */}
        <div className="feature-item right">

          <div className="feature-title reverse">

            <h2>Goal Setting</h2>

            <span className="material-symbols-outlined feature-icon">
              target
            </span>

          </div>

          <p className="feature-desc">
            Stay motivated by defining clear savings targets and
            tracking progress visually.
          </p>

          <div className="feature-box">
            <p>✔ Flexible goal creation</p>
            <p>✔ Progress tracking</p>
            <p>✔ Adjustable milestones</p>
          </div>

        </div>

        {/* FEATURE 3 */}
        <div className="feature-item">

          <div className="feature-title">

            <span className="material-symbols-outlined feature-icon">
              currency_exchange
            </span>

            <h2>Currency Converter</h2>

          </div>

          <p className="feature-desc">
            Manage expenses across multiple currencies seamlessly.
          </p>

          <div className="feature-box">
            <p>✔ Instant conversions</p>
            <p>✔ Multi-currency support</p>
            <p>✔ Consistent tracking</p>
          </div>

        </div>

        {/* FEATURE 4 */}
        <div className="feature-item right">

          <div className="feature-title reverse">

            <h2>Cash Balance Management</h2>

            <span className="material-symbols-outlined feature-icon">
              account_balance_wallet
            </span>

          </div>

          <p className="feature-desc">
            Establish a clear financial baseline and monitor
            changes over time.
          </p>

          <div className="feature-box">
            <p>✔ Starting balance setup</p>
            <p>✔ Real-time updates</p>
            <p>✔ Balance history</p>
          </div>

        </div>

        {/* FEATURE 5 */}
        <div className="feature-item">

          <div className="feature-title">

            <span className="material-symbols-outlined feature-icon">
              bar_chart
            </span>

            <h2>Dashboard Insights</h2>

          </div>

          <p className="feature-desc">
            Get a complete snapshot of your finances with visual
            summaries and trends.
          </p>

          <div className="feature-box">
            <p>✔ Spending charts</p>
            <p>✔ Goal progress overview</p>
            <p>✔ Personalized insights</p>
          </div>

        </div>

      </section>

      {/* FOOTER */}
      <footer className="footer">

        <p>
          © 2026 PennyWise. All rights reserved.
        </p>

        <div className="footer-links">
          <span>Get Started</span>
          <span>Features</span>
          <span>About Us</span>
        </div>

      </footer>

    </div>
  );
}

export default Features;