import { sectorEnum } from "../../../enums/sectorEnum";

export interface ICardProps {
    text: string;
    description: string;
    sector: sectorEnum;
    imagePath: string;
  }