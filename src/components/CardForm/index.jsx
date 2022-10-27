import React from "react";
//import { useState } from "react";
import "./index.scss";

const CardForm = ({ data, setData }) => {
  const handleInputChange = (e) => {
    setData({
      ...data,
      [e.target.name]: e.target.value,
    });
  };

  return (
    <>
      <form method="post">
        <label for="cardholder">
          CARDHOLDER NAME
          <input
            placeholder="e.g Antonio Barrera"
            type="text"
            name="cardHolder"
            value={data.cardHolder}
            onChange={handleInputChange}
          />
        </label>
        <label for="card-number">
          CARD NUMBER
          <input
            placeholder="e.g 1234 5678 3456 5890"
            type="number"
            name="cardNumber"
            onChange={handleInputChange}
            value={data.cardNumber}
          />
        </label>
        <div>
          <div>
            EXP. DATE (MM/YY)
            <label for="month">
              <input
                type="number"
                placeholder="MM"
                name="month"
                value={data.month}
                onChange={handleInputChange}
              />
            </label>
            <label for="year">
              <input
                type="number"
                placeholder="YY"
                for="year"
                name="year"
                value={data.year}
                onChange={handleInputChange}
              />
            </label>
          </div>
          <label for="cvc">
            CVC
            <input
              placeholder="e.g 123"
              type="number"
              name="cvc"
              value={data.cvc}
              onChange={handleInputChange}
            />
          </label>
        </div>
        <button type="button">Confirm</button>
      </form>
    </>
  );
};

export { CardForm };
