import React, { useState } from "react";
import "./style.css";

const Form = ({calculate, currency}) => {
  const [amount, setAmount] = useState("");
  const [firstCurrency, setFirstCurrency] = useState(1);
  const [secondCurrency, setSecondCurrency] = useState(1);
 
  const chooseFirstCurrency = ({target}) => {
    setFirstCurrency(target.value);
  }
  const chooseSecondCurrency = ({target}) => {
    setSecondCurrency(target.value);
    
  }
  const onFormSubmit = (event) => {
    event.preventDefault();
    calculate(amount, firstCurrency, secondCurrency);
    currency(secondCurrency);
    //setSymbol(symbol);
  };
    
  return (
    <form className="currencyConverter__form"
    onClick={onFormSubmit}>
      <p className="form__row">
        <span className="form__inputMark">Mam:</span>
        <input value={amount}
        onChange={({target}) => {setAmount(Number(target.value))}} className="form__field js-amount" 
        type="number" 
        min="1" 
        required
        autoFocus />
        <select value={firstCurrency}
        onChange={chooseFirstCurrency}
        className="form__select" name="firstOption">
          <option value="1">PLN</option>
          <option value="4.45">EUR</option>
          <option value="3.96">USD</option>
          <option value="4.97">GBP</option>
        </select></p>
      <p className="form__row">
        <span className="form__inputMark">Na:</span>
        <select value={secondCurrency}
        onChange={chooseSecondCurrency} 
        className="form__select" name="secondOption">
          <option value="1">PLN</option>
          <option value="4.45">EUR</option>
          <option value="3.96">USD</option>
          <option value="4.97">GBP</option>
        </select>
        <button className="form__button">Przelicz</button>
      </p>
    </form>
  )
};
export default Form; 

