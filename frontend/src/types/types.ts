import { ProjectStatusEnum } from "../enums/projectStatusEnum";
import { sectorEnum } from "../enums/sectorEnum";
import { userTypeEnum } from "../enums/userTypeEnum";

export interface IUser {
  fullName: string;
  username: string;
  type: userTypeEnum;
  profileImage?: string;
}

export interface IRegionProps {
  id: number;
  name: string;
}

export interface ICraftsmanStepValuesProps {
  area: number;
  startDate?: Date;
  regionId: number;
  projectId?: number;
}

export interface ICraftsmanDetailsProps {
  expectedEndDate: Date;
  expectedStartDate: Date;
  fullName: string;
  projectStatus: ProjectStatusEnum;
  ratingValue?: number;
  sector: sectorEnum;
  userName: string;
  userId:string
}

export interface IImageGalleryListProps {
  title: string;
  id:number;
  imageList: IImageProps[];
}
interface IImageProps {
  imageName: string;
  id:number
}