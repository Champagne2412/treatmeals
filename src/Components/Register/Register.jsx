import React from "react";
import "./Register.css";
import { useState } from "react";
import { useNavigate, useLocation } from "react-router-dom";

const Register = ({ token, setToken, user, setUser }) => {
  const location = useLocation();
  const navigate = useNavigate();
  const [state, setState] = useState(location.state?.mode || "register");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [name, setName] = useState("");
  const [errors, setErrors] = useState({});

  const handleLoginState = () => {
    setState("login");
  };
  const handleSignupState = () => {
    setState("register");
  };

  const submitForm = async (e) => {
    e.preventDefault();

    const bodyData =
      state === "login" ? { email, password } : { name, email, password };

    const url =
      state === "login"
        ? "http://localhost:3000/api/user/login"
        : "http://localhost:3000/api/user/signup";

    try {
      const res = await fetch(url, {
        method: "POST",
        headers: {
          "content-Type": "application/json",
          Authorization: `Bearer ${token}`,
        },
        body: JSON.stringify(bodyData),
      });
      const data = await res.json();
      console.log(data);
      if (data.errors) {
        setErrors({
          name: data.errors.name,
          email: data.errors.email,
          password: data.errors.password,
        });
      } else {
        setErrors({ name: "", email: "", password: "" });
      }
      if (data.token) {
        setToken(data.token);
      }
      if (data.user) {
        setUser(data.user);
        navigate("/");
        alert("Login successful");
      }
    } catch (error) {
      console.log(error);
    }
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
        <form onSubmit={submitForm}>
          {state !== "login" && (
            <div className="forms">
              <label htmlFor="name">Name</label>
              <input
                className="reg-input"
                type="text"
                name="name"
                required
                placeholder="Enter your name"
                value={name}
                onChange={(e) => setName(e.target.value)}
              />
              <p className="error">{errors.name}</p>
            </div>
          )}
          <div className="forms">
            <label htmlFor="email">Email</label>
            <input
              className="reg-input"
              type="email"
              name="email"
              required
              placeholder="Enter your email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
            />
            <p className="error">{errors.email}</p>
          </div>

          <div className="forms">
            <label htmlFor="password">Password</label>
            <input
              className="reg-input"
              type="password"
              name="password"
              required
              placeholder="Enter your password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
            />
            <p className="password error">{errors.password}</p>
          </div>

          {state !== "login" && <p>Must be ate least 8 characters.</p>}
          {state === "register" ? (
            <button className="btn" type="submit">
              Create account
            </button>
          ) : (
            <button className="btn">Login</button>
          )}
        </form>
      </div>
    </div>
  );
};

export default Register;
