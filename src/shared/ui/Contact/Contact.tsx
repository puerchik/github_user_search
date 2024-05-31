import styled, { css } from "styled-components";
import { FlexRow } from "@/shared/const/FlexRow";

type Props = {
  icon: string;
  link: boolean;
  value: string | null;
};

export const Contact = ({ icon, link, value }: Props) => {
  return (
    <>
      <ContactWrapper $disabled={!!value} $columnGap="15px">
        <img src={icon} alt="" />
        {link && value ? (
          <a href={value} target="_blank">
            {value}
          </a>
        ) : (
          <p>{value ? value : "Not Available"}</p>
        )}
      </ContactWrapper>
    </>
  );
};

const ContactWrapper = styled(FlexRow)<{
  $disabled: boolean;
}>`
  justify-content: flex-start;

${(props) =>
  props.theme.theme === "dark"
    ? `
  & a {
    color: #ffffff;
  }
  `
    : `
  & a {
    color: #333333;
  }
  `}

& a {
  text-decoration: none;
}



  & img {
    height: 20px;
  }

  ${(props) =>
    !props.$disabled &&
    css`
      color: #808080;
      user-select: none;

      & img {
        opacity: 0.5;
      }
    `}}
`;
