import React from "react";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import * as yup from "yup";

const schema = yup
  .object({
    firstName: yup.string().required(),
    age: yup
      .number()
      .typeError("Apenas valores numéricos!")
      .positive()
      .integer()
      .required()
      .min(18),
  })
  .required();

export default function FormWithValidation() {
  const {
    register,
    handleSubmit,
    formState: { errors },
    getValues,
  } = useForm({ resolver: yupResolver(schema) });

  const onSubmit = (data) => console.log({ data });

  // acessando values após o submit
  const test = getValues("age");

  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      <input {...register("firstName")} placeholder="Nome" />
      <p>{errors.firstNames && errors.firstName?.message}</p>

      <input {...register("age")} placeholder="Idade" />
      <p>{errors.age && errors.age?.message}</p>

      <input type="submit" />
    </form>
  );
}
