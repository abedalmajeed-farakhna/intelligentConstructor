import * as React from "react";
import Timeline from "@mui/lab/Timeline";
import { IBasicTimelineProps } from "./basicTimeline.type";
import useStyles from "./basicTimeline.style";
import BasicTimelineItem from "./BasicTimelineItem/basicTimelineItem.index";
import {
  getProjectStatusDescription,
  getSectorEnumDescriptions,
} from "../../../utils/enumDescriptions";
import { getProjectStatus } from "../../../utils/projectUtils";
import ProjectStatus from "../ProjectStatus/projectStatus.index";

const BasicTimeline: React.FC<IBasicTimelineProps> = ({ data }) => {
  const classes = useStyles();
  const [isTimeLineOpen, setIsTimeLineOpen] = React.useState(false);

  const TriggerTimeLine = () => {
    setIsTimeLineOpen(!isTimeLineOpen);
  };
  
  if (!data) return <></>;
  
  const allRequestStatus = data.map((t) => {
    return t.requestStatus;
  });
  const projectStatus = getProjectStatus(allRequestStatus);
  
  return (
    <div>
      <div onClick={TriggerTimeLine} className={classes.nameSection}>
        <ProjectStatus projectStatus={projectStatus} />
      </div>
      {isTimeLineOpen && (
        <div className={classes.root}>
          <div className={classes.triangle} />
          <Timeline>
            {data?.map((element, key) => (
              <BasicTimelineItem
                name={getSectorEnumDescriptions(element.sector)}
                startDate={element.startDate}
                status={element.requestStatus}
                end={key == data?.length - 1}
              />
            ))}
          </Timeline>
        </div>
      )}
    </div>
  );
};
export default BasicTimeline;