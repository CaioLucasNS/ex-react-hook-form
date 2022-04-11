import React, { forwardRef } from "react";

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

export default Select;
