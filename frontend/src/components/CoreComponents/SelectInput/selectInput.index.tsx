import { Field } from "formik";
import React from "react";

import useStyles from "./selectInput.style";
import { ISelectProps } from "./selectInput.types";

const SelectInput: React.FC<ISelectProps> = ({name, options, label, keyName = "value"}) => {
  const classes = useStyles();
  return (
    <div className={classes.container}>
      {label && <label> {label}</label>}{" "}
      <Field className={classes.root} name={name} as="select">
        {options.map((element) => (
          <option value={element[keyName]}>{element.name}</option>
        ))}
      </Field>
    </div>
  );
};

export default SelectInput;
