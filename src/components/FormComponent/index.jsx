import React, { forwardRef } from "react";
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

  const Input = ({ error, name, label, register, required }) => (
    <>
      {/* <label>{label}</label> */}
      <input {...register(label, { required })} placeholder={name} />
      {error && <span>Campo obrigatório!</span>}
    </>
  );

  const Select = forwardRef(({ onChange, onBlur, name, label }, ref) => (
    <>
      {/* <label>{label}</label> */}
      <select name={name} ref={ref} onChange={onChange} onBlur={onBlur}>
        <option value=""></option>
        <option value="male">Masculino</option>
        <option value="female">Feminino</option>
        <option value="other">Outro</option>
      </select>
    </>
  ));

  return (
    <div className="container">
      <form className="form" onSubmit={handleSubmit(onSubmit)}>
        <Input
          name="Nome"
          label="firstName"
          register={register}
          error={errors.firstName}
          required
        />
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

        <Select label="gender" {...register("gender")} />

        <p>
          Render: <span>{counter++}</span>
        </p>

        <input type="submit" value="submit" />
      </form>
    </div>
  );
}
