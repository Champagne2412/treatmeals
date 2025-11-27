import React from "react";
import "./Details.css";
import Title from "../Title/Title";
import collage3 from "../../assets/collage3.jpg";

const Details = () => {
  return (
    <div className="details-container">
      <div className={`flex-order`}>
        <Title
          reverse={true}
         
          heading={"Established Since 2014"}
          Title={"We've been serving for"}
          span={"over 5 years."}
          p1={
            "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua."
          }
          p3={
            "Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat."
          }
          btn={"Latest Offers"}
          img={collage3}
        />
      </div>
    </div>
  );
};

export default Details;
