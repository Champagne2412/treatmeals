import React from "react";
import "./Register.css";
import { useState } from "react";

const Register = () => {
  const [state, setState] = useState("register");

  const handleLoginState = () => {
    setState("login");
  };
  const handleSignupState = () => {
    setState("register");
  };

  return (
    <div className="register">
      <ul>
        <li onClick={handleSignupState}>Signup</li>
        <li onClick={handleLoginState}>Login</li>
      </ul>
      <div className="form">
        {state === "register" ? (
          <h3>Create an account</h3>
        ) : (
          <h2>Welcome Back!</h2>
        )}
        <form>
          {state !== "login" && (
            <div className="forms">
              <label htmlFor="name">Name</label>
              <input
                className="reg-input"
                type="text"
                placeholder="Enter your name"
              />
            </div>
          )}
          <div className="forms">
            <label htmlFor="email">Email</label>
            <input
              className="reg-input"
              type="email"
              placeholder="Enter your email"
            />
          </div>

          <div className="forms">
            <label htmlFor="password">Password</label>
            <input
              className="reg-input"
              type="password"
              name="password"
              id=""
              placeholder="Enter your password"
            />
          </div>

          {state !== "login" && <p>Must be ate least 8 characters.</p>}
          {state === "register" ? (
            <button className="btn" type="submit">
              Create account
            </button>
          ) : (
            <button className="btn" type="submit">
              Login
            </button>
          )}
        </form>
      </div>
    </div>
  );
};

export default Register;
