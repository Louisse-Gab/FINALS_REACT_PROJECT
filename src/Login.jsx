import React from "react";
import { Link } from "react-router-dom";
import "./Login.css";

function Login() {
  return (
    <div className="login-page">
      <div className="login-card">

        <div className="login-left">
          <h1>Welcome Back!</h1>

          <div className="google-icon">G</div>

          <p className="small-text">
            or use your email for logging in
          </p>

          <form>
            <div className="input-box">
              <span className="material-symbols-outlined">mail</span>
              <input type="email" placeholder="Email *" />
            </div>

            <div className="input-box">
              <span className="material-symbols-outlined">lock</span>
              <input type="password" placeholder="Password *" />
              <span className="material-symbols-outlined eye">visibility</span>
            </div>

            <Link to="/currency">
  <button className="login-submit">LOG IN</button>
</Link>

          </form>
        </div>

        <div className="login-right">
          <div className="login-logo">
            <span className="material-symbols-outlined">savings</span>
            PennyWise
          </div>

          <div className="join-text">
            <h2>Join Us Today!</h2>
            <p>
              Sign Up now and begin tracking your expenses with ease.
            </p>

            <Link to="/signup">
              <button>SIGN UP</button>
            </Link>
          </div>
        </div>

      </div>

      <Link to="/" className="back-home">
        ← Back To Home
      </Link>
    </div>
  );
}

export default Login;