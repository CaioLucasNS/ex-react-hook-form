import React from "react";
import { useForm } from "react-hook-form";
import "./styles.css";

let counter = 0;

export default function FormComponent() {
  const {
    register,
    handleSubmit,
    watch,
    formState: { errors },
  } = useForm();
  const onSubmit = (data) => alert(JSON.stringify(data));

  return (
    <div className="container">
      <form className="form" onSubmit={handleSubmit(onSubmit)}>
        <input {...register("name")} placeholder="Nome" />
        <input
          {...register("lastName", { required: true })}
          placeholder="Sobrenome"
        />
        {errors.lastName && <span>Campo sobrenome é obrigatório</span>}
        <input
          type="number"
          placeholder="idade"
          {...register("age", { min: 18, max: 99 })}
        />
        {errors.age && <span>idade não permitida</span>}

        <select {...register("gender")}>
          <option value=""></option>
          <option value="male">Masculino</option>
          <option value="female">Feminino</option>
          <option value="other">Outro</option>
        </select>

        <p>
          Render: <span>{counter++}</span>
        </p>

        <input type="submit" value="submit" />
      </form>
    </div>
  );
}
