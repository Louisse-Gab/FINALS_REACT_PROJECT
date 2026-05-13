import React from "react";
import { Link } from "react-router-dom";
import "./Success.css";

function Success() {
  return (
    <div className="success-page">
      <div className="success-card">

        {/* STEPS */}
        <div className="steps-bar">

          <div className="step-group">
            <div className="step-circle done">
              <span className="material-symbols-outlined">
                check
              </span>
            </div>

            <span>Select Base Currency</span>
          </div>

          <div className="step-line"></div>

          <div className="step-group">
            <div className="step-circle done">
              <span className="material-symbols-outlined">
                check
              </span>
            </div>

            <span>Set Your Cash Balance</span>
          </div>

          <div className="step-line"></div>

          <div className="step-group">
            <div className="step-circle active">
              3
            </div>

            <span>Success!</span>
          </div>

        </div>

        {/* CONTENT */}
        <div className="success-content">

          <div className="success-icon">
            <span className="material-symbols-outlined">
              check
            </span>
          </div>

          <h1>Success!</h1>

          <p>
            Your setup is complete — the dashboard is
            ready to give you insights and control over your finances.
          </p>

          <Link to="/dashboard">
  <button>
    Continue to Dashboard
  </button>
</Link>

        </div>

      </div>
    </div>
  );
}

export default Success;