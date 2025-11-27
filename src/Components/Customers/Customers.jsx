import React from "react";
import "./Customers.css";
import photo1 from "../../assets/photo1.jpg";
import photo2 from "../../assets/photo2.jpg";
import photo3 from "../../assets/photo3.jpg";

const Customers = () => {
  return (
    <div className="cust-div">
      <div className="cust-heading">
        <div className="title">
          <h2 className="title-one">
            Customers <span className="title-two">Loves Us.</span>
          </h2>
        </div>
      </div>
      <div className="customers-grid">
          <div className="customers">
            <img src={photo1} alt="" />
            <p style={{color:"var(--grey)"}}>
              "Duis aute irure dolor in reprehenderit in voluptate velit esse cillum
              dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non
              proident, sunt in culpa qui officia."
            </p>
            <h5 style={{color:"var(--black-shade)"}}>-CHARLOTTE HALE</h5>
          </div>
          <div className="customers">
            <img src={photo2} alt="" />
            <p style={{color:"var(--grey)"}}>
              "Duis aute irure dolor in reprehenderit in voluptate velit esse cillum
              dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non
              proident, sunt in culpa qui officia."
            </p>
            <h5 style={{color:"var(--black-shade)"}}>-ADAM CUPPY</h5>
          </div>
          <div className="customers">
            <img src={photo3} alt="" />
            <p style={{color:"var(--grey)"}}>
              "Duis aute irure dolor in reprehenderit in voluptate velit esse cillum
              dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non
              proident, sunt in culpa qui officia."
            </p>
            <h5 style={{color:"var(--black-shade)"}}>-STEVEN MARCETTI</h5>
          </div>
      </div>
    </div>
  );
};

export default Customers;
