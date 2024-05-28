import { useEffect } from "react";
import { useAppDispatch, useAppSelector } from "@/shared/hooks/reduxHooks";

import styled from "styled-components";
import { getUser } from "@/shared/api";
import { appActions } from "@/app/store/userSearchSlice";
import { FlexRow } from "@/shared/const/FlexRow";

export const User = () => {
  const [user] = useAppSelector((state) => state.appReducer);
  const dispatch = useAppDispatch();

  const setUser = async () => {
    const res = await getUser("feature-sliced");
    const {
      login,
      created_at,
      avatar_url,
      bio,
      public_repos,
      followers,
      following,
      location,
      twitter_username,
      blog,
      company,
      url,
    } = res.data;

    dispatch(
      appActions.getUser({
        login,
        created_at,
        avatar_url,
        bio,
        public_repos,
        followers,
        following,
        location,
        twitter_username,
        blog,
        company,
        url,
      })
    );
  };

  useEffect(() => {
    setUser();
  }, []);

  console.log(user);

  return (
    <>
      <UserWrapper>
        <FlexRow>
          <img
            src={user.avatar_url}
            width="125"
            height="125"
            alt="GitHub avatar"
            loading="lazy"
          />
        </FlexRow>
      </UserWrapper>
    </>
  );
};

const UserWrapper = styled.div`
  background-color: #1f2a48;
  border-radius: 15px;
  padding: 45px;
  min-height: 350px;
`;
