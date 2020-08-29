import styled from 'styled-components'

export const FormContainer = styled.form`
  max-width: 350px;
  margin: 20px auto;
`
export const FormInput = styled.input`
  padding: 10px;
  margin: 2px;
  border-radius: 10px;
  outline: none;
  border: 2px solid teal;
  font-size: 14px;
  width: 90px;
  display: inline-block;
`
export const InputDescription = styled(FormInput)`
  color: #fff;
  background-color: teal;
`
export const FormSelect = styled(FormInput)``

export const Button = styled.button`
  background-color: teal;
  outline: none;
  border: 2px solid teal;
  padding: 10px;
  color: #fff;
  border-radius: 10px;
  cursor: pointer;
  width: 90px;
  text-transform: uppercase;
  font-size: 15px;
`
