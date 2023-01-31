import classNames from "classnames";
import { Field } from "formik";
import React from "react";
import ErrorMessage from "../Alerts/Error/errorMessage.index";
import { ITextInputProps } from "./textInpput.types";
import useStyles from "./textInput.style";

const TextInput: React.FC<ITextInputProps> = ({
  name,
  placeholder,
  type,
  error,
  label,
  as = "input",
  validate
}) => {
  const classes = useStyles();

  return (
    <div className={classes.container}>
      {label && <label> {label}</label>}{" "}
      <Field
        as={as}
        className={classNames(classes.root, error && classes.error)}
        name={name}
        placeholder={placeholder}
        type={type}
        validate={validate}
      />
      <ErrorMessage error={error} />
    </div>
  );
};

export default TextInput;
