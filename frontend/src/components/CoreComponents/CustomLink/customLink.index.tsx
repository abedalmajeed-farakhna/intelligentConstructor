import classNames from "classnames";
import React from "react";
import { Link } from "react-router-dom";
import useStyles from "./customLink.style";
import { ICustomLinkProps } from "./customLink.types";

const CustomLink: React.FC<ICustomLinkProps> = ({ path, text,isActive,icon ,className}) => {
  const classes = useStyles();
  return (
    <Link className={classNames(className ,classes.link,classes.root ,isActive&& classes.activeLink)} to={path}>
      <>  
      {icon}{text}
      </>
    
    </Link>
  );
};

export default CustomLink;