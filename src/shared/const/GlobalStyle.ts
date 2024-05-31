import { createGlobalStyle } from "styled-components";

export const GlobalStyle = createGlobalStyle`
body {
  font-family: sans-serif;
  ${(props) =>
    props.theme.theme === "dark"
      ? `
          background-color: #141c2f;
          color: #ffffff;
        `
      : `
      background-color: #f5f5f5;
      color: #333;`} 
}
`;
