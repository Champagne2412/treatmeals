import React from "react";
import "./Menu.css";
import Title from "../Title/Title.jsx";
import food from "../../assets/akarapap.jpg";
import { FaStar } from "react-icons/fa";

const Menu = () => {
  return (
    <div className="menu">
      <div className="menu-heading">
        <div className="title">

          <h2 className="title-one">
            Checkout our <span className="title-two">menu</span>
          </h2>
        </div>
        <div>
          <ul>
            <li>Starter</li>
            <li>Main</li>
            <li>Soup</li>
            <li>Dessert</li>
          </ul>
        </div>
      </div>
      <div className="menu-grid">

        <div className="menu-card">
          <div className="food-img">
            <img src={food} alt="" />

                <button className="btn">Buy now</button>
              

            <div className="img-span">
              <FaStar style={{ color: "#ffc800" }} />
              <p>4.6</p>
              <span>(12)</span>
            </div>

          </div>
          <div className="desc">
            <h4>Food</h4>
            <p>Desc</p>
            <h4 className="price">$8.99</h4>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Menu;
