import { TextField } from "@mui/material";
import React from "react";
import { IDateInputProps } from "./dateInput.type";
import useStyle from "./dateInput.style";
import moment from "moment";
const DateRangePicker: React.FC<IDateInputProps> = ({
  label,
  defaultValue,
  name,
  min,
  max,
  onChange,
}) => {
  console.log(defaultValue, "defaultValue");
  const classes = useStyle();
  const handleOnchange = (e) => {
    onChange?.(e.target.value);
    console.log(e.target.value, "handleOnchange date");
  };
  return (
    <div className={classes.formControl}>
     {label && <label className={classes.formLabel}> {label}</label>}
     
    <TextField
      InputProps={{ inputProps: { min: min || moment().format('YYYY-MM-DD'), max: max } }}
      onChange={handleOnchange}
      className={classes.root}
      id="date"
//label={label}
      type="date"
      defaultValue={defaultValue}
      name={name}
      //sx={{ width: 220 }}
      InputLabelProps={{
        shrink: true,
      }}
    />
    </div>
   
  );
};
export default DateRangePicker;