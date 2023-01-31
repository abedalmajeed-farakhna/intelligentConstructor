import { ProjectStatusEnum } from "../../../../enums/projectStatusEnum";

export interface IBasicTimelineItemProps {
  startDate?: any;
  name?: any;
  status?: ProjectStatusEnum;
  end?: boolean;
}