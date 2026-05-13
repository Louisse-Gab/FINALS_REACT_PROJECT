import React from "react";
import { Link } from "react-router-dom";
import "./Goals.css";

function Goals() {

  const goals = [
    {
      title: "Buy a New Laptop",
      saved: "₱50,000",
      target: "₱80,000",
      progress: "62%",
      width: "62%"
    },

    {
      title: "Emergency Fund",
      saved: "₱40,000",
      target: "₱100,000",
      progress: "40%",
      width: "40%"
    },

    {
      title: "Vacation Trip",
      saved: "₱60,000",
      target: "₱60,000",
      progress: "100%",
      width: "100%"
    }
  ];

  return (
    <div className="goals-page">


      {/* NAVBAR */}
     <nav className="navbar">

  <div className="logo">
    <img src="/LOGO.png" alt="PennyWise Logo" className="logo-img" />
  </div>

        <ul className="dash-links">

          <li>
            <Link to="/dashboard">
              Dashboard
            </Link>
          </li>

          <li>
            <Link to="/transactions">
              Transactions
            </Link>
          </li>

          <li>
            <Link to="/budget">
              Budget
            </Link>
          </li>

          <li className="active">
            <Link to="/goals">
              Goals
            </Link>
          </li>

          <li>
            <Link to="/analytics">
              Analytics
            </Link>
          </li>

        </ul>

        <Link to="/profile">
          <span className="material-symbols-outlined profile-icon">
            account_circle
          </span>
        </Link>

      </nav>

      <main className="goals-content">

        <div className="goals-header">

          <div>
            <h2>Budget Goals</h2>

            <p>
              Set, track, and achieve your financial targets
            </p>
          </div>

          <button className="add-goal-btn">
            + Add Goal
          </button>

        </div>

        <div className="goals-filters">

          <select>
            <option>Status</option>
          </select>

          <select>
            <option>Time Period</option>
          </select>

        </div>

        <section className="goal-cards">

          {goals.map((goal, index) => (

            <div className="goal-card" key={index}>

              <h3>{goal.title}</h3>

              <p>
                {goal.saved} Target | {goal.target} Saved
              </p>

              <div className="goal-progress-bar">

                <div
                  className="goal-progress-fill"
                  style={{ width: goal.width }}
                ></div>

              </div>

              <div className="goal-progress-footer">

                <span className="ongoing-tag">
                  Ongoing
                </span>

                <small>
                  {goal.progress}
                </small>

              </div>

            </div>

          ))}

        </section>

        <h3 className="overview-title">
          Goal Progress Overview
        </h3>

        <section className="overview-grid">

          <div className="overview-card">

            <div className="overview-top">
              <h4>Goal Progress</h4>
            </div>

            <div className="bar-chart">

              <div className="bar-group">
                <div className="bar blue h70"></div>
                <div className="bar gray h75"></div>
                <span>Buy a New Laptop</span>
              </div>

              <div className="bar-group">
                <div className="bar blue h60"></div>
                <div className="bar gray h85"></div>
                <span>Emergency Fund</span>
              </div>

              <div className="bar-group">
                <div className="bar blue h85"></div>
                <div className="bar gray h95"></div>
                <span>Vacation Trip</span>
              </div>

              <div className="bar-group">
                <div className="bar blue h110"></div>
                <div className="bar gray h120"></div>
                <span>Home Renovation</span>
              </div>

              <div className="bar-group">
                <div className="bar blue h95"></div>
                <div className="bar gray h110"></div>
                <span>Buy a Bike</span>
              </div>

              <div className="bar-group">
                <div className="bar blue h180"></div>
                <div className="bar gray h200"></div>
                <span>Investment Portfolio</span>
              </div>

            </div>

          </div>

          <div className="overview-card">

            <h4>
              Completed vs Ongoing Goals
            </h4>

            <div className="pie-wrapper">

              <div className="goals-pie-chart"></div>

              <div className="pie-legend">

                <span>
                  <b className="completed"></b>
                  Completed
                </span>

                <span>
                  <b className="ongoing"></b>
                  Ongoing
                </span>

              </div>

            </div>

          </div>

        </section>

      </main>

      <footer className="dashboard-footer">
        © 2026 PennyWise. All rights reserved.
      </footer>

    </div>
  );
}

export default Goals;