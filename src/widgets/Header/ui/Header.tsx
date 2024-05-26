import { ColorScheme } from "@/features/ColorScheme";

import styled from "styled-components";
import { FlexRow } from "@/shared/const/FlexRow";

export const Header = () => {
  return (
    <>
      <HeaderInner as={FlexRow}>
        <Logo>devfinder</Logo>
        <ColorScheme />
      </HeaderInner>
    </>
  );
};

const HeaderInner = styled.div``;

const Logo = styled.p`
  font-size: 30px;
  font-weight: 500;
  text-transform: lowercase;
`;
