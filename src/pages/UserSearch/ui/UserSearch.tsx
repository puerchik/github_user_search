import styled, { createGlobalStyle } from "styled-components";
import { Normalize } from "./normalize";

import { Header } from "@/widgets/Header/ui";

export const UserSearch = () => {
  return (
    <>
      <Normalize />
      <GlobalStyle />

      <Container>
        <Header />
      </Container>
    </>
  );
};

const GlobalStyle = createGlobalStyle`
body {
  font-family: sans-serif;
  background-color: #141C2F;
}
`;

const Container = styled.div`
  max-width: 730px;
  min-height: 580px;
  margin-inline: auto;
  padding-inline: 15px;
  background-color: #fff;
  margin-top: 10%;
`;
