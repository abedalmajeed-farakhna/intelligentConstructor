import { format } from "date-fns";
import { sectorEnum } from "../../../enums/sectorEnum";

export const GetFromDateValue = (sector: sectorEnum, timeLine, fromDate) => {
  let total = 0;

  switch (sector) {
    case sectorEnum.Builder:
      total = 0;
      break;
    case sectorEnum.Tiler:
      total = timeLine.Builder;
      break;
    case sectorEnum.HousePainter:
      total = timeLine.Tiler+timeLine.Builder;
      break;
    case sectorEnum.Carpenter:
      total = timeLine.HousePainter+timeLine.Tiler+timeLine.Builder;
      break;
  }

  const d = new Date(fromDate);

  d.setDate(d.getDate() + total);

  return format(d, "yyyy-MM-dd");
};
