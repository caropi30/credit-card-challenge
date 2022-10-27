import "./index.scss";
//import { useState } from "react";
import { FrontSide } from "../FrontSide/index";
import { BackSide } from "../BackSide/index";

const CreditCard = ({ data }) => {
  return (
    <>
      <section>
        <FrontSide
          cardHolder={data.cardHolder}
          cardNumber={data.cardNumber}
          month={data.month}
          year={data.year}
        ></FrontSide>
        <BackSide cvc={data.cvc}></BackSide>
      </section>
    </>
  );
};

export { CreditCard };
