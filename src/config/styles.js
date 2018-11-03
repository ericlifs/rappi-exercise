import { createGlobalStyle } from 'styled-components'

import regular from 'config/fonts/KoHo-Regular.ttf'
import bold from 'config/fonts/KoHo-Bold.ttf'

const GlobalStyle = createGlobalStyle`
  @font-face {
    font-family: 'KoHo Regular';
    src: url(${regular}) format('opentype');
    font-weight: normal;
  }

  @font-face {
    font-family: 'KoHo Bold';
    src: url(${bold}) format('opentype');
    font-weight: normal;
  }

  * {
    padding: 0;
    margin: 0;
    box-sizing: border-box;
    font-family: KoHo Regular;

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

  
`

export default GlobalStyle
