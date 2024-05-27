import { useEffect } from "react";
import { useAppDispatch } from "@/shared/hooks/reduxHooks";

import styled from "styled-components";
import { getUser } from "@/shared/api";

export const User = () => {
  const dispatch = useAppDispatch();

  const setUser = async () => {
    const res = await getUser("feature-sliced");

    console.log(res.data);
  };

  useEffect(() => {
    setUser();
  }, []);

  return (
    <>
      <UserWrapper>
        <p>User</p>
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
