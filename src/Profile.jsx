import React from "react";
import { Link } from "react-router-dom";
import "./Profile.css";

function Profile() {
  return (
    <div className="profile-page">
      <nav className="dashboard-nav">
        <div className="dash-logo">
          <span className="material-symbols-outlined">savings</span>
          PennyWise
        </div>

        <ul className="dash-links">
          <li><Link to="/dashboard">Dashboard</Link></li>
          <li><Link to="/transactions">Transactions</Link></li>
          <li><Link to="/budget">Budget</Link></li>
          <li><Link to="/goals">Goals</Link></li>
          <li><Link to="/analytics">Analytics</Link></li>
        </ul>

        <Link to="/profile">
          <span className="material-symbols-outlined profile-icon">
            account_circle
          </span>
        </Link>
      </nav>

      <main className="profile-content">
        <h2>My Profile</h2>

        <div className="profile-card">
          <div className="avatar"></div>

          <h3>Omsim Nida</h3>

          <p>
            <strong>Email:</strong> omskrt@gmail.com
          </p>

          <p>
            <strong>Preferred Currency:</strong>
            <span>PHP (₱)</span>
          </p>

          <div className="profile-actions">
            <button className="edit-profile-btn">
              Edit Profile
            </button>

            <Link to="/login">
              <button className="logout-btn">
                Log Out
              </button>
            </Link>
          </div>
        </div>
      </main>

      <footer className="dashboard-footer">
        © 2026 PennyWise. All rights reserved.
      </footer>
    </div>
  );
}

export default Profile;