import { useState, useEffect } from 'react'
import axios from 'axios'

export const useRatesData = () => {
  const [ratesData, setRatesData] = useState({
    date: [],
    rates: '',
    error: false
  })

  useEffect(() => {
    axios
      .get('https://api.exchangeratesapi.io/v1/latest?access_key=8go28D0JjOGGc3bqDOUXccVZXyX7WdpG&base=PLN')
      .then(response =>
        setRatesData({
          date: response.data.date,
          rates: response.data.rates
        })
      )
      .catch(() =>
        setRatesData({
          error: true
        })
      )
  }, [])
  return ratesData
}
