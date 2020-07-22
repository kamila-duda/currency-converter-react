import React from 'react';
import Header from "./Header";
import Section from "./Section";
import Form from "./Form";
import Footer from "./Footer";
import Table from "./Table";

function App() {
  
  return (
    <>
    <main className="container">
        <Header /> 
        <Section className={"exchangeRates"}
        body={<Table />} 
        />
        <Section className={"currencyConverter"}
        body={<Form />}
        extraContent={
          <p className="currencyConverter__result js-currencyConverter__result">
          </p>} 
        />
    </main>
    <Footer />
    </>
  );
}

export default App;
