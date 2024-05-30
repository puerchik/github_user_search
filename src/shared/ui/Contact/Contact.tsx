import styled from "styled-components";
import { FlexRow } from "@/shared/const/FlexRow";

type Props = {
  icon: string;
  link: boolean;
  value: string | null;
};

export const Contact = ({ icon, link, value }: Props) => {
  return (
    <>
      <ContactWrapper $columnGap="15px">
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

const ContactWrapper = styled(FlexRow)`
  justify-content: flex-start;

  & a {
    color: #ffffff;
    text-decoration: none;
  }

  & img {
    height: 20px;
  }
`;
