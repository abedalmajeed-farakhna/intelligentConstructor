import * as React from "react";
import Timeline from "@mui/lab/Timeline";
import { IBasicTimelineProps } from "./basicTimeline.type";
import useStyles from "./basicTimeline.style";
import BasicTimelineItem from "./BasicTimelineItem/basicTimelineItem.index";
import TimelineItem from "@mui/lab/TimelineItem";
import TimelineContent from "@mui/lab/TimelineContent";
import TimelineDot from "@mui/lab/TimelineDot";
import TimelineSeparator from "@mui/lab/TimelineSeparator";
import { tr } from "date-fns/locale";

const BasicTimeline: React.FC<IBasicTimelineProps> = ({ data }) => {
  const classes = useStyles();
  const [isTimeLineOpen, setIsTimeLineOpen] = React.useState(false);

  const TriggerTimeLine=()=>{
    setIsTimeLineOpen(!isTimeLineOpen);
  }
  if(!data) return <></>

  return (
    <div>
      <div onClick={TriggerTimeLine} className={classes.nameSection}> status ...</div>
      {isTimeLineOpen && (
        <div className={classes.root}>
          <div className={classes.triangle} />
          <Timeline>
            <BasicTimelineItem
              name={"Builder"}
              startDate={data.builderStage?.startDate}
              status={data.builderStage?.projectStatus}
            />
            <BasicTimelineItem
              name={"Carpenter"}
              startDate={data.carpenterStage?.startDate}
              status={data.carpenterStage?.projectStatus}
            />
            <BasicTimelineItem
              name={"HousePainter"}
              startDate={data.housePainterStage?.startDate}
              status={data.housePainterStage?.projectStatus}
            />
            <BasicTimelineItem
              name={"Tiler"}
              startDate={data.tilerStage?.startDate}
              status={data.tilerStage?.projectStatus}
              end={true}
            />
          </Timeline>
        </div>
      )}
    </div>
  );
};
export default BasicTimeline;
