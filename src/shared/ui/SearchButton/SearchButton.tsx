import styled from "styled-components";

import { ResetButton } from "@/shared/const/ResetButton";

type Props = {
  type: "button" | "reset" | "submit";
};

export const SearchButton = ({ type }: Props) => {
  return (
    <>
      <Search type={type}>Search</Search>
    </>
  );
};

const Search = styled(ResetButton)`
  padding: 15px 20px;
  background-color: #0079fe;
  border-radius: 10px;
  letter-spacing: 1px;
  transition: 0.2s;

  &:hover {
    box-shadow: 0px 0px 19px 20px rgba(255, 255, 255, 0.27) inset;
    -webkit-box-shadow: 0px 0px 19px 20px rgba(255, 255, 255, 0.27) inset;
    -moz-box-shadow: 0px 0px 19px 20px rgba(255, 255, 255, 0.27) inset;
    color: ${(props) => (props.theme.theme === "dark" ? "#141c2f" : "#ffffff")};
  }
`;
