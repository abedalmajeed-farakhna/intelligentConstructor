import * as React from "react";

import MenuItem from "@mui/material/MenuItem";
import ListItemIcon from "@mui/material/ListItemIcon";
import { ICustomMenuItemProps } from "./customMenuItem.types";

const CustomMenuItem: React.FC<ICustomMenuItemProps> = ({
  icon,
  text,
  onClick,
}) => {
  return (
    <MenuItem onClick={onClick}>
      {icon && <ListItemIcon>{icon}</ListItemIcon>}
      {text}
    </MenuItem>
  );
};

export default CustomMenuItem;
