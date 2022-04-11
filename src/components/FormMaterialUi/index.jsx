import React, { useState } from "react";
import { useForm, Controller } from "react-hook-form";
import { TextField } from "@mui/material";

import Select from "../Select";
import ButtonResult from "../ButtonResult";

import "./styles.css";

const defaultValues = {
  TextField1: "-",
  TextField2: "-",
};

export default function FormMaterialUi() {
  const { handleSubmit, reset, control } = useForm({ defaultValues });
  const [data, setData] = useState(null);

  return (
    <div>
      <form onSubmit={handleSubmit((data) => setData(data))} className="form2">
        <section>
          <label>MUI TextField1</label>
          <Controller
            render={({ field }) => (
              <TextField
                value={field.value}
                onChange={field.onChange}
                inputRef={field.ref}
              />
            )}
            name="TextField1"
            control={control}
            rules={{ required: true }}
          />
        </section>
        <section>
          <label>MUI TextField2</label>
          <Controller
            render={({ field }) => (
              <TextField
                value={field.value}
                onChange={field.onChange}
                inputRef={field.ref}
              />
            )}
            name="TextField2"
            control={control}
            rules={{ required: true }}
          />

          <Controller
            name="Genero"
            control={control}
            render={({ field }) => <Select {...field} />}
          />
        </section>
        <ButtonResult {...{ data, reset, defaultValues }} />
      </form>
    </div>
  );
}
