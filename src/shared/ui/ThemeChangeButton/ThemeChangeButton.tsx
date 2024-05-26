import styled from "styled-components";
import sun from "./../icons/sun.svg";

export const ThemeChangeButton = () => {
  return (
    <>
      <Button>Light</Button>
    </>
  );
};

const Button = styled.button`
  position: relative;
  padding: 0;
  border: none;
  font: inherit;
  color: inherit;
  background-color: transparent;
  cursor: pointer;

  padding-block: 5px;
  padding-right: 45px;
  text-transform: uppercase;
  letter-spacing: 0.2em;
  font-size: 16px;

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
