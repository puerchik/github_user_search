import { useAppSelector } from "@/shared/hooks/reduxHooks";

import { GitStatistic } from "@/shared/ui/GitStatistic";
import { Contact } from "@/shared/ui/Contact";

import styled, { css } from "styled-components";
import { FlexRow } from "@/shared/const/FlexRow";
import { FlexColumn } from "@/shared/const/FlexColumn";

import pinIcon from "@/shared/ui/icons/pin.svg";
import twitterIcon from "@/shared/ui/icons/twitter.svg";
import chainIcon from "@/shared/ui/icons/chain.svg";
import buildingIcon from "@/shared/ui/icons/building.svg";

export const User = () => {
  const [user] = useAppSelector((state) => state.users);
  const screenStatus = useAppSelector((state) => state.screenStatus.homeScreen);
  const errorStatus = useAppSelector((state) => state.screenStatus.error);

  const date = new Date(user.created_at);
  const day = date.getDate();
  const month = date.toLocaleString("en-EN", { month: "short" });
  const year = date.getFullYear();

  return (
    <>
      <UserWrapper>
        {errorStatus === 404 ? (
          <p>User is not found</p>
        ) : !!errorStatus ? (
          <p>Error!</p>
        ) : screenStatus ? (
          <p>Please enter github username above</p>
        ) : (
          <FlexRow $columnGap="35px" $alignItems="flex-start">
            <Avatar
              src={user.avatar_url}
              width="125"
              height="125"
              alt="GitHub avatar"
              loading="lazy"
            />
            <FlexColumn $rowGap="35px">
              <UserProfile>
                <FlexRow $columnGap="35px" $marginBotton="20px" $alignItems="flex-end">
                  <UserName>{user.name}</UserName>
                  <Created>
                    Joined {day} {month} {year}
                  </Created>
                </FlexRow>
                <Site href={user.html_url} target="_blank">
                  GitHub profile
                </Site>
                <Bio $disabled={!!user.bio}>
                  {user.bio !== null ? user.bio : "This profile has no bio"}
                </Bio>
              </UserProfile>
              <UserStatistics $columnGap="30px">
                <GitStatistic title="Repos" value={user.public_repos} />
                <GitStatistic title="Followers" value={user.followers} />
                <GitStatistic title="Following" value={user.following} />
              </UserStatistics>
              <UserContacts>
                <Contact link={false} value={user.location} icon={pinIcon} />
                <Contact link={false} value={user.twitter_username} icon={twitterIcon} />
                <Contact link={true} value={user.blog} icon={chainIcon} />
                <Contact link={false} value={user.company} icon={buildingIcon} />
              </UserContacts>
            </FlexColumn>
          </FlexRow>
        )}
      </UserWrapper>
    </>
  );
};

const UserWrapper = styled.section`
  ${(props) =>
    props.theme.theme === "dark"
      ? `
  background-color: #1f2a48
    `
      : `
  background-color: #a5a3a3;
  color: #333;`};

  border-radius: 15px;
  padding: 45px;
  height: 100%;

  @media (max-width: 585px) {
    padding: 25px;
  }
`;

const UserProfile = styled.div`
  width: 100%;

  @media (max-width: 768px) {
    & div {
      flex-direction: column;
      align-items: flex-start;
      row-gap: 15px;
    }
  }
`;

const UserStatistics = styled(FlexRow)`
  ${(props) =>
    props.theme.theme === "dark"
      ? `
    background-color: #141c2f;
    `
      : `
  background-color: #f5f5f5;
  color: #333;`};

  padding: 20px 30px;
  border-radius: 10px;

  @media (max-width: 768px) {
    flex-direction: column;
    align-items: flex-start;
    row-gap: 15px;
  }
`;

const UserContacts = styled.div`
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  gap: 15px;

  @media (max-width: 585px) {
    grid-template-columns: 1fr;
  }
`;

const Avatar = styled.img`
  clip-path: circle(50%);

  @media (max-width: 585px) {
    display: none;
  }
`;

const UserName = styled.h1`
  font-size: 25px;
  font-weight: 500;
  letter-spacing: 1px;
`;

const Created = styled.p`
  font-size: 18px;
`;

const Site = styled.a`
  display: inline-block;
  margin-bottom: 30px;
  text-decoration: none;
  transition: 0.2s;
  color: ${(props) =>
    props.theme.theme === "dark"
      ? `#0177fb          
        `
      : `
      #141c2f;`};

  &:hover {
    color: #ffffff;
  }
`;

const Bio = styled.p<{ $disabled?: boolean }>`
  ${(props) =>
    !props.$disabled &&
    css`
      color: #808080;
      user-select: none;
    `}
`;
