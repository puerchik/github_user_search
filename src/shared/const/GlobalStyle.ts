import { createGlobalStyle } from "styled-components";

import SpaceMonoRegular from "@/shared/fonts/SpaceMono-Regular.woff2";
import SpaceMonoBold from "@/shared/fonts/SpaceMono-Bold.woff2";
import OverpassMonoRegular from "@/shared/fonts/OverpassMono-Regular.woff2";
import OverpassMonoBold from "@/shared/fonts/OverpassMono-Bold.woff2";

export const GlobalStyle = createGlobalStyle`
@font-face {
  font-family: "SpaceMono";
  src: url(${SpaceMonoRegular}) format("woff2");
  font-weight: 400;
  font-style: normal;
  font-display: swap;
}

@font-face {
  font-family: "SpaceMono";
  src: url(${SpaceMonoBold}) format("woff2");
  font-weight: 700;
  font-style: normal;
  font-display: swap;
}

@font-face {
  font-family: "OverpassMono";
  src: url(${OverpassMonoRegular}) format("woff2");
  font-weight: 400;
  font-style: normal;
  font-display: swap;
}

@font-face {
  font-family: "OverpassMono";
  src: url(${OverpassMonoBold}) format("woff2");
  font-weight: 700;
  font-style: normal;
  font-display: swap;
}

body {
  font-family: "SpaceMono", sans-serif;
  ${(props) =>
    props.theme.theme === "dark"
      ? `
          background-color: #141c2f;
          color: #ffffff;
        `
      : `
      background-color: #d8d8d8;
      color: #333333;`} 
}
`;
