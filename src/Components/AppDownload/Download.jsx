import React from "react";
import "./Download.css";
import playstore from "../../assets/playstore.png";
import apple from "../../assets/apple.png";
import mockup from "../../assets/app-mockup.png";
import logo from "../../assets/logo.png.png";

const Download = () => {
  return (
    <div className="app-download">
      <div className="download-details">
        <h4 style={{ marginBottom: "1rem", color: "#f1cd00" }}>Download App</h4>
        <h3
          style={{
            marginBottom: "4rem",
            color: "#fff",
            fontSize: "28px",
            // lineHeight: "2",
          }}
        >
          People around you are ordering delicious meals using the{"   "}
          <i
            style={{
              background: "#fff",
              color: "var(--primary-color)",
              padding: "8px",
              transform: "skewX(-8deg)",
              display: "inline-block",
            }}
          >
            TreatMeals App.
          </i>
        </h3>
        <div className="link-to-d">
          <div className="link-t">
            <img src={apple} alt="" className="apple" />
            <h3>APPLE STORE</h3>
          </div>
          <div className="link-t">
            <img src={playstore} alt="" className="play" />
            <h3>GOOGLE STORE</h3>
          </div>
        </div>
      </div>
      <div className="mockup">
        <img src={mockup} alt="" className="mockup-img" />
        <img src={logo} alt="" className="mockup-logo" />
      </div>
    </div>
  );
};

export default Download;
