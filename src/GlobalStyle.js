import { createGlobalStyle } from 'styled-components'

const GlobalStyle = createGlobalStyle`
  html {
  box-sizing: border-box;
}
*,
*::before,
*::after {
  box-sizing: inherit;
}
body{
  font-family: 'Muli', sans-serif;
  line-height: 1.5;
  text-align: center;
  margin: 0;
  background-image: url("https://i.ibb.co/YkMq9Rn/bg.jpg");
  background-size: cover;
  height: 100%;
}
::-webkit-scrollbar {
  width: 20px;
}
::-webkit-scrollbar-track {
  box-shadow: inset 0 0 5px grey; 
  border-radius: 10px;
}
::-webkit-scrollbar-thumb {
  background: teal; 
  border-radius: 10px;
}
::-webkit-scrollbar-thumb:hover {
  background: #00a7a7; 
  cursor: pointer;
}
`

export default GlobalStyle
