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
  //console.log(currentDetails, "currentDetails:HousePainterStep");
  //console.log(previousDetails, "previousDetails:HousePainterStep");
  return (
    <TopAvailableCraftsman
      sectionName="house Painter"
      timeLine={timeLine}
      showNote={(!previousDetails ||[ProjectStatusEnum.Rejected, ProjectStatusEnum.Pending].includes(previousDetails.projectStatus))}
      handleUpdateTimeLine={handleUpdateTimeLine}
      projectStatus={currentDetails?.projectStatus}
      selectedUser={currentDetails?.userId}

      requestId={currentDetails?.requestId}
      editable={
        previousDetails &&
        ![ProjectStatusEnum.Rejected, ProjectStatusEnum.Pending].includes(
          previousDetails.projectStatus
        ) &&
        (!currentDetails ||
          currentDetails.projectStatus == ProjectStatusEnum.Rejected ||
          currentDetails.projectStatus == ProjectStatusEnum.Cancel)
      }
      values={values}
      sector={sectorEnum.HousePainter}
    />
  );
};
export default HousePainterStep;