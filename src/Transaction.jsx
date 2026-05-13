import React, { useState } from "react";
import { Link } from "react-router-dom";
import "./Transaction.css";

function Transaction() {
  const [showAddModal, setShowAddModal] = useState(false);

  const transactions = [
    ["restaurant", "Food & Dining", "-₱2,000.00", "Expense"],
    ["payments", "Salary", "+₱2,000.00", "Income"],
    ["directions_bus", "Transportation", "-₱100.00", "Expense"],
    ["shopping_bag", "Shopping", "-₱1,500.00", "Expense"],
    ["monetization_on", "Investment", "+₱10,000.00", "Income"],
  ];

  return (
    <div className="transactions-page">
      <nav className="dashboard-nav">
        <div className="dash-logo">
          <span className="material-symbols-outlined">savings</span>
          PennyWise
        </div>

        <ul className="dash-links">
          <li><Link to="/dashboard">Dashboard</Link></li>
          <li className="active"><Link to="/transactions">Transactions</Link></li>
          <li><Link to="/budget">Budget</Link></li>
          <li><Link to="/goals">Goals</Link></li>
          <li><Link to="/analytics">Analytics</Link></li>
        </ul>

        <span className="material-symbols-outlined profile-icon">
          account_circle
        </span>
      </nav>

      <main className="transactions-content">
        <section className="summary-cards">
          <div className="summary-card balance">
            <div>
              <p>Total Balance</p>
              <h2>₱45,320.00</h2>
            </div>
            <span className="material-symbols-outlined">account_balance_wallet</span>
          </div>

          <div className="summary-card income">
            <div>
              <p>Total Income</p>
              <h2>₱25,800.00</h2>
            </div>
            <span className="material-symbols-outlined">trending_up</span>
          </div>

          <div className="summary-card expense">
            <div>
              <p>Total Expense</p>
              <h2>₱18,600.00</h2>
            </div>
            <span className="material-symbols-outlined">trending_down</span>
          </div>
        </section>

        <div className="transaction-header">
          <h2>Transactions</h2>

          <button className="add-btn" onClick={() => setShowAddModal(true)}>
            + Add Transaction
          </button>
        </div>

        <div className="filters">
          <select><option>This Month</option></select>
          <select><option>All Category</option></select>
          <select><option>All Types</option></select>
          <select><option>Newest First</option></select>
        </div>

        <div className="table-card">
          <div className="table-head">
            <span>Date</span>
            <span>Category</span>
            <span>Description</span>
            <span>Amount</span>
            <span>Type</span>
            <span>Actions</span>
          </div>

          {transactions.map((item, index) => (
            <div className="table-row" key={index}>
              <span>15 Oct 2025</span>

              <div className="category-cell">
                <span className="material-symbols-outlined category-icon">
                  {item[0]}
                </span>
                {item[1]}
              </div>

              <span>Description</span>

              <strong className={item[3] === "Income" ? "plus" : "minus"}>
                {item[2]}
              </strong>

              <div className={`type-pill ${item[3] === "Income" ? "income-pill" : "expense-pill"}`}>
                {item[3]}
              </div>

              <div className="actions">
                <button className="edit-btn">
                  <span className="material-symbols-outlined">edit</span>
                </button>

                <button className="delete-btn">
                  <span className="material-symbols-outlined">delete</span>
                </button>
              </div>
            </div>
          ))}
        </div>

        <div className="pagination">
          <button>Prev</button>
          <button className="active-page">1</button>
          <button>2</button>
          <button>3</button>
          <button>Next</button>
        </div>
      </main>

      <footer className="dashboard-footer">
        © 2026 PennyWise. All rights reserved.
      </footer>

      {showAddModal && (
        <div className="modal-overlay">
          <div className="transaction-modal">
            <h3>Add Transaction</h3>

            <label>Date of Transaction <span>*</span></label>
            <input type="date" />

            <label>Description</label>
            <input type="text" placeholder="Enter Description" />

            <label>Category <span>*</span></label>
            <select defaultValue="">
              <option value="" disabled>Select Category</option>
              <option>Food & Dining</option>
              <option>Salary</option>
              <option>Transportation</option>
              <option>Shopping</option>
              <option>Investment</option>
            </select>

            <label>Transaction Type <span>*</span></label>
            <select defaultValue="">
              <option value="" disabled>All Types</option>
              <option>Income</option>
              <option>Expense</option>
            </select>

            <label>Amount <span>*</span></label>
            <input type="text" placeholder="Amount" />

            <div className="modal-actions">
              <button className="cancel-btn" onClick={() => setShowAddModal(false)}>
                Cancel
              </button>

              <button className="save-btn" onClick={() => setShowAddModal(false)}>
                Add Transaction
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}

export default Transaction;