import * as React from "react";

import CheckCircleIcon from "@mui/icons-material/CheckCircle";
import PendingIcon from "@mui/icons-material/Pending";
import CircleIcon from '@mui/icons-material/Circle';

import { ProjectStatusEnum } from "../../../../enums/projectStatusEnum";

import { ITimelineIconProps } from "./timelineIcon.type";
import useStyles from "./basicTimelineItem.style";

const TimelineIcon: React.FC<ITimelineIconProps> = ({ status }) => {
  const classes = useStyles();

  switch (status) {
    case ProjectStatusEnum.Aproved:
      return <CircleIcon color="primary" />;
      case ProjectStatusEnum.Done:
        return <CheckCircleIcon color="success" />;
    case ProjectStatusEnum.Pending:
      return <PendingIcon color="disabled" />;
  }

  return <>test</>;
};
export default TimelineIcon;
