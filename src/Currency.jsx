import React from "react";
import { Link } from "react-router-dom";
import "./Currency.css";

function Currency() {
  return (
    <div className="currency-page">
      <div className="currency-card">
        {/* STEPS */}
        <div className="steps-bar">
          <div className="step-group">
            <div className="step-circle active">1</div>
            <span>Select Base Currency</span>
          </div>

          <div className="step-line"></div>

          <div className="step-group">
            <div className="step-circle">2</div>
            <span>Set Your Cash Balance</span>
          </div>

          <div className="step-line"></div>

          <div className="step-group">
            <div className="step-circle">3</div>
            <span>Success!</span>
          </div>
        </div>

        {/* CONTENT */}
        <div className="currency-content">
          <div className="currency-icon">
            <span className="material-symbols-outlined">
              currency_exchange
            </span>
          </div>

          <h1>Select Base Currency</h1>

          <div className="currency-form">
            <label>Base Currency</label>

            <div className="select-box">
              <select defaultValue="">
                <option value="" disabled>
                  Select Currency
                </option>
                <option value="PHP">PHP - Philippine Peso</option>
                <option value="USD">USD - US Dollar</option>
                <option value="EUR">EUR - Euro</option>
                <option value="JPY">JPY - Japanese Yen</option>
              </select>

              <span className="material-symbols-outlined">
                expand_more
              </span>
            </div>

            <p>
              Choose the currency you use most often to keep all transactions
              consistent and easy to track.
            </p>

            <button type="button">
              Confirm Currency
            </button>
          </div>
        </div>
      </div>

      <Link to="/" className="back-home">
        ← Back To Home
      </Link>
    </div>
  );
}

export default Currency;