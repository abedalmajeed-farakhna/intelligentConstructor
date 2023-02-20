import React from "react";
import { IWidgetProps } from "./widget.types";
import useStyles from "./widget.style";
import classNames from "classnames";

const Widget: React.FC<IWidgetProps> = ({ title ,className ,children}) => {
  const classes = useStyles();

  return (
    <div className={classNames(classes.root,className)}>
      <div className={classes.title}>{title}</div>
      <div className={classes.body}>
      {children}
      </div>
    </div>
  );
};

export default Widget;
