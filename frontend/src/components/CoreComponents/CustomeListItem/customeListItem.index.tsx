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
  activeList
}) => {
  const classes = useStyles();
  const currentUrl = window.location.pathname;

  const isActive = activeList?.find((t) => currentUrl.includes(t)) != undefined;
  return (
    <ListItem
      key={text}
      disablePadding
      className={classNames(classes.root, isActive && classes.active)}
    >
      <ListItemButton>
        <CustomLink
        className={classes.link}
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
