import { ProjectStatusEnum } from "../../../enums/projectStatusEnum";

export interface IBasicCardProps {
  title: string;
  name: string;
  status: ProjectStatusEnum;
  expectedStart: Date;
  expectedEnd: Date;
  ratingValue: number;
}