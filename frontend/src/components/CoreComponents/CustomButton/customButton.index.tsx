import { Button } from "@mui/material";
import React from "react";
import { Link } from "react-router-dom";
import useStyles from "./customButton.style";
import { ICustomButtonProps } from "./customButton.type";
import { Login as LoginIcon, Person } from "@mui/icons-material";

const CustomButton: React.FC<ICustomButtonProps> = ({ text, icon }) => {
  const classes = useStyles();

  return (
    <Button
    className={classes.root}

    
    startIcon={icon}
    type="submit"
  >
    {text}
  </Button>
  );
};

export default CustomButton;
