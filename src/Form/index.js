import React, { useState } from 'react'
import {
  FormContainer,
  FormInput,
  InputDescription,
  FormSelect,
  Button
} from './styled'

const Form = ({ calculate, currency }) => {
  const [amount, setAmount] = useState('')
  const [firstCurrency, setFirstCurrency] = useState('PLN')
  const [secondCurrency, setSecondCurrency] = useState('EUR')

  const chooseFirstCurrency = ({ target }) => {
    setFirstCurrency(target.value)
  }
  const chooseSecondCurrency = ({ target }) => {
    setSecondCurrency(target.value)
  }
  const objectEntries = Object.entries(currency)
  const sortedRates = objectEntries.sort()

  const onFormSubmit = event => {
    event.preventDefault()
    calculate(amount, firstCurrency, secondCurrency)
  }
  return (
    <FormContainer onSubmit={onFormSubmit}>
      <p>
        <InputDescription as='span'>Mam:</InputDescription>
        <FormInput
          value={amount}
          onChange={({ target }) => {
            setAmount(Number(target.value))
          }}
          type='number'
          min='1'
          required
        />
        <FormSelect
          as='select'
          value={firstCurrency}
          onChange={chooseFirstCurrency}
        >
          {sortedRates.map(currency => (
            <option key={currency[0]}>{currency[0]}</option>
          ))}
        </FormSelect>
      </p>
      <p>
        <InputDescription as='span'>Na:</InputDescription>
        <FormSelect
          as='select'
          value={secondCurrency}
          onChange={chooseSecondCurrency}
        >
          {sortedRates.map(currency => (
            <option key={currency[0]}>{currency[0]}</option>
          ))}
        </FormSelect>
        <Button>Przelicz</Button>
      </p>
    </FormContainer>
  )
}
export default Form
