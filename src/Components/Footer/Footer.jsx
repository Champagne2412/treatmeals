import React from "react";
import "./Footer.css";
import logo from "../../assets/logo.png.png";
import facebook from "../../assets/png6.png";
import twitter from "../../assets/png7.png";
import youtube from "../../assets/png8.png";
import { Link } from "react-scroll";

const Footer = () => {
  return (
    <footer>
      <div className="footer-div">
        <div className="footer">
          <div className="links">
            <ul className="ul">
              <li>
                <strong>MAIN</strong>
              </li>
              <li className="li">
                <Link to="title-div">Blog</Link>
              </li>
              <li className="li">
                <Link to="title-div">FAQs</Link>
              </li>
              <li className="li">
                <Link to="title-div">Support</Link>
              </li>
              <li className="li">
                <Link to="title-div">About Us</Link>
              </li>
            </ul>

            <ul className="ul">
              <li>
                <strong>PRODUCT</strong>
              </li>
              <li className="li">
                <Link to="title-div">Log In</Link>
              </li>
              <li className="li">
                <Link to="title-div">Personal</Link>
              </li>
              <li className="li">
                <Link to="title-div">Business</Link>
              </li>
              <li className="li">
                <Link to="title-div">Team</Link>
              </li>
            </ul>
            <ul className="ul">
              <li>
                <strong>PRESS</strong>
              </li>
              <li className="li">
                <Link to="title-div">Logos</Link>
              </li>
              <li className="li">
                <Link to="title-div">Events</Link>
              </li>
              <li className="li">
                <Link to="title-div">Office</Link>
              </li>
              <li className="li">
                <Link to="title-div">Office</Link>
              </li>
            </ul>
            <ul className="ul">
              <li>
                <strong>LEGAL</strong>
              </li>
              <li className="li">
                <Link to="title-div">GDPR</Link>
              </li>
              <li className="li">
                <Link to="title-div">Privacy</Link>
              </li>
              <li className="li">
                <Link to="title-div">Terms of Services</Link>
              </li>
              <li className="li">
                <Link to="title-div">Disclaimer</Link>
              </li>
            </ul>
          </div>
          <div className="subscription">
            <div className="sub-div">
              <h4>Subscribe to our Newsletter</h4>
              <p>
                We deliver high quality blog posts written by professionals
                weekly. And we promise no spam.
              </p>
              <div className="input">
                <input type="email" placeholder="your email address" />
                <button className="btn btn-sub">Subscribe</button>
              </div>
            </div>
          </div>
        </div>
        <div className="copyright">
          <div className="lo-go">
            <img src={logo} alt="" width={35} />
            <h3>TreatMeals Inc.</h3>
          </div>
          <p>&copy; 2025 TreatMeals Inc. All Rights Reserved</p>
          <div className="social-link" style={{ display: "flex", alignItems: "center", gap: "0.7rem" }}>
            <img src={facebook} alt="" width={30} />
            <img src={twitter} alt="" width={30} />
            <img src={youtube} alt="" width={30} />
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
