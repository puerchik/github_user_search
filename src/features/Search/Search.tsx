import { SubmitHandler, useForm } from "react-hook-form";

type Input = {
  username: string;
};

export const Search = () => {
  const { register, handleSubmit } = useForm<Input>();

  const onSubmit: SubmitHandler<Input> = (data) => console.log(data.username);

  return (
    <>
      <form onSubmit={handleSubmit(onSubmit)}>
        <input {...register("username")} type="text" />
        <button>Search</button>
      </form>
    </>
  );
};
