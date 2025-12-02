import React from "react";
import "./Services.css";
import { FaHouseUser } from "react-icons/fa";
import { LuChefHat } from "react-icons/lu";
import { GiPartyPopper } from "react-icons/gi";
import { FaArrowRightLong } from "react-icons/fa6";

const Services = () => {
  return (
    <div className="services-con">
      <div className="services-heading">
        <div className="title">
          <h2 className="title-one">
            Amazing <span className="title-two">Services.</span>
          </h2>
        </div>
      </div>
      <div className="services-grid">
        <div className="services">
          <div className="serv-icon-div">
            <FaHouseUser className="services-icon" />
          </div>
          <h4
            style={{
              fontSize: "22px",
              fontWeight: "600",
              color: "var(--secondary-color)",
            }}
          >
            230 + Locations
          </h4>
          <p style={{ fontSize: "18px" }}>
            Lorem ipsum dolor sit, amet consectetur adipisicing elit.{" "}
          </p>
          <div className="learn-more">
            <p> Learn More</p>
            <FaArrowRightLong />
          </div>
        </div>
        <div className="services">
          <div className="serv-icon-div">
            <LuChefHat className="services-icon" />
          </div>
          <h4
            style={{
              fontSize: "22px",
              fontWeight: "600",
              color: "var(--secondary-color)",
            }}
          >
            Professional Chefs
          </h4>
          <p style={{ fontSize: "18px" }}>
            Lorem ipsum dolor sit, amet consectetur adipisicing elit.{" "}
          </p>
          <div className="learn-more">
            <p> Learn More</p>
            <FaArrowRightLong />
          </div>
        </div>
        <div className="services">
          <div className="serv-icon-div">
            <GiPartyPopper className="services-icon" />
          </div>
          <h4
            style={{
              fontSize: "22px",
              fontWeight: "600",
              color: "var(--secondary-color)",
            }}
          >
            Birthday Catering
          </h4>
          <p style={{ fontSize: "18px" }}>
            Lorem ipsum dolor sit, amet consectetur adipisicing elit.{" "}
          </p>
          <div className="learn-more">
            <p> Learn More</p>
            <FaArrowRightLong />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Services;
