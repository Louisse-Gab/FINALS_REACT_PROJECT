import React, { useState } from "react";
import { Link } from "react-router-dom";
import "./Dashboard.css";

function Dashboard() {
  const [showAddModal, setShowAddModal] = useState(false);

  return (
    <div className="dashboard-page">
      <nav className="dashboard-nav">
        <div className="dash-logo">
          <span className="material-symbols-outlined">savings</span>
          PennyWise
        </div>

        <ul className="dash-links">
          <li className="active">
            <Link to="/dashboard">Dashboard</Link>
          </li>

          <li>
            <Link to="/transactions">Transactions</Link>
          </li>

          <li>
            <Link to="/budget">Budget</Link>
          </li>

          <li>
            <Link to="/goals">Goals</Link>
          </li>

          <li>
            <Link to="/analytics">Analytics</Link>
          </li>
        </ul>

        <Link to="/profile" className="profile-link">
          <span className="material-symbols-outlined profile-icon">
            account_circle
          </span>
        </Link>
      </nav>

      <main className="dashboard-content">
        <section className="summary-cards">
          <div className="summary-card balance">
            <div>
              <p>Total Balance</p>
              <h2>₱45,320.00</h2>
            </div>
            <span className="material-symbols-outlined">
              account_balance_wallet
            </span>
          </div>

          <div className="summary-card income">
            <div>
              <p>Total Income</p>
              <h2>₱25,800.00</h2>
            </div>
            <span className="material-symbols-outlined">
              trending_up
            </span>
          </div>

          <div className="summary-card expense">
            <div>
              <p>Total Expense</p>
              <h2>₱18,600.00</h2>
            </div>
            <span className="material-symbols-outlined">
              trending_down
            </span>
          </div>
        </section>

        <div className="section-header">
          <h3>Spending Overview</h3>
          <button>This Month ▼</button>
        </div>

        <section className="charts">
          <div className="chart-card">
            <div className="chart-top">
              <h4>Income vs Expense</h4>
              <span>Monthly trend</span>
            </div>

            <div className="fake-line-chart">
              <div className="y-labels">
                <span>20,000</span>
                <span>15,000</span>
                <span>10,000</span>
                <span>5,000</span>
                <span>0</span>
              </div>

              <div className="chart-grid">
                <svg viewBox="0 0 420 220" preserveAspectRatio="none">
                  <polyline
                    points="25,145 85,105 140,135 205,95 285,80 380,35"
                    className="income-line"
                  />
                  <polyline
                    points="25,175 100,160 170,145 240,130 315,120 380,110"
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
            </div>

            <div className="legend">
              <span><b className="income-dot"></b>Income</span>
              <span><b className="expense-dot"></b>Expense</span>
            </div>
          </div>

          <div className="chart-card">
            <h4>Expense Breakdown</h4>
            <p>This month’s spending by category</p>

            <div className="pie-layout">
              <div className="pie-chart"></div>

              <div className="pie-legend">
                <span><b className="food"></b>Food</span>
                <span><b className="travel"></b>Travel</span>
                <span><b className="entertainment"></b>Entertainment</span>
                <span><b className="shopping"></b>Shopping</span>
                <span><b className="others"></b>Others</span>
              </div>
            </div>
          </div>
        </section>

        <section className="transactions-section">
          <div className="section-header">
            <h3>Recent Transactions</h3>

            <button
              className="add-btn"
              onClick={() => setShowAddModal(true)}
            >
              ＋ Add Transaction
            </button>
          </div>

          <div className="transactions-card">
            {[
              ["restaurant", "Food & Dining", "₱2,000.00", "minus"],
              ["payments", "Salary", "₱2,000.00", "plus"],
              ["directions_bus", "Transportation", "₱100.00", "minus"],
              ["shopping_bag", "Shopping", "₱1,500.00", "minus"],
              ["monetization_on", "Investment", "₱10,000.00", "plus"],
            ].map((item, index) => (
              <div className="transaction-row" key={index}>
                <span>15 Oct 2025</span>

                <div className="transaction-category">
                  <span className="material-symbols-outlined transaction-icon">
                    {item[0]}
                  </span>
                  {item[1]}
                </div>

                <span>Description</span>

                <strong className={item[3]}>
                  {item[3] === "plus" ? "+" : "-"}
                  {item[2]}
                </strong>
              </div>
            ))}
          </div>
        </section>
      </main>

      <footer className="dashboard-footer">
        © 2026 PennyWise. All rights reserved.
      </footer>

      {showAddModal && (
        <div className="modal-overlay">
          <div className="transaction-modal">
            <h3>Add Transaction</h3>

            <label>
              Date of Transaction <span>*</span>
            </label>
            <input type="date" />

            <label>Description</label>
            <input type="text" placeholder="Enter Description" />

            <label>
              Category <span>*</span>
            </label>
            <select defaultValue="">
              <option value="" disabled>
                Select Category
              </option>
              <option>Food & Dining</option>
              <option>Salary</option>
              <option>Transportation</option>
              <option>Shopping</option>
              <option>Investment</option>
            </select>

            <label>
              Transaction Type <span>*</span>
            </label>
            <select defaultValue="">
              <option value="" disabled>
                All Types
              </option>
              <option>Income</option>
              <option>Expense</option>
            </select>

            <label>
              Amount <span>*</span>
            </label>
            <input type="text" placeholder="Amount" />

            <div className="modal-actions">
              <button
                className="cancel-btn"
                onClick={() => setShowAddModal(false)}
              >
                Cancel
              </button>

              <button
                className="save-btn"
                onClick={() => setShowAddModal(false)}
              >
                Add Transaction
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}

export default Dashboard;