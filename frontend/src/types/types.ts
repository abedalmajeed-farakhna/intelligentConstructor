import { userTypeEnum } from "../enums/userTypeEnum";

export interface IUser {
  fullName: string;
  username: string;
  type: userTypeEnum;
  id:number,
  profileImage?:string
}
