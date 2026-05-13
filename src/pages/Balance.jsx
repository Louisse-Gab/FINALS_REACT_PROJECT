import React from "react";
import { Link } from "react-router-dom";
import "./Balance.css";

function Balance() {
  return (
    <div className="balance-page">
      <div className="balance-card">
        <div className="steps-bar">
          <div className="step-group done">
            <div className="step-circle done">
              <span className="material-symbols-outlined">check</span>
            </div>
            <span>Select Base Currency</span>
          </div>

          <div className="step-line"></div>

          <div className="step-group">
            <div className="step-circle active">2</div>
            <span>Set Your Cash Balance</span>
          </div>

          <div className="step-line"></div>

          <div className="step-group">
            <div className="step-circle">3</div>
            <span>Success!</span>
          </div>
        </div>

        <div className="balance-content">
          <div className="balance-icon">
            <span className="material-symbols-outlined">savings</span>
          </div>

          <h1>Set Up Your Cash Balance</h1>

          <div className="balance-form">
            <label>Cash Balance</label>

            <div className="input-box">
              <input type="number" placeholder="Enter Cash Balance" />
              <span className="material-symbols-outlined">expand_more</span>
            </div>

            <p>
              Enter your starting cash balance to establish a clear financial
              baseline for accurate monitoring.
            </p>

            <Link to="/success">
  <button type="button" className="confirm-btn">
    Confirm Cash Balance
  </button>
</Link>

            <Link to="/currency" className="back-btn">
              Back
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Balance;