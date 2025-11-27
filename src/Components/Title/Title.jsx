import React from "react";
import "./Title.css";

const Title = ({ heading, Title, span, p1, p3, btn, icon, p2, img, reverse, vertical }) => {
  return (
    <div className={`div ${reverse ? "reverse-layout" : ""}`}>
      <div className="title-con">
        <div className="title">
          {heading && <p className="heading">{heading}</p>}
          {Title && (
            <h2 className="title-one">
              {Title} {span && <span className="title-two">{span}</span>}
            </h2>
          )}
        </div>
        {p1 && <p>{p1}</p>}
        {p3 && <p>{p3}</p>}
        <div className="order-section">
          {btn && <button className="btn">{btn}</button>}
          <div className="meet-chef">
            {icon && <div className="icon">{icon} </div>}
            {p2 && <p>{p2}</p>}
          </div>
        </div>
      </div>
      {img && (
        <div className="image-div">
          <img src={img} alt="" className={`bgg ${ vertical ? "vertical-img" : ""}`}/>
        </div>
      )}
    </div>
  );
};

export default Title;
