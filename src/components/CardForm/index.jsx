import React from "react";
import { useState } from "react";
import "./index.scss";

const CardForm = () => {
  const [cardHolder, setCardHolder] = useState("");
  const [cardNumber, setCardNumber] = useState();
  const [month, setMonth] = useState();
  const [year, setYear] = useState();
  const [cvc, setCvc] = useState();

  console.log(cardHolder);
  //console.log(cardNumber);

  const takingValues = (e) => {
    setCardHolder(e.target.value);
  };
  return (
    <>
      <form method="post">
        <label for="cardholder">
          CARDHOLDER NAME
          <input
            placeholder="e.g Antonio Barrera"
            type="text"
            name="cardholder"
            value={cardHolder}
            onChange={takingValues}
          />
        </label>
        <label for="card-number">
          CARD NUMBER
          <input
            placeholder="e.g 1234 5678 3456 5890"
            type="number"
            name="card-number"
            value={cardNumber}
            onChange={(e) => setCardNumber(e.target.value)}
          />
        </label>
        <div>
          <div>
            EXP. DATE (MM/YY)
            <label for="month">
              <input
                placeholder="MM"
                name="month"
                value={month}
                onChange={(e) => setMonth(e.target.value)}
              />
            </label>
            <label for="year">
              <input
                placeholder="YY"
                for="year"
                type="number"
                value={year}
                onChange={(e) => setYear(e.target.value)}
              />
            </label>
          </div>
          <label for="cvc">
            CVC
            <input
              placeholder="e.g 123"
              type="number"
              name="cvc"
              value={cvc}
              onChange={(e) => setCvc(e.target.value)}
            />
          </label>
        </div>

        <button type="button" onSubmit={() => {}}>
          Confirm
        </button>
      </form>
    </>
  );
};

export { CardForm };
