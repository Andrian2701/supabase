"use client";
import { login } from "@/services/auth";
import { Auth } from "@/types/auth";
import { SubmitHandler, useForm } from "react-hook-form";

const LoginForm = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<Auth>();

  const onSubmit: SubmitHandler<Auth> = async (data) => {
    const res = await login(data);

    console.log(res);
  };

  return (
    <form
      onSubmit={handleSubmit(onSubmit)}
      className="px-10 py-4 border-[1px] border-gray rounded-md bg-white flex flex-col justify-center items-center gap-2 h-[250px]"
    >
      <h1 className="text-black">Login</h1>
      <input
        type="email"
        placeholder="email"
        className="text-black px-2"
        {...register("email")}
      />
      <input
        type="password"
        placeholder="password"
        className="text-black px-2"
        {...register("password")}
      />
      <button className="bg-black rounded-md w-full" type="submit">
        Login
      </button>
    </form>
  );
};

export default LoginForm;
