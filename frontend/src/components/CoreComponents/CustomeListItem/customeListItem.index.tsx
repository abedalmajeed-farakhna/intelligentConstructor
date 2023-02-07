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

  const isActive = currentUrl == path;
  return (
    <ListItem
      key={text}
      disablePadding
      className={classNames(classes.root, isActive && classes.active)}
    >
      <ListItemButton>
        <CustomLink
          path={path}
          text={text}
          isActive={isActive}
          icon={
            <ListItemIcon
              className={classNames(
                isActive && classes.activeIcon
              )}
            >
              {icon}
            </ListItemIcon>
          }
        />
      </ListItemButton>
    </ListItem>
  );
};

export default CustomeListItem;
