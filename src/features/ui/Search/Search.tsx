import { SubmitHandler, useForm } from "react-hook-form";
import styled from "styled-components";

import { SearchButton } from "@/shared/ui/SearchButton";
import search from "@/shared/ui/icons/search.svg";
import { VisuallyHidden } from "@/shared/const/VisuallyHidden";
import { FlexRow } from "@/shared/const/FlexRow";
import { ResetInput } from "@/shared/const/ResetInput";

type Input = {
  username: string;
};

export const Search = () => {
  const { register, handleSubmit } = useForm<Input>();

  const onSubmit: SubmitHandler<Input> = (data) => console.log(data.username);

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
