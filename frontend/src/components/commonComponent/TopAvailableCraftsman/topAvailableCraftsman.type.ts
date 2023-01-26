import { sectorEnum } from "../../../enums/sectorEnum";

export interface ITopAvailableCraftsmanProps {
  values: any;
  sector: sectorEnum;
  checkBoxName:string;
  timeLine?:any;
  handleUpdateTimeLine?:any
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
}