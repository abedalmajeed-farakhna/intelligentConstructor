import classNames from "classnames";
import { Field } from "formik";
import React from "react";
import ErrorMessage from "../Alerts/Error/errorMessage.index";

import useStyles from "./selectInput.style";
import { ISelectProps } from "./selectInput.types";

const SelectInput: React.FC<ISelectProps> = ({ name, options, label }) => {
  const classes = useStyles();
console.log(options,"options")
options.forEach((element) => {
         
    console.log(element,"element")
    console.log(element.value,"element.value")
    console.log(element.name,"element.name")
  })
  return (
    <div className={classes.container}>
      {label && <label> {label}</label>}{" "}
      <Field 
      className={classes.root}

        name={name}
        as="select"
      >
        
        {options.map((element) => 
         
           <option value={element.value}>{element.name}</option>
        )}
      </Field>
    </div>
  );
};

export default SelectInput;
