import { Button } from "@mui/material";
import React from "react";

import useStyles from "./customButton.style";
import { ICustomButtonProps } from "./customButton.type";

const CustomButton: React.FC<ICustomButtonProps> = ({ text, icon }) => {
  const classes = useStyles();

  return (
    <Button className={classes.root} startIcon={icon} type="submit">
      {text}
    </Button>
  );
};

export default CustomButton;
