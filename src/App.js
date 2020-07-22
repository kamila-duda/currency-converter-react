import React, { useState } from 'react';
import Header from "./Header";
import Section from "./Section";
import Form from "./Form";
import Footer from "./Footer";
import Table from "./Table";

function App() {
  const [result, setResult] = useState("");
  const calculate = (amount, firstCurrency, secondCurrency) => {
    setResult(amount*firstCurrency/secondCurrency);
  }
  return (
    <> 
    <main className="container">
        <Header /> 
        <Section className={"exchangeRates"}
        body={<Table />} 
        />
        <Section className={"currencyConverter"}
        body={<Form calculate={calculate} />}
        extraContent={
          <p className="currencyConverter__result js-currencyConverter__result">{result}
          </p>} 
        />
    </main>
    <Footer />
    </>
  );
}

export default App;
