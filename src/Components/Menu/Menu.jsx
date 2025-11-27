import React, { useState } from "react";
import "./Menu.css";
import Title from "../Title/Title.jsx";
import food from "../../assets/akarapap.jpg";
import { FaStar } from "react-icons/fa";
import { menuData } from "../../assets/data.js";

const Menu = () => {
  const [activeCategory, setActiveCategory] = useState("starter");

  const activeMenu =
    menuData.find((item) => item.category === activeCategory)
      ?.starterCategory ?? [];

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
            <li
              className={activeCategory === "starter" ? "active" : ""}
              onClick={() => setActiveCategory("starter")}
            >
              Starter
            </li>
            <li
              className={activeCategory === "main" ? "active" : ""}
              onClick={() => setActiveCategory("main")}
            >
              Main
            </li>
            <li
              className={activeCategory === "soup" ? "active" : ""}
              onClick={() => setActiveCategory("soup")}
            >
              Soup
            </li>
            <li
              className={activeCategory === "dessert" ? "active" : ""}
              onClick={() => setActiveCategory("dessert")}
            >
              Dessert
            </li>
          </ul>
        </div>
      </div>

      <div className="menu-grid">
        {activeMenu.map((item) => (
          <div className="menu-card">
            <div className="food-img">
              <div className="img-container">
                <img src={item.img} alt="" />
                <div className="overlay">
                  {" "}
                  <button className="btn drop-btn">Buy now</button>
                </div>
              </div>
              <div className="food-details">
                <FaStar style={{ color: "#ffc800" }} />
                <p>{item.rating}</p>
                <span>({item.ratingNum})</span>
              </div>
            </div>
            <div className="desc">
              <h4>{item.name}</h4>
              <p>{item.desc}</p>
              <h4 className="price">{item.price}</h4>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Menu;
