import React from "react";
import { MenuItem, Select } from "@material-ui/core";
import InputLabel from "@mui/material/InputLabel";
import { Controller } from "react-hook-form";

const InputDropdown = ({ name, control, options, label }) => {
  const generateSelectOptions = () => {
    return options.map((option) => {
      return (
        <MenuItem value={option.value} key={option.id}>
          {option.label}
        </MenuItem>
      );
    });
  };

  return (
    <>
      <InputLabel id="demo-simple-select-filled-label">{label}</InputLabel>

      <Controller
        control={control}
        name={name}
        label={label}
        render={({ field }) => (
          <Select
            {...field}
            id="demo-simple-select"
            placeholder="select an option"
          >
            {generateSelectOptions()}
          </Select>
        )}
      />
    </>
  );
};
export default InputDropdown;
