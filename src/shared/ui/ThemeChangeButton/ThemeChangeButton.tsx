import styled from "styled-components";

import { ResetButton } from "@/shared/const/ResetButton";
import sun from "@/shared/ui/icons/sun.svg";

export const ThemeChangeButton = () => {
  return (
    <>
      <ThemeChanger>Light</ThemeChanger>
    </>
  );
};

const ThemeChanger = styled(ResetButton)`
  position: relative;

  padding-block: 5px;
  padding-right: 45px;
  text-transform: uppercase;
  letter-spacing: 0.2em;
  font-size: 16px;
  transition: 0.2s;

  &:hover {
    color: #0079fe;
  }

  &::after {
    content: "";
    position: absolute;
    height: 100%;
    aspect-ratio: 1;
    top: 0;
    right: 0;
    background: url(${sun}) center/contain no-repeat;
  }
`;
