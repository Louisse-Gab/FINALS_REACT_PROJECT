
import React from "react";
import { Link } from "react-router-dom";
import "./SignUp.css";

function SignUp() {
  return (
    <div className="signup-page">

      <div className="signup-card">

        {/* LEFT SIDE */}
        <div className="signup-left">

          <div className="signup-logo">
            <span className="material-symbols-outlined">
              savings
            </span>

            PennyWise
          </div>

          <div className="welcome-text">

            <h2>Welcome Back!</h2>

            <p>
              Log in to manage your finances.
            </p>

            <Link to="/currency">
  <button className="login-submit">LOG IN</button>
</Link>
          </div>

        </div>

        {/* RIGHT SIDE */}
        <div className="signup-right">

          <h1>Create Account</h1>

          <div className="google-icon">G</div>

          <p className="small-text">
            or use your email for registration
          </p>

          <form>

            <div className="input-box">

              <span className="material-symbols-outlined">
                person
              </span>

              <input
                type="text"
                placeholder="First Name *"
              />

            </div>

            <div className="input-box">

              <span className="material-symbols-outlined">
                person
              </span>

              <input
                type="text"
                placeholder="Last Name *"
              />

            </div>

            <div className="input-box">

              <span className="material-symbols-outlined">
                mail
              </span>

              <input
                type="email"
                placeholder="Email *"
              />

            </div>

            <div className="input-box">

              <span className="material-symbols-outlined">
                lock
              </span>

              <input
                type="password"
                placeholder="Password *"
              />

              <span className="material-symbols-outlined eye">
                visibility
              </span>

            </div>

            <div className="input-box">

              <span className="material-symbols-outlined">
                lock
              </span>

              <input
                type="password"
                placeholder="Confirm Password *"
              />

              <span className="material-symbols-outlined eye">
                visibility
              </span>

            </div>

            <Link to="/login">
                          <button className="signup-submit">SIGN UP</button>
                        </Link>

          </form>

        </div>

      </div>

      {/* BACK TO HOME */}
      <Link to="/" className="back-home">
        ← Back To Home
      </Link>

    </div>
  );
}

export default SignUp;