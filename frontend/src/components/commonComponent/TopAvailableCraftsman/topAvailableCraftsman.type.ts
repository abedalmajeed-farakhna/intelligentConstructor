import { ProjectStatusEnum } from "../../../enums/projectStatusEnum";
import { sectorEnum } from "../../../enums/sectorEnum";
import { ICraftsmanStepValuesProps } from "../../../types/types";

export interface ITopAvailableCraftsmanProps {
  values: ICraftsmanStepValuesProps;
  sector: sectorEnum;
  editable?:boolean,
  selectedUser?:string,
  projectStatus?:ProjectStatusEnum,
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

