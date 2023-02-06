import React from "react";
import { ListItem, ListItemButton, ListItemIcon } from "@mui/material";
import { Link } from "react-router-dom";

import CustomLink from "../CustomLink/customLink.index";

import classNames from "classnames";

import useStyles from "./customeListItem.style";
import { ICustomeListItemProps } from "./customeListItem.types";

const CustomeListItem: React.FC<ICustomeListItemProps> = ({
  icon,
  path,
  text,
}) => {
  const classes = useStyles();
  const currentUrl = window.location.pathname;

  const isActive = currentUrl ==path;
  return (
    <ListItem key={text} disablePadding className={classNames(classes.root,isActive && classes.active)}>
      <ListItemButton>
        <ListItemIcon className={classNames(classes.link,isActive && classes.activeLink)}>{icon}</ListItemIcon>
        <Link className={classNames(classes.link,isActive && classes.activeLink)} to={path}>
          {text}
        </Link>
      </ListItemButton>
    </ListItem>
  );
};

export default CustomeListItem;
