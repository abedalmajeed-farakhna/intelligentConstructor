import { Button } from "@mui/material";
import classNames from "classnames";
import React from "react";

import useStyles from "./customButton.style";
import { ICustomButtonProps } from "./customButton.type";

const CustomButton: React.FC<ICustomButtonProps> = ({ text, icon ,disabled,className,onClick}) => {
  const classes = useStyles();

  return (
    <Button className={classNames(classes.root,className,disabled&&classes.disabled)} startIcon={icon} type="submit" onClick={onClick} disabled={disabled}>
      {text} 
    </Button>
  );
};

export default CustomButton;
