import React from "react";
import { ListItem, ListItemButton, ListItemIcon } from "@mui/material";

import CustomLink from "../CustomLink/customLink.index";

import useStyles from "./customeListItem.style";
import { ICustomeListItemProps } from "./customeListItem.types";

const CustomeListItem: React.FC<ICustomeListItemProps> = ({icon, path, text}) => {
  const classes = useStyles();
  return (
    <ListItem key={text} disablePadding>
      <ListItemButton>
        <ListItemIcon>{icon}</ListItemIcon>
        <CustomLink path={path} text={text} />
      </ListItemButton>
    </ListItem>
  );
};

export default CustomeListItem;