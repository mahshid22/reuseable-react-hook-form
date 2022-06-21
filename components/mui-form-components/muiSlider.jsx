import React from "react";
import { Controller } from "react-hook-form";
import { Slider } from "@material-ui/core";

const FormSlider = ({ name, control, defaultValue, step, max }) => {
  return (
    <Controller
      name={name}
      control={control}
      defaultValue={defaultValue}
      render={({ field }) => (
        <Slider
          {...field}
          onChange={(_, value) => {
            field.onChange(value);
          }}
          valueLabelDisplay="auto"
          max={max}
          step={step}
        />
      )}
    />
  );
};
export default FormSlider;
