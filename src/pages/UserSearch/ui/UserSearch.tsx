import styled, { createGlobalStyle } from "styled-components";
import { Normalize } from "./normalize";

export const UserSearch = () => {
  return (
    <>
      <Normalize />
      <GlobalStyle />
      <Title>Hello</Title>
    </>
  );
};

const GlobalStyle = createGlobalStyle`
body {
  background-color: #787878;
}
`;

const Title = styled.h1`
  color: #ffffff;
`;
