import { getUser } from "@/shared/api/api";
import { useEffect } from "react";
import styled from "styled-components";

export const User = () => {
  const setUser = async () => {
    const res = await getUser("feature-sliced");
    console.log(res);
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
