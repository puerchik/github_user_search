import { Header } from "@/widgets/Header/ui";

import { Normalize } from "@/shared/const/Normalize";
import { GlobalStyle } from "@/shared/const/GlobalStyle";
import { Container } from "@/shared/const/Container";

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
