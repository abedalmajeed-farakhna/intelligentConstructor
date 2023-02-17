import { ProjectStatusEnum } from "../../../../enums/projectStatusEnum";
import { sectorEnum } from "../../../../enums/sectorEnum";
import { ICraftsmanStepValuesProps } from "../../../../types/types";

export interface ITopRatedCraftsmanProps {
  values: ICraftsmanStepValuesProps;
  sector: sectorEnum;
  selectedUser?: string;
  editable: boolean;
  projectStatus?: ProjectStatusEnum;
}

export interface ITopRatedCraftsman {
  id: string;
  fullName: string;
  username: string;
  profileImage: string;
  expectedTime: number;
  note: string;
  sector: sectorEnum;
  speed: number;
}
