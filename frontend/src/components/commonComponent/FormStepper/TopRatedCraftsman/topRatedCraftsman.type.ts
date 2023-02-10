import { sectorEnum } from "../../../../enums/sectorEnum";

export interface ITopRatedCraftsmanProps {
  values: any;
  sector: sectorEnum;
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