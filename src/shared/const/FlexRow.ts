import styled, { css } from "styled-components";

export const FlexRow = styled.div<{
  $columnGap?: string;
  $marginBotton?: string;
  $alignItems?: string;
}>`
  display: flex;
  justify-content: space-between;

  ${(props) =>
    props.$alignItems
      ? css`
          align-items: ${props.$alignItems};
        `
      : `align-items: center;`}

  ${(props) =>
    props.$columnGap &&
    css`
      column-gap: ${props.$columnGap};
    `}

  ${(props) =>
    props.$marginBotton &&
    css`
      margin-bottom: ${props.$marginBotton};
    `}
`;
