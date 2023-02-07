import { Breadcrumbs, Link, Typography } from "@mui/material";
import React from "react";
import { IBreadCrumpProps } from "./breadCrump.type";
import useStyles from "./breadCrump.style";

import classNames from "classnames";
import CustomLink from "../CustomLink/customLink.index";

const BreadCrump: React.FC<IBreadCrumpProps> = ({
  linkList,
  current}) => {
  const classes = useStyles();

  return (
    <div
      role="presentation"
      className={classNames(classes.root)}
    >
      <Breadcrumbs aria-label="breadcrumb">
        <CustomLink path="/" text="Home" />
        {linkList?.map((element) => (
          <CustomLink path={element.link} text={element.name} />
        ))}

        <Typography  className={classes.current} color="text.primary">{current}</Typography>
      </Breadcrumbs>
    </div>
  );
};
export default BreadCrump;
