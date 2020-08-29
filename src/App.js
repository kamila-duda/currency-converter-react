import React, { useState } from 'react'
import Header from './Header'
import Section from './Section'
import Form from './Form'
import Footer from './Footer'
import Table from './Table'
import Time from './Time'
import { Div, Main, SectionContainer, Result } from './styled'
import { useRatesData } from './useRatesData'

function App () {
  const { date, rates, error } = useRatesData()
  const [result, setResult] = useState('')
  const calculate = (amount, firstCurrency, secondCurrency) => {
    const endResult = (amount * rates[secondCurrency]) / rates[firstCurrency]
    setResult(`${endResult.toFixed(2)} ${secondCurrency}`)
  }
  return (
    <Div>
      <Main>
        <Time />
        <SectionContainer>
          {rates ? (
            <>
              <Section body={<Table date={date} rates={rates} />} />
              <Section
                header={<Header />}
                body={<Form calculate={calculate} currency={rates} />}
                extraContent={<Result>{`${result}`}</Result>}
              />
            </>
          ) : !error ? (
            'Proszę chwilę zaczekać, pobieramy najnowsze kursy walut'
          ) : (
            'Ups... coś poszło nie tak. Sprawdź połączenie z internetem lub spróbuj ponownie później'
          )}
        </SectionContainer>
      </Main>
      <Footer />
    </Div>
  )
}

export default App
