import React from "react";
import { Link } from "react-router-dom";
import "./Analytics.css";

function Analytics() {
  return (
    <div className="analytics-page">


      {/* NAVBAR */}
     <nav className="navbar">

  <div className="logo">
    <img src="/LOGO.png" alt="PennyWise Logo" className="logo-img" />
  </div>

        <ul className="dash-links">
          <li><Link to="/dashboard">Dashboard</Link></li>
          <li><Link to="/transactions">Transactions</Link></li>
          <li><Link to="/budget">Budget</Link></li>
          <li><Link to="/goals">Goals</Link></li>
          <li className="active"><Link to="/analytics">Analytics</Link></li>
        </ul>

        <Link to="/profile">
          <span className="material-symbols-outlined profile-icon">
            account_circle
          </span>
        </Link>
      </nav>

      <main className="analytics-content">
        <h2>Analytics</h2>

        <div className="analytics-filters">
          <select>
            <option>Time Period</option>
          </select>

          <select>
            <option>All Categories</option>
          </select>
        </div>

        <div className="analytics-header">
          <h3>Financial Overview</h3>
          <button>This Month ▼</button>
        </div>

        <section className="analytics-grid">
          <div className="analytics-card">
            <div className="chart-top">
              <h4>Income vs Expense</h4>
              <span>Monthly trend</span>
            </div>

            <div className="line-chart">
              <svg viewBox="0 0 420 220" preserveAspectRatio="none">
                <polyline
                  points="30,145 95,105 160,135 225,95 300,80 385,35"
                  className="income-line"
                />
                <polyline
                  points="30,175 100,160 170,145 240,132 315,122 385,112"
                  className="expense-line"
                />
              </svg>

              <div className="months">
                <span>Jan</span>
                <span>Feb</span>
                <span>Mar</span>
                <span>Apr</span>
                <span>May</span>
                <span>Jun</span>
              </div>
            </div>

            <div className="legend">
              <span><b className="income-dot"></b>Income</span>
              <span><b className="expense-dot"></b>Expense</span>
            </div>
          </div>

          <div className="analytics-card">
            <h4>Spending by Category</h4>

            <div className="bar-chart">
              <div className="bar-wrap">
                <div className="bar rent"></div>
                <span>Food & Dining</span>
              </div>

              <div className="bar-wrap">
                <div className="bar transport"></div>
                <span>Transport</span>
              </div>

              <div className="bar-wrap">
                <div className="bar entertainment"></div>
                <span>Entertainment</span>
              </div>

              <div className="bar-wrap">
                <div className="bar shopping"></div>
                <span>Shopping</span>
              </div>

              <div className="bar-wrap">
                <div className="bar bills"></div>
                <span>Bills & Utilities</span>
              </div>
            </div>
          </div>

          <div className="analytics-card">
            <h4>Top 5 Expenses</h4>

            <div className="pie-layout">
              <div className="pie-chart"></div>

              <div className="pie-legend">
                <span><b className="rent-dot"></b>Rent</span>
                <span><b className="grocery-dot"></b>Groceries</span>
                <span><b className="utility-dot"></b>Utilities</span>
                <span><b className="entertainment-dot"></b>Entertainment</span>
                <span><b className="transport-dot"></b>Transport</span>
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

export default Analytics;