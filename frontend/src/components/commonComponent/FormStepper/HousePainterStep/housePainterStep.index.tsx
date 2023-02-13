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
  timeLine,
  handleUpdateTimeLine,
}) => {

  console.log(currentDetails, "currentDetails:HousePainterStep");
  console.log(previousDetails, "previousDetails:HousePainterStep");
  return (
    <TopAvailableCraftsman
      sectionName="housePainter"
      timeLine={timeLine}
      handleUpdateTimeLine={handleUpdateTimeLine}
      projectStatus={currentDetails?.projectStatus}
      editable={
        previousDetails &&
        ![ProjectStatusEnum.Rejected, ProjectStatusEnum.Pending].includes(
          previousDetails.projectStatus
        ) &&
        (!currentDetails ||
          currentDetails.projectStatus == ProjectStatusEnum.Rejected)
      }
      values={values}
      sector={sectorEnum.HousePainter}
    />
  );
};
export default HousePainterStep;
