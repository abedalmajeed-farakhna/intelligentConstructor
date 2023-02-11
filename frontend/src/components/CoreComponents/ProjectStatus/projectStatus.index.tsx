import React from "react";
import { ProjectStatusEnum } from "../../../enums/projectStatusEnum";
import { IProjectStatusProps } from "./projectStatus.type";
import CircleIcon from "@mui/icons-material/Circle";
import useStyles from "./projectStatus.style";
import classNames from "classnames";

const ProjectStatus: React.FC<IProjectStatusProps> = ({
  projectStatus,
  className,
}) => {
  const classes = useStyles();

  switch (projectStatus) {
    case ProjectStatusEnum.Cancel:
      return (
        <div className={className}>
          <CircleIcon
            className={classNames(classes.circleIcon, classes.cancel)}
          />{" "}
          Cancel
        </div>
      );
  }

  switch (projectStatus) {
    case ProjectStatusEnum.Pending:
      return (
        <div className={className}>
          {" "}
          <CircleIcon
            className={classNames(classes.circleIcon, classes.pending)}
          />
          Pending
        </div>
      );
  }

  switch (projectStatus) {
    case ProjectStatusEnum.Done:
      return (
        <div className={className}>
          {" "}
          <CircleIcon
            className={classNames(classes.circleIcon, classes.done)}
          />
          Done
        </div>
      );
  }

  switch (projectStatus) {
    case ProjectStatusEnum.Inprogres:
      return (
        <div className={className}>
          {" "}
          <CircleIcon
            className={classNames(classes.circleIcon, classes.inprogress)}
          />
          Inprogress
        </div>
      );
  }

  switch (projectStatus) {
    case ProjectStatusEnum.Rejected:
      return (
        <div className={className}>
          {" "}
          <CircleIcon
            className={classNames(classes.circleIcon, classes.rejected)}
          />
          Rejected
        </div>
      );
  }

  switch (projectStatus) {
    case ProjectStatusEnum.Aproved:
      return (
        <div className={className}>
          {" "}
          <CircleIcon
            className={classNames(classes.circleIcon, classes.approved)}
          />
          Approved
        </div>
      );
  }

  return <div></div>;
};
export default ProjectStatus;
