import React from "react";
import "./style.css";
import { currencyChoose } from "../utils/currency";

const Table = () => {
    return (
        <table className="exchangeRates__table">
            <caption className="table__title">Kurs wymiany walut z dnia: 16.06.2020r</caption>
            <thead>
                <tr className="table__row">
                    <th className="table__heading" scope="col">Waluta</th>
                    <th className="table__heading" scope="col">Kurs w PLN</th>
                </tr>
            </thead>
            <tbody>
            {currencyChoose.map((currency => (
            <tr className="table__row" key={currency.symbol}>
            <td className="table__cell"><img className="table__image" 
            src={currency.image} alt={currency.name} />{currency.symbol}</td>
            <td className="table__cell">{currency.currency}</td>
            </tr>
          )))}
            </tbody>
        </table>
    )
};

export default Table;