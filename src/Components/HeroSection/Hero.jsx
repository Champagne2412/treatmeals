import React from "react";
import "./Hero.css";
import Title from "../Title/Title";
import { FaRegCirclePlay } from "react-icons/fa6";
import collage1 from "../../assets/collage1.jpg";

const Hero = () => {
  return (
    <div>
      <div className="title-div">
        <Title
          Title={"Delicious & Affordable"}
          span={"Meals Near You."}
          p1={
            "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua."
          }
          btn={"Order Now"}
          icon={<FaRegCirclePlay />}
          p2={"Meet The Chefs"}
          img={collage1}
          vertical={true}
        />
      </div>
    </div>
  );
};

export default Hero;
