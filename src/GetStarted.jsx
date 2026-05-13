import React from "react";
import { Link } from "react-router-dom";
import "./GetStarted.css";

function GetStarted() {
  return (
    <div className="getstarted-page">

      {/* NAVBAR */}
      <nav className="navbar">
        <div className="logo">
          <span className="material-symbols-outlined logo-icon">
            savings
          </span>
          PennyWise
        </div>

        <ul className="nav-links">
          <li><Link to="/">Home</Link></li>

          <li className="active">
            <Link to="/getstarted">Get Started</Link>
          </li>

          <li><Link to="/features">Features</Link></li>
          <li><Link to="/about">About Us</Link></li>
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

      {/* HERO SECTION */}
      <section className="hero-section">
        <h1>
          <span className="blue-text">How</span> to Start?
        </h1>

        <p>
          Managing your money doesn’t have to be complicated.
          With PennyWise, you can start tracking your budget
          in just a few minutes.
        </p>

        <Link to="/signup">
          <button className="begin-btn">Begin Tracking</button>
        </Link>
      </section>

      {/* STEP 1 */}
      <section className="step-section">
        <div className="step-number">1</div>

        <div className="step-content">
          <h2>Log In</h2>

          <p>
            Securely access your account with your
            <span> email and password.</span>
            If you’re new, Sign Up in seconds and join the
            PennyWise community.
          </p>
        </div>
      </section>

      {/* STEP 2 */}
      <section className="step-section white-bg">
        <div className="step-number">2</div>

        <div className="step-content">
          <h2>Set Your Base Currency</h2>

          <p>
            Choose the
            <span> currency you use most often.</span>
            This ensures all your expenses and balances are
            tracked consistently while giving you flexibility
            to convert currencies later.
          </p>
        </div>
      </section>

      {/* STEP 3 */}
      <section className="step-section">
        <div className="step-number">3</div>

        <div className="step-content">
          <h2>Set Up Your Cash Balance</h2>

          <p>
            <span>Enter your starting balance</span>
            to establish a clear financial baseline.
            This helps PennyWise calculate your available
            funds and track changes over time.
          </p>
        </div>
      </section>

      {/* STEP 4 */}
      <section className="step-section white-bg">
        <div className="step-number">4</div>

        <div className="step-content">
          <h2>Success Confirmation</h2>

          <p>
            Once your
            <span> setup is complete,</span>
            you’ll see a
            <span> confirmation message.</span>
            You’re now ready to explore PennyWise’s features.
          </p>
        </div>
      </section>

      {/* STEP 5 */}
      <section className="dashboard-section">
        <div className="step-number">5</div>

        <div className="step-content">
          <h2>Explore Your Dashboard</h2>

          <p>
            Your
            <span> personalized dashboard</span>
            is the heart of PennyWise.
            From here you can:
          </p>

          <div className="dashboard-cards">

            <div className="dashboard-card colored-card">
              <h3>Visualize Your Finances</h3>

              <p>
                See charts and summaries of your
                spending and savings.
              </p>
            </div>

            <div className="dashboard-card">
              <h3>Track Goals</h3>

              <p>
                Monitor progress toward your
                savings targets.
              </p>
            </div>

            <div className="dashboard-card">
              <h3>Add New Entries</h3>

              <p>
                Quickly input expenses or
                update balances.
              </p>
            </div>

            <div className="dashboard-card colored-card">
              <h3>Review Trends</h3>

              <p>
                Spot patterns in your spending
                habits over time.
              </p>
            </div>

          </div>
        </div>
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

export default GetStarted;