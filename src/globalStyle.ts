import { createGlobalStyle } from "styled-components";

export const GlobalStyles = createGlobalStyle`  

  body {
    background-color: ${({ theme }) => theme.body};
    color: ${({ theme }) => theme.text};
    font-family: "Roboto", sans-serif;
    transition: background-color 0.3s linear;
    /* font-size: 0.875rem; */
  }

`;
