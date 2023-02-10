import React from "react";
import { ProjectStatusEnum } from "../../../../enums/projectStatusEnum";

import { sectorEnum } from "../../../../enums/sectorEnum";
import { getStartDate } from "../../../../utils/projectUtils";
import TopAvailableCraftsman from "../../TopAvailableCraftsman/topAvailableCraftsman.index";

import { IHousePainterStepProps } from "./housePainterStep.type";

const HousePainterStep: React.FC<IHousePainterStepProps> = ({
  values,
  previousDetails,
  currentDetails,
}) => {
  let stratDate = getStartDate(previousDetails);
 
console.log(currentDetails,"currentDetails")
  return (
    <TopAvailableCraftsman
      projectStatus={currentDetails?.projectStatus}
      editable={ stratDate != undefined &&  (!currentDetails ||currentDetails.projectStatus == ProjectStatusEnum.Rejected) }
      values={{ ...values, startDate: stratDate }}
      sector={sectorEnum.HousePainter}
    />
  );
};
export default HousePainterStep;
