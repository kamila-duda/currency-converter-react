import React from "react";
import "./style.css";

const Form = () => {
  return (
    <form className="currencyConverter__form">
      <p className="form__row">
        <span className="form__inputMark">Mam:</span>
        <input className="form__field js-amount" type="number" min="1" required
          autoFocus />
        <select className="form__select js-form__selectFirst" name="firstOption">
          <option value="pln">PLN</option>
          <option value="eur">EUR</option>
          <option value="usd">USD</option>
          <option value="gbp">GBP</option>
        </select></p>
      <p className="form__row">
        <span className="form__inputMark">Na:</span>
        <select className="form__select js-form__selectSecond" name="secondOption">
          <option value="pln">PLN</option>
          <option value="eur">EUR</option>
          <option value="usd">USD</option>
          <option value="gbp">GBP</option>
        </select>
        <button className="form__button js-form__button">Przelicz</button>
      </p>
    </form>
  )
};

export default Form;