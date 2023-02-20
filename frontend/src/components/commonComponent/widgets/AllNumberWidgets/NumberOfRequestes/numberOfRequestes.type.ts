import { ProjectStatusEnum } from "../../../../../enums/projectStatusEnum";

export interface INumberOfRequestesProps {
  status?: ProjectStatusEnum;
  icon: any;
  title:string;
  isSentRequests?:boolean
}
