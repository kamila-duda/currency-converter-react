import React from "react";
import "./style.css";

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
                <tr className="table__row">
                    <td className="table__cell"><img className="table__image" src="https://i.ibb.co/9sLpkpS/euro.png" alt="Euro flag" />EUR</td>
                    <td className="table__cell js-eur">4.45</td>
                </tr>
                <tr className="table__row">
                    <td className="table__cell"><img className="table__image" src="https://i.ibb.co/7KGVPHp/usa.png" alt="USA flag" />USD</td>
                    <td className="table__cell js-usd">3.96</td>
                </tr>
                <tr className="table__row">
                    <td className="table__cell"><img className="table__image" src="https://i.ibb.co/6msQtYz/gb.png" alt="British flag" />GBP</td>
                    <td className="table__cell js-gbp">4.97</td>
                </tr>
            </tbody>

        </table>
    )
};

export default Table;