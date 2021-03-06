import { createGlobalStyle } from 'styled-components'

const GlobalStyle = createGlobalStyle`
:root{
  --main-txt-color: #000;
}

  * {
    box-sizing: border-box;
    font-family: 'Roboto', sans-serif;
    margin: 0;
    padding: 0;
    background-color: rgb(255,255,255)
}

a {
  color: var(--main-txt-color);
        text-decoration: none;
    }

h1, h2, h3 ,h4 ,h5, h6 {
  background-color: transparent;
  color: var(--main-txt-color);
  font-family: 'Poppins', sans-serif; 

}

h1 {
  font-size: clamp(1.5rem, 2.5vw, 4rem);
}
`

export default GlobalStyle
