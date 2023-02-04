import React from "react";
import { IWidgetProps } from "./widget.types";
import useStyles from "./widget.style";
import CustomLink from "../CustomLink/customLink.index";

const Widget: React.FC<IWidgetProps> = ({ title, data }) => {
  const classes = useStyles();

  return (
    <div className={classes.root}>
      <div className={classes.title}>{title}</div>
      <div className={classes.body}>
        {" "}
        {data?.map((element) => (
          <div className={classes.element}>
            <CustomLink path={element.path} text={element.path} />
          </div>
        ))}
      </div>
    </div>
  );
};

export default Widget;
