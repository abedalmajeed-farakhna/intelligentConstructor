import { ProjectStatusEnum } from "../../../enums/projectStatusEnum";
import { IImageGalleryListProps } from "../../../types/types";

export interface IRequestDetailsProps {}

export interface IDataProps {
  imageGalleryList: IImageGalleryListProps[];
  projectId?: number;
  projectName?: string;
  requestDescription: string;
  requestStatus: ProjectStatusEnum;
  startDate: Date;
  toUserId: string;
  toUserName: string;
}



