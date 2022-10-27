import React from "react";
import "./index.scss";

const FrontSide = (props) => {
  return (
    <>
      <section className="cardFront">
        <div className="cardHolder">{props.cardHolder}</div>
        <div className="cardNumber">{props.cardNumber}</div>
        <div className="cardDate">
          <p className="month">{props.month}</p>
          <span className="year">{props.year}</span>
        </div>
        <div></div>
      </section>
    </>
  );
};

export { FrontSide };
