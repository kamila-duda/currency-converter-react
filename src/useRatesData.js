import { useState, useEffect } from "react";

export const useRatesData = () => {
  const [ratesData, setRatesData] = useState({
    date: [],
    rates: "",
    error: false,
  });

  var myHeaders = new Headers();
  myHeaders.append("apikey", "8go28D0JjOGGc3bqDOUXccVZXyX7WdpG");

  useEffect(() => {
    fetch(
      "https://api.apilayer.com/exchangerates_data/latest?symbols=USD%2CEUR%2CGBP%2CPLN&base=PLN",
      {
        method: "GET",
        redirect: "follow",
        headers: myHeaders,
      }
    )
      .then((response) => response.json())
      .then((result) => {
        console.log(result);
        setRatesData({
          date: result.date,
          rates: result.rates,
        });
      })
      .catch((error) =>
        setRatesData({
          error: true,
        })
      );
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);
  return ratesData;
};
