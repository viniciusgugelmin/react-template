import { createGlobalStyle } from "styled-components";

const GlobalStyle = createGlobalStyle`
  * {
    box-sizing: border-box;
    margin: 0;
    padding: 0;
  }

  body {
    font-family: 'Roboto', sans-serif;
    font-size: 16px;
    background-color: #fafafa;
    min-height: 100vh;
  }

  #root {
    min-height: 100vh;
  }

  a {
    text-decoration: none;
    color: #000;
  }
`;

export { GlobalStyle };
