import styled from "styled-components";

export const FlexColumn = styled.div<{ $rowGap: string; $alignItems?: string }>`
  width: 100%;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  row-gap: ${(props) => props.$rowGap};

  ${(props) => props.$alignItems && `align-items: ${props.$alignItems};`}
`;
