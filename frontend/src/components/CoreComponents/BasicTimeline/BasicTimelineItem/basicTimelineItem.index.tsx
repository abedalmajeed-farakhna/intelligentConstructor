import * as React from "react";
import { format } from "date-fns";

import TimelineItem from "@mui/lab/TimelineItem";
import TimelineSeparator from "@mui/lab/TimelineSeparator";
import TimelineConnector from "@mui/lab/TimelineConnector";
import TimelineContent from "@mui/lab/TimelineContent";


import { IBasicTimelineItemProps } from "./basicTimelineItem.type";
import useStyles from "./basicTimelineItem.style";

import TimelineIcon from "../TimeLineIcon/timelineIcon.index";

const BasicTimelineItem: React.FC<IBasicTimelineItemProps> = ({ startDate,status,name ,end}) => {
  const classes = useStyles();

  //let icon = getIcon(status);
  return (
    
    <TimelineItem className={classes.root}>
     
   <TimelineSeparator>
   <div className={classes.icon}><TimelineIcon status={status}/></div> 
     {!end &&<TimelineConnector />} 
    </TimelineSeparator>
    <TimelineContent>
      <div className={classes.nameSection}>{name}</div>
      <div className={classes.dateSection}>{format(new Date(startDate), "yyyy-MM-dd")}</div>
      </TimelineContent>
  </TimelineItem>
  );
};
export default BasicTimelineItem;