import React from "react";
import { IErrorProps } from "./errorMessage.types";
import useStyles from "./errorMessage.style";

const ErrorMessage: React.FC<IErrorProps> = ({ error }) => {
  const classes = useStyles();
  return <>{error && <div className={classes.root}>{error}</div>}</>;
};

export default ErrorMessage;
