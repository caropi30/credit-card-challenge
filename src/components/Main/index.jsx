import React from "react";
//import { useState } from "react";
import "./index.scss";
//import { BackSide } from "../BackSide/index";
import { FrontSide } from "../FrontSide/index";
import { CardForm } from "../CardForm/index";

const Main = () => {
  //const [data, SetData] = useState([]);
  return (
    <>
      <CardForm />
      <FrontSide />
    </>
  );
};

export { Main };
