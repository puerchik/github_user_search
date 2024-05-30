import { useAppSelector } from "@/shared/hooks/reduxHooks";

import { GitStatistic } from "@/shared/ui/GitStatistic";
import { Contact } from "@/shared/ui/Contact";

import styled from "styled-components";
import { FlexRow } from "@/shared/const/FlexRow";
import { FlexColumn } from "@/shared/const/FlexColumn";

import pinIcon from "@/shared/ui/icons/pin.svg";
import twitterIcon from "@/shared/ui/icons/twitter.svg";
import chainIcon from "@/shared/ui/icons/chain.svg";
import buildingIcon from "@/shared/ui/icons/building.svg";

export const User = () => {
  const [user] = useAppSelector((state) => state.appReducer);

  return (
    <>
      <UserWrapper>
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
              <FlexRow $columnGap="35px" $marginBotton="20px">
                <Login>{user.name}</Login>
                <Created>{user.created_at}</Created>
              </FlexRow>
              <Site href={user.html_url} target="_blank">
                GitHub profile
              </Site>
              <Bio>{user.bio}</Bio>
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
      </UserWrapper>
    </>
  );
};

const UserWrapper = styled.section`
  background-color: #1f2a48;
  border-radius: 15px;
  padding: 45px;
  height: 100%;
`;

const UserProfile = styled.div`
  width: 100%;
`;

const UserStatistics = styled(FlexRow)`
  background-color: #141c2f;
  padding: 20px 30px;
  padding-right: 80px;
  border-radius: 10px;
`;

const UserContacts = styled.div`
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  gap: 15px;
`;

const Avatar = styled.img`
  clip-path: circle(50%);
`;

const Login = styled.h1``;

const Created = styled.p``;

const Site = styled.a`
  display: inline-block;
  margin-bottom: 30px;
  color: #0177fb;
  text-decoration: none;
`;

const Bio = styled.p``;
