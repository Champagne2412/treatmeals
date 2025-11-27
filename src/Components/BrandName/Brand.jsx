import React from "react";
import Title from "../Title/Title";
import collage2 from "../../assets/collage2.jpg"
import "./Brand.css"

const Brand = () => {
  return (
    <div className="brand">
      <div className={`flex-order`}>
        <Title
          heading={"A Reputed Brand"}
          Title={"Why "}
          span={"Choose Us"}
          p1={
            "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat."
          }
          btn={"Order Now"}
          img={collage2}
        />
      </div>
    </div>
  );
};

export default Brand;
