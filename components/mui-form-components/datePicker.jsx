import React from "react";
import { DatePicker } from "@mui/x-date-pickers/DatePicker";
import { LocalizationProvider } from "@mui/x-date-pickers/LocalizationProvider";
import TextField from "@mui/material/TextField";
import { Controller } from "react-hook-form";
import AdapterJalali from "@date-io/date-fns-jalali";

const InputDate = ({ name, control, label, defaultValue }) => {
  return (
    <LocalizationProvider dateAdapter={AdapterJalali}>
      <Controller
        name={name}
        control={control}
        defaultValue={defaultValue}
        render={({ field: { onChange, value } }) => (
          <DatePicker
            label={label}
            onChange={onChange}
            value={value ? value : new Date()}
            inputFormat="dd/MM/yyyy"
            renderInput={(params) => <TextField {...params} />}
          />
        )}
      />
    </LocalizationProvider>
  );
};
export default InputDate;
