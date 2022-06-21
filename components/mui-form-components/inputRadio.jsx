import React from "react";
import {
  FormControl,
  FormControlLabel,
  FormLabel,
  Radio,
  RadioGroup,
} from "@material-ui/core";
import { Controller } from "react-hook-form";

const InputRadio = ({ name, control, options, label }) => {
  const generateRadioOptions = () => {
    return options.map((singleOption) => (
      <FormControlLabel
        value={singleOption.value}
        label={singleOption.label}
        control={<Radio />}
        key={singleOption.id}
      />
    ));
  };

  return (
    <>
      <FormLabel component="legend">{label}</FormLabel>

      <Controller
        render={({ field }) => (
          <RadioGroup aria-label="gender" {...field}>
            {generateRadioOptions()}
          </RadioGroup>
        )}
        name={name}
        control={control}
      />
    </>
  );
};
export default InputRadio;
