import React, { useEffect, useState } from "react";
import "./Nav.css";
import logo from "../../assets/logo.png.png";
import { Link } from "react-scroll";
import { GiHamburgerMenu } from "react-icons/gi";
import { IoMdClose } from "react-icons/io";

const Nav = () => {
  const [isOpen, setIsOpen] = useState(false);

  const openMenu = () => {
    setIsOpen(true);
  };
  const closeMenu = () => {
    setIsOpen(false);
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
        <GiHamburgerMenu className="ham-menu" onClick={openMenu} />
      </nav>
    </div>
  );
};

export default Nav;
