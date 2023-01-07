import React from "react";
import { Link } from "react-router-dom";
import useStyles from "./customLink.style";
import { ICustomLinkProps } from "./customLink.types";

const CustomLink: React.FC<ICustomLinkProps> = ({ path, text }) => {
  const classes = useStyles();
  return (
    <Link className={classes.root} to={path}>
      {text}
    </Link>
  );
};

export default CustomLink;
