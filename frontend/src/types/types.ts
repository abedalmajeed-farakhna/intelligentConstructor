import { userTypeEnum } from "../enums/userTypeEnum";

export interface IUser {
  fullName: string;
  username: string;
  type: userTypeEnum;
  profileImage?:string
}
