import React from "react";
import { Controller } from "react-hook-form";
import { Switch } from "@material-ui/core";

const InputSwitch = ({ name, control, label = "" }) => {
  return (
    <>
      <label>{label}</label>
      <Controller
        name={name}
        control={control}
        render={({ field }) => (
          <Switch
            onChange={(e) => field.onChange(e.target.checked)}
            checked={field.value}
          />
        )}
      />
    </>
  );
};
export default InputSwitch;
