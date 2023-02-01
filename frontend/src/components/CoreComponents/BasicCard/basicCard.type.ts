import { ProjectStatusEnum } from "../../../enums/projectStatusEnum";

export interface IBasicCardProps {
    title:string,
    name:string,
    status:string,
    expectedStart:Date,
    expectedEnd:Date,
  
}