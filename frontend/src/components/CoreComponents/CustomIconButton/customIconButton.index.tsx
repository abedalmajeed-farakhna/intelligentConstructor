import {
  IconButton,
} from "@mui/material";
import React from "react";
import { ICustomIconButtonProps } from "./customIconButton.type";

const CustomIconButton: React.FC<ICustomIconButtonProps> = ({
  icon,
  title,
  handleOnClick,
}) => {
  return (
    <IconButton  title ={title}aria-label={title} onClick={handleOnClick}>
      {icon}
    </IconButton>
  );
};
export default CustomIconButton;
