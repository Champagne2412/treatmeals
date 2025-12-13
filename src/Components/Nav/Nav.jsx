import React, { useEffect, useState } from "react";
import "./Nav.css";
import logo from "../../assets/logo.png.png";
import { Link as RouterLink } from "react-router-dom";
import { Link as ScrollLink } from "react-scroll";
import { GiHamburgerMenu } from "react-icons/gi";
import { IoMdClose } from "react-icons/io";
import { useNavigate, useOutletContext } from "react-router-dom";

const Nav = ({ token, setToken, user, setUser }) => {
  const navigate = useNavigate();
  const [isOpen, setIsOpen] = useState(false);

  const openMenu = () => {
    setIsOpen(true);
  };

  const closeMenu = () => {
    setIsOpen(false);
  };

  const handleLogout = async () => {
    if (!window.confirm("Are you sure you want to log out?")) return;
    try {
      const res = await fetch("http://localhost:3000/api/user/logout", {
        method: "GET",
        credentials: "include",
        headers: {
          "Content-Type": "application/json",
          Authorization: `Bearer ${token}`,
        },
      });
      console.log("Logout response status:", res.status);
      if (res.ok) {
        const data = await res.json();
        localStorage.removeItem("token");
        localStorage.removeItem("user");
        setToken(null);
        setUser(null);
        navigate("/register?mode=login");
        alert(data.message);
      } else {
        const errorData = await res.json();
        console.error("Logout failed:", errorData);
        throw new Error("Logout failed");
      }
    } catch (error) {
      console.log(error);
    }
  };

  const handleLogin = () => {
    navigate("/register?mode=login");
    // closeMenu();
  };

  const handleSignup = () => {
    navigate("/register?mode=register");
    closeMenu();
  };

  return (
    <div>
      <nav>
        <div className="logo">
          <img src={logo} alt="" width={35} />
          <h2>TreatMeals</h2>
        </div>
        <div className={`nav-content ${isOpen ? "open-menu" : "close-menu"}`}>
          <IoMdClose className="close" onClick={closeMenu} />
          <ul>
            <li>About</li>
            <li>Blog</li>
            <li>
              {" "}
              <ScrollLink to="menu" smooth={true} offset={-50} duration={500}>
                Pricing
              </ScrollLink>
            </li>
            <li>
              <ScrollLink to="app-download" smooth={true}>
                Contact Us
              </ScrollLink>
            </li>
            <li></li>
          </ul>
          <div className="login">
            <p onClick={handleLogin}>Login</p>
            <button onClick={handleSignup} className="btn">
              Sign Up
            </button>
            <button className="btn" onClick={handleLogout}>
              Logout
            </button>
          </div>
        </div>
        <GiHamburgerMenu className="ham-menu" onClick={openMenu} />
      </nav>
    </div>
  );
};

export default Nav;
