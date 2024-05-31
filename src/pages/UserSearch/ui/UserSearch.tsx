import { Header } from "@/widgets/Header/ui";
import { Main } from "@/widgets/Main";

import { ThemeProvider } from "styled-components";
import { Normalize } from "@/shared/const/Normalize";
import { GlobalStyle } from "@/shared/const/GlobalStyle";
import { Container } from "@/shared/const/Container";
import { useAppSelector } from "@/shared/hooks/reduxHooks";

export const UserSearch = () => {
  const theme = useAppSelector((state) => state.screenStatus.theme);
  return (
    <>
      <ThemeProvider theme={{ theme }}>
        <Normalize />
        <GlobalStyle />

        <Container>
          <Header />
          <Main />
        </Container>
      </ThemeProvider>
    </>
  );
};
