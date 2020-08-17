import React, { useState } from 'react'
import Header from './Header'
import Section from './Section'
import Form from './Form'
import Footer from './Footer'
import Table from './Table'
import Time from './Time'
import { Main, SectionContainer, Result } from './styled'

function App () {
  const [result, setResult] = useState('')
  const calculate = (amount, firstCurrency, secondCurrency) => {
    const endResult = (amount * firstCurrency) / secondCurrency
    setResult(endResult.toFixed(2))
  }
  const [symbol, setSymbol] = useState('')

  const currency = secondCurrency => {
    switch (secondCurrency) {
      case '4.45':
        setSymbol('EUR')
        break
      case '3.96':
        setSymbol('USD')
        break
      case '4.97':
        setSymbol('GBP')
        break
      default:
        setSymbol('PLN')
        break
    }
  }
  return (
    <>
      <Main>
        <Time />
        <SectionContainer>
          <Section 
          body={<Table />} />
          <Section
          header={<Header />} 
          body={<Form 
              calculate={calculate} 
              currency={currency} />}
          extraContent={<Result>{`${result} ${symbol}`}</Result>}
          />
        </SectionContainer>
      </Main>
      <Footer />
    </>
  )
}

export default App
