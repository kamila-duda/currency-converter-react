import styled from 'styled-components'

export const Main = styled.main`
  margin: 40px;
  background-color: #fff;
  border: 2px solid #000;
  border-radius: 10px;
  box-shadow: 0 0 20px #000;
  display: flex;
  justify-content: center;
  flex-direction: column;
  @media (max-width: 414px) {
    margin: 8px;
  }
`

export const SectionContainer = styled.div`
  display: flex;
  justify-content: space-around;
  align-items: center;
  @media (max-width: 786px) {
    flex-direction: column;
  }
`

export const Result = styled.p`
  font-weight: bold;
  color: #fff;
  height: 35px;
  padding-bottom: 30px;
  font-size: 30px;
`
