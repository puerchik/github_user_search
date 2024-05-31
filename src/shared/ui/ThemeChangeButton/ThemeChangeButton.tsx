import { useAppDispatch, useAppSelector } from "@/shared/hooks/reduxHooks";
import { screenStatusActions } from "@/app/store/screenStatusSlice";
import styled from "styled-components";

import { ResetButton } from "@/shared/const/ResetButton";
import sunIcon from "@/shared/ui/icons/sun.svg";
import moonIcon from "@/shared/ui/icons/moon.svg";

export const ThemeChangeButton = () => {
  const theme = useAppSelector((state) => state.screenStatus.theme);
  const dispatch = useAppDispatch();

  const changeThemeHandler = () => {
    dispatch(
      screenStatusActions.setTheme(
        theme === "dark" ? { theme: "light" } : { theme: "dark" }
      )
    );
  };

  return (
    <>
      <ThemeChanger onClick={changeThemeHandler}>
        {theme === "dark" ? "light" : "dark"}
      </ThemeChanger>
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
    color: ${(props) => (props.theme.theme === "dark" ? "#0079fe" : "#ffffff")};
  }

  &::after {
    content: "";
    position: absolute;
    height: 100%;
    aspect-ratio: 1;
    top: 0;
    right: 0;

    background: url(${(props) => (props.theme.theme === "dark" ? sunIcon : moonIcon)})
      center/contain no-repeat;
  }
`;
