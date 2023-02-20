import { ProjectStatusEnum } from "../../../enums/projectStatusEnum";
import { sectorEnum } from "../../../enums/sectorEnum";
import { ICraftsmanStepValuesProps } from "../../../types/types";
import { ITimeLineProps } from "../FormStepper/formStepper.type";

export interface ITopAvailableCraftsmanProps {
  values: ICraftsmanStepValuesProps;
  sector: sectorEnum;
  editable?: boolean;
  selectedUser?: string;
  projectStatus?: ProjectStatusEnum;
  sectionName: string;
  timeLine: ITimeLineProps;
  requestId?: number;
  handleUpdateTimeLine: (val: ITimeLineProps) => void;
}

export interface ITopAvailableCraftsman {
  id: string;
  fullName: string;
  username: string;
  profileImage: string;
  expectedTime: number;
  note: string;
  sector: sectorEnum;
  speed: number;
  expectedStartDate:Date,
  expectedEndDate:Date,
}

