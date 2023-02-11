import { ProjectStatusEnum } from "../../../enums/projectStatusEnum";

export interface IRequestDetailsProps {}

export interface IDataProps {
  imageGalleryList: any[];
  projectId?: number;
  projectName?: string;
  requestDescription: string;
  requestStatus: ProjectStatusEnum;
  startDate: Date;
  toUserId: string;
  toUserName: string;
}
