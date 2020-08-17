import React, { useState } from "react";
import { currencies } from "../utils/currency";
import {FormContainer, FormInput, InputDescription, FormSelect, Button} from "./styled"

const Form = ({ calculate, currency }) => {
  const [amount, setAmount] = useState("");
  const [firstCurrency, setFirstCurrency] = useState(1);
  const [secondCurrency, setSecondCurrency] = useState(1);

  const chooseFirstCurrency = ({ target }) => {
    setFirstCurrency(target.value);
  }
  const chooseSecondCurrency = ({ target }) => {
    setSecondCurrency(target.value);
  }
  const onFormSubmit = (event) => {
    event.preventDefault();
    calculate(amount, firstCurrency, secondCurrency);
    currency(secondCurrency);
  };
  return (
    <FormContainer
      onSubmit={onFormSubmit}>
      <p>
        <InputDescription>Mam:</InputDescription>
        <FormInput value={amount}
          onChange={({ target }) => { setAmount(Number(target.value)) }}
          type="number"
          min="1"
          required
          autoFocus
        />
        <FormSelect value={firstCurrency}
          onChange={chooseFirstCurrency}>
          {currencies.map((currency => (
            <option
              key={currency.symbol}
              value={currency.rate}
            >
              {currency.symbol}
            </option>
          )))}
        </FormSelect>
      </p>
      <p>
        <InputDescription>Na:</InputDescription>
        <FormSelect value={secondCurrency}
          onChange={chooseSecondCurrency}>
          {currencies.map((currency => (
            <option
              key={currency.symbol}
              value={currency.rate}
            >
              {currency.symbol}
            </option>
          )))}
        </FormSelect>
        <Button>Przelicz</Button>
      </p>
    </FormContainer>
  )
};
export default Form;

