import React from "react";
import { Link } from "react-router-dom";
import "./Budget.css";

function Budget() {
  return (
    <div className="budget-page">
      <nav className="dashboard-nav">

        <div className="dash-logo">
          <span className="material-symbols-outlined">
            savings
          </span>
          PennyWise
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

          <li className="active">
            <Link to="/budget">
              Budget
            </Link>
          </li>

          <li>
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

      <main className="budget-content">

        <div className="budget-header">
          <div>
            <h2>Budget Planner</h2>
            <p>
              Plan and monitor your monthly limits
            </p>
          </div>

          <button className="add-budget-btn">
            + Add New Budget
          </button>
        </div>

        <div className="budget-filters">

          <select>
            <option>
              October 2025
            </option>
          </select>

          <select>
            <option>
              All Categories
            </option>
          </select>

        </div>

        <section className="budget-summary">

          <div className="budget-summary-card">
            <p>Total Budget</p>
            <h2>₱60,000</h2>
            <small>for Oct 2025</small>
          </div>

          <div className="budget-summary-card">
            <p>Total Spent</p>
            <h2>₱43,200</h2>
            <small className="danger">
              -8%
            </small>
          </div>

          <div className="budget-summary-card">
            <p>Remaining</p>
            <h2>₱16,800</h2>

            <div className="progress-bar">
              <div
                className="progress-fill green"
                style={{ width: "72%" }}
              ></div>
            </div>
          </div>

        </section>

        <section className="budget-table-card">

          <div className="budget-table-head">
            <span>Category</span>
            <span>Limit</span>
            <span>Spent</span>
            <span>Remaining</span>
            <span>Progress</span>
            <span>Actions</span>
          </div>

          {[
            [
              "restaurant",
              "Food & Dining",
              "₱10,000",
              "₱8,200",
              "₱1,800",
              "82%",
              "green"
            ],

            [
              "directions_bus",
              "Transport",
              "₱5,000",
              "₱3,100",
              "₱1,900",
              "62%",
              "green"
            ],

            [
              "shopping_bag",
              "Shopping",
              "₱8,000",
              "₱9,400",
              "-₱1,400",
              "118%",
              "red"
            ],

            [
              "receipt_long",
              "Bills & Utilities",
              "₱12,000",
              "₱11,200",
              "₱800",
              "92%",
              "green"
            ],

          ].map((item, index) => (

            <div
              className="budget-table-row"
              key={index}
            >

              <div className="budget-category">

                <span className="material-symbols-outlined category-icon">
                  {item[0]}
                </span>

                {item[1]}

              </div>

              <span>{item[2]}</span>
              <span>{item[3]}</span>
              <span>{item[4]}</span>

              <div className="budget-progress">

                <div className="progress-bar">

                  <div
                    className={`progress-fill ${item[6]}`}
                    style={{ width: item[5] }}
                  ></div>

                </div>

                <small>
                  {item[5]} used
                </small>

              </div>

              <div className="actions">

                <button className="edit-btn">
                  <span className="material-symbols-outlined">
                    edit
                  </span>
                </button>

                <button className="delete-btn">
                  <span className="material-symbols-outlined">
                    delete
                  </span>
                </button>

              </div>

            </div>

          ))}

        </section>

        <div className="pagination">
          <button>Prev</button>
          <button className="active-page">1</button>
          <button>2</button>
          <button>3</button>
          <button>Next</button>
        </div>

        <h3 className="insights-title">
          Budget Insights
        </h3>

        <section className="budget-insights">

          <div className="insight-card">

            <div className="chart-top">
              <h4>
                Budget vs Spending Over Time
              </h4>

              <span>
                Monthly trend
              </span>
            </div>

            <div className="line-chart">

              <svg
                viewBox="0 0 420 220"
                preserveAspectRatio="none"
              >

                <polyline
                  points="30,160 95,125 160,170 225,70 295,120 380,40"
                  className="spent-line"
                />

                <polyline
                  points="30,95 95,95 160,95 225,95 295,95 380,95"
                  className="budget-line"
                />

              </svg>

            </div>

          </div>

          <div className="insight-card">

            <h4>
              Category-wise Budget Allocation
            </h4>

            <div className="pie-layout">

              <div className="pie-chart"></div>

              <div className="pie-legend">

                <span>
                  <b className="food"></b>
                  Food & Dining
                </span>

                <span>
                  <b className="transport"></b>
                  Transport
                </span>

                <span>
                  <b className="shopping"></b>
                  Shopping
                </span>

                <span>
                  <b className="bills"></b>
                  Bills & Utilities
                </span>

                <span>
                  <b className="entertainment"></b>
                  Entertainment
                </span>

                <span>
                  <b className="savings"></b>
                  Savings & Investments
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

export default Budget;