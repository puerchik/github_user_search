import { SubmitHandler, useForm } from "react-hook-form";
import { AxiosError } from "axios";

import { useAppDispatch, useAppSelector } from "@/shared/hooks/reduxHooks";
import { appActions } from "@/app/store/userSearchSlice";
import { setUser } from "@/shared/api/setUser";

import { SearchButton } from "@/shared/ui/SearchButton";

import styled from "styled-components";
import { VisuallyHidden } from "@/shared/const/VisuallyHidden";
import { FlexRow } from "@/shared/const/FlexRow";
import { ResetInput } from "@/shared/const/ResetInput";

import search from "@/shared/ui/icons/search.svg";
import { screenStatusActions } from "@/app/store/screenStatusSlice";

type Input = {
  username: string;
};

export const Search = () => {
  const { register, handleSubmit } = useForm<Input>();
  const dispatch = useAppDispatch();
  const errorStatus = !!useAppSelector((state) => state.screenStatus.error);

  const onSubmit: SubmitHandler<Input> = async (data) => {
    try {
      const username = await setUser(data.username);
      dispatch(appActions.getUser(username));
      dispatch(screenStatusActions.setScreen({ homeScreen: false }));
      if (errorStatus) {
        dispatch(screenStatusActions.setError({ error: false }));
      }
    } catch (error) {
      if (error instanceof AxiosError) {
        error.response?.status
          ? dispatch(screenStatusActions.setError({ error: error.response?.status }))
          : dispatch(screenStatusActions.setError({ error: true }));
        console.log(error.response?.status);
      } else {
        dispatch(screenStatusActions.setError({ error: true }));
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

  @media (max-width: 585px) {
    width: 230px;
  }

  @media (max-width: 480px) {
    width: 120px;

    &::placeholder {
      opacity: 0;
    }
  }
`;

const InputWrapper = styled(FlexRow)`
  column-gap: 20px;
`;
