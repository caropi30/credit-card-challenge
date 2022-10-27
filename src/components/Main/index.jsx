import React from "react";
import { useState } from "react";
import "./index.scss";
import { CreditCard } from "../CreditCard/index";
import { CardForm } from "../CardForm/index";

const Main = () => {
  const [data, setData] = useState({
    cardHolder: "",
    cardNumber: "",
    month: "",
    year: "",
    cvc: "",
  });
  return (
    <>
      <main>
        <CreditCard data={data} />
        <CardForm data={data} setData={setData} />
      </main>
    </>
  );
};

export { Main };
