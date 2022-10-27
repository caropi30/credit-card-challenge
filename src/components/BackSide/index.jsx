import React from "react";

const BackSide = (props) => {
  return (
    <>
      <section className="cardBack">
        <div className="cardCvc">{props.cvc}</div>
      </section>
    </>
  );
};

export { BackSide };
