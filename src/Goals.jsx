import React, { useState } from "react";
import { Link } from "react-router-dom";
import "./Goals.css";

function Goals() {

  const [showAddGoalModal, setShowAddGoalModal] = useState(false);
  const [showEditGoalModal, setShowEditGoalModal] = useState(false);

  const goals = [
    {
      title: "Buy a New Laptop",
      saved: "₱50,000",
      target: "₱80,000",
      progress: "62%",
      width: "62%",
      status: "Ongoing"
    },

    {
      title: "Emergency Fund",
      saved: "₱40,000",
      target: "₱100,000",
      progress: "40%",
      width: "40%",
      status: "Ongoing"
    },

    {
      title: "Vacation Trip",
      saved: "₱60,000",
      target: "₱60,000",
      progress: "100%",
      width: "100%",
      status: "Completed"
    }
  ];

  return (

    <div className="goals-page">


<<<<<<< HEAD
        <div className="dash-logo">

          <span className="material-symbols-outlined">
            savings
          </span>

          PennyWise

        </div>
=======
      {/* NAVBAR */}
     <nav className="navbar">

  <div className="logo">
    <img src="/LOGO.png" alt="PennyWise Logo" className="logo-img" />
  </div>
>>>>>>> 2505ff2dc56b91a13a321380ef74b71a34fd411a

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

            <h2>
              Budget Goals
            </h2>

            <p>
              Set, track, and achieve your financial targets
            </p>

          </div>

          <button
            className="add-goal-btn"
            onClick={() => setShowAddGoalModal(true)}
          >
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

        {/* GOAL CARDS */}

        <section className="goal-cards">

          {goals.map((goal, index) => (

            <div className="goal-card" key={index}>

              <div className="goal-card-top">

                <div>

                  <h3>
                    {goal.title}
                  </h3>

                  <p>
                    {goal.target} Target | {goal.saved} Saved
                  </p>

                </div>

                <div className="goal-actions">

                  {/* EDIT BUTTON */}

                  <button
                    className="goal-edit-btn"
                    onClick={() => setShowEditGoalModal(true)}
                  >

                    <span className="material-symbols-outlined">
                      edit
                    </span>

                  </button>

                  {/* DELETE BUTTON */}

                  <button className="goal-delete-btn">

                    <span className="material-symbols-outlined">
                      delete
                    </span>

                  </button>

                </div>

              </div>

              {/* PROGRESS BAR */}

              <div className="goal-progress-bar">

                <div
                  className="goal-progress-fill"
                  style={{ width: goal.width }}
                ></div>

              </div>

              {/* FOOTER */}

              <div className="goal-progress-footer">

                <span
                  className={
                    goal.status === "Completed"
                      ? "completed-tag"
                      : "ongoing-tag"
                  }
                >
                  {goal.status}
                </span>

                <small>
                  {goal.progress}
                </small>

              </div>

            </div>

          ))}

        </section>

        {/* OVERVIEW */}

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

      {/* ================= ADD GOAL MODAL ================= */}

      {showAddGoalModal && (

        <div className="modal-overlay">

          <div className="goal-modal">

            <h3>
              Add New Goal
            </h3>

            <label>
              Name <span>*</span>
            </label>

            <input
              type="text"
              placeholder="Goal Name"
            />

            <label>
              Target Amount <span>*</span>
            </label>

            <input
              type="text"
              placeholder="Target Amount (₱)"
            />

            <label>
              Start Date <span>*</span>
            </label>

            <input type="date" />

            <label>
              End Date <span>*</span>
            </label>

            <input type="date" />

            <label>
              Category <span>*</span>
            </label>

            <select defaultValue="">

              <option value="" disabled>
                All Categories
              </option>

              <option>
                Food & Dining
              </option>

              <option>
                Transportation
              </option>

              <option>
                Bills & Utilities
              </option>

              <option>
                Savings
              </option>

            </select>

            <label>
              Status <span>*</span>
            </label>

            <select defaultValue="">

              <option value="" disabled>
                Status
              </option>

              <option>
                Ongoing
              </option>

              <option>
                Completed
              </option>

            </select>

            <div className="modal-actions">

              <button
                className="cancel-btn"
                onClick={() => setShowAddGoalModal(false)}
              >
                Cancel
              </button>

              <button
                className="save-btn"
                onClick={() => setShowAddGoalModal(false)}
              >
                Add Goal
              </button>

            </div>

          </div>

        </div>

      )}

      {/* ================= EDIT GOAL MODAL ================= */}

      {showEditGoalModal && (

        <div className="modal-overlay">

          <div className="goal-modal">

            <h3>
              Edit Goal
            </h3>

            <label>
              Name <span>*</span>
            </label>

            <input
              type="text"
              defaultValue="Buy a New Laptop"
            />

            <label>
              Target Amount <span>*</span>
            </label>

            <input
              type="text"
              defaultValue="80000"
            />

            <label>
              Start Date <span>*</span>
            </label>

            <input
              type="date"
              defaultValue="2025-01-01"
            />

            <label>
              End Date <span>*</span>
            </label>

            <input
              type="date"
              defaultValue="2025-12-31"
            />

            <label>
              Category <span>*</span>
            </label>

            <select defaultValue="Savings">

              <option>
                Food & Dining
              </option>

              <option>
                Transportation
              </option>

              <option>
                Bills & Utilities
              </option>

              <option>
                Savings
              </option>

            </select>

            <label>
              Status <span>*</span>
            </label>

            <select defaultValue="Ongoing">

              <option>
                Ongoing
              </option>

              <option>
                Completed
              </option>

            </select>

            <div className="modal-actions">

              <button
                className="cancel-btn"
                onClick={() => setShowEditGoalModal(false)}
              >
                Cancel
              </button>

              <button
                className="save-btn"
                onClick={() => setShowEditGoalModal(false)}
              >
                Save Changes
              </button>

            </div>

          </div>

        </div>

      )}

    </div>

  );
}

export default Goals;