import { format } from "date-fns";
import { sectorEnum } from "../../../enums/sectorEnum";
import { ITimeLineProps } from "../FormStepper/formStepper.type";

export const GetFromDateValue = (
  sector: sectorEnum,
  timeLine: ITimeLineProps,
  fromDate
) => {
  let total = 0;

  switch (sector) {
    case sectorEnum.Builder:
      total = 0;
      break;
    case sectorEnum.Tiler:
      total = timeLine.builder.numberOfDays;
      break;
    case sectorEnum.HousePainter:
      total = timeLine.tiler?.numberOfDays + timeLine.builder.numberOfDays;
      break;
    case sectorEnum.Carpenter:
      total =
        timeLine.housePainter.numberOfDays +
        timeLine.tiler.numberOfDays +
        timeLine.builder.numberOfDays;
      break;
  }

  const d = new Date(fromDate);

  d.setDate(d.getDate() + total);

  return format(d, "yyyy-MM-dd");
};
