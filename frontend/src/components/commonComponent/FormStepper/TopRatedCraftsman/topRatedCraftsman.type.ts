import { sectorEnum } from "../../../../enums/sectorEnum";

export interface ITopRatedCraftsmanProps {
  values: any;
  sector: sectorEnum;
  checkBoxName:string;
  timeLine?:any;
  handleUpdateTimeLine?:any
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