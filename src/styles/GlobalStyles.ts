import { createGlobalStyle } from "styled-components"

export const GlobalStyles = createGlobalStyle`
  *, *::before, *::after {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
    font-family: 'Be Vietnam Pro', sans-serif;
  }
  button {
    border: unset;
    cursor: pointer;
  }
  a {
    text-decoration: none;
  }
  ul {
    list-style: none;
    display: flex;
  }
`
