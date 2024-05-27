import styled from "styled-components";

export const User = () => {
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
