import { createGlobalStyle } from 'styled-components'

const GlobalStyle = createGlobalStyle`
  * {
    padding: 0;
    margin: 0;
    box-sizing: border-box;

    &::before,
    &::after {
      box-sizing: border-box;
    }
  }

  html, body, #root {
    height: 100%;
  }

  @-ms-viewport{
    width: device-width;
  }
`;

export default GlobalStyle;