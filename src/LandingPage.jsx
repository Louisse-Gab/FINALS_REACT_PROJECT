import React from "react";
import { Link } from "react-router-dom";
import "./LandingPage.css";

function LandingPage() {
  return (
    <div className="landing-page">

      {/* NAVBAR */}
      <nav className="navbar">

        <div className="logo">
          <span className="material-symbols-outlined logo-icon">
            savings
          </span>

          PennyWise
        </div>

<ul className="nav-links">
  <li className="active">
    <Link to="/">Home</Link>
  </li>

  <li>
    <Link to="/getstarted">Get Started</Link>
  </li>

  <li>
    <Link to="/features">Features</Link>
  </li>

  <li>
    <Link to="/about">About Us</Link>
  </li>
</ul>

        <div className="nav-buttons">

  <Link to="/login">
    <button className="login-btn">
      Log in
    </button>
  </Link>

  <Link to="/signup">
    <button className="signup-btn">
      Sign up
    </button>
  </Link>

</div>

      </nav>

      {/* HERO */}
      <section className="hero">

        <h1>
          Penny<span>Wise</span>
        </h1>

        <p className="tagline">
          Smart tracking. Smarter spending.
        </p>

        <p className="subtext">
          Take control of your finances with clarity and confidence.
        </p>

        <div className="hero-buttons">
          <button>Get Started for Free</button>
          <button className="learn-btn">Learn More</button>
        </div>

      </section>

      {/* INTRO */}
      <section className="intro">

        <h2>
          Take Control <span>of Your Money</span>
        </h2>

        <p>
          PennyWise helps you track your spending, set savings goals,
          and manage your budget effortlessly—all in one place.
        </p>

      </section>

      {/* FEATURES */}
      <section className="features">

        <h2>
          Why Choose Penny<span>Wise?</span>
        </h2>

        <div className="feature-grid">

          <div className="feature-card">

            <div className="icon">
              <span className="material-symbols-outlined">
                bar_chart
              </span>
            </div>

            <div>
              <h3>Easy Tracking</h3>

              <p>
                Automatically categorize your expenses and
                see where your money goes.
              </p>
            </div>

          </div>

          <div className="feature-card">

            <div className="icon">
              <span className="material-symbols-outlined">
                target
              </span>
            </div>

            <div>
              <h3>Goal-Oriented</h3>

              <p>
                Set savings targets and watch your progress grow.
              </p>
            </div>

          </div>

          <div className="feature-card">

            <div className="icon">
              <span className="material-symbols-outlined">
                lock
              </span>
            </div>

            <div>
              <h3>Secure & Private</h3>

              <p>
                Your financial data is protected with bank-level security.
              </p>
            </div>

          </div>

          <div className="feature-card">

            <div className="icon">
              <span className="material-symbols-outlined">
                currency_exchange
              </span>
            </div>

            <div>
              <h3>Multi-Currency</h3>

              <p>
                Convert and manage expenses across multiple currencies
                with ease.
              </p>
            </div>

          </div>

        </div>

      </section>

      {/* HOW IT WORKS */}
      <section className="how">

        <h2>How It Works</h2>

        <div className="steps">

          <div className="step">

            <span>1</span>

            <p>
              <strong>Input Your Expenses</strong> – Quickly add your
              spending manually, keeping full control over your data.
            </p>

          </div>

          <div className="step">

            <span>2</span>

            <p>
              <strong>Track Your Spending</strong> – See real-time updates
              on your budget and spending habits.
            </p>

          </div>

          <div className="step">

            <span>3</span>

            <p>
              <strong>Save Smarter</strong> – Get actionable insights
              to reach your financial goals faster.
            </p>

          </div>

        </div>

      </section>

      {/* AUDIENCE */}
      <section className="audience">

        <h2>
          Who is Penny<span>Wise</span> For?
        </h2>

        <div className="audience-grid">

          <div className="audience-card">

            <div className="audience-icon">
              <span className="material-symbols-outlined">
                school
              </span>
            </div>

            <p>
              <strong>Students</strong>
              learning to manage limited budgets.
            </p>

          </div>

          <div className="audience-card">

            <div className="audience-icon">
              <span className="material-symbols-outlined">
                work
              </span>
            </div>

            <p>
              <strong>Professionals</strong>
              planning long-term savings.
            </p>

          </div>

          <div className="audience-card">

            <div className="audience-icon">
              <span className="material-symbols-outlined">
                family_restroom
              </span>
            </div>

            <p>
              <strong>Families</strong>
              balancing household expenses.
            </p>

          </div>

          <div className="audience-card">

            <div className="audience-icon">
              <span className="material-symbols-outlined">
                groups
              </span>
            </div>

            <p>
              <strong>Anyone</strong>
              who wants peace of mind with their money.
            </p>

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

export default LandingPage;