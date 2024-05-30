import { SubmitHandler, useForm } from "react-hook-form";
import { AxiosError } from "axios";

import { useAppDispatch } from "@/shared/hooks/reduxHooks";
import { appActions } from "@/app/store/userSearchSlice";
import { setUser } from "@/shared/utils/setUser";

import { SearchButton } from "@/shared/ui/SearchButton";

import styled from "styled-components";
import { VisuallyHidden } from "@/shared/const/VisuallyHidden";
import { FlexRow } from "@/shared/const/FlexRow";
import { ResetInput } from "@/shared/const/ResetInput";

import search from "@/shared/ui/icons/search.svg";

type Input = {
  username: string;
};

export const Search = () => {
  const { register, handleSubmit } = useForm<Input>();
  const dispatch = useAppDispatch();

  const onSubmit: SubmitHandler<Input> = async (data) => {
    try {
      const username = await setUser(data.username);
      dispatch(appActions.getUser(username));
    } catch (error) {
      if (error instanceof AxiosError) {
        console.log(error.message);
      } else {
        console.log(error);
      }
    }
  };

  return (
    <>
      <SearchForm onSubmit={handleSubmit(onSubmit)}>
        <FlexRow>
          <InputWrapper>
            <label htmlFor="username">
              <VisuallyHidden>Enter username</VisuallyHidden>
              <img src={search} alt="search image" />
            </label>
            <SearchInput
              {...register("username")}
              id="username"
              type="text"
              placeholder="Search GitHub username..."
            />
          </InputWrapper>
          <SearchButton type="submit" />
        </FlexRow>
      </SearchForm>
    </>
  );
};

const SearchForm = styled.form`
  background-color: #1f2a48;
  border-radius: 15px;
  padding: 10px;
  padding-left: 25px;

  & img {
    height: 30px;
    aspect-ratio: 1;
  }
`;

const SearchInput = styled(ResetInput)`
  padding: 5px;
  padding-inline: 10px;
  height: 25px;
  width: 270px;
  color: inherit;
  font-size: 18px;

  &::placeholder {
    color: inherit;
    font-size: inherit;
  }
`;

const InputWrapper = styled(FlexRow)`
  column-gap: 20px;
`;
