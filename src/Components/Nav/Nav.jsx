import React from "react";
import "./Nav.css";
import logo from "../../assets/logo.png.png";
import { Link } from "react-scroll";

const Nav = () => {
  return (
    <div>
      <nav>
        <div className="logo">
          <img src={logo} alt="" width={35} />
          <h2>TreatMeals</h2>
        </div>
        <div className="nav-content">
          <ul>
            <li>About</li>
            <li>Blog</li>
            <li>
              {" "}
              <Link to="menu" smooth={true} offset={-50} duration={500}>
                Pricing
              </Link>
            </li>
            <li>
              <Link to="app-download" smooth={true}>
                Contact Us
              </Link>
            </li>
            <li></li>
          </ul>
          <div className="login">
            <p>Login</p>
            <button className="btn">Sign Up</button>
          </div>
        </div>
      </nav>
    </div>
  );
};

export default Nav;
