import React from "react";
import { IErrorProps } from "./errorMessage.types";
import useStyles from "./errorMessage.style";
import classNames from "classnames";

const ErrorMessage: React.FC<IErrorProps> = ({ error, className }) => {
  const classes = useStyles();
  return <>{error && <div className={classNames(classes.root,className)}>{error}</div>}</>;
};

export default ErrorMessage;
